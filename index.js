const Discord = require("discord.js")

const client = new Discord.Client()

var prefix = "dv"

client.login("NTcwMjY5MjYzMjI3NjUwMDc4.XL-PXQ.30CfGjfoUyvN8zEGtF9vQPQ6gHs")

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("Ban des Trolleurs")
});

bot.on('message', function (message) {
    if (message.content === '!Collection') {
      message.reply('Hey, pour avoir la Collection, il te suffit de rejoindre ce lien:                                          https://steamcommunity.com/sharedfiles/filedetails/?id=1721373787                                                                                                                                                                      Bonne journé.')
    }
})

bot.on('message', function (message) {
    if (message.content === '!Forum') {
      message.reply('Hey, pour avoir rejoindre le Forum, il te suffit de rejoindre ce lien:                                          https://divisionrp.forumchitchat.com/                                                                                                                                                                                             Bonne journé.')
    }
})
