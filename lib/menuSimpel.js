const menus = (prefix, pushname, jam, wib, hari, date) => {
  return `Halo ${pushname}👋
  
Jam : ${jam} || ${wib} WIB
Tanggal : ${date}

   *Berikut Adalah list Menu Bot🤖*

*CONVERT*
 •${prefix}sticker
 •${prefix}stickergif
 •${prefix}toimg
  
*OWNER*
 •${prefix}self
 •${prefix}public
 •${prefix}banchat
 •${prefix}unbanchat
  
*STORAGE*
 •${prefix}addcmd
 •${prefix}delcmd
 •${prefix}listcmd
  
*GROUP*
 •${prefix}welcome
 •${prefix}setwelcome
 •${prefix}delwelcome
 •${prefix}left
 •${prefix}setleft
 •${prefix}delleft

*Bot Creator By ©DidinSec〆⁩`
}

exports.menus = menus
