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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fgvHELBq_hQ:APA91bHophOjqZqHx3KGzPPdfeGrilCZhktT3xG4z_G2oeuD9BvB4Nj0UsAczBBhnCsA1VAWV1bmUe-TO_AEm8bu5f-TArtWPR4_Vn_0DZYSdWYlmaIJPlNzt1ETGPMq687UPOWFyEfr","expirationTime":null,"keys":{"p256dh":"BO0TVnk3zj0clUpnDmwCw6A3xaMfD8IAjeIGcIffOlujylUuYusOnomVhTpd-2V5QAD65wyW1_-VvShob2vh98A","auth":"AgHUnk9hLar6ADVP0tEIzQ"}};
webpush.sendNotification(pushSubscription, 'JUBILEU - FABIO');
