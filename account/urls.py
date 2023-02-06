from django.urls import path, include

from .views import LoginUser, CreateUser

app_name = 'userApi'

urlpatterns = [
    path("register/", CreateUser.as_view(), name="createUser"),
    path("login/<str:token>/", LoginUser.as_view(), name="loginUser"),
]
