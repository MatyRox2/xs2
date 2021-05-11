const Discord = require('discord.js')
const Levels = require("discord-xp")
module.exports = {
    name: 'leaderboard',
    description: "Just a leaderboard command",
 async   execute(client, message, args) {
const Levelsa = require('discord-xp')
const rawLeaderboard = await Levelsa.fetchLeaderboard(message.guild.id, 5);
    const leaderboard = await Levelsa.computeLeaderboard(client, rawLeaderboard); 

    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");



    const lb = leaderboard.map(e => `${e.position}. ${e.username}\ Level: ${e.level}\ XP: ${e.xp.toLocaleString()}`);

    message.channel.send(`${lb.join("\n\n")}}`)
}
 }