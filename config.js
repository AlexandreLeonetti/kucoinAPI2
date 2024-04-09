let dotenv = require("dotenv");

dotenv.config();
const key1 = process.env.KUCOIN_KEY;
const secret1 = process.env.KUCOIN_SECRET;
const passphrase1 = process.env.PASS_PHRASE;


module.exports = {
//  baseUrl: 'https://openapi-sandbox.kucoin.io',
baseUrl: 'https://openapi-v2.kucoin.com',
  apiAuth: {
    key: key1, // KC-API-KEY
    secret: secret1, // API-Secret
    passphrase: passphrase1, // KC-API-PASSPHRASE
  },
  authVersion: 2, // KC-API-KEY-VERSION. Notice: for v2 API-KEY, not required for v1 version.
};
/*
module.exports = {
//  baseUrl: 'https://openapi-sandbox.kucoin.io',
baseUrl: 'https://openapi-v2.kucoin.com',
  apiAuth: {
    key: '661550b904c625000146908d', // KC-API-KEY
    secret: 'a69b9e5f-c547-4773-b5b3-aa05e6199ef9', // API-Secret
    passphrase: '348_3HHu__-3jUwiedb____X', // KC-API-PASSPHRASE
  },
  authVersion: 2, // KC-API-KEY-VERSION. Notice: for v2 API-KEY, not required for v1 version.
};
*/
