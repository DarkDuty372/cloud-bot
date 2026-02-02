addEventListener('fetch', event => {
  event.respondWith(new Response('Molt Worker placeholder running!', { status: 200 }))
})
