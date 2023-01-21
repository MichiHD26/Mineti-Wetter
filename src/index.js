require("dotenv").config()
const fs = require("fs")
const { Client, Collection, GatewayIntentBits, Guild, ActivityType, InteractionType } = require("discord.js")
const { ActionRow } = require("@discordjs/builders")


const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]})
client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})



client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)!`)
    client.user.setActivity({name: "mit dem Texture UI", type: ActivityType.Playing})
})

eventFiles.forEach(eventFile => {
    const event = require(`./events/${eventFile}`)
    client.on(event.name, (...args) => event.execute(...args))
})



client.on("interactionCreate", async (interaction) => {
    if(interaction.type !== InteractionType.ApplicationCommand) return

    const command = client.commands.get(interaction.commandName)

    if(command) {
        try {
            await command.execute(interaction)
        } catch(error) {
            console.error(error)

            if(interaction.deferred || interaction.replied) {
                interaction.editReply("Es ist ein Fehler beim ausführen aufgetreten!")
            } else {
                interaction.reply("Es ist ein Fehler beim ausführen aufgetreten!")
            }
        }
    }
})


client.login(process.env.DISCORD_BOT_TOKEN)