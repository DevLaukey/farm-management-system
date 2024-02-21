from rest_framework import viewsets
from .models import Crop, Employee, Livestock, Machinery
from .serializers import CropSerializer, EmployeeSerializer, LivestockSerializer, MachinerySerializer, CustomRegisterSerializer
from dj_rest_auth.registration.views import RegisterView

class CropViewSet(viewsets.ModelViewSet):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class LivestockViewSet(viewsets.ModelViewSet):
    queryset = Livestock.objects.all()
    serializer_class = LivestockSerializer

class MachineryViewSet(viewsets.ModelViewSet):
    queryset = Machinery.objects.all()
    serializer_class = MachinerySerializer

class CustomRegisterView(RegisterView):
    serializer_class = CustomRegisterSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)  
        return super().post(request, *args, **kwargs)
