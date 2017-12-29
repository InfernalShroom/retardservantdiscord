const Discord = require("discord.js");
const TOKEN = "Mzk2MTg4MTI1NTkzODYyMTQ0.DSd1YQ.M6qIfkKf8BJG3xzGpvG1VenTXW0"
const client = new Discord.Client();
const PREFIX = ">";

var bot = new Discord.Client();

var fortunes = [
    "Oh Hell Yeah Dude",
    "Nah",
    "It's a possibility",
    "Why the fuck are you talking to me retard?"
];
bot.on("ready", function() {
    console.log("ready");
});


bot.on('message', function(message) {
    if(!message.content.startsWith(PREFIX)) return;
    if(message.author.equals(bot.user)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":           
            message.channel.sendMessage("I'm a gay bot meant to serve retards")
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Are you fucking retaded or something? Give me a question!")
            break;
        case "commands":
            message.channel.sendMessage(">Ping \n>Info \n>8ball \n>Commands \nmore shit coming later fuck off")
            break;
    }
});

bot.login(TOKEN);