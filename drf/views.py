from rest_framework import viewsets, permissions
from rest_framework.response import Response
from inventory.models import Product, Category
from .serializers import AllProductSerializer, CategorySerializer


# Create your views here.

class AllProduct(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = AllProductSerializer
    permission_classes = [permissions.AllowAny]


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
