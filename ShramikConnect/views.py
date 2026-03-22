from django.db import models
from django.db.models import Sum, Q, Count, Avg
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
from core.models import Employer, Worker, EmailOTP, MobileOTP, Job, JobApplication, WorkHistory, ChatMessage
import logging
import sendgrid
from sendgrid.helpers.mail import Mail

logger = logging.getLogger(__name__)

# ============================================
# HELPER FUNCTIONS
# ============================================

def calculate_distance(lat1, lon1, lat2, lon2):
    """Calculate distance between two coordinates in km using Haversine formula"""
    R = 6371  # Radius of the earth in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon/2)**2
    c = 2 * math.asin(math.sqrt(a))
    return R * c


# ============================================
# BASIC PAGE VIEWS
# ============================================

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

def forgot_password_card(request):
    return render(request, 'forget_password_card.html')

def contact_developer(request):
    return render(request, 'contact_developer_card.html')

def how_platform_works(request):
    return render(request, 'how_platform_works_card.html')

def login_card(request):
    return render(request, 'login_card.html')

def emergency_contact_card(request):
    return render(request, 'emergency_contact_card.html')

def connect_on_social_media_card(request):
    return render(request, 'connect_on_social_media_card.html')

def signup_card(request):
    return render(request, 'singup_card.html')


# ============================================
# WORKER AUTH VIEWS
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


def logout_worker(request):
    """Handle worker logout"""
    if 'worker_id' in request.session:
        del request.session['worker_id']
        del request.session['worker_email']
        del request.session['worker_name']
    
    messages.success(request, 'Logged out successfully!')
    return redirect('/login_worker/')


def signup_worker(request):
    """Handle worker signup page rendering and form submission"""
    if request.method == 'POST':
        return handle_worker_signup(request)
    
    return render(request, 'worker/signup_worker.html')


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


def choose_password_worker(request):
    return render(request, 'worker/choose_password_worker.html')


def change_password_worker(request):
    return render(request, 'worker/change_password_worker.html')


def get_password_worker(request):
    return render(request, 'worker/get_password_worker.html')

def eligibility_card(request):
    return render(request, 'eligibility_card.html')

def workers_term(request):
    return render(request, 'workers_term.html')

def employers_term(request):
    return render(request, 'employers_term.html')

def platform_responsibilities(request):
    return render(request, 'platform_responsibilities.html')

def termination_card(request):
    return render(request, 'termination_card.html')

def dispute_resolution_card(request):
    return render(request, 'dispute_resolution.html')

def liability_card(request):
    return render(request, 'liability_card.html')

def location_data_card(request):
    return render(request, 'location_data.html')


# ============================================
# EMPLOYER AUTH VIEWS
# ============================================

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


def logout_employer(request):
    """Handle employer logout"""
    if 'employer_id' in request.session:
        del request.session['employer_id']
        del request.session['employer_email']
        del request.session['employer_name']
    
    messages.success(request, 'Logged out successfully!')
    return redirect('/login_employer/')


def signup_employer(request):
    """Handle employer signup page rendering and form submission"""
    if request.method == 'POST':
        return handle_employer_signup(request)
    
    return render(request, 'employer/signup_employer.html')


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


def choose_password_employer(request):
    return render(request, 'employer/choose_password_employer.html')


def change_password_employer(request):
    return render(request, 'employer/change_password_employer.html')


def get_password_employer(request):
    return render(request, 'employer/get_password_employer.html')


# ============================================
# DASHBOARD VIEWS
# ============================================

def dashboard_employer(request):
    """Employer dashboard - protected route"""
    print("=" * 50)
    print("DASHBOARD ACCESS ATTEMPT")
    print(f"Session keys: {request.session.keys()}")
    print(f"employer_id in session: {request.session.get('employer_id')}")
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
        
        # Get jobs count
        jobs = Job.objects.filter(employer=employer)
        total_jobs = jobs.count()
        
        # Get hired workers count
        hired_applications = JobApplication.objects.filter(
            job__employer=employer,
            status='hired'
        ).count()
        
        # Get completed work count
        completed_count = WorkHistory.objects.filter(employer=employer).count()
        total_hired = hired_applications + completed_count
        
        # Calculate average rating
        work_history = WorkHistory.objects.filter(employer=employer)
        if work_history.exists():
            avg_rating = work_history.aggregate(models.Avg('rating'))['rating__avg']
            avg_rating = round(avg_rating, 1) if avg_rating else 0
        else:
            avg_rating = 0
        
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
            'total_jobs': total_jobs,
            'total_hired': total_hired,
            'avg_rating': avg_rating,
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
        
        # Get counts
        applications = JobApplication.objects.filter(worker=worker)
        total_applied = applications.count()
        total_active = applications.filter(status='hired').count()
        
        # Fix: Use Sum directly from django.db.models
        from django.db.models import Sum
        work_history = WorkHistory.objects.filter(worker=worker)
        total_completed = work_history.count()
        total_earnings = work_history.aggregate(Sum('payment'))['payment__sum'] or 0
        
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
# JOB APIs - Employer Side
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def create_job(request):
    """Create a new job posting"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        data = json.loads(request.body)
        employer_id = request.session['employer_id']
        employer = Employer.objects.get(id=employer_id)
        
        # Create job
        job = Job(
            employer=employer,
            title=data.get('title'),
            work_type=data.get('workType'),
            description=data.get('description'),
            skills=data.get('skills', []),
            location=data.get('location'),
            work_address=data.get('workAddress'),
            latitude=data.get('latitude'),
            longitude=data.get('longitude'),
            pay=data.get('pay'),
            time=data.get('time'),
            tools_available=data.get('toolsAvailable', False),
            status='open'
        )
        job.save()
        
        return JsonResponse({
            'success': True,
            'message': 'Job posted successfully!',
            'job': {
                'id': job.id,
                'title': job.title,
                'status': job.status
            }
        })
        
    except Employer.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Employer not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@require_http_methods(["GET"])
def get_employer_jobs(request):
    """Get all jobs posted by employer with application counts"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        employer_id = request.session['employer_id']
        jobs = Job.objects.filter(employer_id=employer_id).order_by('-posted_date')
        
        job_list = []
        for job in jobs:
            # Get application counts by status
            applications = JobApplication.objects.filter(job=job)
            pending_count = applications.filter(status='pending').count()
            accepted_count = applications.filter(status='accepted').count()
            hired_count = applications.filter(status='hired').count()
            total_applications = applications.count()
            
            job_list.append({
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
                'status': job.status,
                'posted_date': job.posted_date.isoformat(),
                'applications': {
                    'total': total_applications,
                    'pending': pending_count,
                    'accepted': accepted_count,
                    'hired': hired_count
                }
            })
        
        return JsonResponse({'success': True, 'jobs': job_list})
        
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_job(request, job_id):
    """Delete a job posting"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        job = Job.objects.get(id=job_id)
        
        # Verify ownership
        if job.employer_id != request.session['employer_id']:
            return JsonResponse({'success': False, 'message': 'Unauthorized'}, status=403)
        
        # Check if there are any applications
        if JobApplication.objects.filter(job=job).exists():
            return JsonResponse({
                'success': False, 
                'message': 'Cannot delete job with existing applications'
            }, status=400)
        
        job.delete()
        
        return JsonResponse({
            'success': True,
            'message': 'Job deleted successfully'
        })
        
    except Job.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Job not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# APPLICATION APIs - Employer Side
# ============================================

@require_http_methods(["GET"])
def get_employer_applications(request):
    """Get all applications for employer's jobs with worker details"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        employer_id = request.session['employer_id']
        
        # Get all jobs of this employer
        jobs = Job.objects.filter(employer_id=employer_id).values_list('id', flat=True)
        
        # Get applications for these jobs
        applications = JobApplication.objects.filter(job_id__in=jobs).select_related('worker', 'job').order_by('-applied_date')
        
        app_list = []
        for app in applications:
            worker = app.worker
            app_list.append({
                'id': app.id,
                'job_id': app.job.id,
                'job_title': app.job.title,
                'worker': {
                    'id': worker.id,
                    'name': worker.get_full_name(),
                    'photo': worker.profile_photo.url if worker.profile_photo else None,
                    'profession': worker.profession,
                    'skills': worker.skills,
                    'rating': worker.rating,
                    'city': worker.city
                },
                'expected_price': app.expected_price,
                'availability': app.availability,
                'cover_message': app.cover_message,
                'status': app.status,
                'applied_date': app.applied_date.isoformat(),
                'employer_read': app.employer_read
            })
        
        # Mark all as read
        JobApplication.objects.filter(job_id__in=jobs, employer_read=False).update(employer_read=True)
        
        return JsonResponse({'success': True, 'applications': app_list})
        
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def update_application_status(request):
    """Update application status (pending → accepted → hired → completed)"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        data = json.loads(request.body)
        application_id = data.get('application_id')
        new_status = data.get('status')  # 'accepted', 'rejected', 'hired'
        
        application = JobApplication.objects.get(id=application_id)
        
        # Verify this job belongs to this employer
        if application.job.employer_id != request.session['employer_id']:
            return JsonResponse({'success': False, 'message': 'Unauthorized'}, status=403)
        
        # Update status with timestamps
        if new_status == 'accepted':
            application.status = 'accepted'
            application.acceptance_time = timezone.now()
        elif new_status == 'rejected':
            application.status = 'rejected'
        elif new_status == 'hired':
            # When hiring, reject all other pending/accepted applications for this job
            JobApplication.objects.filter(
                job=application.job,
                status__in=['pending', 'accepted']
            ).exclude(id=application.id).update(status='rejected')
            
            application.status = 'hired'
            application.hired_date = timezone.now()
            
            # Update job status
            job = application.job
            job.status = 'in-progress'
            job.save()
        else:
            return JsonResponse({'success': False, 'message': 'Invalid status'}, status=400)
        
        application.save()
        
        return JsonResponse({
            'success': True,
            'message': f'Application {new_status} successfully!'
        })
        
    except JobApplication.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Application not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# JOB APIs - Worker Side
# ============================================

@require_http_methods(["GET"])
def list_jobs(request):
    """List all open jobs"""
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
            'work_address': job.work_address,
            'latitude': float(job.latitude) if job.latitude else None,
            'longitude': float(job.longitude) if job.longitude else None,
            'pay': job.pay,
            'time': job.time,
            'tools_available': job.tools_available,
            'posted_date': job.posted_date.isoformat() if job.posted_date else None,
            'employer_name': job.employer.get_full_name() if job.employer else "Unknown",
            'employer_photo': job.employer.profile_photo.url if job.employer and job.employer.profile_photo else None,
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
            'latitude': float(job.latitude) if job.latitude else None,
            'longitude': float(job.longitude) if job.longitude else None,
            'pay': job.pay,
            'time': job.time,
            'tools_available': job.tools_available,
            'posted_date': job.posted_date.isoformat() if job.posted_date else None,
            'employer': {
                'id': employer.id,
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


# ============================================
# APPLICATION APIs - Worker Side
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def apply_for_job(request):
    """Worker applies for a job"""
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
        
        # Check if already applied
        if JobApplication.objects.filter(worker_id=worker_id, job_id=job_id).exists():
            return JsonResponse({'success': False, 'message': 'You have already applied for this job'}, status=400)
        
        # Check if job exists and is open
        try:
            job = Job.objects.get(id=job_id, status='open')
        except Job.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Job not found or no longer available'}, status=404)
        
        application = JobApplication(
            worker_id=worker_id,
            job_id=job_id,
            expected_price=expected_price,
            availability=availability,
            cover_message=cover_message,
            status='pending',
            employer_read=False,
            worker_read=True
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
def get_worker_applications(request):
    """Get all applications for logged in worker"""
    if 'worker_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        worker_id = request.session['worker_id']
        applications = JobApplication.objects.filter(worker_id=worker_id).select_related('job', 'job__employer').order_by('-applied_date')
        
        app_list = []
        for app in applications:
            app_list.append({
                'id': app.id,
                'job_id': app.job.id,
                'job_title': app.job.title,
                'employer_name': app.job.employer.get_full_name(),
                'employer_photo': app.job.employer.profile_photo.url if app.job.employer.profile_photo else None,
                'location': app.job.location,
                'pay': app.job.pay,
                'expected_price': app.expected_price,
                'status': app.status,
                'applied_date': app.applied_date.isoformat(),
                'availability': app.availability,
                'cover_message': app.cover_message,
                'worker_read': app.worker_read
            })
        
        return JsonResponse({'success': True, 'applications': app_list})
        
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# WORKER DASHBOARD DATA API (UPDATED)
# ============================================

@require_http_methods(["GET"])
def get_worker_dashboard_data(request):
    """API endpoint to get dashboard data for logged-in worker"""
    if 'worker_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        worker_id = request.session['worker_id']
        worker = Worker.objects.get(id=worker_id, is_active=True)
        
        # Available jobs (not applied, not hired)
        jobs = Job.objects.filter(status='open').exclude(
            id__in=JobApplication.objects.filter(worker=worker).values_list('job_id', flat=True)
        )
        
        # Applied jobs (all applications)
        applications = JobApplication.objects.filter(worker=worker).select_related('job', 'job__employer').order_by('-applied_date')
        
        applied_jobs = []
        active_jobs = []
        
        for app in applications:
            job_data = {
                'id': app.id,
                'jobId': app.job.id,
                'jobTitle': app.job.title,
                'employerName': app.job.employer.get_full_name(),
                'employerPhoto': app.job.employer.profile_photo.url if app.job.employer.profile_photo else None,
                'location': app.job.location,
                'pay': app.job.pay,
                'expectedPrice': app.expected_price,
                'status': app.status,
                'appliedDate': app.applied_date,
                'availability': app.availability,
                'cover_message': app.cover_message
            }
            
            if app.status in ['pending', 'accepted', 'rejected']:
                applied_jobs.append(job_data)
            elif app.status == 'hired':
                job_data['hiredDate'] = app.hired_date
                active_jobs.append(job_data)
        
        # Work history
        work_history = WorkHistory.objects.filter(worker=worker).order_by('-completion_date')
        history_list = [{
            'id': wh.id,
            'jobTitle': wh.job_title,
            'employerName': wh.employer_name,
            'payment': wh.payment,
            'rating': wh.rating,
            'completionDate': wh.completion_date,
            'feedback': wh.feedback,
            'location': wh.job_location
        } for wh in work_history]
        
        # Convert jobs to list with distance
        job_list = []
        for job in jobs:
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
                'postedDate': job.posted_date,
                'employerName': job.employer.get_full_name(),
                'employerPhoto': job.employer.profile_photo.url if job.employer.profile_photo else None,
            }
            
            # Calculate distance if worker has location
            if worker.current_latitude and worker.current_longitude and job.latitude and job.longitude:
                distance = calculate_distance(
                    float(worker.current_latitude),
                    float(worker.current_longitude),
                    float(job.latitude),
                    float(job.longitude)
                )
                job_dict['distance'] = round(distance, 1)
            else:
                job_dict['distance'] = None
            
            job_list.append(job_dict)
        
        # Mark applications as read
        JobApplication.objects.filter(worker=worker, worker_read=False).update(worker_read=True)
        
        return JsonResponse({
            'success': True,
            'data': {
                'jobs': job_list,
                'applied_jobs': applied_jobs,
                'active_jobs': active_jobs,
                'work_history': history_list
            }
        })
        
    except Worker.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Worker not found'}, status=404)
    except Exception as e:
        print(f"Error in get_worker_dashboard_data: {str(e)}")
        import traceback
        traceback.print_exc()
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# COMPLETE WORK + RATING API
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def complete_work(request):
    """Mark work as completed and give rating"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)
    
    try:
        data = json.loads(request.body)
        application_id = data.get('application_id')
        rating = data.get('rating')
        feedback = data.get('feedback', '')
        
        application = JobApplication.objects.get(id=application_id)
        
        # Verify ownership
        if application.job.employer_id != request.session['employer_id']:
            return JsonResponse({'success': False, 'message': 'Unauthorized'}, status=403)
        
        if application.status != 'hired':
            return JsonResponse({'success': False, 'message': 'Only hired jobs can be completed'}, status=400)
        
        # Update application
        application.status = 'completed'
        application.completion_date = timezone.now()
        application.save()
        
        # Update job status
        job = application.job
        job.status = 'completed'
        job.save()
        
        # Update worker rating
        worker = application.worker
        worker.update_rating(rating)
        
        # Create work history
        work_history = WorkHistory(
            job=job,
            employer=job.employer,
            worker=worker,
            application=application,
            worker_name=worker.get_full_name(),
            worker_photo=worker.profile_photo,
            employer_name=job.employer.get_full_name(),
            job_title=job.title,
            work_address=job.work_address,
            completion_date=timezone.now().date(),
            rating=rating,
            payment=application.expected_price,
            feedback=feedback,
            work_type=job.work_type,
            tools_available=job.tools_available,
            job_description=job.description,
            required_skills=job.skills,
            work_time=job.time,
            job_location=job.location
        )
        work_history.save()
        
        return JsonResponse({
            'success': True,
            'message': 'Work completed and rated successfully!'
        })
        
    except JobApplication.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Application not found'}, status=404)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# GET WORK HISTORY - Employer Side
# ============================================

@require_http_methods(["GET"])
def get_employer_work_history(request):
    """Get completed work history for employer"""
    if 'employer_id' not in request.session:
        return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)

    try:
        employer_id = int(request.session['employer_id'])
        employer = Employer.objects.get(id=employer_id)

        work_histories = WorkHistory.objects.filter(employer=employer).order_by('-completion_date')
        print(f"Work histories found for employer {employer_id}: {work_histories.count()}")

        history_list = []
        for wh in work_histories:
            history_list.append({
                'id': wh.id,
                'workerId': wh.worker.id if wh.worker else None,
                'workerName': wh.worker_name,
                'workerPhoto': wh.worker_photo.url if wh.worker_photo and wh.worker_photo.name else None,
                'employerName': wh.employer_name,
                'jobId': wh.job.id if wh.job else None,
                'jobTitle': wh.job_title,
                'workAddress': wh.work_address,
                'completionDate': wh.completion_date.isoformat() if wh.completion_date else None,
                'rating': wh.rating,
                'payment': float(wh.payment) if wh.payment else 0,
                'feedback': wh.feedback or '',
                'workType': wh.work_type or '',
                'toolsAvailable': wh.tools_available,
                'jobDescription': wh.job_description or '',
                'requiredSkills': wh.required_skills if wh.required_skills else [],
                'workTime': wh.work_time or 0,
                'jobLocation': wh.job_location or ''
            })

        return JsonResponse({'success': True, 'work_history': history_list})

    except Employer.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Employer not found'}, status=404)
    except Exception as e:
        import traceback
        print(traceback.format_exc())
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


# ============================================
# CHAT APIs
# ============================================

@require_http_methods(["GET"])
def get_messages(request, application_id):
    """Get all messages for a specific application"""
    try:
        application = JobApplication.objects.get(id=application_id)

        employer_id = request.session.get('employer_id')
        worker_id = request.session.get('worker_id')

        # Use X-User-Role header to resolve conflict when both sessions exist
        user_role_hint = request.headers.get('X-User-Role', '')

        sender_role = None

        if employer_id and application.job.employer_id == int(employer_id) and user_role_hint != 'worker':
            sender_role = 'employer'
            ChatMessage.objects.filter(
                application=application,
                sender='worker',
                is_read=False
            ).update(is_read=True)
        elif worker_id and application.worker_id == int(worker_id):
            sender_role = 'worker'
            ChatMessage.objects.filter(
                application=application,
                sender='employer',
                is_read=False
            ).update(is_read=True)
        elif employer_id and application.job.employer_id == int(employer_id):
            sender_role = 'employer'
            ChatMessage.objects.filter(
                application=application,
                sender='worker',
                is_read=False
            ).update(is_read=True)
        else:
            return JsonResponse({'success': False, 'message': 'Unauthorized'}, status=403)

        messages_qs = ChatMessage.objects.filter(application=application).order_by('created_at')

        messages_list = []
        for msg in messages_qs:
            messages_list.append({
                'id': msg.id,
                'sender': msg.sender,
                'message': msg.message,
                'file_url': msg.file.url if msg.file else None,
                'is_read': msg.is_read,
                'created_at': msg.created_at.isoformat(),
            })

        return JsonResponse({
            'success': True,
            'messages': messages_list,
            'my_role': sender_role,
            'application': {
                'id': application.id,
                'job_title': application.job.title,
                'worker_name': application.worker.get_full_name(),
                'employer_name': application.job.employer.get_full_name(),
                'worker_photo': application.worker.profile_photo.url if application.worker.profile_photo else None,
                'employer_photo': application.job.employer.profile_photo.url if application.job.employer.profile_photo else None,
            }
        })

    except JobApplication.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Application not found'}, status=404)
    except Exception as e:
        import traceback
        print(traceback.format_exc())
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def send_message(request, application_id):
    """Send a message in a chat"""
    try:
        application = JobApplication.objects.get(id=application_id)

        employer_id = request.session.get('employer_id')
        worker_id = request.session.get('worker_id')
        user_role_hint = request.headers.get('X-User-Role', '')

        sender_role = None
        if employer_id and application.job.employer_id == int(employer_id) and user_role_hint != 'worker':
            sender_role = 'employer'
        elif worker_id and application.worker_id == int(worker_id):
            sender_role = 'worker'
        elif employer_id and application.job.employer_id == int(employer_id):
            sender_role = 'employer'
        else:
            return JsonResponse({'success': False, 'message': 'Unauthorized'}, status=403)

        # Handle both JSON and multipart (file upload)
        if request.content_type and 'multipart' in request.content_type:
            message_text = request.POST.get('message', '').strip()
            file = request.FILES.get('file')
        else:
            data = json.loads(request.body)
            message_text = data.get('message', '').strip()
            file = None

        if not message_text and not file:
            return JsonResponse({'success': False, 'message': 'Message or file required'}, status=400)

        chat_msg = ChatMessage(
            application=application,
            sender=sender_role,
            message=message_text,
            is_read=False
        )
        if file:
            chat_msg.file = file
        chat_msg.save()

        return JsonResponse({
            'success': True,
            'message': {
                'id': chat_msg.id,
                'sender': chat_msg.sender,
                'message': chat_msg.message,
                'file_url': chat_msg.file.url if chat_msg.file else None,
                'is_read': chat_msg.is_read,
                'created_at': chat_msg.created_at.isoformat(),
            }
        })

    except JobApplication.DoesNotExist:
        return JsonResponse({'success': False, 'message': 'Application not found'}, status=404)
    except Exception as e:
        import traceback
        print(traceback.format_exc())
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


@require_http_methods(["GET"])
def get_unread_count(request):
    """Get unread message count for current user"""
    try:
        employer_id = request.session.get('employer_id')
        worker_id = request.session.get('worker_id')

        if employer_id:
            # Employer ke liye — worker ke messages jo unread hain
            count = ChatMessage.objects.filter(
                application__job__employer_id=int(employer_id),
                sender='worker',
                is_read=False
            ).count()
        elif worker_id:
            # Worker ke liye — employer ke messages jo unread hain
            count = ChatMessage.objects.filter(
                application__worker_id=int(worker_id),
                sender='employer',
                is_read=False
            ).count()
        else:
            return JsonResponse({'success': False, 'message': 'Not authenticated'}, status=401)

        return JsonResponse({'success': True, 'unread_count': count})

    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)


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
    
    # ============================================
# MOBILE OTP VERIFICATION VIEWS (ADD THESE AT THE END OF views.py)
# ============================================

@csrf_exempt
@require_http_methods(["POST"])
def send_mobile_otp(request):
    """Send OTP to mobile number via Fast2SMS"""
    try:
        data = json.loads(request.body)
        mobile = data.get('mobile')

        if not mobile:
            return JsonResponse({
                'success': False,
                'message': 'Mobile number is required'
            })

        # Check if mobile already registered
        if Employer.objects.filter(mobile=mobile).exists() or Worker.objects.filter(mobile=mobile).exists():
            return JsonResponse({
                'success': False,
                'message': 'This mobile number is already registered. Please login or use a different number.'
            })

        # Generate OTP and save to DB
        otp = MobileOTP.generate_otp()
        MobileOTP.objects.create(mobile=mobile, otp=otp)

        # Send via Fast2SMS
        import requests as http_requests
        api_key = settings.FAST2SMS_API_KEY

        url = "https://www.fast2sms.com/dev/bulkV2"
        payload = {
            "message": f"Your ShramikConnect OTP is {otp}. Valid for 5 minutes. Do not share with anyone.",
            "language": "english",
            "route": "q",
            "numbers": mobile,
        }
        headers = {
            "authorization": api_key,
            "Content-Type": "application/json"
        }

        response = http_requests.post(url, json=payload, headers=headers, timeout=10)
        result = response.json()
        logger.info(f"Fast2SMS send_otp response: {result}")

        if result.get('return') is True:
            return JsonResponse({
                'success': True,
                'message': 'OTP sent successfully to your mobile'
            })
        else:
            error_msg = result.get('message', ['SMS sending failed'])[0] if isinstance(result.get('message'), list) else result.get('message', 'SMS sending failed')
            logger.error(f"Fast2SMS error: {result}")
            return JsonResponse({
                'success': False,
                'message': error_msg
            })

    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        logger.error(f"Error sending mobile OTP: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Failed to send OTP: {str(e)}'
        }, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def verify_mobile_otp(request):
    """Verify mobile OTP"""
    try:
        data = json.loads(request.body)
        mobile = data.get('mobile')
        otp = data.get('otp')
        
        if not mobile or not otp:
            return JsonResponse({
                'success': False,
                'message': 'Mobile number and OTP are required'
            })
        
        # Get latest OTP for this mobile
        latest_otp = MobileOTP.objects.filter(
            mobile=mobile
        ).order_by('-created_at').first()
        
        if not latest_otp:
            return JsonResponse({
                'success': False,
                'message': 'No OTP found for this mobile. Please request a new OTP.'
            })
        
        if latest_otp.is_verified:
            return JsonResponse({
                'success': False,
                'message': 'This mobile has already been verified'
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
        
        # Mark as verified
        latest_otp.is_verified = True
        latest_otp.save()
        
        logger.info(f"Mobile verified successfully: {mobile}")
        
        return JsonResponse({
            'success': True,
            'message': 'Mobile verified successfully!'
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        logger.error(f"Error verifying mobile OTP: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Failed to verify OTP: {str(e)}'
        }, status=500)


@csrf_exempt
@require_http_methods(["POST"])
def resend_mobile_otp(request):
    """Resend mobile OTP via Fast2SMS"""
    try:
        data = json.loads(request.body)
        mobile = data.get('mobile')

        if not mobile:
            return JsonResponse({
                'success': False,
                'message': 'Mobile number is required'
            })

        # Check if mobile already registered
        if Employer.objects.filter(mobile=mobile).exists() or Worker.objects.filter(mobile=mobile).exists():
            return JsonResponse({
                'success': False,
                'message': 'This mobile number is already registered. Please login or use a different number.'
            })

        # Generate new OTP and save to DB
        otp = MobileOTP.generate_otp()
        MobileOTP.objects.create(mobile=mobile, otp=otp)

        # Send via Fast2SMS
        import requests as http_requests
        api_key = settings.FAST2SMS_API_KEY

        url = "https://www.fast2sms.com/dev/bulkV2"
        payload = {
            "message": f"Your ShramikConnect OTP is {otp}. Valid for 5 minutes. Do not share with anyone.",
            "language": "english",
            "route": "q",
            "numbers": mobile,
        }
        headers = {
            "authorization": api_key,
            "Content-Type": "application/json"
        }

        response = http_requests.post(url, json=payload, headers=headers, timeout=10)
        result = response.json()
        logger.info(f"Fast2SMS resend_otp response: {result}")

        if result.get('return') is True:
            return JsonResponse({
                'success': True,
                'message': 'New OTP sent successfully to your mobile'
            })
        else:
            error_msg = result.get('message', ['SMS sending failed'])[0] if isinstance(result.get('message'), list) else result.get('message', 'SMS sending failed')
            logger.error(f"Fast2SMS error: {result}")
            return JsonResponse({
                'success': False,
                'message': error_msg
            })

    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'message': 'Invalid JSON data'
        }, status=400)
    except Exception as e:
        logger.error(f"Error resending mobile OTP: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': f'Failed to resend OTP: {str(e)}'
        }, status=500)


@require_http_methods(["GET"])
def check_mobile_exists(request):
    """Check if mobile number already exists"""
    try:
        mobile = request.GET.get('mobile')
        
        if not mobile:
            return JsonResponse({
                'success': False,
                'message': 'Mobile parameter is required'
            }, status=400)
        
        exists = Employer.objects.filter(mobile=mobile).exists() or Worker.objects.filter(mobile=mobile).exists()
        
        return JsonResponse({
            'success': True,
            'exists': exists
        })
        
    except Exception as e:
        logger.error(f"Error checking mobile: {str(e)}")
        return JsonResponse({
            'success': False,
            'message': str(e)
        }, status=500)