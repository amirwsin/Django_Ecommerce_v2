from django.urls import path, include

from .views import LoginUser, CreateUser, UpdateUser

app_name = 'userApi'

urlpatterns = [
    path("register/", CreateUser.as_view(), name="createUser"),
    path("login/<str:token>/", LoginUser.as_view(), name="loginUser"),
    path("update/<int:pk>/", UpdateUser.as_view(), name="updateUser"),
]
