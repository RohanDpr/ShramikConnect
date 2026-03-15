#!/usr/bin/env bash
set -o errexit

echo "========================================="
echo "🚀 ShramikConnect Build Process Started"
echo "========================================="

pip install -r requirements.txt

echo "📦 Running migrations..."
python manage.py migrate

echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

echo "========================================="
echo "✅ Build Process Completed Successfully"
echo "========================================="