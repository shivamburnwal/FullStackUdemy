from django.urls import path

# views
from .views import HomeView, ErrorView

app_name = "feed"

urlpatterns = [
    path('', HomeView.as_view(), name="index"),
    path('error/', ErrorView, name="errorPage")
]