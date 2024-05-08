//saya cuman pemula bang

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner = "6283119871896"
global.nomerOwner = "6283119871896"
global.ownerName = "Xenzzz"
global.namabot = "Xenzzz-MD"
global.botName = "Xenzzz-MD"
global.autojoin = true
global.authorName = "session"//hati hati error
global.packName = "sesi-7"
global.namastore = "Xenzzz"
global.nodana = "083119871896"
global.noovo = "-"
global.nogopay = "083119871896"
global.qris = "-"//masukan link telegra.ph untuk qris, jadi kalian upload ke telegra.ph terlebih dahulu
global.texT = `Xenzzz`//
global.texT = `Xenzzz`//

global.sgc = "-"//masukan url link grup kalian jika ada, jika tidak ada maka biarkan saja kosong
global.syt ="-"
global.sig = "-"
const mess = {
    wait: '_sedang di proses mohon untuk menunggu_',
    query: 'masukan query',
    search: 'searching...',
    scrap: '*scraping...*',
    success: 'sukses...',
    err: 'terjadi kesalahan, coba lagi nanti!',
    limit: '[!] limit kamu sudah habis, silahkan ketik .limit untuk membeli limit',
    claimOn: 'kamu sudah bisa melakukan claim sebelumnya, harap claim terlebih dahulu',
    wrongFormat: 'format salah, silahkan lihat kembali fitur di .menu',

    error: {
        stick: 'itu bukan sticker!, silahkan kirim sticker',
        lv: 'link nya error!, mohon coba lagi nanti',
        link: "link error!"
    },
    block: {
        Bowner: 'maaf command mengalami errors, silahkan coba kembali besok',
        Bsystem: 'fitur ini telah di block oleh system karna mengalami error',
    },
    only: {
        prem: 'maaf kak fitur ini dapat digunakan untuk member premium saja',
        ownerB: 'fitur ini khusus owner bot saja',
        owner: 'maaf kak fitur ini khusus owner ku',
        admin: 'maaf fitur ini dapat digunakan oleh admin group',
        Badmin: 'jadikan Xenzzz sebagai admin terlebih dahulu',
    }

}

global.mess = mess
//==============================================//
 global.fotoRandom = [
    "https://telegra.ph/file/241d7180c0283ab401434.jpg",
    "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",
    "https://telegra.ph/file/392bc8e81ae188754.jpg",
    "https://telegra.ph/file/26abe0a835fe5d4cc2e41.jpg",
    "https://telegra.ph/file/a2b84d6ab76d01cefa658.jpg",

 ]
 // Apikey
 global.api = {

 }
 //gausah juga
 global.gcounti = {
    'prem' : 1000,
    'user' : 20
 }
 //================================================//
 let file = require.resolve(_filename)
 fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`update'${_filename}'`))
    require(file)
})