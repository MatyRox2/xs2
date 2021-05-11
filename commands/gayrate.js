const Discord = require('discord.js')

module.exports = {
    name: "gayrate",
    description: "a gayrate command",
    async execute(client, message, args) {

        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("RANDOM")

        message.channel.send(howgayembed);
    }
}