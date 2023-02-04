from django.urls import path, include

from .views import LoginUser
app_name = 'userApi'


urlpatterns = [
    path("login/<str:token>/",LoginUser.as_view(),name="loginUser")
]
