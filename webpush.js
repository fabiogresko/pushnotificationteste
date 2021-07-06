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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fapt-Rcy0q4:APA91bEoaz1w0_KOQ4HItw9WJMGtyfbzL3K7oXAhkZ3jtDSIV3W_LPXLjMyBph57xXU-Vfz6nhzVW0FBi6Nhjk7x1ZXNOsKxhbcJlQlj3w3T_tblwdlfnLsWKwa1KM4o-CSSEybyJZ0w","expirationTime":null,"keys":{"p256dh":"BB4LJSkVKMjuiS8885ZF8PqibyutvJsF6SmhnjbMqk76uOU04ZJo-FOLxwWF-7s72UHUUdIcVlBFshNU3VIPQBM","auth":"26lXXujFM84FSYfxXbxOpQ"}};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
