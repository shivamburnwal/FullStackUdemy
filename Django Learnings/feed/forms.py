from django import forms

class PostForm(forms.Form):
    text = forms.CharField(max_length=100, required=True)
    image = forms.FileField(required=True)
