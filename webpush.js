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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/e_KZqLKbxdI:APA91bELBIKOVUsCfSmKv7XEdl3h0FLNWFeR9xtoQa8NxPciILMId3TTUcsYRgHwrm3f2ENoYuFpbW8mNg8W0b0f-kT6U6WKG4VhlO_03JFTqaIQaMm_8mcszDAAbhdwlULODXTTsm36","expirationTime":null,"keys":{"p256dh":"BLWj4DatoH90hCO9xMhmpX4Nvtn-uO5JXa-ovUo82VSR3SOBc26Qog1z1mkxJfSDWb-tH5AmuVvAz3l0hVUGHQc","auth":"O2QT1Zo-0hOhLnj_la93Qg"}};

webpush.sendNotification(pushSubscription, 'TECH4HUMANS - FABIO');
