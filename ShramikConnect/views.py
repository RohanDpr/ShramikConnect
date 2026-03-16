from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.files.storage import FileSystemStorage
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone
import json
import os
import math
from datetime import datetime
from core.models import Employer, Worker, EmailOTP, Job, JobApplication, WorkHistory
import logging
import sendgrid
from sendgrid.helpers.mail import Mail

logger = logging.getLogger(__name__)

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

# ============================================
# WORKER LOGIN VIEW
# ============================================

def login_worker(request):
    """Handle worker login"""
    if request.method == 'POST':
        try:
            if request.headers.get('Content-Type') == 'application/json':
                data = json.loads(request.body)
                email = data.get('email')
                password = data.get('password')
            else:
                email = request.POST.get('email')
                password = request.POST.get('password')
            
            print(f"Worker Login attempt - Email: {email}")
            
            try:
                worker = Worker.objects.get(email=email, is_active=True)
                print(f"Worker found: {worker.first_name} {worker.last_name}")
                
                if worker.password == password:
                    print("✅ Password matched!")
                    
                    request.session['worker_id'] = worker.id
                    request.session['worker_email'] = worker.email
                    request.session['worker_name'] = worker.get_full_name()
                    request.session.modified = True
                    print(f"✅ Session set: {request.session.items()}")
                    
                    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                        return JsonResponse({
                            'success': True,
                            'message': 'Login successful!',
                            'redirect_url': '/dashboard_worker/',
                            'worker': {
                                'id': worker.id,
                                'name': worker.get_full_name(),
                                'email': worker.email,
                                'profession': worker.profession
                            }
                        })
                    else:
                        messages.success(request, 'Login successful!')
                        return redirect('dashboard_worker')
                else:
                    print("❌ Password did not match!")
                    error_msg = 'Invalid password'
                    
            except Worker.DoesNotExist:
                print(f"❌ No worker found with email: {email}")
                error_msg = 'No account found with this email'
            
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': error_msg
                }, status=400)
            else:
                messages.error(request, error_msg)
                return render(request, 'worker/login_worker.html')
                
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
                return render(request, 'worker/login_worker.html')
    
    return render(request, 'worker/login_worker.html')


def login_employer(request):
    """Handle employer login"""
    if request.method == 'POST':
        try:
            if request.headers.get('Content-Type') == 'application/json':
                data = json.loads(request.body)
                email = data.get('email')
                password = data.get('password')
            else:
                email = request.POST.get('email')
                password = request.POST.get('password')
            
            print(f"Login attempt - Email: {email}")
            
            try:
                employer = Employer.objects.get(email=email, is_active=True)
                print(f"Employer found: {employer.first_name} {employer.last_name}")
                print(f"Stored password: {employer.password}")
                print(f"Entered password: {password}")
                
                if employer.password == password:
                    print("✅ Password matched!")
                    
                    request.session['employer_id'] = employer.id
                    request.session['employer_email'] = employer.email
                    request.session['employer_name'] = employer.get_full_name()
                    request.session.modified = True
                    print(f"✅ Session set: {request.session.items()}")
                    
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
    
    return render(request, 'employer/login_employer.html')


def signup_worker(request):
    """Handle worker signup page rendering and form submission"""
    if request.method == 'POST':
        return handle_worker_signup(request)
    
    return render(request, 'worker/signup_worker.html')


def signup_employer(request):
    """Handle employer signup page rendering and form submission"""
    if request.method == 'POST':
        return handle_employer_signup(request)
    
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


#<<<<<<< HEAD
#=======
def forgot_password_card(request):
    return render(request, 'forget_password_card.html')

def contact_developer(request):
    return render(request, 'contact_developer_card.html')

#>>>>>>> e445699bb61f6aecb3aff6115502029337c55011
def get_password_employer(request):
    return render(request, 'employer/get_password_employer.html')


#<<<<<<< HEAD
#=======
def how_platform_works(request):
    """How Platform Works page view"""
    return render(request, 'how_platform_works_card.html')


def login_card(request):
    
    return render(request, 'login_card.html')

def emergency_contact_card(request):
    
    return render(request, 'emergency_contact_card.html')

def connect_on_social_media_card(request):
    return render(request, 'connect_on_social_media_card.html')

def signup_card(request):
    return render(request, 'singup_card.html')

#>>>>>>> e445699bb61f6aecb3aff6115502029337c55011
def dashboard_employer(request):
    """Employer dashboard - protected route"""
    print("=" * 50)
    print("DASHBOARD ACCESS ATTEMPT")
    print(f"Session keys: {request.session.keys()}")
    print(f"employer_id in session: {request.session.get('employer_id')}")
    print(f"employer_name in session: {request.session.get('employer_name')}")
    print("=" * 50)
    
    if 'employer_id' not in request.session:
        print("❌ No employer_id in session - redirecting to login")
        messages.error(request, 'Please login to access dashboard')
        return redirect('/login_employer/')
    
    try:
        employer_id = request.session['employer_id']
        print(f"Looking for employer with ID: {employer_id}")
        
        employer = Employer.objects.get(id=employer_id, is_active=True)
        print(f"✅ Employer found: {employer.first_name} {employer.last_name}")
        
        jobs = []
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


# ============================================
# WORKER DASHBOARD VIEW
# ============================================

def dashboard_worker(request):
    """Worker dashboard - protected route"""
    print("=" * 50)
    print("WORKER DASHBOARD ACCESS ATTEMPT")
    print(f"Session keys: {request.session.keys()}")
    print(f"worker_id in session: {request.session.get('worker_id')}")
    print("=" * 50)
    
    if 'worker_id' not in request.session:
        print("❌ No worker_id in session - redirecting to login")
        messages.error(request, 'Please login to access dashboard')
        return redirect('/login_worker/')
    
    try:
        worker_id = request.session['worker_id']
        print(f"Looking for worker with ID: {worker_id}")
        
        worker = Worker.objects.get(id=worker_id, is_active=True)
        print(f"✅ Worker found: {worker.first_name} {worker.last_name} - {worker.profession}")
        
        # Safely get data with error handling
        jobs = []
        applied_jobs = []
        active_jobs = []
        work_history = []
        
        try:
            jobs = get_available_jobs(worker)
        except Exception as e:
            print(f"Error getting jobs: {e}")
            jobs = []
        
        try:
            applied_jobs = get_applied_jobs(worker)
        except Exception as e:
            print(f"Error getting applied jobs: {e}")
            applied_jobs = []
        
        try:
            active_jobs = get_active_jobs(worker)
        except Exception as e:
            print(f"Error getting active jobs: {e}")
            active_jobs = []
        
        try:
            work_history = get_work_history(worker)
        except Exception as e:
            print(f"Error getting work history: {e}")
            work_history = []
        
        total_applied = len(applied_jobs)
        total_active = len(active_jobs)
        total_completed = len(work_history)
        total_earnings = sum([h.get('payment', 0) for h in work_history]) if work_history else 0
        
        context = {
            'worker': worker,
            'full_name': worker.get_full_name(),
            'first_name': worker.first_name,
            'last_name': worker.last_name,
            'email': worker.email,
            'mobile': worker.mobile,
            'profession': worker.profession,
            'profile_photo_url': worker.profile_photo.url if worker.profile_photo else None,
            'total_applied': total_applied,
            'total_active': total_active,
            'total_completed': total_completed,
            'total_earnings': total_earnings,
            'avg_rating': worker.rating,
            'jobs': json.dumps(jobs, default=str),
            'applied_jobs': json.dumps(applied_jobs, default=str),
            'active_jobs': json.dumps(active_jobs, default=str),
            'work_history': json.dumps(work_history, default=str),
        }
        
        print("✅ Rendering worker dashboard template")
        return render(request, 'worker/dashboard_worker.html', context)
        
    except Worker.DoesNotExist:
        print(f"❌ Worker with ID {request.session.get('worker_id')} not found")
        messages.error(request, 'Account not found')
        return redirect('/login_worker/')
    except Exception as e:
        print(f"❌ Error loading dashboard: {str(e)}")
        import traceback
        traceback.print_exc()
        messages.error(request, f'Error loading dashboard: {str(e)}')
        return redirect('/login_worker/')


def logout_employer(request):
    """Handle employer logout"""
    if 'employer_id' in request.session:
        del request.session['employer_id']
        del request.session['employer_email']
        del request.session['employer_name']
    
    messages.success(request, 'Logged out successfully!')
    return redirect('/login_employer/')


def logout_worker(request):
    """Handle worker logout"""
    if 'worker_id' in request.session:
        del request.session['worker_id']
        del request.session['worker_email']
        del request.session['worker_name']
    
    messages.success(request, 'Logged out successfully!')
    return redirect('/login_worker/')


# ============================================
# HELPER FUNCTIONS FOR EMPLOYER DATA
# ============================================

def get_employer_jobs(employer_id):
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
    return [job for job in mock_jobs if job.get('employer_id') == employer_id]


def get_employer_accepted_workers(employer_id):
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
# HELPER FUNCTIONS FOR WORKER DATA - FIXED
# ============================================

def get_available_jobs(worker):
    """Get jobs available for this worker - FIXED with manual dict creation"""
    try:
        jobs = Job.objects.filter(status='open')
        applied_job_ids = JobApplication.objects.filter(worker=worker).values_list('job_id', flat=True)
        jobs = jobs.exclude(id__in=applied_job_ids)
        
        job_list = []
        for job in jobs:
            try:
                job_dict = {
                    'id': job.id,
                    'title': job.title,
                    'workType': job.work_type,
                    'description': job.description,
                    'skills': job.skills,
                    'location': job.location,
                    'workAddress': job.work_address,
                    'pay': job.pay,
                    'time': job.time,
                    'toolsAvailable': job.tools_available,
                    'status': job.status,
                    'postedDate': job.posted_date.isoformat() if job.posted_date else None,
                    'employerName': job.employer.get_full_name() if job.employer else "Unknown",
                    'employerPhoto': job.employer.profile_photo.url if job.employer and job.employer.profile_photo else None,
                }
                
                # Add distance if available
                if (worker.current_latitude and worker.current_longitude and 
                    job.latitude and job.longitude):
                    try:
                        distance = calculate_distance(
                            float(worker.current_latitude),
                            float(worker.current_longitude),
                            float(job.latitude),
                            float(job.longitude)
                        )
                        job_dict['distance'] = round(distance, 1)
                    except:
                        job_dict['distance'] = None
                else:
                    job_dict['distance'] = None
                
                job_list.append(job_dict)
            except Exception as e:
                print(f"Error processing job {job.id}: {e}")
                continue
        
        return job_list
    except Exception as e:
        print(f"Error in get_available_jobs: {e}")
        return []


def get_applied_jobs(worker):
    """Get jobs applied by this worker - FIXED with manual dict creation"""
    try:
        applications = JobApplication.objects.filter(worker=worker).order_by('-applied_date')
        applied_jobs = []
        
        for app in applications:
            try:
                job_dict = {
                    'id': app.id,
                    'jobId': app.job.id,
                    'jobTitle': app.job.title,
                    'employerName': app.job.employer.get_full_name() if app.job.employer else "Unknown",
                    'location': app.job.location,
                    'pay': app.job.pay,
                    'status': app.status,
                    'appliedDate': app.applied_date.isoformat() if app.applied_date else None,
                    'expectedPrice': app.expected_price,
                    'availability': app.availability,
                    'cover_message': app.cover_message,
                }
                applied_jobs.append(job_dict)
            except Exception as e:
                print(f"Error processing application {app.id}: {e}")
                continue
        
        return applied_jobs
    except Exception as e:
        print(f"Error in get_applied_jobs: {e}")
        return []


def get_active_jobs(worker):
    """Get jobs where worker is hired and work is in progress - FIXED with manual dict creation"""
    try:
        applications = JobApplication.objects.filter(
            worker=worker,
            status='hired'
        ).order_by('-hired_date')
        
        active_jobs = []
        for app in applications:
            try:
                job_dict = {
                    'id': app.id,
                    'jobId': app.job.id,
                    'jobTitle': app.job.title,
                    'employerName': app.job.employer.get_full_name() if app.job.employer else "Unknown",
                    'employerPhoto': app.job.employer.profile_photo.url if app.job.employer and app.job.employer.profile_photo else None,
                    'location': app.job.location,
                    'pay': app.job.pay,
                    'hiredDate': app.hired_date.isoformat() if app.hired_date else None,
                }
                active_jobs.append(job_dict)
            except Exception as e:
                print(f"Error processing active job {app.id}: {e}")
                continue
        
        return active_jobs
    except Exception as e:
        print(f"Error in get_active_jobs: {e}")
        return []


def get_work_history(worker):
    """Get completed work history for this worker - FIXED with manual dict creation"""
    try:
        work_history = WorkHistory.objects.filter(worker=worker).order_by('-completion_date')
        history_list = []
        
        for wh in work_history:
            try:
                history_dict = {
                    'id': wh.id,
                    'jobTitle': wh.job_title,
                    'employerName': wh.employer_name,
                    'payment': wh.payment,
                    'rating': wh.rating,
                    'completionDate': wh.completion_date.isoformat() if wh.completion_date else None,
                    'feedback': wh.feedback,
                    'location': wh.job_location,
                }
                history_list.append(history_dict)
            except Exception as e:
                print(f"Error processing work history {wh.id}: {e}")
                continue
        
        return history_list
    except Exception as e:
        print(f"Error in get_work_history: {e}")
        return []


def calculate_distance(lat1, lon1, lat2, lon2):
    """Calculate distance between two coordinates in km using Haversine formula"""
    R = 6371
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    return R * c


# ============================================
# EMPLOYER SIGNUP HANDLING FUNCTIONS
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def handle_employer_signup(request):
    try:
        data = request.POST
        
        print("=" * 50)
        print("SIGNUP REQUEST RECEIVED")
        print("=" * 50)
        print(f"First name: {data.get('first_name')}")
        print(f"Email: {data.get('email')}")
        print(f"Password: {data.get('password')}")
        
        if Employer.objects.filter(email=data.get('email')).exists():
            messages.error(request, 'An account with this email already exists.')
            return render(request, 'employer/signup_employer.html')
        
        if Employer.objects.filter(mobile=data.get('mobile')).exists():
            messages.error(request, 'An account with this mobile number already exists.')
            return render(request, 'employer/signup_employer.html')
        
        latest_otp = EmailOTP.objects.filter(
            email=data.get('email'), 
            is_verified=True
        ).order_by('-created_at').first()
        
        if not latest_otp:
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': 'Email not verified. Please verify your email first.'
                }, status=400)
            else:
                messages.error(request, 'Email not verified. Please verify your email first.')
                return render(request, 'employer/signup_employer.html')
        
        profile_photo = request.FILES.get('profile_photo')
        document_file = request.FILES.get('document_file')
        
        employer = Employer(
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            date_of_birth=datetime.strptime(data.get('dob'), '%Y-%m-%d').date(),
            age=int(data.get('age', 0)),
            gender=data.get('gender'),
            email=data.get('email'),
            email_verified=data.get('email_verified') == 'true',
            mobile=data.get('mobile'),
            mobile_verified=data.get('mobile_verified') == 'true',
            password=data.get('password'),
            street=data.get('street'),
            city=data.get('city'),
            state=data.get('state'),
            pincode=data.get('pincode'),
            work_latitude=data.get('latitude') if data.get('latitude') else None,
            work_longitude=data.get('longitude') if data.get('longitude') else None,
            work_location_address=data.get('location_address', ''),
            document_type=data.get('document_type'),
        )
        
        if profile_photo:
            employer.profile_photo = profile_photo
        
        if document_file:
            employer.document_file = document_file
        
        employer.save()
        print(f"✅ Employer saved with ID: {employer.id}")
        print(f"✅ Password stored: {employer.password}")
        
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


# ============================================
# WORKER SIGNUP HANDLING FUNCTION
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def handle_worker_signup(request):
    try:
        data = request.POST
        
        print("=" * 50)
        print("WORKER SIGNUP REQUEST RECEIVED")
        print("=" * 50)
        print(f"First name: {data.get('first_name')}")
        print(f"Email: {data.get('email')}")
        print(f"Profession: {data.get('profession')}")
        
        if Worker.objects.filter(email=data.get('email')).exists():
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': 'An account with this email already exists.'
                }, status=400)
            else:
                messages.error(request, 'An account with this email already exists.')
                return render(request, 'worker/signup_worker.html')
        
        if Worker.objects.filter(mobile=data.get('mobile')).exists():
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': 'An account with this mobile number already exists.'
                }, status=400)
            else:
                messages.error(request, 'An account with this mobile number already exists.')
                return render(request, 'worker/signup_worker.html')
        
        latest_otp = EmailOTP.objects.filter(
            email=data.get('email'), 
            is_verified=True
        ).order_by('-created_at').first()
        
        if not latest_otp:
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({
                    'success': False,
                    'message': 'Email not verified. Please verify your email first.'
                }, status=400)
            else:
                messages.error(request, 'Email not verified. Please verify your email first.')
                return render(request, 'worker/signup_worker.html')
        
        profile_photo = request.FILES.get('profile_photo')
        document_file = request.FILES.get('document_file')
        
        profession = data.get('profession')
        other_profession = data.get('other_profession') if profession == 'other' else ''
        
        worker = Worker(
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            date_of_birth=datetime.strptime(data.get('dob'), '%Y-%m-%d').date(),
            age=int(data.get('age', 0)),
            gender=data.get('gender'),
            email=data.get('email'),
            email_verified=True,
            mobile=data.get('mobile'),
            mobile_verified=data.get('mobile_verified') == 'true',
            password=data.get('password'),
            profession=profession,
            other_profession=other_profession,
            street=data.get('street'),
            city=data.get('city'),
            state=data.get('state'),
            pincode=data.get('pincode'),
            preferred_work_area=data.get('work_area', ''),
            document_type=data.get('document_type'),
            skills=[],
        )
        
        if profile_photo:
            worker.profile_photo = profile_photo
        
        if document_file:
            worker.document_file = document_file
        
        worker.save()
        print(f"✅ Worker saved with ID: {worker.id}")
        
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            return JsonResponse({
                'success': True,
                'message': 'Account created successfully!',
                'redirect_url': '/login_worker/'
            })
        else:
            messages.success(request, 'Account created successfully! Please login.')
            return redirect('/login_worker/')
            
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
            return render(request, 'worker/signup_worker.html')


# ============================================
# EMPLOYER API ENDPOINTS
# ============================================

@require_http_methods(["GET"])
def get_employer_details(request, employer_id):
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
    employers = Employer.objects.all().values(
        'id', 'first_name', 'last_name', 'email', 'mobile', 
        'is_approved', 'created_at'
    )
    return JsonResponse({'employers': list(employers)})


# ============================================
# WORKER API ENDPOINTS
# ============================================

@require_http_methods(["GET"])
def get_worker_details(request, worker_id):
    try:
        worker = Worker.objects.get(id=worker_id, is_active=True)
        
        data = {
            'id': worker.id,
            'full_name': worker.get_full_name(),
            'first_name': worker.first_name,
            'last_name': worker.last_name,
            'email': worker.email,
            'mobile': worker.mobile,
            'email_verified': worker.email_verified,
            'mobile_verified': worker.mobile_verified,
            'gender': worker.gender,
            'age': worker.age,
            'date_of_birth': worker.date_of_birth.strftime('%Y-%m-%d'),
            'profession': worker.profession,
            'other_profession': worker.other_profession,
            'skills': worker.skills,
            'address': f"{worker.street}, {worker.city}, {worker.state} - {worker.pincode}",
            'street': worker.street,
            'city': worker.city,
            'state': worker.state,
            'pincode': worker.pincode,
            'preferred_work_area': worker.preferred_work_area,
            'document_type': worker.document_type,
            'profile_photo_url': worker.profile_photo.url if worker.profile_photo else None,
            'document_url': worker.document_file.url if worker.document_file else None,
            'rating': worker.rating,
            'total_ratings': worker.total_ratings,
            'is_approved': worker.is_approved,
            'created_at': worker.created_at.strftime('%Y-%m-%d %H:%M:%S'),
        }
        
        return JsonResponse({'success': True, 'data': data})
        
    except Worker.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Worker not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@require_http_methods(["POST"])
@csrf_exempt
def check_worker_exists(request):
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
            response['email_exists'] = Worker.objects.filter(email=email).exists()
        
        if mobile:
            response['mobile_exists'] = Worker.objects.filter(mobile=mobile).exists()
        
        response['exists'] = response['email_exists'] or response['mobile_exists']
        
        return JsonResponse(response)
        
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)


@require_http_methods(["GET"])
def list_workers(request):
    workers = Worker.objects.filter(is_active=True).order_by('-created_at')
    worker_list = []
    for worker in workers:
        worker_list.append({
            'id': worker.id,
            'name': worker.get_full_name(),
            'profession': worker.profession,
            'city': worker.city,
            'rating': worker.rating,
            'profile_photo': worker.profile_photo.url if worker.profile_photo else None,
        })
    return JsonResponse({'workers': worker_list})


# ============================================
# API Endpoint to Get Employer Dashboard Data
# ============================================

@require_http_methods(["GET"])
def get_employer_dashboard_data(request):
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        employer_id = request.session['employer_id']
        
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
# API Endpoint to Get Worker Dashboard Data - FIXED
# ============================================

@require_http_methods(["GET"])
def get_worker_dashboard_data(request):
    """API endpoint to get dashboard data for logged-in worker"""
    if 'worker_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        worker_id = request.session['worker_id']
        worker = Worker.objects.get(id=worker_id, is_active=True)
        
        # Safe data fetching with error handling
        jobs = []
        applied_jobs = []
        active_jobs = []
        work_history = []
        
        try:
            jobs = get_available_jobs(worker)
        except Exception as e:
            print(f"Error fetching jobs: {e}")
            jobs = []
        
        try:
            applied_jobs = get_applied_jobs(worker)
        except Exception as e:
            print(f"Error fetching applied jobs: {e}")
            applied_jobs = []
        
        try:
            active_jobs = get_active_jobs(worker)
        except Exception as e:
            print(f"Error fetching active jobs: {e}")
            active_jobs = []
        
        try:
            work_history = get_work_history(worker)
        except Exception as e:
            print(f"Error fetching work history: {e}")
            work_history = []
        
        data = {
            'jobs': jobs,
            'applied_jobs': applied_jobs,
            'active_jobs': active_jobs,
            'work_history': work_history,
        }
        
        return JsonResponse({'success': True, 'data': data})
        
    except Worker.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Worker not found'}, status=404)
    except Exception as e:
        print(f"Error in get_worker_dashboard_data: {str(e)}")
        import traceback
        traceback.print_exc()
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# JOB API ENDPOINTS
# ============================================

@require_http_methods(["GET"])
def list_jobs(request):
    jobs = Job.objects.filter(status='open').order_by('-posted_date')
    job_list = []
    for job in jobs:
        job_list.append({
            'id': job.id,
            'title': job.title,
            'work_type': job.work_type,
            'description': job.description,
            'skills': job.skills,
            'location': job.location,
            'pay': job.pay,
            'time': job.time,
            'posted_date': job.posted_date.isoformat() if job.posted_date else None,
            'employer_name': job.employer.get_full_name() if job.employer else "Unknown",
        })
    return JsonResponse({'jobs': job_list})


@require_http_methods(["GET"])
def get_job_details(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        employer = job.employer
        
        data = {
            'id': job.id,
            'title': job.title,
            'work_type': job.work_type,
            'description': job.description,
            'skills': job.skills,
            'location': job.location,
            'work_address': job.work_address,
            'pay': job.pay,
            'time': job.time,
            'tools_available': job.tools_available,
            'posted_date': job.posted_date.isoformat() if job.posted_date else None,
            'employer': {
                'name': employer.get_full_name() if employer else "Unknown",
                'email': employer.email if employer else "",
                'mobile': employer.mobile if employer else "",
                'company_name': employer.company_name if employer else "",
                'profile_photo': employer.profile_photo.url if employer and employer.profile_photo else None,
            }
        }
        
        return JsonResponse({'success': True, 'data': data})
        
    except Job.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Job not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@require_http_methods(["POST"])
@csrf_exempt
def create_job(request):
    return JsonResponse({'success': True, 'message': 'Job created'})


@require_http_methods(["POST"])
@csrf_exempt
def delete_job(request, job_id):
    return JsonResponse({'success': True, 'message': 'Job deleted'})


# ============================================
# JOB APPLICATION API ENDPOINTS
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def apply_for_job(request):
    if 'worker_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        data = json.loads(request.body)
        worker_id = request.session['worker_id']
        job_id = data.get('job_id')
        expected_price = data.get('expected_price')
        availability = data.get('availability')
        cover_message = data.get('cover_message', '')
        
        if not all([job_id, expected_price, availability]):
            return JsonResponse({'success': False, 'message': 'Missing required fields'}, status=400)
        
        if JobApplication.objects.filter(worker_id=worker_id, job_id=job_id).exists():
            return JsonResponse({'success': False, 'message': 'You have already applied for this job'}, status=400)
        
        application = JobApplication(
            worker_id=worker_id,
            job_id=job_id,
            expected_price=expected_price,
            availability=availability,
            cover_message=cover_message,
            status='pending'
        )
        application.save()
        
        return JsonResponse({
            'success': True,
            'message': 'Application submitted successfully!',
            'application_id': application.id
        })
        
    except Exception as e:
        logger.error(f"Error applying for job: {str(e)}")
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


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
# CHAT API ENDPOINTS
# ============================================

@require_http_methods(["GET"])
def get_chat_messages(request, app_id):
    return JsonResponse({'messages': []})


@require_http_methods(["POST"])
def send_chat_message(request, app_id):
    return JsonResponse({'success': True})


# ============================================
# WORK HISTORY API ENDPOINTS
# ============================================

@require_http_methods(["GET"])
def get_work_history(request):
    return JsonResponse({'work_history': []})


@require_http_methods(["GET"])
def get_work_history_details(request, history_id):
    return JsonResponse({'work_history': {}})


# ============================================
# EMAIL OTP VERIFICATION VIEWS
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def send_email_otp(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        
        if not email:
            return JsonResponse({
                'success': False,
                'message': 'Email is required'
            })
        
        if Employer.objects.filter(email=email).exists() or Worker.objects.filter(email=email).exists():
            return JsonResponse({
                'success': False,
                'message': 'This email is already registered. Please login or use a different email.'
            })
        
        otp = EmailOTP.generate_otp()
        EmailOTP.objects.create(email=email, otp=otp)
        
        subject = 'Email Verification OTP - ShramikConnect'
        message = f"""
Dear User,

Thank you for registering with ShramikConnect!

Your OTP for email verification is: {otp}

This OTP is valid for 5 minutes.

If you didn't request this, please ignore this email.

Regards,
ShramikConnect Team
        """
        
        html_message = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }}
        .header {{
            background-color: #01A060;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }}
        .content {{
            padding: 20px;
        }}
        .otp-box {{
            background-color: #f0f0f0;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 5px;
            border-radius: 5px;
            margin: 20px 0;
        }}
        .footer {{
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>ShramikConnect</h2>
        </div>
        <div class="content">
            <h3>Email Verification</h3>
            <p>Dear User,</p>
            <p>Thank you for registering with ShramikConnect! Please use the following OTP to verify your email address:</p>
            
            <div class="otp-box">
                {otp}
            </div>
            
            <p>This OTP is valid for <strong>5 minutes</strong>. Do not share this OTP with anyone.</p>
            
            <p>If you didn't request this verification, please ignore this email.</p>
            
            <p>Regards,<br>ShramikConnect Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 ShramikConnect. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
        """
        
        sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
        mail_data = {
            "personalizations": [{"to": [{"email": email}]}],
            "from": {"email": settings.DEFAULT_FROM_EMAIL},
            "subject": subject,
            "content": [
                {"type": "text/plain", "value": message},
                {"type": "text/html", "value": html_message}
            ]
        }
        response = sg.client.mail.send.post(request_body=mail_data)
        logger.info(f"SendGrid response: {response.status_code}")

        return JsonResponse({
            'success': True,
            'message': 'OTP sent successfully to your email'
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        logger.error(f"Error sending OTP: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Failed to send OTP: {str(e)}'
        }, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def verify_email_otp(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        otp = data.get('otp')
        
        if not email or not otp:
            return JsonResponse({
                'success': False,
                'message': 'Email and OTP are required'
            })
        
        latest_otp = EmailOTP.objects.filter(
            email=email
        ).order_by('-created_at').first()
        
        if not latest_otp:
            return JsonResponse({
                'success': False,
                'message': 'No OTP found for this email. Please request a new OTP.'
            })
        
        if latest_otp.is_verified:
            return JsonResponse({
                'success': False,
                'message': 'This email has already been verified'
            })
        
        if not latest_otp.is_valid():
            return JsonResponse({
                'success': False,
                'message': 'OTP has expired. Please request a new OTP.'
            })
        
        if latest_otp.otp != otp:
            return JsonResponse({
                'success': False,
                'message': 'Invalid OTP. Please try again.'
            })
        
        latest_otp.is_verified = True
        latest_otp.save()
        
        logger.info(f"Email verified successfully: {email}")
        
        return JsonResponse({
            'success': True,
            'message': 'Email verified successfully!'
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        logger.error(f"Error verifying OTP: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Failed to verify OTP: {str(e)}'
        }, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def resend_email_otp(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        
        if not email:
            return JsonResponse({
                'success': False,
                'message': 'Email is required'
            })
        
        if Employer.objects.filter(email=email).exists() or Worker.objects.filter(email=email).exists():
            return JsonResponse({
                'success': False,
                'message': 'This email is already registered. Please login or use a different email.'
            })
        
        otp = EmailOTP.generate_otp()
        EmailOTP.objects.create(email=email, otp=otp)
        
        subject = 'New OTP for Email Verification - ShramikConnect'
        message = f"""
Dear User,

Your new OTP for email verification is: {otp}

This OTP is valid for 5 minutes.

If you didn't request this, please ignore this email.

Regards,
ShramikConnect Team
        """
        
        html_message = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }}
        .header {{
            background-color: #01A060;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }}
        .content {{
            padding: 20px;
        }}
        .otp-box {{
            background-color: #f0f0f0;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 5px;
            border-radius: 5px;
            margin: 20px 0;
        }}
        .footer {{
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>ShramikConnect</h2>
        </div>
        <div class="content">
            <h3>New OTP for Email Verification</h3>
            <p>Dear User,</p>
            <p>Your new OTP for email verification is:</p>
            
            <div class="otp-box">
                {otp}
            </div>
            
            <p>This OTP is valid for <strong>5 minutes</strong>. Do not share this OTP with anyone.</p>
            
            <p>If you didn't request this, please ignore this email.</p>
            
            <p>Regards,<br>ShramikConnect Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 ShramikConnect. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
        """
        
        sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
        mail_data = {
            "personalizations": [{"to": [{"email": email}]}],
            "from": {"email": settings.DEFAULT_FROM_EMAIL},
            "subject": subject,
            "content": [
                {"type": "text/plain", "value": message},
                {"type": "text/html", "value": html_message}
            ]
        }
        response = sg.client.mail.send.post(request_body=mail_data)
        logger.info(f"SendGrid response: {response.status_code}")

        return JsonResponse({
            'success': True,
            'message': 'New OTP sent successfully to your email'
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        logger.error(f"Error resending OTP: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Failed to resend OTP: {str(e)}'
        }, status=500)


@require_http_methods(["GET"])
def check_email_exists(request):
    try:
        email = request.GET.get('email')
        
        if not email:
            return JsonResponse({
                'success': False,
                'message': 'Email parameter is required'
            }, status=400)
        
        exists = Employer.objects.filter(email=email).exists() or Worker.objects.filter(email=email).exists()
        
        return JsonResponse({
            'success': True,
            'exists': exists
        })
        
    except Exception as e:
        logger.error(f"Error checking email: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': str(e)
        }, status=500)