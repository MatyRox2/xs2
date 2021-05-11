const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    description: "starts a poll",
    async execute (client, message, args) {

        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply("Please specify a channekl you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle(theDescription)
        .setDescription("POLL TIME")
        .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator) //optional

        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}