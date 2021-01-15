module.exports = {
    name: 'whosbest',
    description: "This is the whos best command!",
    execute(message, args){
        message.channel.send(`${message.author} is obviously.`)

        console.log(`${message.author.username} executed command whosbest in ${message.guild.name}`)

    }
}