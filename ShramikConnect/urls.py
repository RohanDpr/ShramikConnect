from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from ShramikConnect import views
from django.http import HttpResponse
import os

def google_verify(request):
    file_path = os.path.join(settings.BASE_DIR, "google765667aa04e8106b.html")
    with open(file_path, "r") as f:
        return HttpResponse(f.read(), content_type="text/html")

urlpatterns = [
    path('admin/', admin.site.urls),
    path("google765667aa04e8106b.html", google_verify),
    path('', views.index),
    path('role_selection/', views.role_selection),
    path('help_and_contact/', views.help_and_contact, name='help_and_contact'),
    path('privacy_policy/', views.privacy_policy, name='privacy_policy'),
    path('about/', views.about, name='about'),
    path('term_and_condition/', views.term_and_condition, name='term_and_condition'),
    
    # EMPLOYER URLs
    path('login_employer/', views.login_employer, name='login_employer'),
    path('logout_employer/', views.logout_employer, name='logout_employer'),
    path('signup_employer/', views.signup_employer, name='signup_employer'),
    path('dashboard_employer/', views.dashboard_employer, name='dashboard_employer'),
    
    # WORKER URLs
    path('login_worker/', views.login_worker, name='login_worker'),
    path('logout_worker/', views.logout_worker, name='logout_worker'),
    path('signup_worker/', views.signup_worker, name='signup_worker'),
    path('dashboard_worker/', views.dashboard_worker, name='dashboard_worker'),
    
    # Password management
    path('choose_password_worker/', views.choose_password_worker),
    path('change_password_worker/', views.change_password_worker),
    path('get_password_worker/', views.get_password_worker),
    path('choose_password_employer/', views.choose_password_employer),
    path('change_password_employer/', views.change_password_employer),
    path('get_password_employer/', views.get_password_employer),
     path('eligibility-card/', views.eligibility_card, name='eligibility_card'),
    path('workers-term/', views.workers_term, name='workers_term'),
    path('employers-term/', views.employers_term, name='employers_term'),
    path('platform-responsibilities/', views.platform_responsibilities, name='platform_responsibilities'),
    path('termination-card/', views.termination_card, name='termination_card'),
    path('dispute-resolution-card/', views.dispute_resolution_card, name='dispute_resolution_card'),
    path('liability-card/', views.liability_card, name='liability_card'),
    path('location-data-card/', views.location_data_card, name='location_data_card'),
    path('collect-card/', views.collect_card, name='collect_card'),
    path('use_data_card/', views.use_data_card, name='use_data_card'),
    path('worker_data_card/', views.worker_data_card, name='worker_data_card'),
    path('employer_data_card/', views.employer_data_card, name='employer_data_card'),
    path('data_security/', views.data_security, name='data_security'),
    path('data_sharing/', views.data_sharing, name='data_sharing'),
    path('user_rights/', views.user_rights, name='user_rights'),
    path('data_retention/', views.data_retention, name='data_retention'),
    path('conduct_card/', views.conduct_card, name='conduct_card'),

    # Info pages
    path('forgot_password_card/', views.forgot_password_card, name='forgot_password_card'),
    path('contact_developer/', views.contact_developer, name='contact_developer'),
    path('signup-card/', views.signup_card, name='signup_card'),
    path('emergency-contact-card/', views.emergency_contact_card, name='emergency_contact_card'),
    path('how-platform-works/', views.how_platform_works, name='how_platform_works'),
    path('connect-on-social-media-card/', views.connect_on_social_media_card, name='connect_on_social_media_card'),
    path('login-card/', views.login_card, name='login_card'),
    
    # ============================================
    # EMPLOYER API ENDPOINTS
    # ============================================
    
    # Employer basic APIs
    path('api/employer/check-exists/', views.check_employer_exists, name='check_employer_exists'),
    path('api/employer/<int:employer_id>/', views.get_employer_details, name='get_employer_details'),
    path('api/employers/', views.list_employers, name='list_employers'),
    
    # JOB APIs - Employer
    path('api/employer/create-job/', views.create_job, name='create_job'),
    path('api/employer/get-my-jobs/', views.get_employer_jobs, name='get_employer_jobs'),
    path('api/employer/delete-job/<int:job_id>/', views.delete_job, name='delete_job'),
    
    # APPLICATION APIs - Employer
    path('api/employer/get-applications/', views.get_employer_applications, name='get_employer_applications'),
    path('api/employer/update-application-status/', views.update_application_status, name='update_application_status'),
    
    # ============================================
    # WORKER API ENDPOINTS
    # ============================================
    
    # Worker basic APIs
    path('api/worker/check-exists/', views.check_worker_exists, name='check_worker_exists'),
    path('api/worker/<int:worker_id>/', views.get_worker_details, name='get_worker_details'),
    path('api/workers/', views.list_workers, name='list_workers'),
    path('api/worker/dashboard-data/', views.get_worker_dashboard_data, name='get_worker_dashboard_data'),
    
    # JOB APIs - Worker
    path('api/jobs/', views.list_jobs, name='list_jobs'),
    path('api/job/<int:job_id>/', views.get_job_details, name='get_job_details'),
    
    # APPLICATION APIs - Worker
    path('api/apply-job/', views.apply_for_job, name='apply_for_job'),
    path('api/worker/my-applications/', views.get_worker_applications, name='get_worker_applications'),
    
    # ============================================
    # COMMON APIs (Chat, Work Completion)
    # ============================================
    
    # Complete Work + Rating
    path('api/employer/complete-work/', views.complete_work, name='complete_work'),
    path('api/employer/work-history/', views.get_employer_work_history, name='get_employer_work_history'),

    # ============================================
    # CHAT APIs
    # ============================================
    path('api/chat/<int:application_id>/messages/', views.get_messages, name='get_messages'),
    path('api/chat/<int:application_id>/send/', views.send_message, name='send_message'),
    path('api/chat/unread-count/', views.get_unread_count, name='get_unread_count'),
    
    # ============================================
    # EMAIL OTP VERIFICATION APIs
    # ============================================
    path('api/send-email-otp/', views.send_email_otp, name='send_email_otp'),
    path('api/verify-email-otp/', views.verify_email_otp, name='verify_email_otp'),
    path('api/resend-email-otp/', views.resend_email_otp, name='resend_email_otp'),
    path('api/check-email-exists/', views.check_email_exists, name='check_email_exists'),
    
    # ============================================
    # MOBILE OTP VERIFICATION APIs (NEW)
    # ============================================
    path('api/send-mobile-otp/', views.send_mobile_otp, name='send_mobile_otp'),
    path('api/verify-mobile-otp/', views.verify_mobile_otp, name='verify_mobile_otp'),
    path('api/resend-mobile-otp/', views.resend_mobile_otp, name='resend_mobile_otp'),
    path('api/check-mobile-exists/', views.check_mobile_exists, name='check_mobile_exists'),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)