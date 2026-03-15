#!/usr/bin/env bash
set -o errexit

echo "🚀 Starting build process..."

# Install dependencies
pip install -r requirements.txt

# 🔥 CRITICAL FIX: Reset migrations and migrate fresh
echo "🔄 Resetting core app migrations..."
python manage.py migrate core zero --fake

echo "📦 Running all migrations..."
python manage.py migrate

echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

echo "✅ Build completed successfully!"