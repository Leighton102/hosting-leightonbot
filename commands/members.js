module.exports = {
    name: 'members',
    description: "this is the members command!",
    execute(message, args) {
        message.channel.send(`${message.guild.name} has ${message.guild.memberCount} members!`)

        console.log(`${message.author.username} executed command members in ${message.guild.name}`)
    }
}