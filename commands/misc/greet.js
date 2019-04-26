const {
  Command
} = require('discord.js-commando');

class GreetCommand extends Command {

  constructor(client) {

    super(client, {
      name: 'greet',
      memberName: 'greet',
      aliases: ['hello', 'hi'],
      group: 'misc',
      description: 'Says hello to you!',
      details: 'Responds with "Hello, <person>!"',
      clientPermissions: ["MANAGE_MESSAGES"],
      examples: [`${client.commandPrefix}greet`, `${client.commandPrefix}hi`]
    })

  }

  run(msg) {
    msg.say(`Hello, <@${msg.author.id}>!`);
  }

}

module.exports = GreetCommand;