import TgBot, { CallbackQuery, ChatMember, InlineKeyboardButton, User } from 'node-telegram-bot-api';
import smylib from '../../complect/soki/complect/SMyLib';
import { JTgBotChatMessageCallback, JesmylTelegramBotWrapper } from './tg-bot-wrapper';

const botName = 'jesmylbot';

const emptyAdmins = { 0: {} as never };

export type FreeAnswerCallbackQueryOptions = Omit<Partial<TgBot.AnswerCallbackQueryOptions>, 'callback_query_id'>;
export type JTgBotCallbackQuery = (bot: JesmylTelegramBot, message: CallbackQuery, answer: (options: string | FreeAnswerCallbackQueryOptions) => void) => string | void | undefined | Promise<FreeAnswerCallbackQueryOptions | undefined | void | string>;

export class JesmylTelegramBot {
    private chatId: number;
    private logBot?: JesmylTelegramBot;
    private _bot: JesmylTelegramBotWrapper;
    admins: Record<number, ChatMember> = emptyAdmins;
    botName = botName;

    constructor(props: { chatId: number, bot: JesmylTelegramBotWrapper, logBot?: JesmylTelegramBot }) {
        this.logBot = props.logBot;
        this.chatId = props.chatId;
        this._bot = props.bot;
    }

    convertLoginFromId = (() => {
        const reg = /./g;
        const callback = (all: string) => 'jesmylibot'[all as never];

        return (id: number) => 't.' + ('' + id).replace(reg, callback);
    })();

    makeSendMessageOptions(keyboard: (InlineKeyboardButton & { cb: JTgBotCallbackQuery })[][])  {
        return this._bot.makeOptionsKeyboard(this, keyboard);
    }

    refreshAdmins() {
        this.admins = emptyAdmins;
        return this.getAdmins();
    }

    onChatMessages(cb: JTgBotChatMessageCallback) {
        this._bot.registerOnChatMessages(this, this.chatId, cb);
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

    postMessage(message: string, options?: TgBot.SendMessageOptions) {
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
