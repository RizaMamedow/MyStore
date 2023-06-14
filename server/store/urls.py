from django.contrib import admin
from django.urls import path, re_path

from api.views import *

urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('categories/<int:id>/', CategoryByIdView.as_view()),
    path('categories/limit/<int:limit>/', CategoryWithLimitView.as_view()),
    path('products/', ProductsListView.as_view()),
    path('products/<int:id>/', ProductByIdView.as_view()),
    path('products/category/<int:id>/', ProductByCategoryIdView.as_view()),
    path('products/images/', ProductImageView.as_view()),
    path('products/images/<int:id>/', ProductImageByIdView.as_view()),
    path('products/<int:id>/images/', ProductImageByProductIdView.as_view()),
    path('products/limit/<int:limit>', ProductWithLimitView.as_view())
]
