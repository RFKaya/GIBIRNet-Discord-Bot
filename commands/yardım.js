const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  message.channel.send({
    embeds: [
      new Discord.EmbedBuilder()
        .setColor(0xF29200)
        .setAuthor({
          name: `GIBIRNet | Yardım`,
          iconURL: client.user.avatarURL(),
        })
        .setDescription(`<:info:1009945445151297707> **» Genel Komutlar**  
        <:nokta2_gibirnet:1009917561548316772> Mavi  
        <:nokta_gibirnet:1009917554451550309> Turuncu  

        <:info2:1009945446753509377> **» SSS**  
        <:nokta_gibirnet:1009917554451550309> Turuncu  
        <:nokta2_gibirnet:1009917561548316772> Mavi  

        :pushpin: **»** Yardıma ihtiyacınız varsa <#1019990842401898619> kanalında konu açabilirsiniz.  

        :link: **» İlgili Bağlantılar;**  
        [Abone Ol!](https://gibir.net.tr/gibirnete-gecis-internet-aboneligi) • [Altyapı Sorgula](https://gibir.net.tr/gibirnet-alt-yapi-sorgulama) • [Paketler](https://gibir.net.tr/#paketler) • [Sıkça Sorulan Sorular](https://gibir.net.tr/sikca-sorulan-sorular)`)
      //.setTimestamp()
      //.setFooter(`${message.member.guild.username}, tarafından istendi.`)
    ]
  });

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
