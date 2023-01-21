const { SlashCommandBuilder } =require("@discordjs/builders")
const {MessageEmbed} = require("discord.js")
const {QueryType} = require("discord-player")

module.exports = {

    data: new SlashCommandBuilder()
    .setName('message')
    .setDescription('Sende eine Nachricht!')

    //subcommands
    .addSubcommand(subCommand=> subCommand.setName("play").setDescription("Sage Hallo"))
    .addSubcommand(subCommand=> subCommand.setName("queue").setDescription("Frage, wie es ihm geht?"))
    .addSubcommand(subCommand=> subCommand.setName("quit").setDescription("Sage Tschüss"))
    .addSubcommand(subCommand=> subCommand.setName("shuffle").setDescription("Wann wurdest du geboren?"))
    .addSubcommand(subCommand=> subCommand.setName("resume").setDescription("Ich liebe dich"))
    .addSubcommand(subCommand=> subCommand.setName("skip").setDescription("Ich hasse dich")),

    async execute(interaction) {
        switch(interaction.options.getSubcommand()){

        case "play":{

        }
    }
    }
}