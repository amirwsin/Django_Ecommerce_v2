from django.contrib import admin
from .models import Category, Product, Brand, ProductType, ProductInventory, ProductAttribute, ProductAttributeValue, \
    ProductAttributeValues,ProductTypeAttribute

# Register your models here.

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Brand)
admin.site.register(ProductType)
admin.site.register(ProductInventory)
admin.site.register(ProductAttribute)
admin.site.register(ProductAttributeValues)
admin.site.register(ProductAttributeValue)
admin.site.register(ProductTypeAttribute)
