from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate
from django.utils.translation import gettext as _
from django.utils import timezone
from store.models import Category, Product, ProductImage
from .serializers import *
from accounts.models import Consumer


## Consumers Views
class ConsumersView(APIView):
    def get(self, request, format=None):
        user = Consumer.objects.all()
        serializer = ConsumerSerializer(user, many=True)
        return Response(serializer.data)


class ConsumerByIdView(APIView):
    def get(self, request, id, format=None):
        user = Consumer.objects.filter(id=id)
        serializer = ConsumerSerializer(user, many=True)
        return Response(serializer.data)


class ConsumerByTokenKeyView(APIView):
    def get(self, request, key, format=None):
        token = Token.object.filter(key=key)
        user = Consumer.objects.filter(pk=token.user.id)
        serializer = ConsumerSerializer(user, many=True)
        return Response(serializer.data)


class RegisterView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.data['email']
            username = serializer.data['username']
            password = serializer.data['password']

            try:
                user = Consumer.objects.get(email=email)
            except Consumer.DoesNotExist:
                user = Consumer.objects.create(email=email, username=username)
                user.set_password(password)
                user.save()

                return Response({'code': 1, 'detail': _('Account Successful Created')})

            return Response({'code': 0, 'detail': _(f'{email} email address is Already in use')})
        else:
            return Response(serializer.errors)


class LoginView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.data['email']
            password = serializer.data['password']
            user = authenticate(email=email, password=password)

            if user:
                if user.is_active:
                    token, created = Token.objects.get_or_create(user=user)
                    user_object = Consumer.objects.filter(email=email, password=password)

                    user_object.last_login = timezone.now
                    return Response({'code': 1, 'token': token.key},
                                    status=status.HTTP_200_OK)
                else:
                    content = {'code': 0, 'detail': _('User account not active.')}
                    return Response(content)
            else:
                content = {'code': 0, 'detail': _('Unable to login with provided credentials.')}
                return Response(content)
        else:
            return Response(serializer.errors)


class TokenByKeyView(APIView):
    def get(self, request, key, format=None):
        token = Token.objects.filter(key=key)
        serializer = TokenDefaultSerializer(token, many=True)
        return Response(serializer.data)


## Store View
class CategoryListView(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategoryDefaultSerializer(categories, many=True)
        return Response(serializer.data)


class CategoryByIdView(APIView):
    def get(self, request, id, format=None):
        category = Category.objects.filter(id=id)
        serializer = CategoryDefaultSerializer(category, many=True)
        return Response(serializer.data)


class CategoryWithLimitView(APIView):
    def get(self, request, limit, format=None):
        categories = Category.objects.all()[:limit]
        serializer = CategoryDefaultSerializer(categories, many=True)
        return Response(serializer.data)


class ProductsListView(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductModelSerializer(products, many=True)
        return Response(serializer.data)


class ProductByIdView(APIView):
    def get(self, request, id, format=None):
        product = Product.objects.filter(id=id)
        serializer = ProductModelSerializer(product, many=True)
        return Response(serializer.data)


class ProductByCategoryIdView(APIView):
    def get(self, request, id, format=None):
        product = Product.objects.filter(category__id=id)
        serializer = ProductModelSerializer(product, many=True)
        return Response(serializer.data)


class ProductWithLimitView(APIView):
    def get(self, request, limit, format=None):
        product = Product.objects.all()[:limit]
        serializer = ProductModelSerializer(product, many=True)
        return Response(serializer.data)


class ProductImageView(APIView):
    def get(self, request, format=None):
        image = ProductImage.objects.all()
        serializer = ProductImageModelSerializer(image, many=True)
        return Response(serializer.data)


class ProductImageByProductIdView(APIView):
    def get(self, request, id, format=None):
        image = ProductImage.objects.filter(product=id)
        serializer = ProductImageModelSerializer(image, many=True)
        return Response(serializer.data)


class ProductImageByIdView(APIView):
    def get(self, request, id, format=None):
        image = ProductImage.objects.filter(id=id)
        serializer = ProductImageModelSerializer(image, many=True)
        return Response(serializer.data)
