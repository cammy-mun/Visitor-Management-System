from rest_framework import serializers
from .models import Todo
from .models import Visitor


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')


class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visitor
        fields = ('id', 'name', 'nric', 'phoneNum',
                  'patientName', 'wardNum', 'bedNum')
