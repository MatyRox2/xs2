const Discord = require('discord.js')

module.exports = {
    name: 'nuke',
    description: "This nukes a channel",
  async  execute(message, args) {
        if(message.member.hasPermission('MANAGE_CHANNELS')) {

        let reason = args.join(" ");
        const nukeChannel = message.channel;

        if (!reason) reason = "No reason given."
        if(!nukeChannel.deletable) return message.channel.send("This channel is not deleteable");

      await nukeChannel.clone().catch(err => console.log(err));
      await nukeChannel.delete(reason).catch(err => console.log(err));

    } else {
        message.channel.send("You don't have the permission ❌")
    }
}
}