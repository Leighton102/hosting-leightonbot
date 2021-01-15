module.exports = {
    name: 'kick',
    description: "The kick command!",
    execute(message, args) {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`That member has been kicked!`);

                console.log(`${message.author.username} executed command kick in ${message.guild.name}`)

            } else {
                message.channel.send(`Unable to kick that member! ${message.author}`);
            }

        } else {
            message.reply(`You do not have permission to use this command!`)
        }
    }
}