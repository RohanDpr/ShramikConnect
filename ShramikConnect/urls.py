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
from django.urls import path, include
from ShramikConnect import views
from django.http import HttpResponse
from django.conf import settings
import os
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import Sitemap
from django.urls import reverse

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

class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = 'weekly'

    def items(self):
        return ['home']  # apne url name ke hisaab se

    def location(self, item):
        return reverse(item)

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns += [
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
]
