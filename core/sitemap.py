from django.contrib.sitemaps import Sitemap
from django.urls import reverse


class StaticViewSitemap(Sitemap):
    priority = 1.0
    changefreq = 'monthly'

    def items(self):
        return [
            'help_and_contact',
            'privacy_policy',
            'about',
            'term_and_condition',
            'how_platform_works',
            'signup_card',
            'login_card',
            'emergency_contact_card',
            'connect_on_social_media_card',
        ]

    def location(self, item):
        return reverse(item)