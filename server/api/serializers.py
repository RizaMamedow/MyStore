from django.conf import settings
from rest_framework import serializers
from accounts.models import Consumer
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _

from store.models import Product, ProductImage, Category


class ConsumerSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    email = serializers.EmailField()
    username = serializers.CharField(max_length=255)
    last_login = serializers.DateTimeField()
    date_joined = serializers.DateTimeField()


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=128)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=128)


class TokenDefaultSerializer(serializers.Serializer):
    key = serializers.CharField(max_length=255)
    created = serializers.DateTimeField()
    user = ConsumerSerializer()


class CategoryDefaultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class ProductModelSerializer(serializers.ModelSerializer):
    category = CategoryDefaultSerializer()

    class Meta:
        model = Product
        fields = ('id', 'title', 'description', 'created', 'price', 'category', 'thumbnail')


class ProductImageModelSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField(source='product.id')
    image = serializers.CharField(max_length=255)

    class Meta:
        model = ProductImage
        fields = ('id', 'image', 'short_desc', 'product_id')
