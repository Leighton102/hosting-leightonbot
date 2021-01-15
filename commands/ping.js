module.exports = {
    name: 'ping',
    description: "This is the one and only ping command!",
    execute(message, args){
        message.channel.send('**Pong!**')

        console.log(`${message.author.username} executed command ping in ${message.guild.name}`)
    }
}