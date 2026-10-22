import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../worker/chat.js';

const request = () => new Request('https://fxnholdings.com/api/chat', {
  method: 'POST', headers: { 'content-type': 'application/json', 'cf-connecting-ip': crypto.randomUUID() },
  body: JSON.stringify({ messages: [{ role: 'user', content: 'What does FXN Holdings do?' }] }),
});

test('OpenRouter configuration uses bearer authentication and the selected model', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async (input, init) => {
    calls++;
    const req = new Request(input, init);
    assert.equal(req.url, 'https://openrouter.ai/api/v1/messages');
    assert.equal(req.headers.get('authorization'), 'Bearer test-openrouter-key');
    assert.equal(req.headers.get('x-api-key'), null);
    const body = await req.json();
    assert.equal(body.model, 'test/model');
    assert.equal(body.output_config, undefined);
    return Response.json({ id: 'msg_test', type: 'message', role: 'assistant', model: 'test/model', content: [{ type: 'text', text: 'FXN Holdings builds digital ventures.' }], stop_reason: 'end_turn', usage: { input_tokens: 1, output_tokens: 1 } });
  });
  const response = await onRequestPost({ request: request(), env: { OPENROUTER_API_KEY: 'test-openrouter-key', OPENROUTER_MODEL: 'test/model' } });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).reply, 'FXN Holdings builds digital ventures.');
  assert.equal(calls, 1);
});

test('OpenRouter without a selected model fails clearly without an upstream call', async () => {
  const response = await onRequestPost({ request: request(), env: { OPENROUTER_API_KEY: 'test-key' } });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error, 'not_configured');
});
