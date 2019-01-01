const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
var prefix = "#";
 
    if (message.author.id === client.user.id) return;
    if (message.guild) {/Toxic Codes
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {/Toxic Codes
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {/Toxic Codes
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)/Toxic Codes
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {/Toxic Codes
        return;
    }
});

client.login(process.env.BOT_TOKEN);
