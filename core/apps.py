from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'core'
    
    def ready(self):
        """Import signals when app is ready"""
        # You can add signals here later if needed
        pass