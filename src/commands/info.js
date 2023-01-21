const { SlashCommandBuilder } =require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Zeige Informationen über den Server oder einen User an!')
    .addSubcommand(subCommand=> subCommand.setName("server").setDescription("Zeige Informationen über den Server an!"))
    .addSubcommand(subCommand=> subCommand.setName("member").setDescription("Zeige Informationen über einen Member an")
    .addUserOption(option=> option.setName("member").setDescription("Der Member").setRequired(true))),
    async execute(interaction) {
        switch(interaction.options.getSubcommand()) {
            case "server": {
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setTitle(`Informationen für die ${interaction.guild.name}`)
                    .addFields([
                        {
                            name:   "Channels",
                            value: `${interaction.guild.channels.cache.size} Channels`
                        },
                        {
                            name:   "Erstellt",
                            value: `<t:${Math.round(interaction.guild.cratedTimestamp/1000)}>`,
                            inline: true
                        }
                    ])
                ]})
                break 
            }

            case "member": {
                const member = interaction.options.getMember("member")
                interaction.reply({embeds: [
                    new MessageEmbed()
                    .setTitle(`Informationen über ${member.user.tag}`)
                    .setThumbnail(member.user.avatarURL({dynamic: true}))
                    .addFields([
                        {
                            name:   "Kanäle",
                            value: `<t:${Math.round(member.user.createdTimestamp/1000)}>`,
                        },
                        {
                            name:   "Server beigetreten",
                            value: `<t:${Math.round(member.joinedTimestamp/1000)}>`,
                            inline: true
                        }
                    ])
                ]})
                break
            }
        }
    }
}