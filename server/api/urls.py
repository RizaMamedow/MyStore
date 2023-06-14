from django.urls import path, include

urlpatterns = [
    path('accounts/', include('accounts.urls'), name='accounts'),
    path('store/', include('store.urls'), name='store'),
]

