module.exports = {
    name: 'help',
    description: "The help command!",
    execute(message, args){
        message.channel.send(`I sent you a DM! ${message.author}`)
        message.author.send("**Join this server for help and commands!** https://discord.gg/9BdGSUPHja");

        console.log(`${message.author.username} executed command help in ${message.guild.name}`)

    }
}