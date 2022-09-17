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
        .setDescription(`<:info:1009945445151297707> **» Oyun Ağı Ne Durumda?**
        Herkese açık oyun ağları Steam'in yanlış kararına bağlı
        Hizmet feshi sonucu yaklaşık <t:1615582800:R> erişime kapatılmıştır.
        İşbirliğinin sonlandırılmasıyla ilgili bilgi için [buraya tıklayın.](https://discord.com/channels/746357184211714089/746357245557604382/819981654541467688)
        
        <:info2:1009945446753509377> **» Nasıl Bağlanabilirim?**
        GIBIRNet evde internet müşterileri abone ağı ile oyunlara erişebilir. 
        Abonelere özel oyun ağı kodu; **\`e69f4cad04a4f063\`**

        <:info:1009945445151297707> **» Nasıl GIBIRNet'li Olurum?**
        Detaylı bilgi için \`${ayarlar.prefix}abone\` komutunu kullanınız.

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
  aliases: ["kod","Kod"],
  permLevel: 0,
  category: "SSS"
};

exports.help = {
  name: "kod",
  description: "Kod hakkında bilgi verir.",
  usage: "kod"
};
