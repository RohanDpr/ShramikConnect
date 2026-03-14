from django.contrib import admin
from .models import Employer, Worker, EmailOTP, Job, JobApplication, WorkHistory, ChatMessage

# ============================================
# EMPLOYER ADMIN
# ============================================

@admin.register(Employer)
class EmployerAdmin(admin.ModelAdmin):
    """Admin configuration for Employer model"""
    
    list_display = ('id', 'first_name', 'last_name', 'email', 'mobile', 'is_approved', 'created_at')
    list_filter = ('is_approved', 'is_active', 'gender', 'document_type')
    search_fields = ('first_name', 'last_name', 'email', 'mobile')
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'date_of_birth', 'age', 'gender', 'profile_photo')
        }),
        ('Contact Information', {
            'fields': ('email', 'email_verified', 'mobile', 'mobile_verified')
        }),
        ('Password', {
            'fields': ('password',)
        }),
        ('Address', {
            'fields': ('street', 'city', 'state', 'pincode')
        }),
        ('Work Location', {
            'fields': ('work_latitude', 'work_longitude', 'work_location_address')
        }),
        ('Documents', {
            'fields': ('document_type', 'document_file')
        }),
        ('Account Status', {
            'fields': ('is_active', 'is_approved')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )
    
    actions = ['approve_employers']
    
    def approve_employers(self, request, queryset):
        """Admin action to approve selected employers"""
        queryset.update(is_approved=True)
        self.message_user(request, f"{queryset.count()} employer(s) approved successfully.")
    
    approve_employers.short_description = "Approve selected employers"


# ============================================
# WORKER ADMIN
# ============================================

@admin.register(Worker)
class WorkerAdmin(admin.ModelAdmin):
    """Admin configuration for Worker model"""
    
    list_display = ('id', 'first_name', 'last_name', 'email', 'mobile', 'profession', 'rating', 'is_approved')
    list_filter = ('is_approved', 'is_active', 'gender', 'profession', 'city')
    search_fields = ('first_name', 'last_name', 'email', 'mobile', 'profession')
    readonly_fields = ('created_at', 'updated_at', 'rating', 'total_ratings')
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'date_of_birth', 'age', 'gender', 'profile_photo')
        }),
        ('Contact Information', {
            'fields': ('email', 'email_verified', 'mobile', 'mobile_verified')
        }),
        ('Password', {
            'fields': ('password',)
        }),
        ('Professional Information', {
            'fields': ('profession', 'other_profession', 'skills')
        }),
        ('Address', {
            'fields': ('street', 'city', 'state', 'pincode', 'preferred_work_area')
        }),
        ('Current Location', {
            'fields': ('current_latitude', 'current_longitude')
        }),
        ('Documents', {
            'fields': ('document_type', 'document_file')
        }),
        ('Rating', {
            'fields': ('rating', 'total_ratings')
        }),
        ('Account Status', {
            'fields': ('is_active', 'is_approved')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )
    
    actions = ['approve_workers']
    
    def approve_workers(self, request, queryset):
        """Admin action to approve selected workers"""
        queryset.update(is_approved=True)
        self.message_user(request, f"{queryset.count()} worker(s) approved successfully.")
    
    approve_workers.short_description = "Approve selected workers"


# ============================================
# EMAIL OTP ADMIN
# ============================================

@admin.register(EmailOTP)
class EmailOTPAdmin(admin.ModelAdmin):
    """Admin configuration for Email OTP model"""
    
    list_display = ('id', 'email', 'otp', 'is_verified', 'created_at')
    list_filter = ('is_verified',)
    search_fields = ('email', 'otp')
    readonly_fields = ('created_at',)
    
    fieldsets = (
        ('OTP Information', {
            'fields': ('email', 'otp', 'is_verified')
        }),
        ('Timestamps', {
            'fields': ('created_at',)
        }),
    )


# ============================================
# JOB ADMIN
# ============================================

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    """Admin configuration for Job model"""
    
    list_display = ('id', 'title', 'employer', 'work_type', 'pay', 'status', 'posted_date')
    list_filter = ('status', 'work_type', 'tools_available')
    search_fields = ('title', 'description', 'location')
    readonly_fields = ('created_at', 'updated_at', 'posted_date')
    raw_id_fields = ('employer',)
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('employer', 'title', 'work_type', 'description')
        }),
        ('Skills & Location', {
            'fields': ('skills', 'location', 'work_address', ('latitude', 'longitude'))
        }),
        ('Payment & Time', {
            'fields': ('pay', 'time', 'tools_available')
        }),
        ('Status', {
            'fields': ('status',)
        }),
        ('Timestamps', {
            'fields': ('posted_date', 'created_at', 'updated_at')
        }),
    )
    
    actions = ['mark_as_open', 'mark_as_in_progress', 'mark_as_completed']
    
    def mark_as_open(self, request, queryset):
        queryset.update(status='open')
        self.message_user(request, f"{queryset.count()} job(s) marked as open.")
    
    def mark_as_in_progress(self, request, queryset):
        queryset.update(status='in-progress')
        self.message_user(request, f"{queryset.count()} job(s) marked as in-progress.")
    
    def mark_as_completed(self, request, queryset):
        queryset.update(status='completed')
        self.message_user(request, f"{queryset.count()} job(s) marked as completed.")
    
    mark_as_open.short_description = "Mark selected jobs as Open"
    mark_as_in_progress.short_description = "Mark selected jobs as In Progress"
    mark_as_completed.short_description = "Mark selected jobs as Completed"


# ============================================
# JOB APPLICATION ADMIN
# ============================================

@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    """Admin configuration for Job Application model"""
    
    list_display = ('id', 'job', 'worker', 'expected_price', 'status', 'applied_date')
    list_filter = ('status',)
    search_fields = ('job__title', 'worker__first_name', 'worker__last_name')
    readonly_fields = ('created_at', 'updated_at', 'applied_date')
    raw_id_fields = ('job', 'worker')
    
    fieldsets = (
        ('Application Details', {
            'fields': ('job', 'worker', 'expected_price', 'availability', 'cover_message')
        }),
        ('Status', {
            'fields': ('status',)
        }),
        ('Timestamps', {
            'fields': ('applied_date', 'acceptance_time', 'hired_date', 'completion_date', 'created_at', 'updated_at')
        }),
    )
    
    actions = ['accept_applications', 'reject_applications', 'hire_applications']
    
    def accept_applications(self, request, queryset):
        queryset.update(status='accepted', acceptance_time=timezone.now())
        self.message_user(request, f"{queryset.count()} application(s) accepted.")
    
    def reject_applications(self, request, queryset):
        queryset.update(status='rejected')
        self.message_user(request, f"{queryset.count()} application(s) rejected.")
    
    def hire_applications(self, request, queryset):
        queryset.update(status='hired', hired_date=timezone.now())
        self.message_user(request, f"{queryset.count()} application(s) hired.")
    
    accept_applications.short_description = "Accept selected applications"
    reject_applications.short_description = "Reject selected applications"
    hire_applications.short_description = "Hire selected applications"


# ============================================
# WORK HISTORY ADMIN
# ============================================

@admin.register(WorkHistory)
class WorkHistoryAdmin(admin.ModelAdmin):
    """Admin configuration for Work History model"""
    
    list_display = ('id', 'job_title', 'worker_name', 'employer_name', 'payment', 'rating', 'completion_date')
    list_filter = ('rating',)
    search_fields = ('worker_name', 'employer_name', 'job_title')
    readonly_fields = ('created_at',)
    
    fieldsets = (
        ('Work Details', {
            'fields': ('job', 'employer', 'worker', 'application')
        }),
        ('Worker Information', {
            'fields': ('worker_name', 'worker_photo')
        }),
        ('Employer Information', {
            'fields': ('employer_name',)
        }),
        ('Job Information', {
            'fields': ('job_title', 'job_description', 'work_address', 'job_location', 'work_type', 'required_skills', 'work_time', 'tools_available')
        }),
        ('Completion Details', {
            'fields': ('completion_date', 'rating', 'payment', 'feedback')
        }),
        ('Timestamps', {
            'fields': ('created_at',)
        }),
    )


# ============================================
# CHAT MESSAGE ADMIN
# ============================================

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    """Admin configuration for Chat Message model"""
    
    list_display = ('id', 'application', 'sender', 'short_message', 'is_read', 'created_at')
    list_filter = ('sender', 'is_read')
    search_fields = ('message',)
    readonly_fields = ('created_at',)
    raw_id_fields = ('application',)
    
    def short_message(self, obj):
        """Return truncated message for display"""
        return obj.message[:50] + '...' if len(obj.message) > 50 else obj.message
    
    short_message.short_description = 'Message'
    
    fieldsets = (
        ('Chat Details', {
            'fields': ('application', 'sender', 'message', 'file')
        }),
        ('Status', {
            'fields': ('is_read',)
        }),
        ('Timestamps', {
            'fields': ('created_at',)
        }),
    )


# ============================================
# CUSTOM ADMIN SITE CONFIGURATION
# ============================================

from django.contrib import admin
from django.utils import timezone

# Admin site headers customize karo
admin.site.site_header = "ShramikConnect Administration"
admin.site.site_title = "ShramikConnect Admin Portal"
admin.site.index_title = "Welcome to ShramikConnect Admin Panel"