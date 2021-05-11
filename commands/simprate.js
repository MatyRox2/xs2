const Discord = require('discord.js')

module.exports = {
    name: "simprate",
    description: "a simprate command",
    async execute(client, message, args) {

        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Simp Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Simp💖")
        .setColor("RANDOM")

        message.channel.send(howgayembed);
    }
}