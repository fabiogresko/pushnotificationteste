const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BLX0_LLErBSaGPuoelAw0DCmh-_Y7UXxqNl1UXHB5OjfWSEla9dNVxPGMJ5Ud0XdSqYi_WrWLi_5AKZGH3RDw7k',
  privateKey: 'eGwLQd2tEgLLcdK6D76FwhZY2W77V9LJapEX3q8NTD8'
};

webpush.setVapidDetails(
  'mailto:fabiorsao@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
