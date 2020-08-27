from django.contrib import admin
from .models import Todo
from .models import Visitor


class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')


class VisitorAdmin(admin.ModelAdmin):
    list_display = ('name', 'nric', 'phoneNum',
                    'patientName', 'wardNum', 'bedNum')


# Register your models here.
admin.site.register(Todo, TodoAdmin)
admin.site.register(Visitor, VisitorAdmin)
