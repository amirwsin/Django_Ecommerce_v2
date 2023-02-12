from django.urls import path
from .views import CartView

app_name = "checkoutApi"

urlpatterns = [
    path("cart/<int:pk>/", CartView.as_view(), name="getUserCart"),
]
