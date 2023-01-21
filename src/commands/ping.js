const { SlashCommandBuilder } =require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Server Geschwindigkeit!'),
    async execute(interaction) {
       await interaction.reply('Pong!');
    }
}