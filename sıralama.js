const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  //Sıralama komutunun kaynak kodları Nraphy Discord botundan alınmıştır.

  const sorted = message.guild.members.cache
    //.filter(u => !u.bot)
    .array()
    .sort((a, b) => {
      return ((db.fetch(`HaftalıkKayıt_${b.user.id}`) ? db.fetch(`HaftalıkKayıt_${b.user.id}`) : 0) - (db.fetch(`HaftalıkKayıt_${a.user.id}`) ? db.fetch(`HaftalıkKayıt_${a.user.id}`) : 0));
    });
  
  const top10 = sorted.splice(0, 10);
  
  const mappedCoin = top10
    //.filter(o => !o.bot)
    .map(s => db.fetch(`HaftalıkKayıt_${s.user.id}`) || 0);
  
  const mappedName = top10/*.filter(o => !o.bot)*/.map(s => s.user);
  
  let kedjik = [];
  
  for (var i = 0; i < 10; i++) {
    var coin = mappedCoin[i];
    var name = mappedName[i];
    if (coin > 0) {
      kedjik.push(`${i + 1}. ${name.toString()} • ${coin} Kayıt \n`);
    }
  }

  let embed = new Discord.MessageEmbed()
    .setColor("083b82")
    .setAuthor("Kayıt Sıralaması", client.user.avatarURL())
    //.setTitle("**»** NC Sıralaması")
    .setDescription(kedjik)

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["liderlik"],
  permLevel: 0
};

exports.help = {
  name: "sıralama",
  description: "Sunucudaki kayıt sıralamasını gösterir.",
  usage: "sıralama"
};
