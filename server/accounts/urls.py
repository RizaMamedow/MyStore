from django.contrib import admin
from django.urls import path, include

from api.views import *

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('consumers/', ConsumersView.as_view()),
    path('consumers/<int:id>', ConsumerByIdView.as_view()),
    path('consumers/token/<str:key>', ConsumerByTokenKeyView.as_view()),
    path('tokens/<str:key>', TokenByKeyView.as_view()),
]
