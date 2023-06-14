from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.conf import settings

from .managers import ConsumerManager


class Consumer(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True, default=None, null=False)
    username = models.CharField(_('username'), default=None, max_length=255, null=False)
    is_staff = models.BooleanField(default=False, null=False)
    is_active = models.BooleanField(default=True, null=False)
    date_joined = models.DateTimeField(default=timezone.now, null=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = ConsumerManager()

    def __str__(self):
        return self.email
