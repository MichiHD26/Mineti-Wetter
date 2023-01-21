const { SlashCommandBuilder } =require("@discordjs/builders")

module.exports = {

    data: new SlashCommandBuilder()
    .setName('message')
    .setDescription('Sende eine Nachricht!')

    //subcommands
    .addSubcommand(subCommand=> subCommand.setName("moin").setDescription("Sage Hallo"))
    .addSubcommand(subCommand=> subCommand.setName("wiegehts").setDescription("Frage, wie es ihm geht?"))
    .addSubcommand(subCommand=> subCommand.setName("tschüss").setDescription("Sage Tschüss"))
    .addSubcommand(subCommand=> subCommand.setName("wwdg").setDescription("Wann wurdest du geboren?"))
    .addSubcommand(subCommand=> subCommand.setName("ild").setDescription("Ich liebe dich"))
    .addSubcommand(subCommand=> subCommand.setName("ihd").setDescription("Ich hasse dich")),

    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {

            //Moin
            case "moin": {
                await interaction.reply("moin :wave:");
                break 
            }
            
            //Wie geht es dir?
            case "wiegehts": {
                await interaction.reply("Mir geht es gut, Danke :grin:");
                break
            }

            //Tschüss
            case "tschüss": {
                await interaction.reply("tschüss :wave:");
                break 
            }

            //Wann wurdest du geboren?
            case "wwdg": {
                await interaction.reply("Ich wurde bei RTX2022 Event geboren!");
            }

            //Ich liebe dich
            case "ild": {
                await interaction.reply("Danke :relaxed:");
            }

            //Ich hasse dich
            case "ihd": {
                await interaction.reply(":frowning2:");
            }
        }
    }
}