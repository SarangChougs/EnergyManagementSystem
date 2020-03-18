from django.db import models

# Create your models here.
#model class for complete ems data
class CompleteTable(models.Model):
    DateTime = models.CharField(max_length = 20)
    VLL = models.DecimalField(max_digits = 10,decimal_places = 2)
    VLN = models.DecimalField(max_digits = 10,decimal_places = 2)
    V1 = models.DecimalField(max_digits = 10,decimal_places = 2)
    V2 = models.DecimalField(max_digits = 10,decimal_places = 2)
    V3 = models.DecimalField(max_digits = 10,decimal_places = 2)
    Amps = models.DecimalField(max_digits = 10,decimal_places = 2)
    A1 = models.DecimalField(max_digits = 10,decimal_places = 2)
    A2 = models.DecimalField(max_digits = 10,decimal_places = 2)
    A3 = models.DecimalField(max_digits = 10,decimal_places = 2)
    PF = models.DecimalField(max_digits = 10,decimal_places = 2)
    Freq = models.DecimalField(max_digits = 10,decimal_places = 2)
    Wavg = models.DecimalField(max_digits = 10,decimal_places = 2)
    W1 = models.DecimalField(max_digits = 10,decimal_places = 2)
    W2 = models.DecimalField(max_digits = 10,decimal_places = 2)
    W3 = models.DecimalField(max_digits = 10,decimal_places = 2)
    Wh = models.FloatField()

    def __str__(self):
        return str(self.id)

