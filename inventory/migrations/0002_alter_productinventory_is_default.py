# Generated by Django 4.1.5 on 2023-02-05 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productinventory',
            name='is_default',
            field=models.BooleanField(default=True, help_text='format : true=subproduct visible', verbose_name='default selection'),
        ),
    ]
