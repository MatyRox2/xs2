const Discord = require('discord.js')

module.exports = {
    name: 'user-info',
    description: "Shows information of a user",
  async  execute(message, args) {
    if(message.member.hasPermission('MANAGE_ROLES')) {
      const mentionedMember = message.mentions.members.first();
      const mentionedUser = message.mentions.users.first();

      const userEmbed = new Discord.MessageEmbed()
      .setTitle(`User information for ${mentionedUser.username}`)
      .addField(`Username: ${mentionedUser.username}`)
      .addField(`User tag: ${message.author.discriminator}`)
      .addField(`User ID: ${mentionedUser.id}`)
      .addField(`Account created: ${mentionedUser.createdAt}`)
      .addField(`Joined the server at: ${mentionedMember.joinedAt}`)
      .addField(`User status: ${message.member.presence.status}`)

      message.channel.send(userEmbed).catch(err => console.log(err))

        }
    }
}