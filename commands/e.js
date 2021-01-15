module.exports = {
    name: 'e',
    description: "The e command!",
    execute(message, args){
        message.channel.send('https://i.kym-cdn.com/photos/images/original/001/365/818/183.jpg')

        console.log(`${message.author.username} executed command e in ${message.guild.name}`)
    }
}