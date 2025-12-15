#!/usr/bin/env python3
"""
Backend API Testing for PyTech Digital Inquiry System
Tests the inquiry form backend integration endpoints
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get REACT_APP_BACKEND_URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BASE_URL}/api"
print(f"🔗 Testing backend at: {API_BASE}")

def test_api_health():
    """Test if the API is accessible"""
    print("\n=== API Health Check ===")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        if response.status_code == 200:
            print("✅ API is accessible")
            print(f"Response: {response.json()}")
            return True
        else:
            print(f"❌ API health check failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API connection failed: {e}")
        return False

def test_send_inquiry_success():
    """Test successful inquiry submission"""
    print("\n=== Test: POST /api/send-inquiry (Success) ===")
    
    inquiry_data = {
        "name": "Arjun Sharma",
        "email": "arjun.sharma@techcorp.in",
        "phone": "+91 9876543210",
        "company": "TechCorp Solutions",
        "message": "We need a comprehensive mobile app for our e-commerce business with payment gateway integration and real-time inventory management.",
        "service": "Mobile App Development"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/send-inquiry",
            json=inquiry_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("status") == "success" and "message" in data:
                print("✅ Inquiry submission successful")
                return True
            else:
                print(f"❌ Unexpected response format: {data}")
                return False
        else:
            print(f"❌ Inquiry submission failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during inquiry submission: {e}")
        return False

def test_send_inquiry_validation_missing_name():
    """Test inquiry submission with missing required field (name)"""
    print("\n=== Test: POST /api/send-inquiry (Missing Name) ===")
    
    inquiry_data = {
        "email": "test@example.com",
        "phone": "+91 9876543210",
        "company": "Test Company",
        "message": "Test message",
        "service": "Web Development"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/send-inquiry",
            json=inquiry_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ Validation correctly rejected missing name")
            return True
        else:
            print(f"❌ Expected 422 for missing name, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during validation test: {e}")
        return False

def test_send_inquiry_validation_invalid_email():
    """Test inquiry submission with invalid email format"""
    print("\n=== Test: POST /api/send-inquiry (Invalid Email) ===")
    
    inquiry_data = {
        "name": "Test User",
        "email": "invalid-email-format",
        "phone": "+91 9876543210",
        "company": "Test Company",
        "message": "Test message",
        "service": "Web Development"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/send-inquiry",
            json=inquiry_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ Validation correctly rejected invalid email")
            return True
        else:
            print(f"❌ Expected 422 for invalid email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error during email validation test: {e}")
        return False

def test_get_inquiries():
    """Test retrieving all inquiries"""
    print("\n=== Test: GET /api/inquiries ===")
    
    try:
        response = requests.get(f"{API_BASE}/inquiries", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of inquiries: {len(data)}")
            
            if len(data) > 0:
                # Check structure of first inquiry
                first_inquiry = data[0]
                required_fields = ['id', 'name', 'email', 'phone', 'message', 'service', 'timestamp', 'status']
                
                missing_fields = [field for field in required_fields if field not in first_inquiry]
                if missing_fields:
                    print(f"❌ Missing fields in inquiry: {missing_fields}")
                    return False
                
                print("✅ Inquiry structure is correct")
                print(f"Sample inquiry: {json.dumps(first_inquiry, indent=2)}")
            else:
                print("ℹ️ No inquiries found (this is normal for a fresh database)")
            
            return True
        else:
            print(f"❌ Failed to retrieve inquiries: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Error retrieving inquiries: {e}")
        return False

def test_multiple_inquiries():
    """Test submitting multiple inquiries and verifying they're stored"""
    print("\n=== Test: Multiple Inquiry Submissions ===")
    
    inquiries = [
        {
            "name": "Priya Patel",
            "email": "priya.patel@startup.co.in",
            "phone": "+91 8765432109",
            "company": "InnovateTech Startup",
            "message": "Looking for a modern web application with React and Node.js for our fintech platform.",
            "service": "Web Development"
        },
        {
            "name": "Rajesh Kumar",
            "email": "rajesh@manufacturing.com",
            "phone": "+91 7654321098",
            "company": "Kumar Manufacturing Ltd",
            "message": "Need digital transformation consulting for our traditional manufacturing business.",
            "service": "Digital Transformation"
        }
    ]
    
    success_count = 0
    
    for i, inquiry in enumerate(inquiries, 1):
        print(f"\nSubmitting inquiry {i}...")
        try:
            response = requests.post(
                f"{API_BASE}/send-inquiry",
                json=inquiry,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("status") == "success":
                    print(f"✅ Inquiry {i} submitted successfully")
                    success_count += 1
                else:
                    print(f"❌ Inquiry {i} failed: {data}")
            else:
                print(f"❌ Inquiry {i} failed with status {response.status_code}")
                
        except Exception as e:
            print(f"❌ Error submitting inquiry {i}: {e}")
    
    print(f"\nSuccessfully submitted {success_count}/{len(inquiries)} inquiries")
    return success_count == len(inquiries)

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting PyTech Digital Backend API Tests")
    print("=" * 60)
    
    tests = [
        ("API Health Check", test_api_health),
        ("Send Inquiry - Success", test_send_inquiry_success),
        ("Send Inquiry - Missing Name Validation", test_send_inquiry_validation_missing_name),
        ("Send Inquiry - Invalid Email Validation", test_send_inquiry_validation_invalid_email),
        ("Get Inquiries", test_get_inquiries),
        ("Multiple Inquiries", test_multiple_inquiries),
        ("Get Inquiries After Submissions", test_get_inquiries)
    ]
    
    results = []
    
    for test_name, test_func in tests:
        try:
            result = test_func()
            results.append((test_name, result))
        except Exception as e:
            print(f"❌ Test '{test_name}' crashed: {e}")
            results.append((test_name, False))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal: {len(results)} tests")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed! Backend API is working correctly.")
        return True
    else:
        print(f"\n⚠️ {failed} test(s) failed. Backend needs attention.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)