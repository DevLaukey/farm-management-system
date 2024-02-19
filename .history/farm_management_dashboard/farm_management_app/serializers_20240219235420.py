from rest_framework import serializers
from .models import Crop, Employee, Livestock, Machinery

class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class LivestockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livestock
        fields = '__all__'

class MachinerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Machinery
        fields = '__all__'
