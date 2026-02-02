export default {
  async fetch(request, env, ctx) {
    // Your Molt Worker logic here
    return new Response('Molt Worker is running!', { status: 200 });
  }
}
