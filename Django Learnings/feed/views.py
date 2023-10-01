# from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.
class HomeViewTemplate(TemplateView):
    template_name = "home.html"