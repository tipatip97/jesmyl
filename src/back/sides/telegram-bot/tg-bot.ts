import TgBot, { ChatMember, InlineKeyboardButton, InlineKeyboardMarkup, SendMessageOptions, User } from 'node-telegram-bot-api';
import smylib from '../../shared/SMyLib';
import { JTgBotCallbackQuery, JTgBotChatMessageCallback, JesmylTelegramBotWrapper } from './tg-bot-wrapper';

const botName = 'jesmylbot';

const emptyAdmins = { 0: {} as never };

export type FreeAnswerCallbackQueryOptions = Omit<Partial<TgBot.AnswerCallbackQueryOptions>, 'callback_query_id'>;

export class JesmylTelegramBot {
    private chatId: number;
    private logBot?: JesmylTelegramBot;
    private logAllAsJSON?: boolean;
    private _bot: JesmylTelegramBotWrapper;
    admins: Record<number, ChatMember> = emptyAdmins;
    botName = botName;

    constructor(props: { logAllAsJSON?: boolean, chatId: number, bot: JesmylTelegramBotWrapper, logBot?: JesmylTelegramBot }) {
        this.logBot = props.logBot;
        this.chatId = props.chatId;
        this.logAllAsJSON = props.logAllAsJSON;
        this._bot = props.bot;
    }

    convertLoginFromId = (() => {
        const reg = /./g;
        const callback = (all: string) => 'jesmylibot'[all as never];

        return (id: number, addTPrefix?: boolean) => (addTPrefix === false ? '' : 't.') + ('' + id).replace(reg, callback);
    })();

    makeSendMessageOptions(keyboard: (InlineKeyboardButton & { cb: JTgBotCallbackQuery })[][]) {
        return this._bot.makeOptionsKeyboard(this, keyboard);
    }

    refreshAdmins() {
        this.admins = emptyAdmins;
        return this.getAdmins();
    }

    onChatMessages(cb: JTgBotChatMessageCallback) {
        this._bot.registerOnChatMessages(this, this.chatId,
            this.logAllAsJSON && this.logBot
                ? (bot, message, metadata) => {
                    this.logAsJson({ message, metadata });
                    cb(bot, message, metadata);
                }
                : cb);
    }

    onChatQueries(cb: JTgBotCallbackQuery) {
        this._bot.registerQueryListener(this, this.chatId,
            this.logAllAsJSON && this.logBot
                ? (bot, query, metadata) => {
                    this.logAsJson({ query });
                    cb(bot, query, metadata);
                }
                : cb);
    }

    deleteMessage(messageId: number) {
        this._bot.bot.deleteMessage(this.chatId, messageId);
    }

    editMessageText(messageId: number, text: string, keyboard?: SendMessageOptions) {
        try {
            this._bot.bot.editMessageText(text, {
                chat_id: this.chatId,
                message_id: messageId,
                parse_mode: 'HTML',
                reply_markup: keyboard === undefined
                    ? undefined
                    : {
                        inline_keyboard: (keyboard.reply_markup as InlineKeyboardMarkup)?.inline_keyboard,
                    },
            }).then(this.logAllAsJSON
                ? (message) => {
                    if (message)
                        if (message === true) this.log(`Изменено сообщение в чате:\n\n` + text);
                        else this.log(`Изменено сообщение #${messageId} в чате ${message.chat.title}:\n\n` + text);
                }
                : undefined);
        } catch (error) { }
    }

    getAdmins() {
        const updateAdmins = (adminList: ChatMember[]) => {
            this.admins = {};
            adminList.forEach(admin => this.admins![admin.user.id] = admin);
            return this.admins;
        };

        return new Promise<Record<number, ChatMember>>((res, rej) => {
            if (this.admins[0] === undefined) {
                res(this.admins);
                return;
            }

            this._bot.bot.getChatAdministrators(this.chatId)
                .then((admins) => res(updateAdmins(admins)))
                .catch(rej);
        });
    }

    logAsJson(data: unknown) {
        try {
            this.log('<code>' + JSON.stringify(data, null, 1) + '</code>');
        } catch (error) { }
    }

    postMessage(message: string, options?: TgBot.SendMessageOptions) {
        if (this.logAllAsJSON) this.logAsJson({ message, options });

        return this._bot.bot.sendMessage(this.chatId, message, { parse_mode: 'HTML', ...options });
    }

    getUserData(id: number) {
        return this._bot.bot.getChatMember(this.chatId, id).catch(() => { });
    }

    async tryIsUserMember(id: number) {
        const member = await this.getUserData(id);

        if (!member || member.status === 'kicked' || member.status === 'left') throw Error();

        return member;
    }

    messageCase = (prefix: `/${string}`, text: string) => {
        return prefix === text || `${prefix}@${botName}` === text;
    }

    log(text: string) {
        return this.logBot?.postMessage(text);
    }

    sendMessage(userOrId: User | number, text: string, options?: TgBot.SendMessageOptions) {
        return new Promise<{ ok: false, value: string } | { ok: true, value: TgBot.Message }>((res) => {
            this._bot.bot.sendMessage(smylib.isNum(userOrId) ? userOrId : userOrId.id, text, { parse_mode: 'HTML', ...options })
                .then((message) => res({ ok: true, value: message }))
                .catch(() => {
                    this.log(`<b>!!!!!!!!!!!!!\n!!!!!!!!!!!!!\n!!!!!!!!!!!!!\n\nПопытка отправки сообщения неизвестному пользователю</b>\n\n<code>${JSON.stringify(userOrId, null, 1)}</code>\n\n${text}`);
                    res({ ok: false, value: 'Бот @jesmylbot не запущен' });
                });
        });
    }
}
