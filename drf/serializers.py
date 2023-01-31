from rest_framework import serializers
from inventory.models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class AllProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
