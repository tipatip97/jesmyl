import TgBot, {
  ChatMember,
  InlineKeyboardButton,
  InlineKeyboardMarkup,
  SendMessageOptions,
  User,
} from 'node-telegram-bot-api';
import smylib from '../../shared/SMyLib';
import { TgLogger } from './log/log-bot';
import { JTgBotCallbackQuery, JTgBotChatMessageCallback, JesmylTelegramBotWrapper } from './tg-bot-wrapper';

const botName = 'jesmylbot';

const emptyAdmins = { 0: {} as never };
const emojiesSet: Set<string> = new Set();

export type FreeAnswerCallbackQueryOptions = Omit<Partial<TgBot.AnswerCallbackQueryOptions>, 'callback_query_id'>;

export class JesmylTelegramBot {
  chatId: number;
  logger: TgLogger;
  private logAllAsJSON?: boolean;
  private _bot: JesmylTelegramBotWrapper;
  admins: Record<number, ChatMember> = emptyAdmins;
  botName = botName;
  uniqPrefix: string;
  sendMessage: (
    userOrId: User | number,
    text: string,
    options?: TgBot.SendMessageOptions | null,
  ) => ReturnType<typeof this._bot.sendMessage>;

  constructor(props: {
    logAllAsJSON?: boolean;
    chatId: number;
    bot: JesmylTelegramBotWrapper;
    logger: TgLogger;
    uniqPrefix: string;
  }) {
    this.logger = props.logger;
    this.chatId = props.chatId;
    this.logAllAsJSON = props.logAllAsJSON;
    this._bot = props.bot;
    this.sendMessage = (userOrId, text, options) =>
      this._bot.sendMessage(userOrId, text, props.logger, { parse_mode: 'HTML', ...options });

    if (emojiesSet.has(props.uniqPrefix)) throw Error(`ununique uniqPrefix ${props.uniqPrefix}`);

    emojiesSet.add(props.uniqPrefix);
    this.uniqPrefix = props.uniqPrefix;
  }

  register() {}

  getChat() {
    return this._bot.bot.getChat(this.chatId);
  }

  convertNickFromId = (() => {
    const reg = /./g;
    const callback = (all: string) => 'jesmylibot'[all as never];

    return (id: number, addTPrefix?: boolean) => (addTPrefix === false ? '' : 't:') + ('' + id).replace(reg, callback);
  })();

  static makeLoginFromId = (id: number) => 'T' + smylib.md5('' + id).slice(1);

  makeSendMessageOptions(keyboard: (InlineKeyboardButton & { cb: JTgBotCallbackQuery })[][]) {
    return this._bot.makeOptionsKeyboard(this, keyboard);
  }

  refreshAdmins() {
    this.admins = emptyAdmins;
    return this.getAdmins();
  }

  onChatMessages(cb: JTgBotChatMessageCallback) {
    this._bot.registerChatMessagesCallback(
      this,
      this.chatId,
      this.logAllAsJSON && this.logger
        ? (bot, message, metadata) => {
            this.logger.jsonCode({ message, metadata });
            cb(bot, message, metadata);
          }
        : cb,
    );
  }

  onChatQueries(cb: JTgBotCallbackQuery) {
    this._bot.registerChatCallbackQueryCallback(
      this,
      this.chatId,
      this.logAllAsJSON && this.logger
        ? (bot, query, metadata) => {
            this.logger.jsonCode({ query });
            cb(bot, query, metadata);
          }
        : cb,
    );
  }

  deleteMessage(messageId: number, chatId?: number) {
    this._bot.bot.deleteMessage(chatId ?? this.chatId, messageId);
  }

  editMessageText(messageId: number, text: string, keyboard?: SendMessageOptions) {
    try {
      this._bot.bot
        .editMessageText(text, {
          chat_id: this.chatId,
          message_id: messageId,
          parse_mode: 'HTML',
          reply_markup:
            keyboard === undefined
              ? undefined
              : {
                  inline_keyboard: (keyboard.reply_markup as InlineKeyboardMarkup)?.inline_keyboard,
                },
        })
        .then(
          this.logAllAsJSON
            ? message => {
                if (message)
                  if (message === true) this.logger.log(`Изменено сообщение в чате:\n\n` + text);
                  else this.logger.log(`Изменено сообщение #${messageId} в чате ${message.chat.title}:\n\n` + text);
              }
            : undefined,
        );
    } catch (error) {}
  }

  getAdmins() {
    const updateAdmins = (adminList: ChatMember[]) => {
      this.admins = {};
      adminList.forEach(admin => (this.admins![admin.user.id] = admin));
      return this.admins;
    };

    return new Promise<Record<number, ChatMember>>((res, rej) => {
      if (this.admins[0] === undefined) {
        res(this.admins);
        return;
      }

      this._bot.bot
        .getChatAdministrators(this.chatId)
        .then(admins => res(updateAdmins(admins)))
        .catch(rej);
    });
  }

  postMessage(text: string, options?: TgBot.SendMessageOptions, chatId?: number) {
    if (this.logAllAsJSON) this.logger.jsonCode({ message: text, options });

    return this._bot.bot.sendMessage(chatId ?? this.chatId, text, {
      parse_mode: 'HTML',
      ...options,
    });
  }

  getUserData(id: number) {
    return this._bot.bot.getChatMember(this.chatId, id).catch(() => {});
  }

  async tryIsUserMember(id: number) {
    const member = await this.getUserData(id);

    if (!member || member.status === 'kicked' || member.status === 'left') throw Error();

    return member;
  }

  messageCase = (prefix: `/${string}`, text: string) => {
    return prefix === text || `${prefix}@${botName}` === text;
  };
}
