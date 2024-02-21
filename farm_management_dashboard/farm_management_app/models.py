from django.db import models
from datetime import date

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

    def calculate_age_in_months(self):
        today = date.today()
        purchase_month = (today.year - self.purchase_date.year) * 12 + today.month - self.purchase_date.month
        return purchase_month

class Machinery(models.Model):
    plate_number = models.CharField(max_length=255, default='N/A')
    equipment_name = models.CharField(max_length=255)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_date = models.DateField()
   