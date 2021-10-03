const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./Hisnu.js')
nocache('../Hisnu.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))

const starts = async (Hisnu = new WAConnection()) => {
	Hisnu.logger.level = 'warn'
	console.log(color(figlet.textSync('KunzxD~', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('WA : https://wa.me/6287778886786', 'cyan'), color('Owner is online now!!', 'green'))
	console.log(color('Follow IG : @kunz.store', 'cyan'), color('Welcome Back, Owner!!', 'green'))
	Hisnu.browserDescription = ["Hisnu", "Firefox", "3.0.0"];

	// Menunggu QR
	Hisnu.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Scan Qr Nya'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && Hisnu.loadAuthInfo(`./${setting.sessionName}.json`)
	Hisnu.on('connecting', () => {
		console.log(color('SYSTEM', 'yellow'), color('Sabar Loading ....'));
	})

	//connect
	Hisnu.on('open', () => {
		console.log(color('SYSTEM', 'yellow'), color('Sukses Terhubung ✓'));
	})

	// session
	await Hisnu.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(Hisnu.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	Hisnu.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Hisnu.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	Hisnu.on('group-participants-update', async (anu) => {
		await welcome(Hisnu, anu)
	})

	Hisnu.on('chat-update', async (message) => {
		require('./Hisnu.js')(Hisnu, message)
	})
}

starts()