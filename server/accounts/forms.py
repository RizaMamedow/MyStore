from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Consumer


class ConsumerCreationForm(UserCreationForm):

    class Meta:
        model = Consumer
        fields = ('email', 'username')


class ConsumerChangeForm(UserChangeForm):

    class Meta:
        model = Consumer
        fields = ('username',)