# Generated by Django 4.1.5 on 2023-02-12 16:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0002_alter_productinventory_is_default'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='brand',
            options={'ordering': ['-id']},
        ),
        migrations.AlterModelOptions(
            name='producttype',
            options={'ordering': ['-id']},
        ),
    ]
