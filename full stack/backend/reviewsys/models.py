from django.db import models

class Review(models.Model):
    review_text = models.TextField()
    predicted_rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.predicted_rating}- {self.review_text[:30]}"
