from django.db import models

class AboutMe(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    cv_file = models.FileField(upload_to='cv/', blank=True, null=True)

    def __str__(self):
        return self.title

class PortfolioItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/')
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='blog/')
    read_more_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title