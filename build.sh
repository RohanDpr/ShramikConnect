#!/usr/bin/env bash
set -o errexit

echo "========================================="
echo "🚀 ShramikConnect Build Process Started"
echo "========================================="

# Install dependencies
pip install -r requirements.txt

# 🔥 Complete fresh migration
echo "🔄 Running fresh migrations from scratch..."
python manage.py migrate

# Create superuser if environment variables exist
if [ -n "$DJANGO_SUPERUSER_EMAIL" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
    echo "👑 Creating superuser..."
    python manage.py createsuperuser --noinput --email $DJANGO_SUPERUSER_EMAIL || true
fi

# Collect static files
python manage.py collectstatic --noinput

echo "========================================="
echo "✅ Build Process Completed Successfully"
echo "========================================="