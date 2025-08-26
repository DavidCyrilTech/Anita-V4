require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP)2348139093320
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);
{"noiseKey":{"private":{"type":"Buffer","data":"cKohKuoFfPQ/M/yVuDHOZXv+UKe5Jhp8oJmMYhKl4ms="},"public":{"type":"Buffer","data":"62hNAVn8BUSLK7ZWdcPDKBWFD4S0Z5wtv3HDRAZJ5w0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"eDkGcWZClZTHsS/c+rUUmWTkc8PukWMtKro48FDlR1U="},"public":{"type":"Buffer","data":"HER3RodJOmLoVdEEYDRq8Ud5LsU7k1KvsgMJYn28c1I="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OE1MEQWGdPo5V53Yte36zELyrJid+ruQ0IQZ3L2zkEY="},"public":{"type":"Buffer","data":"IyEkFusLhO6GixWNOr1WVC/TG0X+5tbWk6NM45bcC2M="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qMbEJKrL8c/RIBH8B84VGGRL4aVVDgOwg9SacHPLdXg="},"public":{"type":"Buffer","data":"phAWJGx3W43AqONKMyEZ1Y6oVBd52vhWRzRwcBI2rGc="}},"signature":{"type":"Buffer","data":"p//uprJr/tjtFPiLSf5n0oIGBaWba+sUrtsSNjCFbiQZsMWKN9rIfoZmpws2qqy5ULOkT+1aW7BiZRLuvSlggg=="},"keyId":1},"registrationId":125,"advSecretKey":"/g6K5+NNwNzgTGpwjeoBBBdsngG75pl5NmRK/k/Siro=","processedHistoryMessages":[{"key":{"remoteJid":"2348139093320@s.whatsapp.net","fromMe":true,"id":"98BC554169AAF0D7EE496B3309BFE9A9"},"messageTimestamp":1756220454},{"key":{"remoteJid":"2348139093320@s.whatsapp.net","fromMe":true,"id":"0BE71DF7D0C06D4D9B6B829173C48E97"},"messageTimestamp":1756220454}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"PVbXqTtqR7KHP04_jakJIw","phoneId":"15b2d138-3550-4c26-9796-23ea2f6d4220","identityId":{"type":"Buffer","data":"6dlPRq7GN60llHvBX8SWMXHmbtI="},"registered":true,"backupToken":{"type":"Buffer","data":"JwnsMpZjzKKGkbHw1Ig1BMUiNw4="},"registration":{},"pairingCode":"CYRILDEV","me":{"id":"2348139093320:1@s.whatsapp.net","lid":"274844067332122:1@lid","name":"providence Soso"},"account":{"details":"CISBvZMFEJqYt8UGGAEgACgA","accountSignatureKey":"JVBvCgKkWtyCgtSBsbR+3LNFLkSD36pSr3w3I99BKGI=","accountSignature":"DhRsVu3dc1eoBmdK3OOWBfrjDC9bzHl1wFBLHAUb30AcDNHPNiTBjuw1hYLPXR5FlfE5OOwqaYjoCnzgTeMoCQ==","deviceSignature":"xpkq6IdkIhKgZpbVMbYQTjg981qQlo7Sbk+VvKpiTPZbiUyQhuxf+sb1YQCihQxC5wKMiQM4hvSXD/XAKpd4jA=="},"signalIdentities":[{"identifier":{"name":"2348139093320:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSVQbwoCpFrcgoLUgbG0ftyzRS5Eg9+qUq98NyPfQShi"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIIAg=="},"lastAccountSyncTimestamp":1756220451,"lastPropHash":"nm3Bb","myAppStateKeyId":"AAAAAEEZ","preKeys":{"private":{"type":"Buffer","data":"IEPAlDcLt5o+e59ZVy3VCe5xaEkeJf79pRy46fKyQk8="},"public":{"type":"Buffer","data":"dBfFKUlZuDW2Tnyw6fS+QDb+jrWPcp43FfqNBAYcV3E="}},"senderKeys":{},"timestamp":"2025-08-26T15:00:56.975Z"}
// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
