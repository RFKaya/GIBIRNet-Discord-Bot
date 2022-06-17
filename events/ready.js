const moment = require("moment");

module.exports = client => {

  var aylar = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  }
   
  let zaman = (Date.now() + 10800000)
  let tarih = `${moment(zaman).format('DD')} ${aylar[moment(zaman).format('MM')]} ${moment(zaman).format('YYYY')} ${moment(zaman).format('• HH:mm:ss')}`
  
  //Konsola "Bot Açıldı" Logu
  console.log(`[${tarih}] Tüm komutlar başarıyla kuruldu ve ${client.user.tag} olarak Discord'a giriş sağlandı.`);

  client.user.setStatus("online");
  client.user.setActivity("gibir.net.tr", { type: "WATCHING" });

  console.log(`[${tarih}] Şu an ` + client.guilds.cache.size + ` sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

};
