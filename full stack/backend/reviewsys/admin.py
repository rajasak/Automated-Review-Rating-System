from django.contrib import admin
from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'predicted_rating', 'created_at')
    list_display_links = ('id',)
    search_fields = ('review_text',)