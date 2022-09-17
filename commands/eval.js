const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const chalk = require('chalk');
const fs = require('fs');
const { stripIndents } = require('common-tags');
const moment = require('moment');
const db = require('quick.db');
const Jimp = require('jimp')

exports.run = (client, message, args) => {
  if (message.author.id !== "700385307077509180" && message.author.id !== "460867393141342218" && message.author.id !== "348300663320739840") return message.channel.send(":no_entry: Heçkırımıza bak hele");
  try {
    var code = args.join(" ");
    var evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
    let Embed = new Discord.EmbedBuilder()
      .setDescription("```js\n" + clean(evaled) + "```")
    return message.channel.send({ embeds: [Embed] })
  } catch (err) {
    message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
  function clean(text) {
    if (typeof (text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
      return text;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
