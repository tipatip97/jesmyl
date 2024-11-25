import { jesmylTgBot } from '../bot';
import { tgBotUrlController } from '../complect/url-controller';
import { tglogger } from '../log/log-bot';
import { JesmylTelegramBot } from '../tg-bot';

export const gul94iTelegramBot = new JesmylTelegramBot({
  bot: jesmylTgBot,
  chatId: -1001862285194,
  logger: tglogger,
  uniqPrefix: '@',
});

export const gul94iAdminTelegramBot = new JesmylTelegramBot({
  bot: jesmylTgBot,
  chatId: -1002202471829,
  logger: tglogger,
  uniqPrefix: '@!',
});

gul94iTelegramBot.onChatMessages((bot, message) => {
  if (message.text?.toLowerCase() === 'матюки') {
    bot.deleteMessage(message.message_id, message.chat.id);
  }
});

tgBotUrlController(gul94iTelegramBot, gul94iAdminTelegramBot);
