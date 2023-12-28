import TgBot, { BotCommand, CallbackQuery, InlineKeyboardButton } from 'node-telegram-bot-api';
import Eventer, { EventerCallback, EventerListeners } from '../../complect/Eventer';
import smylib from '../../shared/SMyLib';
import { JesmylTelegramBot } from './tg-bot';

export type FreeAnswerCallbackQueryOptions = Omit<Partial<TgBot.AnswerCallbackQueryOptions>, 'callback_query_id'>;
export type JTgBotCallbackQueryWithoutBot = (
  query: CallbackQuery,
  answer: (options: string | FreeAnswerCallbackQueryOptions) => void,
) => string | void | undefined | Promise<FreeAnswerCallbackQueryOptions | undefined | void | string>;
export type JTgBotCallbackQuery = (
  bot: JesmylTelegramBot,
  query: CallbackQuery,
  answer: (options: string | FreeAnswerCallbackQueryOptions) => void,
) => string | void | undefined | Promise<FreeAnswerCallbackQueryOptions | undefined | void | string>;
export type JTgBotChatMessageCallbackWithoutBot = (message: TgBot.Message, metadata: TgBot.Metadata) => any;
export type JTgBotChatMessageCallback = (
  bot: JesmylTelegramBot,
  message: TgBot.Message,
  metadata: TgBot.Metadata,
) => any;
export type JTgBotPersonalMessageCallback = (
  bot: JesmylTelegramBotWrapper,
  message: TgBot.Message,
  metadata: TgBot.Metadata,
) => any;

export class JesmylTelegramBotWrapper {
  bot: TgBot;
  private fromOptionsOnCallbackQueryCallback: Record<string, JTgBotCallbackQueryWithoutBot> = {};
  private chatCallbackQueryCallbacks: Record<string, JTgBotCallbackQueryWithoutBot> = {};
  private chatMessagesCallbacks: Record<string, JTgBotChatMessageCallbackWithoutBot> = {};
  private personalMessageListeners: EventerListeners<TgBot.Message> = [];
  private personalQueryListeners: EventerListeners<TgBot.CallbackQuery> = [];

  constructor(token: string, options?: TgBot.ConstructorOptions) {
    this.bot = new TgBot(token, options);

    this.bot.on('message', (message, metadata) => {
      if (this.chatMessagesCallbacks[message.chat.id] !== undefined) {
        this.chatMessagesCallbacks[message.chat.id](message, metadata);
        return;
      }

      if (this.personalMessageListeners.length > 0 && message.from?.id === message.chat.id) {
        Eventer.invoke(this.personalMessageListeners, message);
        return;
      }
    });

    this.bot.on('callback_query', async query => {
      const callback = (options: string | FreeAnswerCallbackQueryOptions) => {
        this.bot.answerCallbackQuery(
          query.id,
          smylib.isStr(options)
            ? { text: options, callback_query_id: query.id }
            : { show_alert: true, ...options, callback_query_id: query.id },
        );
      };

      if (query.data && this.fromOptionsOnCallbackQueryCallback[query.data] !== undefined) {
        const answer = await this.fromOptionsOnCallbackQueryCallback[query.data](query, callback);
        if (answer !== undefined) {
          callback(answer);
          return;
        }
      }

      if (query.message !== undefined && this.chatCallbackQueryCallbacks[query.message.chat.id] !== undefined) {
        const answer = await this.chatCallbackQueryCallbacks[query.message.chat.id](query, callback);
        if (answer !== undefined) callback(answer);
      }

      if (this.personalQueryListeners.length > 0 && query.from.id === query.message?.chat.id) {
        const event = Eventer.invoke(this.personalQueryListeners, query);
        if (smylib.isStr(event.stoppedValue)) callback(event.stoppedValue);
      }
    });
  }

  listenPersonalMessages = (cb: EventerCallback<TgBot.Message>) => {
    return Eventer.listen(this.personalMessageListeners, cb);
  };

  listenPersonalQueries = (cb: EventerCallback<TgBot.CallbackQuery>) => {
    return Eventer.listen(this.personalQueryListeners, cb);
  };

  setCommands(commands: BotCommand[]) {
    this.bot.setMyCommands(commands);
  }

  makeOptionsKeyboard(
    bot: JesmylTelegramBot,
    keyboard: (InlineKeyboardButton & { cb: JTgBotCallbackQuery })[][],
    isRewriteButtonOnSameKey?: boolean,
  ) {
    keyboard.flat().forEach(key => {
      if (!key.callback_data || !key.cb) return;

      if (isRewriteButtonOnSameKey !== true && this.fromOptionsOnCallbackQueryCallback[key.callback_data] !== undefined)
        throw Error('Повторяющиеся ключи callback_query');

      const cb = key.cb;

      this.fromOptionsOnCallbackQueryCallback[key.callback_data] = (message, answer) => cb(bot, message, answer);
      delete (key as any).cb;
    });

    return {
      reply_markup: {
        inline_keyboard: keyboard,
      },
    };
  }

  registerChatMessagesCallback(bot: JesmylTelegramBot, chatId: number, cb: JTgBotChatMessageCallback) {
    this.chatMessagesCallbacks[chatId] = (message, metadata) => cb(bot, message, metadata);
  }

  registerChatCallbackQueryCallback(bot: JesmylTelegramBot, chatId: number, cb: JTgBotCallbackQuery) {
    this.chatCallbackQueryCallbacks[chatId] = (query, answerCallback) => cb(bot, query, answerCallback);
  }
}
