addEventListener('fetch', event => {
  event.respondWith(new Response('Cloudflare Worker is working!', { status: 200 }))
})
