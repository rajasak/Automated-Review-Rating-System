#  Django Review Rating Backend

A backend system built with **Django REST Framework** to analyze product reviews and automatically predict ratings using a **Transformer model**.  
It provides REST APIs for storing, retrieving, and analyzing customer reviews.  

---

##  Features
-  **Review Rating Prediction** using a pre-trained Transformer model  
-  **CRUD for Reviews** (create, list, recent, statistics)  
-  **Review Analytics** (counts, average rating, total reviews)  
-  **Pagination support** for listing reviews  
-  **CORS enabled** for frontend integration  
-  **SQLite support** out of the box  

---

##  Project Structure
```
backend/
├── mainfold/         # Project settings
├── reviewsys/        # Review app (models, views, serializers, urls)
├── venv/             # Virtual environment
├── db.sqlite3        # Default SQLite DB
├── manage.py
├── requirements.txt
└── README.md
```

---

##  Setup Guide

### 1. Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate  
source venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install django djangorestframework transformers torch nltk django-cors-headers
```

### 3. Configure Settings (`mainfold/settings.py`)

Add apps:
```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'corsheaders',
    'reviewsys',
]
```

Enable middleware:
```python
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]
```

Pagination:
```python
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 8,
}
```

### 4. Download NLTK Data
```bash
python -c "import nltk; nltk.download('words')"
```

### 5. Run Database Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Start Development Server
```bash
python manage.py runserver
```

---

##  API Endpoints

### 1. Create Review & Predict Rating
**POST** `/api/reviews/create/`  
```json
{
  "review_text": "This product is absolutely amazing!"
}
```

Response:
```json
{
  "id": 1,
  "review_text": "This product is absolutely amazing!",
  "predicted_rating": 5,
  "created_at": "2025-08-18T12:34:56.789Z"
}
```

---

### 2. Get All Reviews (Paginated)
**GET** `/api/reviews/`

---

### 3. Get Recent Reviews (Last 3)
**GET** `/api/reviews/recent/`

---

### 4. Get Review Statistics
**GET** `/api/reviews/detail/`  

Example Response:
```json
{
  "ratings": [
    {"star": 5, "count": 17},
    {"star": 4, "count": 11},
    {"star": 3, "count": 10},
    {"star": 2, "count": 3},
    {"star": 1, "count": 15}
  ],
  "average_rating": 3.2,
  "total_reviews": 56
}
```

---

##  API Testing with Postman
1. Create a new review → `/api/reviews/create/`  
2. List all reviews → `/api/reviews/`  
3. Get recent reviews → `/api/reviews/recent/`  
4. Get review statistics → `/api/reviews/detail/`  

---

##  Future Enhancements
-  User authentication with JWT  
-  Support for multiple products  
-  Admin dashboard for analytics  
-  Deployment with Docker  
