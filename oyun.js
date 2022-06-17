const Discord = require("discord.js");
const db = require('quick.db'); 
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
var user = message.mentions.users.first() || message.author;
  message.channel.send(`<@!${user.id}>`, new Discord.MessageEmbed()
    .setColor("083b82")
    .setAuthor("GIBIRNet Oyun Ağı | Oyunlar Gelmiyor", client.user.avatarURL())
    .setDescription(`Oyunları gelmeyen arkadaşlar; Öncelikle Steam'i ve servislerini bir defaya mahsus görev yöneticisinden sonlandırın
ardından oyun ağına olan bağlantınızı kesip Steam'e sağ tıklayıp yönetici olarak çalıştırın ve oyun ağına tekrardan bağlanın.
Oyunlarınız ortalama 30-45 dakika aralığında kütüphanenize düşecektir, gecikmeler yoğunluktan dolayıdır.
Eğer hala oyunlar kütüphanenize düşmediyse, bağlandığınız oyun ağına bağlantınızı kesip diğer bir oyun ağına bağlanın.

Not: Bu sorun ile ilgili hiçbir destek kanalını ve yetkiliyi meşgul etmeyiniz, aksi hâlde ceza alırsınız!`)
  )

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyun", "Oyun", "Oyunlargelmiyor", "oyunlargelmiyor", "OyunlarGelmiyor", "oyunlar-gelmiyor", "Oyunlar-gelmiyor", "Oyunlar-Gelmiyor"],
  permLevel: 0
};

exports.help = {
  name: "oyun",
  description: "Oyun gelmeme sorunu hakkında bilgi verir.",
  usage: "oyun"
};