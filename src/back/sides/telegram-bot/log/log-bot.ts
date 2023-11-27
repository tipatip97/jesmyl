import { jesmylTgBot } from "../bot";
import { JesmylTelegramBot } from "../tg-bot";

export const logTelegramBot = new JesmylTelegramBot({
    bot: jesmylTgBot,
    chatId: -1002087759235,
});

logTelegramBot.postMessage('>>> Сервис логирования запущен');
