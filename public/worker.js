'use strict'

self.addEventListener('push', function (event) {
  const data = JSON.parse(event.data.text());
  event.waitUntil(
    registration.showNotification(data.title, {
      body: data.message,
      icon: '/img/favicon/android-chrome-192x192.png',
      data: {
        url: data.url
      }
    })
  )
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const notificationData = event.notification.data;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      if (notificationData && notificationData.url) {
        // Open /pwa if the URL is '/'
        const urlToOpen = (notificationData.url === '/') ? '/pwa' : notificationData.url;
        return clients.openWindow(urlToOpen);
      } else if (clientList.length > 0) {
        let client = clientList[0];
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i];
          }
        }
        return client.focus();
      }
      // If no clients are open, open the default URL
      return clients.openWindow('/pwa');
    })
  );
});
