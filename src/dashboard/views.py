from django.shortcuts import render
from .models import CompleteTable
from django.http import JsonResponse

# Create your views here.

#view for dashboard.html
def dashboard_home(request):
    return(render(request,'dashboard.html'))

#view for the energy status dashboard
def dashboard_energy_status(request):
    latestdata = CompleteTable.objects.get(id = 65)
    context = {
        'data': latestdata
    }
    return(render(request,'energystatus.html',context))

#view to post data as json
def get_json_data(request):
    data = CompleteTable.objects.filter(id__gt= 64)[:10]

    id,dateTime,date,time,A1,A2,A3,V1,VLL,VLN,Wavg,Amps,Whr,W1,W2,W3 = [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
    j=0
    PF = []

    for i in data:
        id.append(i.id)
        dateTime.append(i.DateTime.split(' '))
        A1.append(i.A1)
        A2.append(i.A2)
        A3.append(i.A3)
        V1.append(i.V1)
        VLL.append(i.VLL)
        VLN.append(i.VLN)
        Amps.append(i.Amps)
        Wavg.append(i.Wavg)
        W1.append(i.W1)
        W2.append(i.W2)
        W3.append(i.W3)
        Whr.append(i.Wh)
        PF.append(i.PF)
        date.append(dateTime[j][0])
        time.append(dateTime[j][1])
        j=j+1

    datadict = {
        'id': [i for i in id],
        'dateTime': [i for i in dateTime],
        'date': [i for i in date],
        'time': [i for i in time],
        'A1': [i for i in A1],
        'A2': [i for i in A2],
        'A3': [i for i in A3],
        'V1': [i for i in V1],
        'VLL': [i for i in VLL],
        'VLN': [i for i in VLN],
        'Amps': [i for i in Amps],
        'Wavg': [i for i in Wavg],
        'Whr': [i for i in Whr],
        'W1': [i for i in W1],
        'W2': [i for i in W2],
        'W3': [i for i in W3],
        'PF': [i for i in PF],
    }
    return JsonResponse(datadict)