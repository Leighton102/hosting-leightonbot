const { MessageFlags } = require("discord.js")

module.exports = {
    name: 'rules',
    description: "Shows the etastg",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#0665f3')
            .setTitle('Rules')
            .setURL('https://discordapp.com/terms')
            .setDescription('These are the rules, please obey them.')
            .addFields(
                { name: 'Rule 1', value: 'Do not say any offensive slurs in chat.' },
                { name: 'Rule 2', value: 'No spamming in the general chat.' },
                { name: 'Rule 3', value: 'Do not tag the owner, moderators, admins, or management.' },
                { name: 'Rule 4', value: 'Do not cause drama.' },
                { name: 'Rule 5', value: 'DO NOT SEND PORN!!' },
                { name: 'Rule 6', value: 'Do not send death threats to each other.' },
                { name: 'Rule 7', value: 'Please try not to use bot commands in the general.' },
                { name: 'Rule 8', value: 'No politics are allowed.' },
                { name: 'Rule 9', value: 'Advertising is only allowed in the designated channel.' },
                { name: 'Rule 10', value: 'No Pedophilia.' },
                { name: 'Rule 11', value: 'Don’t play dumb/try to make loopholes in the rules.' },
                { name: 'Rule 12', value: 'When you are in a voice channel, do not earrape people.' },
                { name: 'Rule 13', value: 'Always follow the Discord terms of Service & Community guidelines.' },
                { name: 'Rule 14', value: 'Do not ask for nitro, roles, staff, etc.' },
                { name: 'Rule 15', value: 'No NSFW content is allowed.' },
            )
            .setImage('https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png')
            .setFooter('Breaking any of these rules will lead to a punishment');

        message.channel.send(newEmbed);
    }


}