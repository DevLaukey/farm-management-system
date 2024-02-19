from rest_framework import viewsets
from .models import Crop, Employee, Livestock, Machinery, EggProduction, MilkProduction
from .serializers import CropSerializer, EmployeeSerializer, LivestockSerializer, MachinerySerializer

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
