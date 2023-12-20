import { SendMessageOptions } from "node-telegram-bot-api";
import { jesmylTgBot } from "../bot";
import { JesmylTelegramBot } from "../tg-bot";

const logTelegramBot = new JesmylTelegramBot({
    bot: jesmylTgBot,
    chatId: -1002087759235,
    logger: null!,
});

logTelegramBot.postMessage('>>> Сервис логирования запущен');

logTelegramBot.onChatMessages((bot, message) => {
    bot.postMessage(`${message.text}\n\n#${message.message_id}`);
});

export class TgLogger {
    bot: JesmylTelegramBot;

    private replyMessages = {
        error: 833,
        systemError: 838,
        log: 837,
        codeRequest: 841,
        jsonCode: 871,
    };

    constructor(bot: JesmylTelegramBot) {
        this.bot = bot;
    }

    private replyToScope(scope: keyof typeof this.replyMessages, options?: Omit<SendMessageOptions, 'reply_to_message_id'>) {
        if (!this.replyMessages[scope]) return undefined;

        return { ...options, reply_to_message_id: this.replyMessages[scope] };
    }

    error(text: string) {
        this.bot.postMessage(`<b>${text}</b>`, this.replyToScope('error'));
    }

    systemError(text: string) {
        this.bot.postMessage(`<b>${text}</b>`, this.replyToScope('systemError'));
    }

    log(text: string) {
        this.bot.postMessage(text, this.replyToScope('log'));
    }

    codeRequest(text: string) {
        this.bot.postMessage(text, this.replyToScope('codeRequest'));
    }

    jsonCode(data: any) {
        try {
            this.bot.postMessage('<code>' + JSON.stringify(data, null, 1) + '</code>', this.replyToScope('jsonCode'));
        } catch (error) { }
    }
}

export const tglogger = new TgLogger(logTelegramBot);
