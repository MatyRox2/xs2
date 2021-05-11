const Discord = require('discord.js')
module.exports = {
    name: 'help',
    description: "The help command",
async execute(client, Discord, message, args) {

const sectionEmbed = new Discord.MessageEmbed()
   .setTitle('Bot Help Sections')
   .setDescription('Use ?help sectionName to access another section.\nSections:\nfun\nmoderation\ntool\ngame\ninfo')
   .addField('Fun Commands', 'Commands that all users can user that are for fun and have no purpose.')
   .addField('Moderation commands', 'Commands that are for moderation purposes within a server.')
   .addField('Game commands', 'The games that are for more fun on the server!')
   .addField('Info commands', 'Shows some irl information')
   .addField('Tool commands', 'Commands that add features to a server.')
   .setColor('ffffff')
   .setFooter(client.user.tag, client.user.displayAvatarURL());
 
 
const funEmbed = new Discord.MessageEmbed()
   .setTitle('Fun Commands.')
   .addField('Avatar Command', 'Returns a users avatar.')
   .addField('Meme Command', 'Returns a Meme to the channel.')
   .addField('Gayrate Command', 'Gayrates a user.')
   .addField('Simprate Command', 'Simprates a user.')
   .setColor('ffffff')
   .addField('Poll Command', 'Creates a poll.');
   
 
const moderationEmbed = new Discord.MessageEmbed()
   .setTitle('Moderation Commands.')
   .addField('Ban Command', 'Bans a member from the server')
   .addField('Kick Command', 'Kicks a member from the server')
   .addField('Lock Command', 'Locks a channel in the server')
   .addField('Mute Command', 'Mutes a member in the server')
   .addField('Nuke Command', 'Clones a channel and deletes the old one.')
   .addField('Clear Command', 'Clears messages within a channel')
   .addField('Tempmute Command', 'Tempmutes a member in a server')
   .addField('Unlock Command', 'Unlocks a channel in the server')
   .addField('Unmute Command', 'Unmutes a member in a server')
   .addField('User-Info Command', 'Shows a user informations')
   .addField('Ping', 'Shows the bot ping')
   .setColor('ffffff')
   .addField('Warn Command', 'Warns a user');

   const gameEmbed = new Discord.MessageEmbed()
   .setTitle('Game Commands.')
   .addField('Tictactoe', 'Starts a X and 0 game')
   .addField('Hangman', 'Starts a hangman game') 
   .addField('Snake', 'Starts a snake game')
   .setColor('ffffff')
   .addField('Rps', 'Starts a rock paper scissors game');

   const infoEmbed = new Discord.MessageEmbed()
   .setTitle('Info Commands')
   .setColor('ffffff')
   .addField('weather', 'Shows the weather of a city/country')
 
const toolEmbed = new Discord.MessageEmbed()
   .setTitle('Tool Commands.')
   .addField('Welcome Command', 'Gives the user the member role for the server.')
   .addField('Member Stats', 'Shows the member number of the server.')
   .addField('Reaction Roles', 'Creates a reaction role command.')
   .addField('Giveaway', 'Creates a giveaway command.')
   .addField('Rank Command', 'Shows your activity rank.')
   .setColor('ffffff')
   .addField('Leaderboard', 'Shows the most active members of the server.');
 
if (!args[0]) return message.channel.send(sectionEmbed);
else if (args[0] == 'fun') return message.channel.send(funEmbed);
else if (args[0] == 'tool') return message.channel.send(toolEmbed);
else if (args[0] == 'game') return message.channel.send(gameEmbed);
else if (args[0] == 'info') return message.channel.send(infoEmbed);
else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
    }
}