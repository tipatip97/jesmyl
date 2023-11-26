import TgBot, { CallbackQuery, ChatMember, InlineKeyboardButton, User } from 'node-telegram-bot-api';
import smylib from '../../complect/soki/complect/SMyLib';

const botName = 'jesmylbot';

const emptyAdmins = { 0: {} as never };

export type FreeAnswerCallbackQueryOptions = Omit<Partial<TgBot.AnswerCallbackQueryOptions>, 'callback_query_id'>;
export type JTgBotCallbackQuery = (bot: JesmylTelegramBot, message: CallbackQuery, answer: (options: string | FreeAnswerCallbackQueryOptions) => void) => string | void | undefined | Promise<FreeAnswerCallbackQueryOptions | undefined | void | string>;

export class JesmylTelegramBot {
    private chatId: number;
    private callbackQueries: Record<string, JTgBotCallbackQuery> = {};
    private logBot: JesmylTelegramBot;
    bot: TgBot;
    admins: Record<number, ChatMember> = emptyAdmins;
    botName = botName;

    constructor(props: { chatId: number, bot: TgBot, logBot: JesmylTelegramBot }) {
        this.logBot = props.logBot;
        this.chatId = props.chatId;
        this.bot = props.bot;

        this.bot.on('callback_query', async message => {
            if (!message.data || this.callbackQueries[message.data] === undefined) return;
            const callback = (options: string | FreeAnswerCallbackQueryOptions) => {
                this.bot.answerCallbackQuery(message.id, smylib.isStr(options)
                    ? { text: options, callback_query_id: message.id }
                    : { show_alert: true, ...options, callback_query_id: message.id });
            };

            const answer = await this.callbackQueries[message.data](this, message, callback);

            if (answer !== undefined) callback(answer);
        });
    }

    convertLoginFromId = (() => {
        const reg = /./g;
        const callback = (all: string) => 'jesmylibot'[all as never];

        return (id: number) => 't.' + ('' + id).replace(reg, callback);
    })();

    makeSendMessageOptions = (keyboard: (InlineKeyboardButton & { cb?: JTgBotCallbackQuery })[][]) => {
        keyboard.flat().forEach((key) => {
            if (!key.callback_data || !key.cb) return;

            if (this.callbackQueries[key.callback_data] !== undefined)
                throw Error('Повторяющиеся ключи callback_query');

            this.callbackQueries[key.callback_data] = key.cb;
            delete key.cb;
        });

        return {
            reply_markup: {
                inline_keyboard: keyboard,

            },
        };
    };

    refreshAdmins() {
        this.admins = emptyAdmins;
        return this.getAdmins();
    }

    listenChatMessages(cb: (bot: JesmylTelegramBot, message: TgBot.Message, metadata: TgBot.Metadata) => any) {
        this.bot.on('message', (message, metadata) => {
            if (this.chatId !== message.chat.id) return;
            return cb(this, message, metadata);
        });
    }

    listenPersonalMessages(cb: (message: TgBot.Message, metadata: TgBot.Metadata) => any) {
        this.bot.on('message', (message, metadata) => {
            if (message.from?.id !== message.chat.id) return;
            cb(message, metadata);
        });
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

            this.bot.getChatAdministrators(this.chatId)
                .then((admins) => {
                    res(updateAdmins(admins));
                })
                .catch(rej);
        });
    }

    postMessage(message: string, options?: TgBot.SendMessageOptions) {
        return this.bot.sendMessage(this.chatId, message, { parse_mode: 'HTML', ...options });
    }

    getUserData(id: number) {
        return this.bot.getChatMember(this.chatId, id).catch(() => { });
    }

    async tryIsUserMember(id: number) {
        const member = await this.getUserData(id);

        if (!member || member.status === 'kicked' || member.status === 'left') throw Error();

        return member;
    }

    messageCase = (prefix: `/${string}`, text: string) => {
        return prefix === text || `${prefix}@${botName}` === text;
    }

    log(message: string) {
        return this.logBot.postMessage(message);
    }

    sendMessage(userOrId: User | number, text: string, options?: TgBot.SendMessageOptions) {
        return new Promise<{ ok: false, value: string } | { ok: true, value: TgBot.Message }>((res) => {
            this.bot.sendMessage(smylib.isNum(userOrId) ? userOrId : userOrId.id, text, { parse_mode: 'HTML', ...options })
                .then((message) => res({ ok: true, value: message }))
                .catch(() => {
                    this.log(`<b>!!!!!!!!!!!!!\n!!!!!!!!!!!!!\n!!!!!!!!!!!!!\n\nПопытка отправки сообщения неизвестному пользователю</b>\n\n<code>${JSON.stringify(userOrId, null, 1)}</code>\n\n${text}`);
                    res({ ok: false, value: 'Бот @jesmylbot не запущен' });
                });
        });
    }
}
