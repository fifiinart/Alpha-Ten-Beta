const {
  Command
} = require('discord.js-commando');
const {
  RichEmbed
} = require('discord.js');
const config = require('../../config.js')

module.exports = class UserInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'user-info',
      memberName: 'user-info',
      group: 'info',
      aliases: ['useri', 'userinfo'],
      description: 'Gives info about a user.',
      details: "Gives all info about a user.",
      examples: [`${client.commandPrefix}user-info`, `${client.commandPrefix}userinfo user#0000`],
      args: [{
        key: 'user',
        prompt: 'Who do you want to get information on?',
        type: 'user',
        default: msg => msg.author
      }]
    })
  }

  async run(msg, args) {
    let pages = ['page 1', 'page 2', 'page 3', 'page 4', 'page 5'];
    let page = 0;
    let returnMsg = await msg.say(pages[page]);
    await returnMsg.react('⏪');
    await returnMsg.react('\u25C0');
    await returnMsg.react('\u25B6');
    await returnMsg.react('⏩');
    returnMsg.createReactionCollector((reaction, user) => (reaction.emoji.name === '⏪' || reaction.emoji.name === '\u25C0' || reaction.emoji.name === '\u25B6' || reaction.emoji.name === '⏩') && user !== this.client.user, {
        time: 2 ** 31 - 1
      })
      .on('collect', (collected) => {
        if (collected.emoji.name === '⏪') page = 0;
        else if (collected.emoji.name === '\u25C0') page--;
        else if (collected.emoji.name === '\u25B6') page++;
        else if (collected.emoji.name === '⏩') page = pages.length - 1;

        if (page >= pages.length) pages = pages.length - 1;
        if (page < 0) page = 0

        returnMsg.edit(pages[page])
      })
  }
}