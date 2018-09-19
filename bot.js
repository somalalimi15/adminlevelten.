const Discord = require("discord.js")
const client = new Discord.Client()

const devs = ['368768446327947265'];

const prefix = "$"

client.on('message', message => {
                    var prefix = "$";

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  
  client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'Join System') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});
  
 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$Members 2')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("**خـيـر آخـوي . ؟**");
    }
});

client.on('ready',async () => {
  sendReady('491270177971765248', `MESSAGE`);
  
  function sendReady(channel, message) {
    client.channels.get(channel).send(message);
    console.log(message);
  }
});
  
  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});
  
client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رسـالـة جـديـدة فـي خـآص الـبـوت .``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("491270177971765248").send({ embed: stewart });
    }
});





const D = require("discord.js");
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
    };
});
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
};

function datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
};

client.on("message", async message => {
    if(message.channel.type === "dm") return;
     if(message.content === (prefix + "System Time")) { /// حط اي كلمة تبيها
     if (!message.channel.guild) return message.reply('**هذا الامر للسيرفرات فقط**');
        let uptime = client.uptime;
    
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let notCompleted = true;
    
        while (notCompleted) {
    
            if (uptime >= 8.64e+7) { ///لا تعدل اي شي 
    
                days++;
                uptime -= 8.64e+7;
    
            } else if (uptime >= 3.6e+6) {
    
                hours++;
                uptime -= 3.6e+6;
    
            } else if (uptime >= 60000) {
    
                minutes++;
                uptime -= 60000;
    
            } else if (uptime >= 1000) {
                seconds++;
                uptime -= 1000;
    
            }
    
            if (uptime < 1000)  notCompleted = false;
    
        }
    
        message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");
    
    
    }
     });

   

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '$ping') {
    msg.channel.send('**Pong!**');
  }
});

  

   client.on('message' , message => {
    if (message.content === '$dev bot') {
             let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)    
          .addField("**تم تطوير وبرمجه البوت من قبل 🔧 **","** SoM , #1100 **")
    .setColor('#B101FC')
      message.author.sendEmbed(embed);
        }
    });

    client.on('message' , message => {
        if(message.content === '$voice onnline in rooms') {
            message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
        }
        });
       
        client.on('ready', () => {
            client.user.setActivity("On.Rz  . | Owner : SoM .",{type: 'streaming'});
       
       });

const fs = require('fs')
const p = {}
const premium = ['368768446327947265']
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "$"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
    message.channel.send(`**${message.guild.name}'تم تغيير البرفكس ${newPrefix}**`);
} 
if (message.content === prefix + "mutechannel") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم تقفيل الشات ✅** ")
           });
             }


});

client.on('ready',async () => {
  sendReady('491517470138433536', `**__ تـم تـشـغـيـل الـبـوت بـنـجـاح , System Bot | Owner Bot : SoM # 1100__**`);
  
  function sendReady(channel, message) {
    client.channels.get(channel).send(message);
    console.log(message);
  }
});

client.on('message', message => {
  if(message.content.startsWith(`${prefix}invites`)) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});  
  }	
});


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["368768446327947265"];
if (message.content.startsWith(prefix + 'own')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**   جا صاحب البوت هنا الكل يوقف**` + `✅`)
} else {
   message.reply('**انت لست صاحب البوت**' + '❌');   
}
}
});

client.on('ready', () => {
  client.user.setGame('codes_support',`https://www.twitch.tv/`);
  console.log('codes_support');
});
client.on('message', message => {
 if (message.content.includes('discord.gg')){      //شيل المسافه
                     if(!message.channel.guild) return message.reply ('')
                 if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
    message.delete() 
     var member = message.member
    
 
       
          member.kick().then((member) => {
              message.channel.send("", {embed: {
              author: {
              },
              title: 'بسبب النشر ' + member.displayName + ' تم طرد',
              color: 490101,
              }
            });
        }
      ) 
    }
}
});

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "DzGaming Official Server")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + '$مسح')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.on('message', message => {
 if (message.content.startsWith('$info sm')) {
  var norElden= new Discord.RichEmbed()
  .addField('اسم السيرفر ',` **__${message.guild.name}__**`)
      .addField('عدد الاعضاء',`**__${message.guild.memberCount}__**`)
  .setColor('RANDOM')
message.channel.send({ embed: norElden });
  }
});

client.login(process.env.BOT_TOKEN);

