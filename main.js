//const
const Discord = require('discord.js')
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const mongoose = require("mongoose")
const ms = require('ms')
const fs = require ('fs');
const prefix = '?';
//const memberCounter = require('./counters/member-counter');
client.commands = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
//level
const Levels = require('discord-xp')
Levels.setURL(process.env.MONGODB_SRV) 

client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;


 //   const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
 //   const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  //  if (hasLeveledUp) {
 //       const user = await Levels.fetch(message.author.id, message.guild.id);
 //       message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
 //   }

    

    }
)



//welcomed
//client.on('guildMemberAdd', guildMember =>{
 //   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '【❄️】Member');

  //  guildMember.roles.add(welcomeRole);
  //  guildMember.guild.channels.cache.get('840492127477694474').send(`Bine ai venit pe server <@${guildMember.user.id}>`)
//})


//status
client.on('ready', () => {
    console.log('XSTREAM BOT IS ONLINE')
    client.user.setActivity(`#xstream1st!`, { type: "WATCHING" }).catch(console.error)
  //  memberCounter(client)
})

//command handeler
client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'reactionrole1'){
        client.commands.get('reactionrole1').execute(message, args, Discord, client);
    } else if (command === 'tempmute'){
        client.commands.get('tempmute').execute(message, args);
 //   } else if(command === 'rank'){
 //       client.commands.get('rank').execute(client, message, args);
  //  } else if(command === 'leaderboard'){
  //      client.commands.get('leaderboard').execute(client, message, args);
    } else if(command === 'warn'){
        client.commands.get('warn').execute(client, message, args);
    } else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
    } else if(command === 'user-info'){
        client.commands.get('user-info').execute(message, args);
    } else if(command === 'nuke'){
        client.commands.get('nuke').execute(message, args);
    } else if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    } else if(command === 'gayrate'){
        client.commands.get('gayrate').execute(client, message, args);
    } else if(command === 'simprate'){
        client.commands.get('simprate').execute(client, message, args);
    } else if(command === 'tictactoe'){
        client.commands.get('tictactoe').execute(client, message, args);
    } else if(command === 'hangman'){
        client.commands.get('hangman').execute(client, message, Discord, args);
    } else if(command === 'rps'){
        client.commands.get('rps').execute(client, message, Discord, args);
    } else if(command === 'poll'){
        client.commands.get('poll').execute(client, message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(client, Discord, message, args);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(client, message);
    } else if(command === 'weather'){
        client.commands.get('weather').execute(client, message, args);
    } else if(command === 'lock'){
        client.commands.get('lock').execute(client, message, args);
    } else if(command === 'unlock'){
        client.commands.get('unlock').execute(client, message, args);
    } else if(command === 'snake'){
        client.commands.get('snake').execute(client, message, args);
    }
 
 

});
//giveaway
//client.on('message', async message => {
 //   let args = message.content.substring(prefix.length).split(" ")
//    if(message.member.permissions.has('ADMINISTRATOR')){
 //   if (message.content.startsWith(`${prefix}giveaway`)) {
 //       let time = args[1]
   //     if (!time) return message.channel.send('You did not specify a time!');

  //      if (
    //        !args[1].endsWith("d") &&
  //          !args[1].endsWith("h") &&
   //         !args[1].endsWith("m") &&
    //        !args[1].endsWith("s") 
    //    )
   //         return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds)')
//
    //        let gchannel = message.mentions.channels.first();
        //    if (!gchannel) return message.channel.send("I can't find that channel in the server!")

     //       let prize = args.slice(3).join(" ")
      //      if (!prize) return message.channel.send('Arguement missing. What is the prize?')

    //        message.delete()
      //      gchannel.send(":tada: **NEW GIVEAWAY** :tada:")
       //     let gembed = new Discord.MessageEmbed()
          //      .setTitle("New Giveaway!")
        //        .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime: **${time}**\nPrize: **${prize}**`)
          //      .setTimestamp(Date.now + ms(args[1]))
          //      .setColor(3447003)
      //      let n = await gchannel.send(gembed)
     //       n.react("🎉")
    //        setTimeout(() => {
        //        if(n.reactions.cache.get("🎉").count <= 1) {
          //          return message.channel.send("Not enough people for me to draw a winner!")
    //            }

    //            let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
      //          gchannel.send(`Congratulations ${winner}! You just won the **${prize}**!`
         //       );
        //    }, ms(args[1]));
  //  }
 // }
//});







//client login

client.login(process.env.DISCORD_TOKEN)