export function handleRequest(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'friend';
  return new Response(`Hello, ${name}! Molt Worker says hi 😎`, { status: 200 });
}
