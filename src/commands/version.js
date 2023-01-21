const { SlashCommandBuilder } =require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName('version').setDescription('Zeige die Version des Botes'),
    async execute(interaction) {
       await interaction.reply('Mineti.JS V.1.5.0a');
    }
}