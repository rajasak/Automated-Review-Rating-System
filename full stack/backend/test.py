from reviewsys.views import ReviewPredictionView
from rest_framework.test import APIRequestFactory
factory = APIRequestFactory()
request = factory.post('/api/reviews/predict/', {"review_text": "Great product!"}, format='json')
view = ReviewPredictionView.as_view()
response = view(request)
print(response.data)
