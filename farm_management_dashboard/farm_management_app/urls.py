from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CropViewSet, EmployeeViewSet, LivestockViewSet, MachineryViewSet

# Create a router and register your viewsets
router = DefaultRouter()
router.register(r'crops', CropViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'livestock', LivestockViewSet)
router.register(r'machinery', MachineryViewSet)


# Wire up the router using the include() function
urlpatterns = [
    path('', include(router.urls)),
]
