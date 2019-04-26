const Discord = require("discord.js");

const bot = new Discord.Client();

var prefix = "dv"

bot.login("NTcwMjY5MjYzMjI3NjUwMDc4.XMNmVQ.OsMLuFNJkwcjG1ho6DqipdOnwUI")

bot.on("ready", () =>{
    console.log("je suis prêt")
    bot.user.setGame("Ban des Trolleurs")
})

bot.on('message', function (message) {
  if (message.content === '!Collection') {
    message.reply('Hey pour avoir la Collection, il te suffit de rejoindre ce lien:                                               https://steamcommunity.com/sharedfiles/filedetails/?id=1724084263                                                                                                                                                                      Bonne journé.')
  }
})

bot.on('message', function (message) {
  if (message.content === '!Forum') {
    message.reply('Hey pour avoir rejoindre le Forum, il te suffit de rejoindre ce lien:                                          https://divisionrp.forumchitchat.com/                                                                                                                                                                                             Bonne journé.')
  }
})
