from django.db import models

# Create your models here.
class Worker(models.Model):
    #Personal Information
    f_name = models.CharField(max_length=100, null=True, blank=True)
    l_name = models.CharField(max_length=100, null=True, blank=True)
    p_photo = models.ImageField(upload_to='employer_photos/', null=True, blank=True)
    dob = models.DateField(null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)

    #Security Information
    email = models.EmailField(unique=True, null=True, blank=True)
    mobile = models.CharField(max_length=15, unique=True, null=True, blank=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    profession = models.CharField(max_length=100, null=True, blank=True)
    other_professions = models.TextField(null=True, blank=True)

    #Identity & Documents
    street = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    pincode = models.CharField(max_length=10, null=True, blank=True)
    work_area = models.CharField(max_length=200, null=True, blank=True)
    document = models.FileField(upload_to='worker_documents/', null=True, blank=True)

    def __str__(self):
        return self.f_name

class Employer(models.Model):
    #Personal Information
    f_name = models.CharField(max_length=100, null=True, blank=True)
    l_name = models.CharField(max_length=100, null=True, blank=True)
    p_photo = models.ImageField(upload_to='employer_photos/', null=True, blank=True)
    dob = models.DateField(null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)

    #Security Information
    email = models.EmailField(unique=True, null=True, blank=True)
    mobile = models.CharField(max_length=15, unique=True, null=True, blank=True)
    password = models.CharField(max_length=100, null=True, blank=True)

    #Identity & Documents
    street = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    state = models.CharField(max_length=100, null=True, blank=True)
    pincode = models.CharField(max_length=10, null=True, blank=True)
    maplocation = models.URLField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    document = models.FileField(upload_to='employer_documents/', null=True, blank=True)

    def __str__(self):
        return self.f_name