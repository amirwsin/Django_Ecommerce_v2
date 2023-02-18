# Generated by Django 4.1.5 on 2023-02-12 18:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_address_contact_phone_address_zip_code'),
        ('checkout', '0005_delivery_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='address_order', to='account.address', verbose_name='delivery address'),
        ),
        migrations.AddField(
            model_name='order',
            name='delivery',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='delivery_order', to='checkout.delivery', verbose_name='delivery method'),
        ),
    ]
