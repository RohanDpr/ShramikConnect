#!/usr/bin/env bash
set -o errexit

echo "========================================="
echo "🚀 ShramikConnect Build Process Started"
echo "========================================="

pip install -r requirements.txt

# 🔥 Force reset if variable is set
if [ "$DJANGO_MIGRATE_FRESH" = "true" ]; then
    echo "⚠️ Force reset enabled - faking all migrations..."
    
    # Fake zero for all apps
    python manage.py migrate core zero --fake
    python manage.py migrate admin zero --fake
    python manage.py migrate auth zero --fake
    python manage.py migrate contenttypes zero --fake
    python manage.py migrate sessions zero --fake
    
    echo "📦 Running fresh migrations..."
    python manage.py migrate
else
    # Normal migration
    python manage.py migrate
fi

python manage.py collectstatic --noinput

echo "========================================="
echo "✅ Build Process Completed Successfully"
echo "========================================="