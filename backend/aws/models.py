from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title


class Visitor(models.Model):
    name = models.TextField(default="")
    nric = models.TextField(default="")
    phoneNum = models.TextField(default="")
    patientName = models.TextField(default="")
    wardNum = models.TextField(default="")
    bedNum = models.TextField(default="")

    def _str_(self):
        return self.title
