# Generated by Django 4.1.5 on 2023-02-07 12:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory', '0002_alter_productinventory_is_default'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(blank=True, choices=[('PENDING', 'Pending'), ('FAILED', 'Failed'), ('PROCESSING', 'Processing'), ('COMPLETED', 'Completed')], default='PENDING', help_text='format : Pending = Order received, no payment initiated , Failed = Payment failed or was declined (unpaid) , Processing =  Payment received (paid) and stock has been reduced; order is awaiting fulfillment , Completed = Order fulfilled and complete', max_length=255, null=True, verbose_name='order status')),
                ('create_at', models.DateTimeField(auto_now_add=True, help_text='format : y-m-d H:M:S', verbose_name='date order created')),
                ('update_at', models.DateTimeField(auto_now=True, help_text='format : y-m-d H:M:S', verbose_name='date order last updated')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_order', to=settings.AUTH_USER_MODEL, verbose_name='user order')),
            ],
        ),
        migrations.CreateModel(
            name='OrderPayment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, error_messages={'name': {'max_length': 'the amount must be between 0 and 99999.99'}}, help_text='format : maximum amount 99999.99', max_digits=7, verbose_name='amount have to pay')),
                ('amount_payed', models.DecimalField(decimal_places=2, error_messages={'name': {'max_length': 'the amount must be between 0 and 99999.99'}}, help_text='format : maximum amount 99999.99', max_digits=7, verbose_name='amount payed')),
                ('status', models.CharField(blank=True, choices=[('PENDING', 'Pending'), ('UNCOMPLETED', 'UnCompleted'), ('COMPLETED', 'Completed')], default='PENDING', help_text='format : Pending = waiting for payment , UnCompleted = payed a specific amount or half , Completed = payment fullfilled and complete', max_length=255, null=True, verbose_name='payment status')),
                ('gateway', models.CharField(help_text='format : credit,debit,mastercard,paypal...etc', max_length=255, verbose_name='payment method')),
                ('create_at', models.DateTimeField(auto_now_add=True, help_text='format : y-m-d H:M:S', verbose_name='date payment created')),
                ('update_at', models.DateTimeField(auto_now=True, help_text='format : y-m-d H:M:S', verbose_name='date payment last updated')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_item_payment', to='checkout.order', verbose_name='order')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sale_price', models.DecimalField(decimal_places=2, error_messages={'name': {'max_length': 'the price must be between 0 and 999.99'}}, help_text='format : maximum price 999.99', max_digits=5, verbose_name='sale price')),
                ('qty', models.IntegerField(default=1, verbose_name='quantity of product')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_item', to='checkout.order', verbose_name='order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_item_product', to='inventory.product', verbose_name='order item product')),
                ('variants', models.ManyToManyField(help_text='format : selected variants for order', to='inventory.productattributevalue', verbose_name='product variants')),
            ],
        ),
    ]
