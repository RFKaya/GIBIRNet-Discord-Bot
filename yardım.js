const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

    message.channel.send(new Discord.MessageEmbed()
    .setColor(0x083b82)
    .setThumbnail(client.user.avatarURL)
    .setAuthor(`${client.user.username} Botu • Yardım`, client.user.avatarURL())
    .setDescription(client.commands.map(kmt=>kmt.help.name).join(', '))
    .addField("**» Bağlantılar**", `[GIBIRNet Resmî Web Sitesi](https://gibir.net.tr/) • [GIBIRNet Forum Sayfası](https://forum.gibir.net.tr/) • [Sunucu Davet Bağlantısı](https://discord.gg/77w5ApQgA2)`));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};