from predictor import views


from django.urls import path

urlpatterns = [
    path('api/predict/', views.Predictor.as_view(), name='predict'),
]