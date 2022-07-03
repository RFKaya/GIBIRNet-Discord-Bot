const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');
const db = require('quick.db');
const { MessageButton } = require('discord-buttons');
const humanize = require("humanize-duration")

exports.run = async (client, message, args) => {

  let abone = message.guild.roles.cache.find((r) => r.id === "816612305012785192");
  
  var user;
  if(message.member.permissions.has('MANAGE_ROLES')) user = message.mentions.users.first() || client.users.cache.get(args.slice(1)) || message.author;
  else user = message.author;
  
  var aboneKayitTarihi = db.get(`Abone_${user.id}`);
  var aboneyiKaydeden = db.get(`Kaydeden_${user.id}`);
  
  var testNo = args.slice(0);
  let url = `https://gibir.net.tr/ip-adresi-ogrenme/dogrulama/${testNo}`;
  
  url = `https://gibir.net.tr/ip-adresi-ogrenme/dogrulama/${testNo}`;
  snekfetch.get(url).then(r => {
  var verifyPage = decodeURIComponent(r.body);
  message.delete();
  if(verifyPage.includes("GIBIRNetli")) {
  message.reply("GIBIRNet'lisiniz...");
  db.set(`Abone_${user.id}`, Date.now());
  db.set(`Kaydeden_${user.id}`, message.author.id);
  if(!message.member.roles.cache.has(abone)) return message.member.roles.add(abone, "Abone teyit sistemi tarafından rol eklenmiştir.");
}
  else {
  message.reply("GIBIRNet'li değilsiniz, hızınıza hız katmak için...");
  if(message.member.roles.cache.has(abone)) return message.member.roles.remove(abone, "Abone teyit sistemi tarafından rol eklenmiştir.");
}});
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['doğrulama'],
  permLevel: 0
};

exports.help = {
  name: 'abone-teyit',
  description: 'Girilen TestNoyu doğrular.',
  usage: '<TestNo> <@user>'
};
