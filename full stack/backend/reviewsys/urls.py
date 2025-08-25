from django.urls import path
from .views import ReviewPredictionView, ReviewListAPIView, RecentReviewsAPIView,ReviewStatsAPIView

urlpatterns = [
    path('reviews/create/', ReviewPredictionView.as_view(), name='review-create'),
    path('reviews/', ReviewListAPIView.as_view(), name='review-list'),
    path('reviews/recent/', RecentReviewsAPIView.as_view(), name='recent-reviews'),
    path('reviews/detail/', ReviewStatsAPIView.as_view(), name='review-stats'),
]