const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var aylar = {
  "01": "Ocak",
  "02": "Şubat",
  "03": "Mart",
  "04": "Nisan",
  "05": "Mayıs",
  "06": "Haziran",
  "07": "Temmuz",
  "08": "Ağustos",
  "09": "Eylül",
  "10": "Ekim",
  "11": "Kasım",
  "12": "Aralık"
}
   
let zaman = (Date.now() + 10800000)
let tarih = `${moment(zaman).format('DD')} ${aylar[moment(zaman).format('MM')]} ${moment(zaman).format('YYYY')} ${moment(zaman).format('• HH:mm:ss')}`

const kurulum = message => {
  console.log(message);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  kurulum(`[${tarih}] Bot başlatılıyor... ${files.length} komut kuruluyor...`);
   //kurulum(`-------------------------`);
   files.forEach(f => {
    let Kodları = require(`./commands/${f}`);
  
    //kurulum(`[${tarih}] Kurulan Komut: ${Kodları.help.name}`);
    client.commands.set(Kodları.help.name, Kodları); 
    //kurulum(`-------------------------`);
    client.commands.set(Kodları.help.name, Kodları);
    Kodları.conf.aliases.forEach(alias => {
    client.aliases.set(alias, Kodları.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let Dosya = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, Dosya);
      Dosya.conf.aliases.forEach(alias => {
        client.aliases.set(alias, Dosya.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
 
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
if (!message.guild) return;
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === "700385307077509180") permlvl = 4;
  return permlvl;
};

var hataKontrol = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("error", e => {
  console.log("Hata oluştu!");
});

client.on("disconnect", e => {
  console.log("Botun bağlantısı kaybedildi!");
});

//----------------------Kurulum Btiş-----------------------------//

client.login("TOKEN");
require('discord-buttons')(client)