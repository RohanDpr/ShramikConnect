from django.http import HttpResponse
from django.shortcuts import render
from core.models import Worker, Employer

def index(request):
    return render(request, 'index.html')

def role_selection(request):
    return render(request, 'role_selection.html')

def login_worker(request):
    return render(request, 'worker/login_worker.html')

def login_employer(request):
    return render(request, 'employer/login_employer.html')

def signup_worker(request):
    if request.method == 'POST':
        f_name = request.POST.get('firstname')
        l_name = request.POST.get('lastname')
        p_photo = request.FILES.get('p_photo')
        dob = request.POST.get('dob')
        age = request.POST.get('age')
        gender = request.POST.get('gender')

        email = request.POST.get('email')
        mobile = request.POST.get('mobile')
        password = request.POST.get('password')
        profession = request.POST.get('profession')
        other_professions = request.POST.get('other_professions')
        street = request.POST.get('street')
        city = request.POST.get('city')
        state = request.POST.get('state')
        pincode = request.POST.get('pincode')
        work_area = request.POST.get('work_area')
        document = request.FILES.get('document')
        # Process the signup form data here
        worker = Worker(f_name=fname, l_name=lname, p_photo=p_photo, dob=dob, age=age, gender=gender,
                        email=email, mobile=mobile, password=password, profession=profession, other_professions=other_professions,
                        street=street, city=city, state=state, pincode=pincode, work_area=work_area, document=document)
        worker.save()

    return render(request, 'worker/signup_worker.html')

def signup_employer(request):
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

def get_password_employer(request):
    return render(request, 'employer/get_password_employer.html')

def home_page_employer(request):
    return render(request, 'employer/home_page_employer.html')