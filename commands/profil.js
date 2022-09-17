const Discord = require("discord.js");
const db = require('quick.db');
const moment = require("moment");

exports.run = (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  let userData = db.fetch(`aboneler.${user.id}`)

  if (!userData) return message.reply({content: "? LAN BU ELEMANIN VERİSİ YOK NEYİNİ ÇIKARMAMI İSTİYON?"})

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
  let zaman = (userData.date)
  let tarih = `${moment(zaman).format('DD')} ${aylar[moment(zaman).format('MM')]} ${moment(zaman).format('YYYY')} ${moment(zaman).format('• HH:mm')}`

  message.channel.send({
    embeds: [
      new Discord.EmbedBuilder()
        .setColor(0xF29200)
        .setAuthor({
          name: `${user.tag}`,
          iconURL: user.avatarURL(),
        })
        .addFields(
          { name: 'Abone Rolünü Alma Tarihi', value: `${tarih}` },
          { name: 'Aynı Test Numarasına Sahip Üyeler', value: 'annen' },
        )
    ]
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["p"],
  permLevel: 0,
};

exports.help = {
  name: "profil",
  description: "zort.",
  usage: "profil",
};
