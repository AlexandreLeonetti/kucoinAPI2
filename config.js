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

