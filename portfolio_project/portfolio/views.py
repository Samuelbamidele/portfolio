from django.shortcuts import render
from .models import AboutMe, PortfolioItem, BlogPost

def home(request):
    about_me = AboutMe.objects.first()
    portfolio_items = PortfolioItem.objects.all()
    blog_posts = BlogPost.objects.all()
    context = {
        'about_me': about_me,
        'portfolio_items': portfolio_items,
        'blog_posts': blog_posts,
    }
    return render(request, 'portfolio/home.html', context)