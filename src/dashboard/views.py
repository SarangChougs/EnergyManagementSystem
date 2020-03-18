from django.shortcuts import render

# Create your views here.

#view for dashboard.html
def dashboard_home(request):
    return(render(request,'dashboard.html'))

def dashboard_energy_status(request):
    return(render(request,'energystatus.html'))