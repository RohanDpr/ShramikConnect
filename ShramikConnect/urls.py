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
    path('help_and_contact/', views.help_and_contact),
    path('privacy_policy/', views.privacy_policy, name='privacy_policy'),
    path('about/', views.about, name='about'),
    path('term_and_condition/', views.term_and_condition, name='term_and_condition'),
    path('login_worker/', views.login_worker),
    path('login_employer/', views.login_employer, name='login_employer'),
    path('logout_employer/', views.logout_employer, name='logout_employer'),
    path('signup_worker/', views.signup_worker),
    path('signup_employer/', views.signup_employer, name='signup_employer'),
    path('choose_password_worker/', views.choose_password_worker),
    path('change_password_worker/', views.change_password_worker),
    path('get_password_worker/', views.get_password_worker),
    path('choose_password_employer/', views.choose_password_employer),
    path('change_password_employer/', views.change_password_employer),
    path('get_password_employer/', views.get_password_employer),
    path('dashboard_employer/', views.dashboard_employer, name='dashboard_employer'),
    path('dashboard_worker/', views.dashboard_worker, name='dashboard_worker'),
    
    # API endpoints - only those that exist in views.py
    path('api/employer/check-exists/', views.check_employer_exists, name='check_employer_exists'),
    path('api/employer/<int:employer_id>/', views.get_employer_details, name='get_employer_details'),
    path('api/employers/', views.list_employers, name='list_employers'),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)