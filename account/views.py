from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.conf import settings
from drf_social_oauth2.views import AccessToken
from .serializers import BasicUserSerializer
from rest_framework import status


# Create your views here.

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
