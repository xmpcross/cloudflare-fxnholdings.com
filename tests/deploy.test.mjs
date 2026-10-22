import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { onRequest } from '../functions/api/[[path]].js';

test('Pages adapter handles health, missing routes and disallowed methods', async () => {
  for (const [path, method, status] of [
    ['/api/health', 'GET', 200], ['/api/health/', 'GET', 200],
    ['/api/contact', 'GET', 405], ['/api/chat', 'GET', 405],
    ['/api/missing', 'GET', 404],
  ]) {
    const response = await onRequest({ request: new Request('https://fxnholdings.com' + path, { method }), env: {} });
    assert.equal(response.status, status, path);
    assert.equal(response.headers.get('cache-control'), 'no-store');
  }
});

test('static page requests do not invoke Functions and no database is bound', async () => {
  const routes = JSON.parse(await readFile(new URL('../static/_routes.json', import.meta.url)));
  assert.deepEqual(routes, { version: 1, include: ['/api/*', '/404', '/404/', '/404.html'], exclude: [] });
  const config = JSON.parse(await readFile(new URL('../wrangler.jsonc', import.meta.url)));
  assert.equal(config.pages_build_output_dir, './dist');
  assert.equal(config.d1_databases, undefined);
  assert.equal(config.hyperdrive, undefined);
});
