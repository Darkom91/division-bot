const Discord = require("discord.js")

const client = new Discord.Client()

var prefix = "dv"

client.login("NTcwMjY5MjYzMjI3NjUwMDc4.XL-PXQ.30CfGjfoUyvN8zEGtF9vQPQ6gHs")

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("Ban des Trolleurs")
});
