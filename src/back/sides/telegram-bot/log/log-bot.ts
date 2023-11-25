import { jesmylTgBot } from "../bot";
import { JesmylTelegramBot } from "../tg-bot";

export const logTelegramBot = new JesmylTelegramBot({
    bot: jesmylTgBot,
    logBot: null!,
    chatId: -1002087759235,
});

logTelegramBot.postMessage('>>> Сервис логирования запущен');
