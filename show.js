const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Potrolling around ${client.guilds.size} servers`);
});
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});  
client.on('ready', () => {
});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        channel.sendEmbed(embed);
  });
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'want-to-join');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member} if you want to join DM one of the detectives or above roles to let you in or the bot will kick you in 5mins`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        channel.sendEmbed(embed);
  });
client.on('guildMemberAdd', member => {
    console.log(`${member}`, "has joined" + `${member.guild.name}`)
});
client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'goodbye');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Left the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()
        channel.sendEmbed(embed);
});
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
 wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "invite-logs");
    logChannel.send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
  });
});
client.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
  
});
client.on('message', msg => {
  if (msg.content === 'Trooper') {
    msg.reply('hmmmmm, oh yes my Lord');
  }
});
client.on('message', msg => {
  if (msg.content === 'marry me Trooper') {
    msg.reply('hmmmm, marry you say? no thank you');
  }
});
client.on('message', msg => {
  if (msg.content === 'Fuck me Trooper') {
    msg.reply('hmmmm, Fuck me you say? no thank you *wink wink*');
  }
});
client.on('message', msg => {
  if (msg.content === 'Trooper fml') {
    msg.reply('hmmmmm, why would I it already is');
  }
});
client.on('message', msg => {
  if (msg.content === 'Trooper WTF is happening') {
    msg.reply('hmmmmm, shit is going down');
  }
});
client.on('message', msg => {
  if (msg.content === 'Trooper your gay') {
    msg.reply('hmmmmm, Maybe and maybe not but 20 is 20');
  }
});
client.on('message', msg => {
  if (msg.content === 'Fuck you trooper') {
    msg.reply('hmmmmm, oh yes fuck you too');
  }
});
client.on('message', msg => {
  if (msg.content === 'fuck you trooper') {
    msg.reply('hmmmmm, oh yes fuck you too');
  }
});
client.on('message', msg => {
  if (msg.content === 'fuck u trooper') {
    msg.reply('hmmmmm, oh yes fuck you too');
  }
});
client.on('message', msg => {
  if (msg.content === 'f u trooper') {
    msg.reply('hmmmmm, oh yes fuck you too');
  }
});
client.on('message', msg => {
  if (msg.content === 'F u trooper') {
    msg.reply('hmmmmm, oh yes fuck you too');
  }
});
client.on('message', msg => {
  if (msg.content === 'Fuck trooper') {
    msg.reply('hmmmmm, but you cant once I cut your dick off');
  }
});
client.on('message', msg => {
  if (msg.content === 'oh no trooper') {
    msg.reply('hmmmmm, oh no indeed');
  }
});
client.on('message', msg => {
  if (msg.content === 'Oh no trooper') {
    msg.reply('hmmmmm, oh no indeed');
  }
});
client.on('message', msg => {
  if (msg.content === 'religion Trooper') {
    msg.reply('hmmmmm, oh you wish to know https://www.youtube.com/watch?v=w0qVciN4lTs');
  }
});
client.on('message', msg => {
  if (msg.content === 'religion trooper') {
    msg.reply('hmmmmm, oh you wish to know https://www.youtube.com/watch?v=w0qVciN4lTs');
  }
});
client.on('message', msg => {
  if (msg.content === 'rise trooper') {
    msg.reply('hmmmmm, https://tenor.com/view/knight-knights-gif-5089578');
  }
});
client.on('message', msg => {
  if (msg.content === 'rise Trooper') {
    msg.reply('hmmmmm, https://tenor.com/view/knight-knights-gif-5089578');
}
});
client.on('message', msg => {
  if (msg.content === 'trooper fuck') {
    msg.reply('hmmmmm, oh do you want me to fuck? https://tenor.com/view/king-knights-gif-4932720');
}
});
client.on('message', msg => {
  if (msg.content === 'Trooper fuck') {
    msg.reply('hmmmmm, oh do you want me to fuck? https://tenor.com/view/king-knights-gif-4932720');
}
});
client.on('message', msg => {
  if (msg.content === 'trooper fuck @user') {
    msg.reply('hmmmmm, I see who, but I rather dab. https://tenor.com/view/vult-knights-deus-dab-templar-%F0%9F%85%B1%EF%B8%8F-gif-12287040');
}
});
client.on('message', msg => {
  if (msg.content === 'should I do it trooper') {
    msg.reply('hmmmmm, DEUS VULT!!! https://tenor.com/view/deus-vult-erection-knockback-gif-10640012');
}
});
client.on('message', msg => {
  if (msg.content === 'Should I do it trooper') {
    msg.reply('hmmmmm, DEUS VULT!!! https://tenor.com/view/deus-vult-erection-knockback-gif-10640012');
}
});
client.on('message', msg => {
  if (msg.content === 'Should I do it Trooper') {
    msg.reply('hmmmmm, DEUS VULT!!! https://tenor.com/view/deus-vult-erection-knockback-gif-10640012');
}
});
client.on('message', msg => {
  if (msg.content === 'should I do it Trooper') {
    msg.reply('hmmmmm, DEUS VULT!!! https://tenor.com/view/deus-vult-erection-knockback-gif-10640012');
}
});
    
client.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
    if(command === 'help') {
      message.channel.send('```hmmmmm, oh yes my prefix is *```');
      message.channel.send('```hmmmmm, and my commands are *say, *ban, *kick, *purge,and I can also respond to certain text if it ends in trooper```');
      message.channel.send('```hmmmmm, and if you make a "welcome" channel I will welcome them, also if you make a "goodbye" channel I will say bye```');
      message.channel.send('```hmmmmm, "*lockdown 1" to lockdown channel. "*lockdown unlock" to stop the lockdown```');
      message.channel.send('```hmmmmm, "if you make a "invite-logs" channel it will log the people who sent the invites. Helpful in end raid```');
    }
  
    if(command === 'rules') {
       
       message.channel.send('```1. No spamming or flooding the chat with messages, symbols or pictures etc.```')
       message.channel.send('```2. Do not type in all Caps, Bold, Italic or other formats unless youre a  Admin.```')
       message.channel.send('```3. adult (18+), explicit images etc, go to the NSFW channel.```')
       message.channel.send('```4. No racist or degrading content.```')
       message.channel.send('```5. No excessively cursing.```')
       message.channel.send('```6. No advertising other sites/discord servers without permission.```')
       message.channel.send('```7. No posting external links other than direct links to youtube.```')
       message.channel.send('```8. No using peoples usernames andor posing as them.```')
       message.channel.send('```9. No begging or repeatedly asking for permissions in the chat.```')
       message.channel.send('```10. No offensive names or names which contain swear words.```')
       message.channel.send('```11. Do not argue with staff there decisions are final.```')
       message.channel.send('```12. Do not repeatedly message Moderators or Admins without permission.```')
       message.channel.send('```13. Do not message people, Moderators or Admins with "Stupid" question```')
                                                          
    }
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
 
}
  if(command === "ban") {
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  if(command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  if(command === "lockdown") {
    let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
