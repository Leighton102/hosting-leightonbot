module.exports = {
    name: 'play',
    description: "This is the one and only play command!",
    execute(message, args) {
        const music = args.join(" ")
        
        distube.play(message, music)

        console.log(`${message.author.username} executed command ping in ${message.guild.name}`)
    }
}