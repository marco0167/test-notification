self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: "eeee",
      icon: '/image2.png',
      badge: '/globe.svg',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      image: '/image3.png',
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
      actions: [
        { action: 'explore', title: 'Go to the site', icon: '/globe.svg' },
        { action: 'close', title: 'Close the notification', icon: '/image2.png' },
      ]

    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  event.waitUntil(clients.openWindow('https://test-notification-plum.vercel.app'))
})
