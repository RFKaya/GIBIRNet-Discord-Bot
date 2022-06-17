const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {

  return message.channel.send("bu sistem rahmetli oldu krdş")
  //Eski kayıt sistemi

  const verilecekRol = message.guild.roles.cache.find((r) => r.id === "813366567475216403");

  if (
    !message.member.roles.cache.has("813827624446722058") &&
    !message.member.roles.cache.has("814135856620503110") &&
    !message.member.roles.cache.has("813509830458998795") &&
    !message.member.roles.cache.has("813420700924248084") &&
    !message.member.roles.cache.has("813366978399043585") &&
    !message.member.roles.cache.has("814970434129756161"))
    return message.channel.send("Kayıt komutunu sadece **📝・Kayıt Sorumlusu** yetkisine sahip kişiler kullanabilir!");

  let member = message.mentions.users.first() || client.users.cache.get(args.join(" "));
  if (!member) return message.channel.send(new Discord.MessageEmbed()
    .setColor("083B82")
    .setDescription("Kayıt edebilmek için bir kullanıcı etiketlemelisin.")
  );

  const c = message.guild.member(member);
  const nick = args[1];

  if (!nick)
    return message.channel.send("Kayıt edebilmek için bir isim giriniz.");
  c.roles.add(verilecekRol);
  c.setNickname(`${nick}`);

  /*setTimeout(() => {
    if (c.roles.cache.has("813366567475216403")) {
      message.react("✅");
    } else {
      setTimeout(() => {
        if (c.roles.cache.has("813366567475216403")) {
          message.react("✅");
        } else {
          setTimeout(() => {
            if (c.roles.cache.has("813366567475216403")) {
              message.react("✅");
            } else {
              message.react("❌");
              //message.channel.send("Bir hata oluştu!")
              //client.channels.cache.get("814546047858114672").send("Abiler ablalar, kayıt sisteminde sorun çıktı. Komşular yetişin <@!700385307077509180>")
            }
          }, 5000);
        }
      }, 2500);
    }
  }, 1500);*/

  //daha önce kayıt olduysa +1 vermeyecek
  let kayıtBilgi = db.fetch(`Uye_${c.id}`);
  if (!kayıtBilgi) {
    db.add(`Kayıt_${message.author.id}`, 1);
    db.add(`HaftalıkKayıt_${message.author.id}`, 1);
  }

  db.set(`Uye_${c.id}`, Date.now());
  db.set(`UyeYetkili_${c.id}`, message.author.id);

  /*const log = message.guild.channels.cache.find(
    (c) => c.id === "815190500310253569"
  );
  const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.username + " Botu • Yeni Üye Kayıt Edildi!", client.user.avatarURL())
      .addField(`Kaydı Yapılan Üye\n`, `${c.user.tag} / <@!${c.user.id}>`)
      .addField(`Kaydı Yapan Yetkili\n`, `${message.author.tag} <@!${message.author.id}> (Toplam **${db.fetch(`Kayıt_${message.author.id}`)}** kaydı bulunuyor.)`)
      .addField(`Üye'nin Yeni İsmi\n`, `${nick}`)
      .setThumbnail(c.user.avatarURL())
      .setFooter(client.user.username + " Botu " + ayarlar.devteam,client.user.avatarURL())
      .setColor(0x083b82);
    log.send(embed);*/

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
exports.help = {
  name: "rahmetli-kayıt-sistemi",
  description: "Kayıt komutu",
  usage: "kayıt <@etiket> <İsim>",
};
