const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  message.channel.send({
    embeds: [
      new Discord.EmbedBuilder()
        .setColor(0xF29200)
        .setAuthor({
          name: `GIBIRNet | Oyun Ağı Bilgi`,
          iconURL: client.user.avatarURL(),
        })
        .setDescription(`<:info:1009945445151297707> **» Lisans Sorunu Neden Olur?**
        Lisans hataları, oyunun ağ üzerindeki limitinin dolmasından ötürü ortaya çıkar.

        <:info2:1009945446753509377> **» Çözümü Nedir veya Ben Ne Yapabilirim?**
        Maalesef beklemekten başka bir şey yapamazsınız,
        Herkese açık ağların servis dışı kalması ile tüm lisanslar abone ağında toplanmıştır.
        Lisans sorunu yaşıyorsanız bu geçicidir lütfen 5-10 dakika içerisinde tekrar deneyiniz.
        Sorun daha da uzun sürerse yetkili ekibimize bildiriniz ilgili birime bilgi geçilecektir.

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
  aliases: ["lisans"],
  permLevel: 0,
  category: "SSS"
};

exports.help = {
  name: "lisans-sorunu",
  description: "Lisans sorunu hakkında bilgi verir.",
  usage: "lisans"
};
