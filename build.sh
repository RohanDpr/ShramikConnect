#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --noinput
python manage.py migrate

# 👇 AUTO LOAD DATA (only if file exists)
if [ -f data.json ]; then
  python manage.py loaddata data.json
fi
