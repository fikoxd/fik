const fs = require('fs')

global.namabot = "BOTZ" // UBAH JADI NAMA LU
global.namaowner = "FIKOXD" // NAMA OWNER
global.footer_text = "© BOTZ" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283110933360'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER https://wa.me/6283110933360?text=kak_mau_sewa_bot_nya") // ISI HARGA SEWA BOT LU
global.script = ("BUY") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://chat.whatsapp.com/Hs2CAXVEJ1g9Fubb14F2a5" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\https://chat.whatsapp.com/Hs2CAXVEJ1g9Fubb14F2a5`) // GANTI LINK GRUB BOT LU \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoread = false // BEBAS
global.packname = 'FIKOXD' //sticker wm ubah
global.author = 'Di Buat Oleh FIKOXD' //sticker wm ganti nama kalian

/*
SUBS TOD
YT GUA
JER OFC 
*/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})