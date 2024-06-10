import { jesmylTgBot } from '../bot';
import { tglogger } from '../log/log-bot';
import { JesmylTelegramBot } from '../tg-bot';

export const gul94iTelegramBot = new JesmylTelegramBot({
  bot: jesmylTgBot,
  chatId: -1001862285194,
  logger: tglogger,
  uniqPrefix: '@',
});

gul94iTelegramBot.onChatMessages((bot, message) => {
  if (message.text?.toLowerCase() === 'матюки') {
    bot.deleteMessage(message.message_id, message.chat.id);
  }
});
