import { SendMessageOptions } from "node-telegram-bot-api";
import sokiServer from "../../../complect/soki/SokiServer";
import { jesmylTgBot } from "../bot";
import { logTelegramBot } from "../log/log-bot";
import { prodTelegramBot } from "../prod/prod-bot";
import { supportTelegramBot } from "../support/support-bot";
import { JesmylTelegramBot } from "../tg-bot";

export const controlTelegramBot = new JesmylTelegramBot({
    bot: jesmylTgBot,
    chatId: -1002054074700,
    logBot: logTelegramBot,
    logAllAsJSON: true,
});

const devStartOptions: SendMessageOptions = controlTelegramBot.makeSendMessageOptions([
    [
        {
            text: 'Обновить список админов',
            callback_data: 'refresh_admins',
            cb: async (bot) => {
                Promise
                    .all([
                        bot.refreshAdmins(),
                        prodTelegramBot.refreshAdmins(),
                        supportTelegramBot.refreshAdmins(),
                    ])
                    .then(() => {
                        bot.postMessage('Список админов обновлён');
                    })
                    .catch((error) => {
                        bot.postMessage(`Ошибка обновления списка админов ${error}`);
                    });
            },
        },
    ],
    [
        {
            text: '💫 Перечитать файлы',
            callback_data: 'refresh_files',
            cb: async (bot) => {
                sokiServer.reloadFiles()
                    .then(() => {
                        bot.log(`💫 Файлы были перечитаны`);
                        bot.postMessage(`💫 Файлы были перечитаны`);
                    })
                    .catch((error) => {
                        bot.log(`💫 Ошибка перечитывания файлов\n\n${error}`);
                        bot.postMessage(`💫 Ошибка перечитывания файлов\n\n${error}`);
                    });
            },
        },
    ],
]);

controlTelegramBot.onChatMessages(async (bot, message) => {
    if (!message.text) return;

    if (bot.messageCase('/start', message.text)) {
        bot.postMessage('Действия', devStartOptions);
    }
});
