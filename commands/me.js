module.exports = {
    name: 'me',
    description: "The me command!",
    execute(message, args){
        message.channel.send(`Username: **${message.author.username}**`);
        message.channel.send(`ID: **${message.author.id}**`);


        console.log(`${message.author.username} executed command me in ${message.guild.name}`)
    }
}