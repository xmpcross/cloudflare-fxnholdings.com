#!/usr/bin/env python3
"""Read-only HTTP checks against a running Pages preview; sends no email/AI calls."""
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path
base = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8796'
root = Path(__file__).resolve().parents[1]
def get(path):
    try:
        return urllib.request.urlopen(base + path)
    except urllib.error.HTTPError as error:
        return error
pages = list((root / 'dist').rglob('*.html'))
for page in pages:
    rel = page.relative_to(root / 'dist').as_posix()
    path = '/' + (rel[:-10] if rel.endswith('index.html') else rel)
    response = get(path)
    assert response.status == (404 if path == '/404.html' else 200), (path, response.status)
    assert b'<html' in response.read(), path
    assert response.headers.get('X-Content-Type-Options') == 'nosniff', path
for path, status in [('/missing-migration-page',404),('/api/health',200),('/api/contact',405),('/api/chat',405),('/api/no-such-endpoint',404),('/assets/site.css',200),('/sitemap.xml',200),('/insights/feed.xml',200)]:
    assert get(path).status == status, path
assert get('/about').url.endswith('/about/')
request = urllib.request.Request(base + '/api/contact', data=b'{"name":""}', headers={'Content-Type':'application/json'}, method='POST')
try:
    urllib.request.urlopen(request)
    raise AssertionError('Expected validation failure')
except urllib.error.HTTPError as error:
    assert error.code == 400, error.code
print(f'PASS: {len(pages)} pages, 404s, headers, slash redirect, assets, sitemap, RSS and safe API checks.')
