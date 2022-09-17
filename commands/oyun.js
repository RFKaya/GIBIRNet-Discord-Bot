const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  message.channel.send({
    embeds: [
      new Discord.EmbedBuilder()
        .setColor(0xF29200)
        .setAuthor({
          name: `GIBIRNet | Oyunlar Gelmiyor`,
          iconURL: client.user.avatarURL(),
        })
        .setDescription(`<:info:1009945445151297707> **» Oyunların Gelmesi için Ne Yapabilirim?**
        Öncelikle görev çubuğu tepsisinden Steam ikonuna sağ tıklayıp çık deyin.
        Ardından Steam'i açın, oyunlar kısa süre içinde kütüphanenize gelecektir.

        :pushpin: **»** Hala gelmiyorsa ağda yoğunluk/sorun olabilir, yetkililere danışın. 

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
  aliases: ["oyun", "Oyun", "Oyunlargelmiyor", "oyunlargelmiyor", "OyunlarGelmiyor", "oyunlar-gelmiyor", "Oyunlar-gelmiyor", "Oyunlar-Gelmiyor"],
  permLevel: 0,
  category: "SSS"
};

exports.help = {
  name: "oyun",
  description: "Oyun gelmeme sorunu hakkında bilgi verir.",
  usage: "oyun"
};
