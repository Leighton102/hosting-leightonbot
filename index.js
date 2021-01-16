const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '>';

const fs = require('fs');
const embed = require('./commands/embed');
const distube = require('distube')

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('The bot is ready!');
    client.user.setActivity('Minecraft | >help', { type: 'PLAYING' })
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args)
    } else if (command == 'bruh') {
        client.commands.get('bruh').execute(message, args)
    } else if (command == 'whosbest') {
        client.commands.get('whosbest').execute(message, args)
    } else if (command == 'me') {
        client.commands.get('me').execute(message, args)
    } else if (command == 'members') {
        client.commands.get('members').execute(message, args)
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args)
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args)
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args)
    } else if (command == 'kat') {
        client.commands.get('kat').execute(message, args)
    } else if (command == 'e') {
        client.commands.get('e').execute(message, args)
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args)
    } else if (command == 'cheese') {
        client.commands.get('cheese').execute(message, args)
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args)
    }


})

client.login(process.env.TOKEN);
