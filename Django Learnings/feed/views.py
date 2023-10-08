from typing import Any
from django.shortcuts import render
from django.views.generic import DetailView
from django.views.generic.base import TemplateView

from .models import Post

# Create your views here.
class HomeView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context["posts"] = Post.objects.all()
        return context

class PostDetailView(DetailView):
    template_name = "detail.html"
    model = Post

def ErrorView(request):
    return render(request, 'error.html')