const Discord = require("discord.js");
const { MessageButton } = require('discord-buttons');
const humanize = require("humanize-duration")

exports.run = async (client, message, args) => {

    if (
        !message.member.roles.cache.has("813827624446722058") &&
        !message.member.roles.cache.has("814135856620503110") &&
        !message.member.roles.cache.has("813509830458998795") &&
        !message.member.roles.cache.has("813420700924248084") &&
        !message.member.roles.cache.has("813366978399043585") &&
        !message.member.roles.cache.has("814970434129756161"))
        return message.channel.send("Kayıt komutunu sadece **📝・Kayıt Sorumlusu** yetkisine sahip kişiler kullanabilir!");

    let kullanıcı = message.mentions.users.first() || client.users.cache.get(args.join(" "));
    if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed()
        .setColor("083B82")
        .setDescription("**»** Kayıt edebilmek için bir kullanıcı etiketlemelisin.")
    );

    const verilecekRol = message.guild.roles.cache.find((r) => r.id === "813366567475216403");
    const üye = message.guild.member(kullanıcı);
    const isim = args[1];

    if (üye.roles.cache.has("813366567475216403"))
        return message.channel.send(new Discord.MessageEmbed()
            .setColor("083B82")
            .setDescription("**»** Bu üye zaten kayıtlı.")
        );

    if (!isim)
        return message.channel.send(new Discord.MessageEmbed()
            .setColor("083B82")
            .setDescription("**»** Bir isim belirtmelisin!")
        );

    var oluşturulmaTimestamp = Date.now() - kullanıcı.createdAt.getTime()
    var oluşturulmaTarihi = humanize(oluşturulmaTimestamp, { language: "tr", round: true, largest: 4 })

    var katılmaTimestamp = Date.now() - üye.joinedAt.getTime()
    var katılmaTarihi = humanize(katılmaTimestamp, { language: "tr", round: true, largest: 4 })

    let onay = new MessageButton().setLabel('Kayıt İşlemini Tamamla').setID("onay").setStyle('green')
    let iptal = new MessageButton().setLabel('İptal Et').setID("iptal").setStyle('red')

    const filter = m => m.clicker.user.id == message.author.id;

    //Bu sistem, Nraphy botunun kaynak kodlarının yardımıyla yapılmıştır.

    message.channel.send({
        buttons: [onay, iptal],
        embed: {
            color: "083B82",
            author: {
                name: "\"" + kullanıcı.username + "\" kullanıcısı kayıt edilsin mi?",
                icon_url: kullanıcı.displayAvatarURL({ dynamic: true, size: 1024 }),
            },
            //description: "qurve",
            fields: [{
                name: '**»** İsim',
                value: '**•** ' + isim,
            },
            {
                name: '**»** Oluşturulma Süresi',
                value: '**•** ' + oluşturulmaTarihi,
            },
            {
                name: '**»** Sunucuya Katılma Süresi',
                value: '**•** ' + katılmaTarihi,
            }
            ],
            footer: {
                text: 'Bu sistem, Nraphy botunun kaynak kodları yardımıyla yapılmıştır.',
                icon_url: client.users.cache.get("700959962452459550").displayAvatarURL({ dynamic: true, size: 1024 }),
            },
        }
    }).then(async (m) => {
        const calc = m.createButtonCollector(filter)
        calc.on('collect', async btn => {
            btn.defer()
            if (btn.id === "onay") {
                üye.roles.add(verilecekRol);
                üye.setNickname(`${isim}`);
                let kayıtBilgi = db.fetch(`Uye_${üye.id}`);
                if (!kayıtBilgi) {
                  db.add(`Kayıt_${message.author.id}`, 1);
                  db.add(`HaftalıkKayıt_${message.author.id}`, 1);
                }
              
                db.set(`Uye_${üye.id}`, Date.now());
                db.set(`UyeYetkili_${üye.id}`, message.author.id);
                m.edit({
                    buttons: null,
                    embed: {
                        color: "GREEN",
                        author: {
                            name: "\"" + kullanıcı.username + "\" kullanıcısı kayıt edilsin mi?",
                            icon_url: kullanıcı.displayAvatarURL({ dynamic: true, size: 1024 }),
                        },
                        //description: "qurve",
                        fields: [{
                            name: '**»** İsim',
                            value: '**•** ' + isim,
                        },
                        {
                            name: '**»** Oluşturulma Süresi',
                            value: '**•** ' + oluşturulmaTarihi,
                        },
                        {
                            name: '**»** Sunucuya Katılma Süresi',
                            value: '**•** ' + katılmaTarihi,
                        }
                        ],
                        footer: {
                            text: 'Bu sistem, Nraphy botunun kaynak kodları yardımıyla yapılmıştır.',
                            icon_url: client.users.cache.get("700959962452459550").displayAvatarURL({ dynamic: true, size: 1024 }),
                        },
                    }
                })
            } else if (btn.id === "iptal") {
                m.edit({
                    buttons: null,
                    embed: {
                        color: "RED",
                        author: {
                            name: "\"" + kullanıcı.username + "\" kullanıcısı kayıt edilsin mi?",
                            icon_url: kullanıcı.displayAvatarURL({ dynamic: true, size: 1024 }),
                        },
                        //description: "qurve",
                        fields: [{
                            name: '**»** İsim',
                            value: '**•** ' + isim,
                        },
                        {
                            name: '**»** Oluşturulma Süresi',
                            value: '**•** ' + oluşturulmaTarihi,
                        },
                        {
                            name: '**»** Sunucuya Katılma Süresi',
                            value: '**•** ' + katılmaTarihi,
                        }
                        ],
                        footer: {
                            text: 'Bu sistem, Nraphy botunun kaynak kodları yardımıyla yapılmıştır.',
                            icon_url: client.users.cache.get("700959962452459550").displayAvatarURL({ dynamic: true, size: 1024 }),
                        },
                    }
                })
            }
        })
    })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["k", "kayit", "reg", "register"],
    permLevel: 0,
};
exports.help = {
    name: "kayıt",
    description: "Kayıt komutu",
    usage: "kayıt <@etiket> <İsim>",
};
