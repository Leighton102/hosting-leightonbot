module.exports = {
    name: 'help',
    description: "The help command!",
    execute(message, args){
        message.author.send("**Join this server for help and commands!** https://discord.gg/9BdGSUPHja");
        message.channel.send(`I sent you a DM! ${message.author}`)

        console.log(`${message.author.username} executed command help in ${message.guild.name}`)

    }
}