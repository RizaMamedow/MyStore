from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.conf import settings


class Category(models.Model):
    name = models.CharField(_('Category name'), max_length=255, null=False)
    
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = "Categories"
        
    def __str__(self) -> str:
        return self.name

class Product(models.Model):
    title = models.CharField(_('Title of Product'), max_length=255, null=False)
    description = models.TextField(_('Description of Product'), max_length=1000, null=False)
    price = models.FloatField(_('Price of Product'), null=False)
    created = models.DateTimeField(_('Product created time'), default=timezone.now, null=False)
    thumbnail = models.ImageField(_("Product Thumbnail"), upload_to="thumbnails/", null=False)
    
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Product'
    
    def __str__(self) -> str:
        return f"{self.id}. {self.title}"


class ProductImage(models.Model):
    image = models.ImageField(_("Image of product"), upload_to='images/', null=False)
    short_desc = models.TextField(_("Short Description of product"), max_length=255, null=True, default=None, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return f"{self.id}. Image of {self.product.title} product"
