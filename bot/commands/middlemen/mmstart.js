const { Command } = require('discord-akairo');
const {MessageEmbed} = require('discord.js')

class MMStartCommand extends Command {
    constructor() {
        super('mmstart', {
           aliases: ['mmstart'] 
        });
    }

    userPermissions(message) {
        if (!message.member.roles.cache.some(role => role.name === 'Moderator' || 'Middlemen' || 'Admin' || 'Owner')) {
            return 'Moderator' || 'Middlemen' || 'Admin' || 'Owner';
        }

        return null;
    }

    exec(message) {

        let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({size: 1024, dynamic: true}))
        .setFooter('CZBot developed by frozensnow')
        .setTimestamp()
        .setTitle('Trade/Sale Started')
        .addField('If you are not involved please do not talk / ping in this channel until we are finished. NOTE: Once you send the account info to the middleman, then you agree to the deal. Make sure you made up your mind before sending the account info.')

        return message.channel.send(embed)

    }
}

module.exports = MMStartCommand;