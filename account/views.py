from django.contrib.auth.models import User
from drf_social_oauth2.views import AccessToken
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import BasicUserSerializer, CreateUserSerializer, UpdateUserSerializer


# Create your views here.

class LoginUser(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, token):
        token_table = AccessToken.objects.filter(token=token)
        if token_table:
            user = User.objects.get(pk=token_table.first().user.pk)
            if user:
                serializer = BasicUserSerializer(user, context={"request": request})
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class CreateUser(generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User
    permission_classes = [permissions.AllowAny]


class UpdateUser(generics.UpdateAPIView):
    serializer_class = UpdateUserSerializer
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
