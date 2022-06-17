const Discord = require("discord.js");
const db = require('quick.db'); 
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
var user = message.mentions.users.first() || message.author;
  message.channel.send(`<@!${user.id}>`, new Discord.MessageEmbed()
    .setColor("083b82")
    .setAuthor("GIBIRNet Oyun Ağı | Lisans Sorunu", client.user.avatarURL())
    .setDescription(`Lisans hataları bir oyunu GIBIRNet Oyun Ağından oynayan kullanıcılar için belirlenen kullanıcı kotasının dolmasıdır. Lisans hatası aldığınız oyunu aşağıdaki bağlantıdaki konuya veya <#813737990299582494> kanalına bildirebilirsiniz.
      https://forum.gibir.net.tr/d/29-lisans-sorunlari-hakkinda/

      Belirttiğiniz taktirde GIBIRNet ekibi belirttiğiniz oyun için kapasite arttırımı yapacaktır. Yukarıdaki kanallardan birinde oyunu belirttikten sonra kapasite arttırımını beklemek veya belirli aralıklarla oyuna girmeyi denemek dışında yapabileceğiniz bir şey yoktur.

      Not: Bu sorunla ilgili hiçbir destek kanalını meşgul etmeyin! Aksi hâlde ceza alırsınız!`)
  )

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lisans"],
  permLevel: 0
};

exports.help = {
  name: "lisans",
  description: "Lisans sorunu hakkında bilgi verir.",
  usage: "lisans"
};
