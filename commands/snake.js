const SnakeGame = require('snakecord');
const Discord = require("discord.js");
module.exports = {
    name: 'snake',
    description: "This command kicks a member!",
 async   execute(client, message, args) {


const snakeGame = new SnakeGame({
    

    title: 'Snake Game',
 
    color: "WHITE",
 
    timestamp: false,
 
    gameOverTitle: "Game Over"
 
 });
 snakeGame.newGame(message);
 }
}
 