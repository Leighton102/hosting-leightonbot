module.exports = {
    name: 'bruh',
    description: "The bruh command!",
    execute(message, args){
        message.channel.send('https://media.tenor.com/images/75fd0d40549b2548a49c217eadff8744/tenor.gif')
        
        console.log(`${message.author.username} executed command bruh in ${message.guild.name}`)
    }
}