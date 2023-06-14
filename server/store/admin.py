from django.contrib import admin

from store.models import Category, Product, ProductImage

class ProductImageInline(admin.StackedInline):
    model = ProductImage
    max_num = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'category')
    search_fields = ('title', 'category', 'price')
    raw_id_fields = ['category']
    inlines = [ProductImageInline]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')