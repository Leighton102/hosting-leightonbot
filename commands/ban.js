module.exports = {
    name: 'ban',
    description: "The ban command!",
    execute(message, args){
        if (message.member.hasPermission('BAN_MEMBERS')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(`That member has been banned! ${message.author}`);

                console.log(`${message.author.username} executed command ban in ${message.guild.name}`)

            } else {
                message.channel.send(`Unable to ban that member! ${message.author}`);
            }

        } else {
            message.reply(`You do not have permission to use this command!`)
        }
    }
}