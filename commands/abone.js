const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  message.channel.send({
    embeds: [
      new Discord.EmbedBuilder()
        .setColor(0xF29200)
        .setAuthor({
          name: `GIBIRNet | Güvenilir, Hızlı İnternet!`,
          iconURL: client.user.avatarURL(),
        })
        .setDescription(`<:info:1009945445151297707> **» GIBIRNet Aboneliği Nedir?**
        GIBIRNet internet aboneliği, belirli bölgelerde kendi altyapısı ile
        Kalan bölgelerde Türk Telekom altyapısı ile Türkiye'nin 81 iline internet sağlayan
        BTK tarafından İSS ve AİH lisanslarına sahip bir internet servis sağlayıcısıdır.
        
        <:info2:1009945446753509377> **» Nasıl GIBIRNet'li Olunur?**
        *18 yaşını geçmiş, evinde altyapı bulunan herkes GIBIRNet'ten hizmet alabilir.*
        Aşağıdaki bağlantılar aracılığıyla online başvuru sayfasına erişebilirsiniz.
        Bu sayfa üzerinden size özel doldurulmuş sözleşmenin çıktılarını doldurup
        WhatsApp veya E-Mail aracılığıyla kimliğinizin iki yüzünün resmiyle birlikte
        Göndererek abonelik işlemlerinizi hızlandırarak başlatabilirsiniz.
        *Belgelerin asıllarını 3 iş günü içinde MNG Kargo'dan karşı ödemeli olarak*
        *"GIBIRNet İletişim Hizmetleri" adıyla veya "497827534" koduyla gönderebilirsiniz.*
        *Sıfırdan kurulumlar 1 hafta içinde, geçiş 48 saat içinde kesintisiz gerçekleşir.*

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
  aliases: ["abone-ol", "abonelik", "internet","gıbırnet", "gibirnet"],
  permLevel: 0,
  category: "SSS"
};

exports.help = {
  name: "abone",
  description: "GIBIRNet Aboneliği hakkında bilgi verir.",
  usage: "abone",
};
