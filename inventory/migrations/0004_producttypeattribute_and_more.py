# Generated by Django 4.1.5 on 2023-01-30 19:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0003_productinventory_is_default'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductTypeAttribute',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_attribute', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='productattribute', to='inventory.productattribute')),
                ('product_type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='producttype', to='inventory.producttype')),
            ],
            options={
                'unique_together': {('product_attribute', 'product_type')},
            },
        ),
        migrations.AddField(
            model_name='producttype',
            name='product_type_attribute',
            field=models.ManyToManyField(related_name='product_type_attribute', through='inventory.ProductTypeAttribute', to='inventory.productattribute'),
        ),
    ]
