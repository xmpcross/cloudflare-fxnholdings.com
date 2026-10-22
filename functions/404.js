// Preserve the legacy explicit error URL's HTTP status on Pages.
export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  url.pathname = '/404';
  const asset = await env.ASSETS.fetch(new Request(url, request));
  const headers = new Headers(asset.headers);
  headers.set('Cache-Control', 'no-store');
  headers.set('X-Content-Type-Options', 'nosniff');
  return new Response(asset.body, { status: 404, headers });
}
