const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, args) => {

  var user = message.mentions.users.first() || message.author;

  message.channel.send(`<@!${user.id}>`, new Discord.MessageEmbed()
      .setColor(0x083b82)
      .setAuthor(`GIBIRNet Aboneliği Nedir? | Nasıl GIBIRNet’li Olunur?`, client.user.avatarURL)
      .setDescription(`GIBIRNet internet aboneliği, Türk Telekom altyapısı aracılığıyla Türkiye'nin 81 ilinde hizmet veren, bir internet sağlayıcısıdır.\n\nDetaylı bilgi için kullanabileceğiniz bağlantılar; \n• [Nasıl GIBIRNet’li Olunur?](https://discord.com/channels/746357184211714089/813518779635466290/814935763858751512) • [İnternet Tarifeleri](https://gibir.net.tr/#paketler) • [GIBIRNet SSS](https://gibir.net.tr/sikca-sorulan-sorular) • `)
      //.setTimestamp()
      //.setFooter(`${message.member.guild.username}, tarafından istendi.`)
  );

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone", "abonelik", "internet"],
  permLevel: 0,
};

exports.help = {
  name: "abone",
  description: "GIBIRNet Aboneilği hakkında bilgi verir.",
  usage: "abone",
};
