import { JesmylTelegramBotWrapper } from './tg-bot-wrapper';

export const jesmylTgBot = new JesmylTelegramBotWrapper('6451511848:AAHy_Fp-jYIqa1XXDJCqxu1yu3gxBzRlpPA', {
  polling: true,
});

jesmylTgBot.setCommands([
  {
    command: '/start',
    description: 'Старт бота',
  },
]);
