// const { Listener } = require('discord-akairo');
// const {client} = require('discord.js')

// class guildMemberRemoveListener extends Listener {
// 	constructor () {
// 		super('guildMemberRemove', {
// 			emitter: 'client',
// 			event: 'guildMemberRemove',
// 			category: 'client'
// 		});
// 	}

// 	exec () {
// 	let myGuild = client.guilds.cache.get('460387987230949377');
//     let memberCount = myGuild.memberCount;
//     let memberCountChannel = myGuild.channels.cache.get('715565236941226026');
//     memberCountChannel.setName('Member Count: ' + memberCount)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// 	}
// }

// module.exports = guildMemberRemoveListener;