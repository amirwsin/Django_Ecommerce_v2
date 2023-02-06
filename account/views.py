from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.conf import settings
from drf_social_oauth2.views import AccessToken
from .serializers import BasicUserSerializer, CreateUserSerializer
from rest_framework import status, generics, permissions


# Create your views here.

class CreateUser(generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = User
    permission_classes = [permissions.AllowAny]


class LoginUser(APIView):

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
