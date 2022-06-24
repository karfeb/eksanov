const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

// Other
global.owner = ['6287864598751']
global.premium = ['6287864598751']
global.botname = 'Hfxz'
global.ownername = 'Eksanov'
global.packname = 'Hfxz'
global.author = 'Eksanov'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','#','🗿']
global.sp = '⭔'
global.mess = {
success: '_Done_',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Waiting..._',
endLimit: '_Limit Harian Anda Telah Habis_',
}
global.limitawal = {
premium: "Infinity",
free: 25
}
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
