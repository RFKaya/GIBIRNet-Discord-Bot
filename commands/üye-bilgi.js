const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");

exports.run = (client, message, args) => {
    
    //return message.channel.send("Kullanma kardeşim, kullanma!")

  let member = message.mentions.users.first() || client.users.cache.get(args.join(" "));
  if (!member) return message.channel.send("Birini belirt, vururum bak kafana")

  let kayıtTarihi = db.fetch(`Uye_${member.id}`);
  if (!kayıtTarihi) return message.channel.send("Kayıtlarda kullanıcı bilgisi mevcut değil.")

  let kayıtYetkili = db.fetch(`UyeYetkili_${member.id}`);

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

  let zaman = (kayıtTarihi)
  let tarih = `${moment(zaman).format('DD')} ${aylar[moment(zaman).format('MM')]} ${moment(zaman).format('YYYY')} ${moment(zaman).format('• HH:mm')}`
  
  message.channel.send(new Discord.MessageEmbed()
    .setColor("083B82")
    .setDescription("**•** " + member.tag)
    .setAuthor("Üye Kayıt Bilgileri", client.user.avatarURL())
    //.setTitle("dsasad")
    .addField("Kayıt olma tarihi", tarih)
    .addField("Kayıt eden yetkili", `<@!${kayıtYetkili}>`))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üb", "üye-bilgi"],
  permLevel: 0
};
exports.help = {
  name: "üyebilgi",
  description: "Üye bilgi komutu",
  usage: "üyebilgi <@etiket>"
};
