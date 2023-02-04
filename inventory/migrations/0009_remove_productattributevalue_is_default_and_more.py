# Generated by Django 4.1.5 on 2023-02-04 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0008_productattributevalue_is_default'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productattributevalue',
            name='is_default',
        ),
        migrations.AddField(
            model_name='productattributevalues',
            name='is_default',
            field=models.BooleanField(default=False, help_text='format : true=select as default variant', verbose_name='default variant selection'),
        ),
    ]