from django.contrib import admin
from .models import Employer

# Register your models here.

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
        ('Password', {  # 🔴 Password section
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