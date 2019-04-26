const {
  Command
} = require('discord.js-commando');

module.exports = class killCommand extends Command {
  constructor(client) {
    super(client, {
      ownerOnly: true,
      name: 'kill',
      memberName: 'kill',
      aliases: ['exit', 'destroy'],
      group: 'util',
      description: 'Kills the bot.',
      details: 'Responds with "Bot was killed", and kills bot',
      examples: ['a.kill', 'a.exit']
    })
  }

  run(msg) {
    msg.say("Bot was killed.")
    console.log(`The bot was killed by ${msg.author.tag}`);
    msg.command.client.destroy();
    process.exit(0);
  }
}