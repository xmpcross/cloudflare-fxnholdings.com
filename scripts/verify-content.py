#!/usr/bin/env python3
"""Compare built pages against a saved public Payload export, without a database.
Usage: python3 scripts/verify-content.py /path/to/published-pages.json
"""
import html
import json
import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
if len(sys.argv) != 2:
    raise SystemExit('Pass the path to the saved published-pages.json export.')
data = json.loads(Path(sys.argv[1]).read_text())
corrections = []
for page in data['docs']:
    route = page['path']
    relative = route.lstrip('/') if route.endswith('.html') else route.strip('/') + '/index.html' if route != '/' else 'index.html'
    built = (root / 'dist' / relative).read_text()
    expected = re.sub(r'<title[^>]*>.*?</title>', lambda _: '<title>' + html.escape(page['title'], quote=True).replace('&#x27;', "'") + '</title>', page['html'], flags=re.S | re.I)
    # Imported metadata truncated two descriptions at apostrophes. Original HTML
    # retains the complete description, which the static build restores.
    if page.get('description'):
        match = re.search(r'<meta name="description" content="([^"]*)"', expected)
        if match and html.unescape(match[1]) != page['description']:
            assert html.unescape(match[1]).startswith(page['description']), route
            corrections.append(route)
    assert built == expected, 'Content mismatch: ' + route
print(f'PASS: {len(data["docs"])} pages match exported HTML; {len(corrections)} complete descriptions restored.')
for route in corrections:
    print('Restored description:', route)
