module.exports = {
    name: 'kat',
    description: "The kat command!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=J---aiyznGQ')

        console.log(`${message.author.username} executed command kat in ${message.guild.name}`)
    }
}