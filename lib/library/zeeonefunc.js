const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   WAMessageProto,
   relayWAMessage,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const simple = require("./simple.js");
const fs = require('fs')
const WAConnection = simple.WAConnection(_WAConnection);
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./functions')
const { color } = require('./color')
const Zeeone = new WAConnection()

const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Zeeone.prepareMessage(id, kma, MessageType.location)
buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Zeeone.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButMessage = async (id, text1, desc1, but = [], options = {}) => {
buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Zeeone.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };

module.exports = { sendButMessage, sendButLocation}