const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (Marcel, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)	    
	    if (!isWelcome) return
		try {
			const mdata = await Marcel.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Marcel.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				} 
				let buff = await getBuffer(ppimg)
				buttons = [
                { buttonId: `98`, buttonText: { displayText: "Welcome Member Baru 🐦" }, type: 1 },]
                imageMsg = (
                await Marcel.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
            ).imageMessage;
          buttonsMessage = {
          contentText: `━━━ *「 𝑊𝐸𝐿𝐶𝑂𝑀𝐸 」* ━━━
				
𝑯𝒂𝒍𝒍𝒐 >< @${num.split("@")[0]} 👋
𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑫𝒂𝒕𝒂𝒏𝒈 𝑫𝒊 𝑮𝒓𝒖𝒑 ${mdata.subject}
𝑩𝒖𝒅𝒂𝒚𝒂𝒌𝒂𝒏 𝑩𝒂𝒄𝒂 𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑫𝒂𝒏 𝑷𝒂𝒕𝒖𝒉𝒊 𝑷𝒆𝒓𝒂𝒕𝒖𝒓𝒂𝒏 𝑮𝒓𝒖𝒑`,
          footerText: "Welcome Message",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await Marcel.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        Marcel.relayWAMessage(prep)     				             
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Marcel.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buff = await getBuffer(ppimg)
				buttons = [
                { buttonId: `98`, buttonText: { displayText: "𝐵𝑎𝑙𝑖𝑘 𝐻𝑎𝑟𝑢𝑠 𝐷𝑜𝑛𝑎𝑠𝑖 🗿" }, type: 1 },]
                imageMsg = (
                await Marcel.prepareMessageMedia(buff, "imageMessage", {
                thumbnail: buff,
               })
            ).imageMessage;
          buttonsMessage = {
          contentText: `𝐴𝑤𝑎𝑠 𝐿𝑢ℎ 𝐴𝑗𝑔 𝐵𝑎𝑙𝑖𝑘 𝐿𝑎𝑔𝑖 🗿\n@${num.split('@')[0]}`,
          footerText: "Left Message",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await Marcel.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        Marcel.relayWAMessage(prep)     		
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
