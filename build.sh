#!/usr/bin/env bash
set -o errexit

echo "========================================="
echo "🚀 ShramikConnect Build Process Started"
echo "========================================="

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# 🔥 COMPLETE FIX: Fake all migrations as applied
echo "🔄 Faking all migrations as applied..."
python manage.py migrate --fake

# OR more specifically:
# python manage.py migrate core --fake

echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

echo "========================================="
echo "✅ Build Process Completed Successfully"
echo "========================================="