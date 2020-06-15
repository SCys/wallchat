#!/usr/bin/env node

import commander from 'commander';
import fs from 'fs';
import Bot, { BotOptions } from './Bot';
import Logger from './lib/Logger';
import inquirer from 'inquirer';

// Called directly
if (require.main === module) {
  let program = commander.option('-c, --config [path]', 'Configruation File Path', String).parse(process.argv);

  let bot: Bot;

  if (program.config) {
    let json = fs.readFileSync(program.config, { encoding: 'utf8' });
    let config = JSON.parse(json);
    bot = new Bot(config);
    bot.launch();
  } else {
    (async () => {
      try {
        let { token } = (await inquirer.prompt({ name: 'token', message: 'Bot Token:', type: 'input' })) as { token: string };
        bot = new Bot({ token: token.trim() });
        bot.launch();
      } catch (error) {
        Logger.error(error.message);
        process.exit(1);
      }
    })();
  }

  const exit = process.exit;
  const hookExit: any = async (code?: number) => {
    await bot.sendSystemMessage(`Bot is stopping. Error code:${code}`);
    return exit(code);
  };

  process.exit = hookExit;

  //catches uncaught exceptions
  process.on('uncaughtException', bot.handleFatalError);
  process.on('unhandledRejection', bot.handleFatalError);

  process.title = 'leavexchat';
}

export { Bot, Logger, BotOptions };
