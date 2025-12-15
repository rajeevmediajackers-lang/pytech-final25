from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Inquiry Form Models
class InquiryRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = ""
    message: str
    service: str

class InquiryResponse(BaseModel):
    status: str
    message: str

class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    email: str
    phone: str
    company: Optional[str] = ""
    message: str
    service: str
    timestamp: str
    status: str = "new"


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/send-inquiry", response_model=InquiryResponse)
async def send_inquiry(inquiry: InquiryRequest):
    """
    Receive and store a service inquiry in the database
    """
    try:
        # Store inquiry in database
        inquiry_doc = {
            "id": str(uuid.uuid4()),
            "name": inquiry.name,
            "email": inquiry.email,
            "phone": inquiry.phone,
            "company": inquiry.company or "",
            "message": inquiry.message,
            "service": inquiry.service,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "new"
        }
        await db.inquiries.insert_one(inquiry_doc)
        
        logger.info(f"New inquiry received from {inquiry.name} for {inquiry.service}")
        
        return InquiryResponse(
            status="success",
            message="Your inquiry has been received successfully. We'll get back to you within 24 hours."
        )
    except Exception as e:
        logger.error(f"Error processing inquiry: {str(e)}")
        raise


@api_router.get("/inquiries", response_model=List[Inquiry])
async def get_inquiries():
    """
    Get all inquiries (for admin purposes)
    """
    inquiries = await db.inquiries.find({}, {"_id": 0}).to_list(1000)
    return inquiries


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
