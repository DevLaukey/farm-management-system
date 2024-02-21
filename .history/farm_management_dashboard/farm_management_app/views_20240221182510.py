from rest_framework import viewsets
from .models import Crop, Employee, Livestock, Machinery
from .serializers import CropSerializer, EmployeeSerializer, LivestockSerializer, MachinerySerializer, CustomRegisterSerializer
from rest_framework.response import Response
from rest_framework import status
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
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        
        if response.status_code == status.HTTP_201_CREATED:
            user_data = {
                'username': response.data.get('username'),
                'email': response.data.get('email'),
                # Include other user data fields as needed
            }
            
            # You can customize the data returned after registration
            return Response(user_data, status=status.HTTP_201_CREATED)

        return response