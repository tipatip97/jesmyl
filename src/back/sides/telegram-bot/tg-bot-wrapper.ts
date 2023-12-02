import TgBot, { BotCommand, CallbackQuery, InlineKeyboardButton } from 'node-telegram-bot-api';
import smylib from '../../shared/SMyLib';
import { JesmylTelegramBot } from './tg-bot';


export type FreeAnswerCallbackQueryOptions = Omit<Partial<TgBot.AnswerCallbackQueryOptions>, 'callback_query_id'>;
export type JTgBotCallbackQueryWithoutBot = (message: CallbackQuery, answer: (options: string | FreeAnswerCallbackQueryOptions) => void) => string | void | undefined | Promise<FreeAnswerCallbackQueryOptions | undefined | void | string>;
export type JTgBotCallbackQuery = (bot: JesmylTelegramBot, message: CallbackQuery, answer: (options: string | FreeAnswerCallbackQueryOptions) => void) => string | void | undefined | Promise<FreeAnswerCallbackQueryOptions | undefined | void | string>;
export type JTgBotChatMessageCallbackWithoutBot = (message: TgBot.Message, metadata: TgBot.Metadata) => any;
export type JTgBotChatMessageCallback = (bot: JesmylTelegramBot, message: TgBot.Message, metadata: TgBot.Metadata) => any;
export type JTgBotPersonalMessageCallback = (bot: JesmylTelegramBotWrapper, message: TgBot.Message, metadata: TgBot.Metadata) => any;

export class JesmylTelegramBotWrapper {
    bot: TgBot;
    private callbackQueries: Record<string, JTgBotCallbackQueryWithoutBot> = {};
    private chatMessages: Record<string, JTgBotChatMessageCallbackWithoutBot> = {};

    constructor(token: string, options?: TgBot.ConstructorOptions, onPersonalMessages?: JTgBotPersonalMessageCallback) {
        this.bot = new TgBot(token, options);

        this.bot.on('message', (message, metadata) => {
            if (this.chatMessages[message.chat.id] !== undefined) {
                this.chatMessages[message.chat.id](message, metadata);
                return;
            }
            if (onPersonalMessages !== undefined && message.from?.id === message.chat.id) {
                onPersonalMessages(this, message, metadata);
                return;
            }
        });

        this.bot.on('callback_query', async message => {
            if (!message.data || this.callbackQueries[message.data] === undefined) return;

            const callback = (options: string | FreeAnswerCallbackQueryOptions) => {
                this.bot.answerCallbackQuery(message.id, smylib.isStr(options)
                    ? { text: options, callback_query_id: message.id }
                    : { show_alert: true, ...options, callback_query_id: message.id });
            };

            const answer = await this.callbackQueries[message.data](message, callback);

            if (answer !== undefined) callback(answer);
        });
    }

    setCommands(commands: BotCommand[]) {
        this.bot.setMyCommands(commands);
    }

    makeOptionsKeyboard(bot: JesmylTelegramBot, keyboard: (InlineKeyboardButton & { cb: JTgBotCallbackQuery })[][]) {
        keyboard.flat().forEach((key) => {
            if (!key.callback_data || !key.cb) return;

            if (this.callbackQueries[key.callback_data] !== undefined)
                throw Error('Повторяющиеся ключи callback_query');

            const cb = key.cb;

            this.callbackQueries[key.callback_data] = (message, answer) => cb(bot, message, answer);
            delete (key as any).cb;
        });

        return {
            reply_markup: {
                inline_keyboard: keyboard,
            },
        };
    }

    registerOnChatMessages(bot: JesmylTelegramBot, chatId: number, cb: JTgBotChatMessageCallback) {
        this.chatMessages[chatId] = (message, metadata) => cb(bot, message, metadata);
    }
}
