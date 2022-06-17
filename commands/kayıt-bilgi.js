const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {
   
  //return message.channel.send("Bu komut daha hazır değil. Hem sen bu komutun varlığını nereden biliyorsun?")

  let member = message.mentions.users.first() || client.users.cache.get(args.join(" "));
  if (!member) return message.channel.send("Birini belirt, vururum bak kafana")
  message.channel.send(member.username + " • " + db.fetch(`Kayıt_${member.id}`))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kb", "kayıt-bilgi"],
  permLevel: 0
};
exports.help = {
  name: "kayıtbilgi",
  description: "Kayıt bilgi komutu",
  usage: "kayıtbilgi <@etiket>"
};
