from django.shortcuts import render
from .models import CompleteTable

# Create your views here.

#view for dashboard.html
def dashboard_home(request):
    return(render(request,'dashboard.html'))

def dashboard_energy_status(request):
    latestdata = CompleteTable.objects.get(id = 100)
    context = {
        'data': latestdata
    }
    return(render(request,'energystatus.html',context))