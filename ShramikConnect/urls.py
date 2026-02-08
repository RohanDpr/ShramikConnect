"""
URL configuration for ShramikConnect project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ShramikConnect import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('role_selection/', views.role_selection),
    path('help_and_contact/', views.help_and_contact),
    path('login_worker/', views.login_worker),
    path('login_employer/', views.login_employer),
    path('signup_worker/', views.signup_worker),
    path('signup_employer/', views.signup_employer),
    path('choose_password_worker/', views.choose_password_worker),
    path('change_password_worker/', views.change_password_worker),
    path('get_password_worker/', views.get_password_worker),
    path('choose_password_employer/', views.choose_password_employer),
    path('change_password_employer/', views.change_password_employer),
    path('get_password_employer/', views.get_password_employer),
    path('dashboard_employer/', views.dashboard_employer),
    path('dashboard_worker/', views.dashboard_worker),
    
]
