from django.contrib import admin
from .models import AboutMe, PortfolioItem, BlogPost

@admin.register(AboutMe)
class AboutMeAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'link')

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'read_more_link')