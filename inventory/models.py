from django.db import models
from mptt.models import TreeForeignKey, MPTTModel, TreeManyToManyField
from django.utils.translation import gettext_lazy as _


# Create your models here.

class Category(MPTTModel):
    name = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        unique=False,
        verbose_name=_("category name"),
        help_text=_("format : required , max-255")
    )
    slug = models.SlugField(
        max_length=300,
        blank=False,
        null=False,
        unique=False,
        verbose_name=_("category safe url"),
        help_text=_("format : required , letters, numbers , underscore or hyphens"),
    )
    is_active = models.BooleanField(default=True)
    parent = TreeForeignKey(
        "self",
        on_delete=models.PROTECT,
        related_name="children",
        null=True,
        blank=True,
        unique=False,
        verbose_name=_("parent of category"),
        help_text=_("format : not required")
    )

    class MPTTMeta:
        order_insertion_by = ["name"]

    class Meta:
        verbose_name = _("product category")
        verbose_name_plural= _("product categories")

    def __str__(self):
        return self.name

