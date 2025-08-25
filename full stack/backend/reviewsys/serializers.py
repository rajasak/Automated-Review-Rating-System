from rest_framework import serializers
from .models import Review
from django.utils.timezone import localtime

class ReviewSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    class Meta:
        model = Review
        fields = ['id','review_text','predicted_rating','created_at']
        read_only_fields=['created_at']
    def get_created_at(self, obj):
        ist_time = localtime(obj.created_at)
        return ist_time.strftime("%Y-%m-%d "+ "  %H:%M")