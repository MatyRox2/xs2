const ms = require('ms');
const Discord = require('discord.js');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(message.member.hasPermission('MANAGE_MESSAGES')){
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'XS▹User');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove('735582408862203965');
                memberTarget.roles.add('742021675616567316');
                message.channel.send(`<@${memberTarget.user.id}> has been muted ✔️`);
                return
            message.channel.send('Cant find that member!');
            }

        }
    } else {
        message.channe.send('You coudnt mute this member ❌')
    }
}
}

