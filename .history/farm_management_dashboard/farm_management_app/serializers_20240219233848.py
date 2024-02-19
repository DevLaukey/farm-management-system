from rest_framework import serializers
from .models import Crop, Employee, Livestock, Machinery, EggProduction, MilkProduction

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

class EggProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EggProduction
        fields = '__all__'

class MilkProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilkProduction
        fields = '__all__'
