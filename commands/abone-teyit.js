const Discord = require('discord.js');
const axios = require('axios');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  var testNo = args.join('')

  if (!testNo) return message.reply({
    embeds: [{
      color: 0xF29200,
      author: {
        name: 'GIBIRNet Abone Teyit • Nasıl Kullanılır?',
        icon_url: 'https://media.discordapp.net/attachments/818841289742352405/1009928358647316570/Renkli.png',
      },
      description:
        `[GIBIRNet • IP Adresi Öğrenme](https://gibir.net.tr/ip-adresi-ogrenme) sayfasından TestNo'nu kopyalayıp
      \`+abone-teyit TestNo\` komutunu yazarak abone rolü alabilirsin.`,
      image: { url: "https://cdn.discordapp.com/attachments/746357185348370524/1010489122302988288/unknown.png" }
    }]
  })

  var reply = await message.reply({
    embeds: [{
      color: 0xF29200,
      author: {
        name: 'GIBIRNet Abone Teyit • Doğrulama Aşaması',
        icon_url: 'https://media.discordapp.net/attachments/818841289742352405/1009928358647316570/Renkli.png',
      },
      description:
        `Girdiğin TestNo için kontrol ve doğrulama aşaması sürüyor.
        Beklediğin için teşekkür ederiz :pray:`,
      image: { url: "https://media.discordapp.net/attachments/818841289742352405/1010536239142801499/TestNoDogrulama.png" }
    }]
  })

  axios.get(`https://gibir.net.tr/ip-adresi-ogrenme/dogrulama/${testNo}`)
    .then(async result => {
      if (!result.data.includes("GIBIRNetli")) return reply.edit({
        embeds: [{
          color: 0xF29200,
          author: {
            name: 'GIBIRNet Abone Teyit • Doğrulama Tamamlanamadı',
            icon_url: 'https://media.discordapp.net/attachments/818841289742352405/1009928358647316570/Renkli.png',
          },
          description:
            `Adına üzüldüm... Maalesef GIBIRNet'li değilsin.
            [GIBIRNet'le güzel internet diyarlarına ulaşmak için tıkla.](https://gibir.net.tr/gibirnete-gecis-internet-aboneligi)

            *Detaylı bilgi ve yardım için <#746357185348370524> kanalına yazabilirsin.*`,
          image: { url: "https://media.discordapp.net/attachments/818841289742352405/1010619235904524398/GNetliDegilsin.png" }
        }]
      });

      //Doğrulama Embed Here
      /*message.reply({
        embeds: [{
          color: 0xF29200,
          author: {
            name: 'GIBIRNet Abone Teyit • Onay Aşaması',
            icon_url: 'https://media.discordapp.net/attachments/818841289742352405/1009928358647316570/Renkli.png',
          },
          description:
            `${result.data.slice("GIBIRNetli: ".length)} IP adresi ile GIBIRNet'li olduğun doğrulanmıştır.
          Verilerinin gizliliğe uygun olarak denetim için depolanmasına izin veriyor musun?
          
          *Statik IP hizmeti almayan kişiler CGNat havuzundan değişken IP almaktadır bu sebeple IP adresi bir önem arz etmemektedir.*`,
          image: { url: "https://media.discordapp.net/attachments/818841289742352405/1010546220416110613/GNetliDegilsin.png" }
        }]
      })*/

      await message.member.roles.add(message.guild.roles.cache.get("816612305012785192"), "Abone teyit sistemi tarafından rol eklenmiştir.");
      await db.set(`aboneler.${message.author.id}`, {
        date: Date.now(),
        testNo: testNo,
        ip: result.data.slice("GIBIRNetli: ".length)
      })
      await message.delete();
      reply.edit({
        embeds: [{
          color: 0xF29200,
          author: {
            name: 'GIBIRNet Abone Teyit • Doğrulama Tamamlandı',
            icon_url: 'https://media.discordapp.net/attachments/818841289742352405/1009928358647316570/Renkli.png',
          },
          description:
            `Doğrulama işlemi başarıyla tamamlandı.
            Merhaba GIBIRNet'li aramıza hoş geldin <a:elsalla:943572720149475348>`,
          image: { url: "https://media.discordapp.net/attachments/818841289742352405/1010580777102229625/GNetlisin.png" }
        }]
      })
    })
    .catch(error => {
      reply.edit({
        embeds: [{
          color: 0xF29200,
          author: {
            name: 'GIBIRNet Abone Teyit • Doğrulama Başarısız',
            icon_url: 'https://media.discordapp.net/attachments/818841289742352405/1009928358647316570/Renkli.png',
          },
          description:
            `Ne oldu biz de anlamadık... <:bilmem:924379748774346873>
            Tekrar deneyebilir veya yardım isteyebilirsin.
            
            Hata: ||${error}||`,
          image: { url: "https://media.discordapp.net/attachments/818841289742352405/1010602925317427324/Hata.png" }
        }]
      })
    })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['doğrulama', 'teyit'],
  permLevel: 0
};

exports.help = {
  name: 'abone-teyit',
  description: 'Girilen TestNoyu doğrular.',
  usage: '<TestNo> <@user>'
};