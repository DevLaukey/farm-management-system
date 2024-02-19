
from django.db import models

class Crop(models.Model):
    name = models.CharField(max_length=255)
    variety = models.CharField(max_length=255)
    planting_date = models.DateField()
    harvest_date = models.DateField()
    
class Employee(models.Model):
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    position = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    performance = models.TextField()
    
class Livestock(models.Model):
    animal_type = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    age = models.IntegerField()
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_date = models.DateField()
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    
class Machinery(models.Model):
    equipment_name = models.CharField(max_length=255)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_date = models.DateField()
    maintenance_date = models.DateField()
    maintenance_cost = models.DecimalField(max_digits=10, decimal_places=2)
    
