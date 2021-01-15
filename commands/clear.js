module.exports = {
    name: 'clear',
    description: "clear",
    async execute(message, args){
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if(!args[0]) return message.reply(`Please enter the amount of messages you want to clear!`);
            if(isNaN(args[0])) return message.reply(`Please enter a number!`);

            if(args[0] > 100) return message.reply(`Woah, that's too many messages that I can clear! **Max. Amount: 100**`);
            if(args[0] < 1) return message.reply(`That's a invalid number. I can't clear that.`);

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);

                console.log(`${message.author.username} executed command clear in ${message.guild.name}`)
            });
        } else {
            message.reply(`You do not have permissions to use that command!`)
        }
    }
}