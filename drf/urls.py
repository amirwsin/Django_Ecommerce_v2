from django.urls import path, include
from rest_framework import routers
from .views import AllProduct,CategoryView

app_name = 'api'

router = routers.DefaultRouter()
router.register(
    r'product', AllProduct, basename="allproducts",
)
router.register(
    r'category',CategoryView,basename="categories"
)

urlpatterns = [
    path("", include(router.urls))
]
