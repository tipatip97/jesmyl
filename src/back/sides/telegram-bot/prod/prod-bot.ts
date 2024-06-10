import { SendMessageOptions } from 'node-telegram-bot-api';
import { jesmylTgBot } from '../bot';
import { tglogger } from '../log/log-bot';
import { JesmylTelegramBot } from '../tg-bot';
import { authorizeTelegramCb } from './authorize';

export const prodTelegramBot = new JesmylTelegramBot({
  bot: jesmylTgBot,
  chatId: -1001304718820,
  logger: tglogger,
  logAllAsJSON: true,
  uniqPrefix: '!',
});

export const prodStartOptions: SendMessageOptions = prodTelegramBot.makeSendMessageOptions([
  [
    {
      text: 'Авторизоваться',
      callback_data: 'authorize',
      cb: authorizeTelegramCb,
    },
  ],
]);

const prodStartMessage = (botName: string) => `Это кнопка для входа

Привет!
Теперь есть возможность авторизоваться в приложении <a href="https://jesmyl.ru">JesmyL</a> через Телеграм-бота
Для этого:
  1. Нужно состоять в <a href="https://t.me/jesmyl_space">группе</a>
  2. Запусти <a href="https://t.me/${botName}">бота</a>
  3. Нажми "Авторизоваться" под этим сообщением или в закрепе
  4. Перейди в <a href="https://t.me/${botName}">бот</a> и следуй инструкции там.

В дальнейшем начинай с пункта 3`;

prodTelegramBot.onChatMessages((bot, message) => {
  if (message.new_chat_members) {
    bot.deleteMessage(message.message_id);
  }

  if (!message.text) return;

  if (bot.messageCase('/start', message.text)) {
    bot.postMessage(prodStartMessage(bot.botName), prodStartOptions);
  }
});

if (!'change message')
  prodTelegramBot.editMessageText(551, prodStartMessage(prodTelegramBot.botName), prodStartOptions);
