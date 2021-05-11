const hangman = require('discord-hangman');
const Discord = require('discord.js')
const RW = require('randword')
module.exports = {
    name: 'hangman',
    description: "This command kicks a member!",
 async   execute(client, message, args) {

        await hangman.create(message.channel, 'random', {
            filter: user => message.guild.member(user.id).roles.cache.has('735582408862203965')
        })

    }
}