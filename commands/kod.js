const Discord = require("discord.js");
const db = require('quick.db'); 
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
var user = message.mentions.users.first() || message.author;
  message.channel.send(`<@!${user.id}>`, new Discord.MessageEmbed()
    .setColor("083b82")
    .setAuthor("GIBIRNet Oyun Ağı | Kod", client.user.avatarURL())
    .setDescription(`Herkese açık oyun ağları, 13 Mart 2021 tarihinde erişime kapatılmıştır.
    Detaylı bilgi için, [duyurulara](https://canary.discord.com/channels/746357184211714089/746357245557604382/819981654541467688) ve [SSS](https://discord.com/channels/746357184211714089/813518779635466290/821495538985074738) kanalına göz atabilirsiniz.

    GIBIRNet aboneleri, özel ağ üzerinden bağlantı sağlayabilir. 
    Abonelere özel ağ kodu; **e69f4cad04a4f063**
    GIBIRNet abonesi olmak için [gibir.net.tr](https://gibir.net.tr/) adresini inceleyebilirsiniz.`)
  )

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kod","Kod"],
  permLevel: 0
};

exports.help = {
  name: "kod",
  description: "Kod hakkında bilgi verir.",
  usage: "kod"
};
