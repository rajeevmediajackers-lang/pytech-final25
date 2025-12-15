from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
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
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail, Email, To, Content


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


# SendGrid Email Function
def send_inquiry_email(inquiry: InquiryRequest):
    """Send inquiry email to recipients via SendGrid"""
    sendgrid_api_key = os.environ.get('SENDGRID_API_KEY')
    sender_email = os.environ.get('SENDER_EMAIL', 'noreply@pytechdigital.com')
    
    if not sendgrid_api_key:
        logger.error("SENDGRID_API_KEY not configured")
        raise Exception("Email service not configured")
    
    # Recipients
    recipients = ['rajeev@pytechdigital.com', 'b.rajeev90@gmail.com']
    
    # Email content
    subject = f"New Inquiry: {inquiry.service} - from {inquiry.name}"
    
    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0A2463 0%, #2E5BFF 100%); padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0;">New Service Inquiry</h1>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
                <h2 style="color: #0A2463;">Service: {inquiry.service}</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">{inquiry.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:{inquiry.email}">{inquiry.email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="tel:{inquiry.phone}">{inquiry.phone}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">{inquiry.company or 'Not provided'}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px;">
                    <h3 style="color: #0A2463;">Project Details:</h3>
                    <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2E5BFF;">
                        {inquiry.message}
                    </div>
                </div>
            </div>
            <div style="background: #0A2463; padding: 20px; text-align: center;">
                <p style="color: #888; margin: 0; font-size: 12px;">
                    This email was sent from the PyTech Digital website contact form.
                </p>
            </div>
        </body>
    </html>
    """
    
    try:
        sg = SendGridAPIClient(sendgrid_api_key)
        
        for recipient in recipients:
            message = Mail(
                from_email=Email(sender_email, "PyTech Digital"),
                to_emails=To(recipient),
                subject=subject,
                html_content=Content("text/html", html_content)
            )
            response = sg.send(message)
            logger.info(f"Email sent to {recipient}: Status {response.status_code}")
        
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise e


@api_router.post("/send-inquiry", response_model=InquiryResponse)
async def send_inquiry(inquiry: InquiryRequest, background_tasks: BackgroundTasks):
    """
    Send a service inquiry email via SendGrid
    """
    try:
        # Store inquiry in database for records
        inquiry_doc = {
            "id": str(uuid.uuid4()),
            "name": inquiry.name,
            "email": inquiry.email,
            "phone": inquiry.phone,
            "company": inquiry.company,
            "message": inquiry.message,
            "service": inquiry.service,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "pending"
        }
        await db.inquiries.insert_one(inquiry_doc)
        
        # Send email in background
        background_tasks.add_task(send_inquiry_email, inquiry)
        
        return InquiryResponse(
            status="success",
            message="Your inquiry has been sent successfully. We'll get back to you within 24 hours."
        )
    except Exception as e:
        logger.error(f"Error processing inquiry: {str(e)}")
        # Even if email fails, we've stored the inquiry
        return InquiryResponse(
            status="success",
            message="Your inquiry has been received. We'll get back to you within 24 hours."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()