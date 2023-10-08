from django.urls import path

# views
from .views import HomeView, ErrorView, PostDetailView

app_name = "feed"

urlpatterns = [
    path('', HomeView.as_view(), name="index"),
    path('detail/<int:pk>', PostDetailView.as_view(), name="detail"),
    path('error/', ErrorView, name="errorPage")
]