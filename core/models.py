from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator
import os
from datetime import timedelta
from django.utils import timezone
import random
import string

# Create your models here.

class Employer(models.Model):
    """Model to store employer registration data"""
    
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    
    DOCUMENT_TYPE_CHOICES = [
        ('aadhar', 'Aadhar Card'),
        ('pan', 'Pan Card'),
    ]
    
    # Personal Information
    first_name = models.CharField(max_length=100, verbose_name="First Name")
    last_name = models.CharField(max_length=100, verbose_name="Last Name")
    date_of_birth = models.DateField(verbose_name="Date of Birth")
    age = models.IntegerField(
        validators=[MinValueValidator(18), MaxValueValidator(100)],
        verbose_name="Age"
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, verbose_name="Gender")
    
    # Company Information
    company_name = models.CharField(max_length=200, blank=True, null=True, verbose_name="Company Name")
    
    # Profile Photo
    profile_photo = models.ImageField(
        upload_to='employer_profiles/',
        null=True,
        blank=True,
        verbose_name="Profile Photo"
    )
    
    # Contact Information
    email = models.EmailField(unique=True, verbose_name="Email Address")
    email_verified = models.BooleanField(default=False, verbose_name="Email Verified")
    
    mobile = models.CharField(
        max_length=10,
        unique=True,
        validators=[RegexValidator(r'^[6-9]\d{9}$', 'Enter a valid 10-digit mobile number starting with 6-9')],
        verbose_name="Mobile Number"
    )
    mobile_verified = models.BooleanField(default=False, verbose_name="Mobile Verified")
    
    # Password (hashed)
    password = models.CharField(max_length=255, verbose_name="Password")  # Will store hashed password
    
    # Address Information
    street = models.CharField(max_length=255, verbose_name="Street Address")
    city = models.CharField(max_length=100, verbose_name="City")
    state = models.CharField(max_length=100, verbose_name="State")
    pincode = models.CharField(
        max_length=6,
        validators=[RegexValidator(r'^\d{6}$', 'Enter a valid 6-digit pincode')],
        verbose_name="Pincode"
    )
    
    # Work Location (Coordinates)
    work_latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
        verbose_name="Work Location Latitude"
    )
    work_longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True,
        verbose_name="Work Location Longitude"
    )
    work_location_address = models.TextField(blank=True, verbose_name="Work Location Address")
    
    # Document Information
    document_type = models.CharField(
        max_length=10,
        choices=DOCUMENT_TYPE_CHOICES,
        verbose_name="Document Type"
    )
    document_file = models.FileField(
        upload_to='employer_documents/',
        verbose_name="Document File"
    )
    
    # Account Status
    is_active = models.BooleanField(default=True, verbose_name="Active")
    is_approved = models.BooleanField(default=False, verbose_name="Approved by Admin")
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")
    
    class Meta:
        db_table = 'employer'
        verbose_name = "Employer"
        verbose_name_plural = "Employers"
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['email']),
            models.Index(fields=['mobile']),
            models.Index(fields=['created_at']),
        ]
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"
    
    def get_full_name(self):
        """Return the full name of the employer"""
        return f"{self.first_name} {self.last_name}".strip()
    
    def get_work_location_coordinates(self):
        """Return work location coordinates as tuple"""
        if self.work_latitude and self.work_longitude:
            return (float(self.work_latitude), float(self.work_longitude))
        return None

# ============================================
# EMAIL OTP VERIFICATION MODEL
# ============================================

class EmailOTP(models.Model):
    """Model to store email OTPs for verification"""
    
    email = models.EmailField(verbose_name="Email Address")
    otp = models.CharField(max_length=6, verbose_name="OTP")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    is_verified = models.BooleanField(default=False, verbose_name="Is Verified")
    
    class Meta:
        db_table = 'email_otp'
        verbose_name = "Email OTP"
        verbose_name_plural = "Email OTPs"
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['email', 'created_at']),
        ]
    
    def __str__(self):
        return f"{self.email} - {self.otp} - {'Verified' if self.is_verified else 'Pending'}"
    
    def is_valid(self):
        """Check if OTP is still valid (within expiry time)"""
        expiry_time = self.created_at + timedelta(minutes=5)  # 5 minutes expiry
        return timezone.now() <= expiry_time
    
    @staticmethod
    def generate_otp():
        """Generate a 6-digit OTP"""
        return ''.join(random.choices(string.digits, k=6))


class Job(models.Model):
    """Model to store job posts"""
    
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in-progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    employer = models.ForeignKey(Employer, on_delete=models.CASCADE, related_name='jobs')
    title = models.CharField(max_length=200)
    work_type = models.CharField(max_length=100)
    description = models.TextField()
    skills = models.JSONField(default=list)  # Store skills as JSON array
    location = models.CharField(max_length=200)
    work_address = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    pay = models.IntegerField()
    time = models.IntegerField(help_text="Time required in hours")
    tools_available = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    posted_date = models.DateField(auto_now_add=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-posted_date']


class Worker(models.Model):
    """Model to store worker information"""
    
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='worker_photos/', null=True, blank=True)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    skills = models.JSONField(default=list)
    address = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    rating = models.FloatField(default=0)
    expected_price = models.IntegerField()
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class JobApplication(models.Model):
    """Model to store job applications"""
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('hired', 'Hired'),
        ('completed', 'Completed'),
    ]
    
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    worker = models.ForeignKey(Worker, on_delete=models.CASCADE, related_name='applications')
    expected_price = models.IntegerField()
    negotiated_price = models.IntegerField(null=True, blank=True)
    negotiated_time = models.IntegerField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    applied_date = models.DateTimeField(auto_now_add=True)
    acceptance_time = models.DateTimeField(null=True, blank=True)
    hired_date = models.DateTimeField(null=True, blank=True)
    completion_date = models.DateTimeField(null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class WorkHistory(models.Model):
    """Model to store completed work history"""
    
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, null=True)
    employer = models.ForeignKey(Employer, on_delete=models.SET_NULL, null=True)
    worker = models.ForeignKey(Worker, on_delete=models.SET_NULL, null=True)
    application = models.ForeignKey(JobApplication, on_delete=models.SET_NULL, null=True)
    
    worker_name = models.CharField(max_length=100)
    worker_photo = models.ImageField(upload_to='work_history/', null=True, blank=True)
    employer_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=200)
    work_address = models.CharField(max_length=255)
    completion_date = models.DateField()
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    payment = models.IntegerField()
    feedback = models.TextField(blank=True)
    work_type = models.CharField(max_length=100)
    tools_available = models.BooleanField(default=False)
    job_description = models.TextField(blank=True)
    required_skills = models.JSONField(default=list)
    work_time = models.IntegerField()
    job_location = models.CharField(max_length=200)
    
    created_at = models.DateTimeField(auto_now_add=True)


class ChatMessage(models.Model):
    """Model to store chat messages"""
    
    SENDER_CHOICES = [
        ('employer', 'Employer'),
        ('worker', 'Worker'),
    ]
    
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='messages')
    sender = models.CharField(max_length=10, choices=SENDER_CHOICES)
    message = models.TextField()
    file = models.FileField(upload_to='chat_files/', null=True, blank=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_at']

