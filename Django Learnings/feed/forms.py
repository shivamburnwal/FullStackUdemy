from django import forms

class PostForm(forms.Form):
    image = forms.FileField(required=True)
    text = forms.CharField(max_length=100, required=True)
