module.exports = {
    name: 'cheese',
    description: "The cheese command!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=norUYzDDwQw')

        console.log(`${message.author.username} executed command cheese in ${message.guild.name}`)
    }
}