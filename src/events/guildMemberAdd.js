const { MessageEmbed } = require("discord.js")

module.exports = {
    name:"guildMemberAdd",
    /**
     * @param {GuildMember} member 
     */
    execute(member) {
        
        member.guild.channels.cache.get("956969099500605441").send({
            embends: [
                new MessageEmbed()
                .setTitle("Herzlich Willkommen in unserem Server")
                .setDescription(`${member.toString()} ist dem Server beigetreten`)
                .setThumbnail(member.user.displayAvatarURL())
                .setColor("GREEN")
            ]
        })
    }
}