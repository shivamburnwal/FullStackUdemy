from typing import Any
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import DetailView, FormView
from django.views.generic.base import TemplateView

from .forms import PostForm
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

class AddPostView(FormView):
    template_name = "add_post.html"
    form_class = PostForm
    success_url = '/'

    def form_valid(self, form: Any) -> HttpResponse:
        new_object = Post.objects.create(
            text = form.cleaned_data["text"],
            image =  form.cleaned_data["image"]
        )
        return super().form_valid(form)


def ErrorView(request):
    return render(request, 'error.html')