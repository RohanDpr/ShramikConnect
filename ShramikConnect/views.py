from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
import os
from datetime import datetime
from core.models import Employer

def index(request):
    return render(request, 'index.html')

def role_selection(request):
    return render(request, 'role_selection.html')

def help_and_contact(request):
    return render(request, 'help_and_contact.html')

def privacy_policy(request):
    return render(request, 'privacy_policy.html')

def about(request):
    return render(request, 'about.html')

def term_and_condition(request):
    return render(request, 'term_and_condition.html')

def login_worker(request):
    return render(request, 'worker/login_worker.html')

def login_employer(request):
    """Handle employer login"""
    if request.method == 'POST':
        try:
            # JSON data handle karo (AJAX request ke liye)
            if request.headers.get('Content-Type') == 'application/json':
                data = json.loads(request.body)
                email = data.get('email')
                password = data.get('password')
            else:
                # Normal form submission
                email = request.POST.get('email')
                password = request.POST.get('password')
            
            print(f"Login attempt - Email: {email}")
            
            # Find employer by email
            try:
                employer = Employer.objects.get(email=email, is_active=True)
                print(f"Employer found: {employer.first_name} {employer.last_name}")
                print(f"Stored password: {employer.password}")
                print(f"Entered password: {password}")
                
                # Direct password comparison (no hashing)
                if employer.password == password:
                    print("✅ Password matched!")
                    
                    # Set session
                    request.session['employer_id'] = employer.id
                    request.session['employer_email'] = employer.email
                    request.session['employer_name'] = employer.get_full_name()
                    request.session.modified = True  # 👈 YEH ADD KARO
                    print(f"✅ Session set: {request.session.items()}")
                    
                    # Return success response
                    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                        return JsonResponse({
                            'success': True,
                            'message': 'Login successful!',
                            'redirect_url': '/dashboard_employer/',
                            'employer': {
                                'id': employer.id,
                                'name': employer.get_full_name(),
                                'email': employer.email
                            }
                        })
                    else:
                        messages.success(request, 'Login successful!')
                        return redirect('dashboard_employer')
                else:
                    print("❌ Password did not match!")
                    error_msg = 'Invalid password'
                    
            except Employer.DoesNotExist:
                print(f"❌ No employer found with email: {email}")
                error_msg = 'No account found with this email'
            
            # Return error response
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': error_msg
                }, status=400)
            else:
                messages.error(request, error_msg)
                return render(request, 'employer/login_employer.html')
                
        except Exception as e:
            print(f"Login error: {str(e)}")
            import traceback
            traceback.print_exc()
            
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': f'Login failed: {str(e)}'
                }, status=400)
            else:
                messages.error(request, f'Login failed: {str(e)}')
                return render(request, 'employer/login_employer.html')
    
    # GET request - show login page
    return render(request, 'employer/login_employer.html')

def signup_worker(request):
    return render(request, 'worker/signup_worker.html')

def signup_employer(request):
    """Handle employer signup page rendering and form submission"""
    if request.method == 'POST':
        # Handle form submission
        return handle_employer_signup(request)
    
    # GET request - render the signup page
    return render(request, 'employer/signup_employer.html')

def choose_password_worker(request):
    return render(request, 'worker/choose_password_worker.html')

def change_password_worker(request):
    return render(request, 'worker/change_password_worker.html')

def get_password_worker(request):
    return render(request, 'worker/get_password_worker.html')

def choose_password_employer(request):
    return render(request, 'employer/choose_password_employer.html')

def change_password_employer(request):
    return render(request, 'employer/change_password_employer.html')

def get_password_employer(request):
    return render(request, 'employer/get_password_employer.html')

def dashboard_employer(request):
    """Employer dashboard - protected route"""
    # DEBUG: Print session data
    print("=" * 50)
    print("DASHBOARD ACCESS ATTEMPT")
    print(f"Session keys: {request.session.keys()}")
    print(f"employer_id in session: {request.session.get('employer_id')}")
    print(f"employer_name in session: {request.session.get('employer_name')}")
    print("=" * 50)
    
    # Check if logged in
    if 'employer_id' not in request.session:
        print("❌ No employer_id in session - redirecting to login")
        messages.error(request, 'Please login to access dashboard')
        return redirect('/login_employer/')
    
    try:
        employer_id = request.session['employer_id']
        print(f"Looking for employer with ID: {employer_id}")
        
        employer = Employer.objects.get(id=employer_id, is_active=True)
        print(f"✅ Employer found: {employer.first_name} {employer.last_name}")
        
        # Get employer's data (mock for now)
        jobs = []  # In real app, fetch from database
        accepted_workers = []
        hired_workers = []
        work_history = []
        
        context = {
            'employer': employer,
            'full_name': employer.get_full_name(),
            'first_name': employer.first_name,
            'last_name': employer.last_name,
            'email': employer.email,
            'mobile': employer.mobile,
            'is_approved': employer.is_approved,
            'profile_photo_url': employer.profile_photo.url if employer.profile_photo else None,
            'company_name': getattr(employer, 'company_name', 'Construction Company'),
            'jobs': json.dumps(jobs),
            'accepted_workers': json.dumps(accepted_workers),
            'hired_workers': json.dumps(hired_workers),
            'work_history': json.dumps(work_history),
            'total_jobs': len(jobs),
            'total_hired': len(hired_workers) + len(work_history),
            'avg_rating': 0
        }
        
        print("✅ Rendering dashboard template")
        return render(request, 'employer/dashboard_employer.html', context)
        
    except Employer.DoesNotExist:
        print(f"❌ Employer with ID {request.session.get('employer_id')} not found")
        messages.error(request, 'Account not found')
        return redirect('/login_employer/')
    except Exception as e:
        print(f"❌ Error loading dashboard: {str(e)}")
        import traceback
        traceback.print_exc()
        messages.error(request, f'Error loading dashboard: {str(e)}')
        return redirect('/login_employer/')

def dashboard_worker(request):
    return render(request, 'worker/dashboard_worker.html')

def logout_employer(request):
    """Handle employer logout"""
    if 'employer_id' in request.session:
        del request.session['employer_id']
        del request.session['employer_email']
        del request.session['employer_name']
    
    messages.success(request, 'Logged out successfully!')
    return redirect('/login_employer/')


# ============================================
# Helper Functions to Get Employer Data
# ============================================

def get_employer_jobs(employer_id):
    """Get jobs posted by this employer"""
    # In a real app, this would query the database
    # For now, return mock data filtered by employer_id
    mock_jobs = [
        {
            "id": 1,
            "employerName": "Rajesh Sharma",
            "employer_id": 1,
            "workAddress": "Bandra West, Mumbai",
            "latitude": 19.0596,
            "longitude": 72.8295,
            "title": "Electrician for House Wiring",
            "workType": "Electrical Wiring",
            "description": "Need an experienced electrician for complete house wiring in a 3BHK apartment.",
            "skills": ["Electrical Wiring", "Circuit Repair", "Safety Standards"],
            "location": "Mumbai, Andheri West",
            "pay": 15000,
            "time": 40,
            "toolsAvailable": True,
            "status": "open",
            "postedDate": "2023-10-15"
        },
        {
            "id": 2,
            "employerName": "Rajesh Sharma",
            "employer_id": 1,
            "workAddress": "Kothrud, Pune",
            "latitude": 18.5074,
            "longitude": 73.8077,
            "title": "Plumber for Bathroom Renovation",
            "workType": "Plumbing",
            "description": "Plumbing work for bathroom renovation including pipe fitting and fixture installation.",
            "skills": ["Pipe Fitting", "Fixture Installation", "Leak Repair"],
            "location": "Pune, Kothrud",
            "pay": 8000,
            "time": 24,
            "toolsAvailable": False,
            "status": "in-progress",
            "postedDate": "2023-10-10"
        },
        {
            "id": 3,
            "employerName": "Rajesh Sharma",
            "employer_id": 1,
            "workAddress": "Rohini, Delhi",
            "latitude": 28.7433,
            "longitude": 77.0679,
            "title": "Carpenter for Furniture Making",
            "workType": "Carpentry",
            "description": "Skilled carpenter needed for custom furniture making including wardrobes and beds.",
            "skills": ["Woodworking", "Furniture Making", "Measurement"],
            "location": "Delhi, Rohini",
            "pay": 12000,
            "time": 48,
            "toolsAvailable": True,
            "status": "completed",
            "postedDate": "2023-09-25"
        }
    ]
    
    # Filter jobs by employer_id
    return [job for job in mock_jobs if job.get('employer_id') == employer_id]

def get_employer_accepted_workers(employer_id):
    """Get workers accepted by this employer"""
    # In a real app, this would query the database
    mock_workers = [
        {
            "id": 1,
            "name": "Ramesh Kumar",
            "photo": "https://randomuser.me/api/portraits/men/1.jpg",
            "age": 32,
            "gender": "Male",
            "skills": ["Electrical Wiring", "Circuit Repair", "Maintenance"],
            "address": "Andheri West, Mumbai",
            "distance": 2.5,
            "rating": 4.5,
            "expectedPrice": 14000,
            "jobAcceptanceTime": "2023-10-16T09:30:00",
            "jobId": 1,
            "employer_id": 1,
            "negotiatedPrice": None,
            "negotiatedTime": None
        },
        {
            "id": 2,
            "name": "Suresh Patel",
            "photo": "https://randomuser.me/api/portraits/men/2.jpg",
            "age": 28,
            "gender": "Male",
            "skills": ["Electrical Work", "Installation", "Troubleshooting"],
            "address": "Bandra, Mumbai",
            "distance": 5.2,
            "rating": 4.2,
            "expectedPrice": 14500,
            "jobAcceptanceTime": "2023-10-16T10:15:00",
            "jobId": 1,
            "employer_id": 1,
            "negotiatedPrice": None,
            "negotiatedTime": None
        },
        {
            "id": 3,
            "name": "Arun Singh",
            "photo": "https://randomuser.me/api/portraits/men/3.jpg",
            "age": 35,
            "gender": "Male",
            "skills": ["Pipe Fitting", "Leak Repair", "Bathroom Plumbing"],
            "address": "Kothrud, Pune",
            "distance": 1.8,
            "rating": 4.7,
            "expectedPrice": 7500,
            "jobAcceptanceTime": "2023-10-11T14:20:00",
            "jobId": 2,
            "employer_id": 1,
            "negotiatedPrice": None,
            "negotiatedTime": None
        }
    ]
    
    return [w for w in mock_workers if w.get('employer_id') == employer_id]

def get_employer_hired_workers(employer_id):
    """Get workers hired by this employer"""
    mock_hired = [
        {
            "id": 6,
            "name": "Ajay Verma",
            "photo": "https://randomuser.me/api/portraits/men/5.jpg",
            "age": 38,
            "gender": "Male",
            "skills": ["Advanced Plumbing", "Pipe Installation", "Water System"],
            "address": "Hadapsar, Pune",
            "distance": 4.2,
            "rating": 4.9,
            "expectedPrice": 8500,
            "jobAcceptanceTime": "2023-10-05T09:00:00",
            "jobId": 2,
            "employer_id": 1,
            "hiredDate": "2023-10-06",
            "status": "in-progress"
        },
        {
            "id": 7,
            "name": "Deepak Gupta",
            "photo": "https://randomuser.me/api/portraits/men/6.jpg",
            "age": 45,
            "gender": "Male",
            "skills": ["Carpentry", "Furniture Repair", "Wood Finishing"],
            "address": "Dwarka, Delhi",
            "distance": 6.1,
            "rating": 4.6,
            "expectedPrice": 12500,
            "jobAcceptanceTime": "2023-09-20T10:30:00",
            "jobId": 3,
            "employer_id": 1,
            "hiredDate": "2023-09-21",
            "status": "completed"
        }
    ]
    
    return [w for w in mock_hired if w.get('employer_id') == employer_id]

def get_employer_work_history(employer_id):
    """Get work history for this employer"""
    mock_history = [
        {
            "id": 101,
            "workerId": 7,
            "workerName": "Deepak Gupta",
            "workerPhoto": "https://randomuser.me/api/portraits/men/6.jpg",
            "employerName": "Rajesh Sharma",
            "employer_id": 1,
            "jobId": 3,
            "jobTitle": "Carpenter for Furniture Making",
            "workAddress": "Rohini, Delhi",
            "completionDate": "2023-10-10",
            "rating": 5,
            "payment": 12500,
            "feedback": "Excellent work, very professional.",
            "workType": "Carpentry",
            "toolsAvailable": True,
            "jobDescription": "Skilled carpenter needed for custom furniture making.",
            "requiredSkills": ["Woodworking", "Furniture Making", "Measurement"],
            "workTime": 48,
            "jobLocation": "Delhi, Rohini"
        },
        {
            "id": 102,
            "workerId": 8,
            "workerName": "Mohammed Ali",
            "workerPhoto": "https://randomuser.me/api/portraits/men/7.jpg",
            "employerName": "Rajesh Sharma",
            "employer_id": 1,
            "jobId": 4,
            "jobTitle": "Painter for House Interior",
            "workAddress": "Andheri East, Mumbai",
            "completionDate": "2023-09-15",
            "rating": 4,
            "payment": 9000,
            "feedback": "Good quality work, timely completion.",
            "workType": "Painting",
            "toolsAvailable": False,
            "jobDescription": "Interior painting for 2BHK apartment.",
            "requiredSkills": ["Wall Painting", "Color Mixing", "Surface Preparation"],
            "workTime": 32,
            "jobLocation": "Mumbai, Andheri East"
        }
    ]
    
    return [h for h in mock_history if h.get('employer_id') == employer_id]

# ============================================
# EMPLOYER SIGNUP HANDLING FUNCTIONS
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def handle_employer_signup(request):
    """
    Handle employer signup form submission
    This function processes the multipart form data from the signup form
    """
    try:
        # Extract form data
        data = request.POST
        
        print("=" * 50)
        print("SIGNUP REQUEST RECEIVED")
        print("=" * 50)
        print(f"First name: {data.get('first_name')}")
        print(f"Email: {data.get('email')}")
        print(f"Password: {data.get('password')}")
        
        # Check if employer with this email or mobile already exists
        if Employer.objects.filter(email=data.get('email')).exists():
            messages.error(request, 'An account with this email already exists.')
            return render(request, 'employer/signup_employer.html')
        
        if Employer.objects.filter(mobile=data.get('mobile')).exists():
            messages.error(request, 'An account with this mobile number already exists.')
            return render(request, 'employer/signup_employer.html')
        
        # Handle file uploads
        profile_photo = request.FILES.get('profile_photo')
        document_file = request.FILES.get('document_file')
        
        # Create employer instance
        employer = Employer(
            # Personal Information
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            date_of_birth=datetime.strptime(data.get('dob'), '%Y-%m-%d').date(),
            age=int(data.get('age', 0)),
            gender=data.get('gender'),
            
            # Contact Information
            email=data.get('email'),
            email_verified=data.get('email_verified') == 'true',
            mobile=data.get('mobile'),
            mobile_verified=data.get('mobile_verified') == 'true',
            
            # Direct password store (no hashing)
            password=data.get('password'),
            
            # Address Information
            street=data.get('street'),
            city=data.get('city'),
            state=data.get('state'),
            pincode=data.get('pincode'),
            
            # Work Location
            work_latitude=data.get('latitude') if data.get('latitude') else None,
            work_longitude=data.get('longitude') if data.get('longitude') else None,
            work_location_address=data.get('location_address', ''),
            
            # Document Information
            document_type=data.get('document_type'),
        )
        
        # Save profile photo if provided
        if profile_photo:
            employer.profile_photo = profile_photo
        
        # Save document file if provided
        if document_file:
            employer.document_file = document_file
        
        # Save to database
        employer.save()
        print(f"✅ Employer saved with ID: {employer.id}")
        print(f"✅ Password stored: {employer.password}")
        
        # Return success response
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return JsonResponse({
                'success': True,
                'message': 'Account created successfully!',
                'redirect_url': '/login_employer/'
            })
        else:
            messages.success(request, 'Account created successfully! Please login.')
            return redirect('/login_employer/')
            
    except Exception as e:
        import traceback
        print("=" * 50)
        print("ERROR OCCURRED:")
        print(traceback.format_exc())
        print("=" * 50)
        
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return JsonResponse({
                'success': False,
                'message': f'Error creating account: {str(e)}'
            }, status=400)
        else:
            messages.error(request, f'Error creating account: {str(e)}')
            return render(request, 'employer/signup_employer.html')


@require_http_methods(["GET"])
def get_employer_details(request, employer_id):
    """
    Fetch employer details by ID
    Used for dashboard or profile viewing
    """
    try:
        employer = Employer.objects.get(id=employer_id, is_active=True)
        
        data = {
            'id': employer.id,
            'full_name': employer.get_full_name(),
            'first_name': employer.first_name,
            'last_name': employer.last_name,
            'email': employer.email,
            'mobile': employer.mobile,
            'email_verified': employer.email_verified,
            'mobile_verified': employer.mobile_verified,
            'gender': employer.gender,
            'age': employer.age,
            'date_of_birth': employer.date_of_birth.strftime('%Y-%m-%d'),
            'address': f"{employer.street}, {employer.city}, {employer.state} - {employer.pincode}",
            'street': employer.street,
            'city': employer.city,
            'state': employer.state,
            'pincode': employer.pincode,
            'work_location': employer.get_work_location_coordinates(),
            'work_location_address': employer.work_location_address,
            'document_type': employer.document_type,
            'profile_photo_url': employer.profile_photo.url if employer.profile_photo else None,
            'document_url': employer.document_file.url if employer.document_file else None,
            'is_approved': employer.is_approved,
            'created_at': employer.created_at.strftime('%Y-%m-%d %H:%M:%S'),
        }
        
        return JsonResponse({'success': True, 'data': data})
        
    except Employer.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Employer not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@require_http_methods(["POST"])
@csrf_exempt
def check_employer_exists(request):
    """
    Check if employer exists with given email or mobile
    Used during signup for real-time validation
    """
    try:
        data = json.loads(request.body)
        email = data.get('email')
        mobile = data.get('mobile')
        
        response = {
            'exists': False,
            'email_exists': False,
            'mobile_exists': False
        }
        
        if email:
            response['email_exists'] = Employer.objects.filter(email=email).exists()
        
        if mobile:
            response['mobile_exists'] = Employer.objects.filter(mobile=mobile).exists()
        
        response['exists'] = response['email_exists'] or response['mobile_exists']
        
        return JsonResponse(response)
        
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)


@require_http_methods(["GET"])
def list_employers(request):
    """
    List all employers (for admin panel)
    """
    employers = Employer.objects.all().values(
        'id', 'first_name', 'last_name', 'email', 'mobile', 
        'is_approved', 'created_at'
    )
    return JsonResponse({'employers': list(employers)})


# ============================================
# API Endpoint to Get Employer Dashboard Data
# ============================================

@require_http_methods(["GET"])
def get_employer_dashboard_data(request):
    """API endpoint to get dashboard data for logged-in employer"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        employer_id = request.session['employer_id']
        
        # In a real app, these would come from database
        data = {
            'jobs': [],
            'accepted_workers': [],
            'hired_workers': [],
            'work_history': []
        }
        
        return JsonResponse({'success': True, 'data': data})
        
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# Job API endpoints (placeholder)
# ============================================

@require_http_methods(["GET"])
def list_jobs(request):
    return JsonResponse({'jobs': []})

@require_http_methods(["POST"])
def create_job(request):
    return JsonResponse({'success': True, 'message': 'Job created'})

@require_http_methods(["GET"])
def get_job_details(request, job_id):
    return JsonResponse({'job': {}})

@require_http_methods(["POST"])
def delete_job(request, job_id):
    return JsonResponse({'success': True, 'message': 'Job deleted'})


# ============================================
# Worker API endpoints (placeholder)
# ============================================

@require_http_methods(["GET"])
def list_workers(request):
    return JsonResponse({'workers': []})

@require_http_methods(["GET"])
def get_worker_details(request, worker_id):
    return JsonResponse({'worker': {}})


# ============================================
# Application API endpoints (placeholder)
# ============================================

@require_http_methods(["GET"])
def list_applications(request):
    return JsonResponse({'applications': []})

@require_http_methods(["POST"])
def accept_application(request, app_id):
    return JsonResponse({'success': True})

@require_http_methods(["POST"])
def hire_worker(request, app_id):
    return JsonResponse({'success': True})

@require_http_methods(["POST"])
def complete_work(request, app_id):
    return JsonResponse({'success': True})

@require_http_methods(["POST"])
def remove_application(request, app_id):
    return JsonResponse({'success': True})


# ============================================
# Chat API endpoints (placeholder)
# ============================================

@require_http_methods(["GET"])
def get_chat_messages(request, app_id):
    return JsonResponse({'messages': []})

@require_http_methods(["POST"])
def send_chat_message(request, app_id):
    return JsonResponse({'success': True})


# ============================================
# Work History API endpoints (placeholder)
# ============================================

@require_http_methods(["GET"])
def get_work_history(request):
    return JsonResponse({'work_history': []})

@require_http_methods(["GET"])
def get_work_history_details(request, history_id):
    return JsonResponse({'work_history': {}})