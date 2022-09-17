const Discord = require("discord.js"),
  { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js'),
  axios = require('axios'),
  db = require('quick.db');

module.exports = async (interaction) => {

  if (interaction.customId === 'aboneDogrulama') {

    const modal = new ModalBuilder()
      .setCustomId('aboneDogrulamaModal')
      .setTitle('baslikk');

    const testNoInput = new TextInputBuilder()
      .setCustomId('testNo')
      .setLabel("test no gir koc")
      .setStyle(TextInputStyle.Short);

    modal.addComponents(
      new ActionRowBuilder().addComponents(testNoInput)
    );

    await interaction.showModal(modal)

  } else if (interaction.customId === 'aboneDogrulamaModal') {

    const testNo = interaction.fields.getTextInputValue('testNo');

    const result = await axios.get(`https://gibir.net.tr/ip-adresi-ogrenme/dogrulama/${testNo}`)
      .catch(error => {
        return interaction.reply({
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
          }],
          ephemeral: true
        })
      })

    if (!result.data.includes("GIBIRNetli"))
      return interaction.reply({
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
        }],
        ephemeral: true
      });

    await interaction.member.roles.add(interaction.guild.roles.cache.get("816612305012785192"), "Abone teyit sistemi tarafından rol eklenmiştir.");
    await db.set(`aboneler.${interaction.user.id}`, {
      date: Date.now(),
      testNo: testNo,
      ip: result.data.slice("GIBIRNetli: ".length)
    })

    await interaction.reply({
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
      }],
      ephemeral: true
    })

  }

};
