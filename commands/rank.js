const Discord = require('discord.js')
const Levels = require("discord-xp")
const canvacord = require("canvacord")
module.exports = {
    name: 'rank',
    description: "Just a rank command",
 async execute(client, message, args) {
    
    const target = message.mentions.users.first() || message.author;

    const user = await Levels.fetch(target.id, message.guild.id);

    const neededXp = Levels.xpFor(parseInt(user.level) +1);

    if (!user) return message.reply("You dont have xp. Try to send some messages.");

    const rank = new canvacord.Rank()
    .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
    .setRank(1, 'RANK', false)
    .setLevel(user.level)
    .setCurrentXP(user.xp)
    .setRequiredXP(neededXp)
    .setStatus(message.member.presence.status)
    .setProgressBar("#ffffff", "COLOR")
    .setUsername(message.author.username)
    .setDiscriminator(message.author.discriminator);
rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });


}

}