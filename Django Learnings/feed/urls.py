from django.urls import path

# views
from .views import HomeViewTemplate

app_name = "feed"

urlpatterns = [
    path('', HomeViewTemplate.as_view(), name="index"),
]