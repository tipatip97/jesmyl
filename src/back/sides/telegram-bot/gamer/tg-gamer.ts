import TelegramBot from 'node-telegram-bot-api';
import { GamerRoom, GamerRoomMemberStatus } from '../../../apps/gamer/gamer.model';
import { filer } from '../../../complect/filer/Filer';
import { SokiAuther } from '../../../complect/soki/SokiAuther';
import sokiServer from '../../../complect/soki/SokiServer';
import { jesmylTgBot } from '../bot';
import { supportTelegramBot } from '../support/support-bot';
import { gamerTgAliasGameActions } from './tg-alias';

const editTelegramMessage = (
  text: string,
  chatId: number,
  messageId: number,
  keyboard?: TelegramBot.InlineKeyboardButton[][],
) => {
  try {
    jesmylTgBot.bot.editMessageText(text, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'HTML',
      reply_markup:
        keyboard === undefined
          ? undefined
          : {
              inline_keyboard: keyboard,
            },
    });
  } catch (error) {}
};

export const editRoomTelegramMessage = (
  roomName: string,
  text: string,
  chatId: number,
  messageId: number,
  keyboard?: TelegramBot.InlineKeyboardButton[][],
) => {
  text && editTelegramMessage(`Комната "${roomName}"\n\n${text}`, chatId, messageId, keyboard);
};

const gamerQueryDataPrefix = 'gamer_room/';

export const gamerTgQueryParts = {
  join: 'join',
} as const;

export const makeTgGamerTgQueryData = <const Action = keyof typeof gamerTgQueryParts>(roomw: number, action: Action) =>
  `${gamerQueryDataPrefix}${roomw}/${action}` as const;

export const startTgGamerListener = () => {
  const getRooms = () => filer.contents.gamer.rooms?.data as GamerRoom[];

  const deleteMessage = (query: TelegramBot.CallbackQuery, messageId: number) => {
    try {
      jesmylTgBot.bot.deleteMessage(query.from.id, messageId);
    } catch (error) {}
  };

  const startOptions = supportTelegramBot.makeSendMessageOptions([
    [
      {
        text: 'Список игровых комнат',
        callback_data: 'show_gamer_room_list_for_join',
        cb: (_bot, query) => {
          const rooms = getRooms();

          if (rooms == null) return 'Комнаты не найдены';
          if (query.message == null) return 'Сообщение не найдено';

          if (!rooms.length) return 'Комнат пока нет';

          editTelegramMessage(
            'Это список игровых комнат. Присоединяйся!',
            query.from.id,
            query.message.message_id,
            rooms.map(room => {
              return [
                {
                  text: room.name,
                  callback_data: makeTgGamerTgQueryData(room.w, gamerTgQueryParts.join),
                },
              ];
            }),
          );
        },
      },
    ],
  ]);

  jesmylTgBot.listenPersonalQueries(async event => {
    const send = async (): Promise<string | und> => {
      if (event.value.data === undefined || event.value.message === undefined) return 'Неизвестные данные';

      const auth = await SokiAuther.getTgAuth(event.value.from.id);

      if (auth == null) return 'Авторизоваться не удалось';

      if (event.value.data.startsWith(gamerQueryDataPrefix)) {
        const [, roomwStr, action] = event.value.data.split('/');
        const roomw = +roomwStr;

        const room = getRooms().find(room => roomw === room.w);

        if (room === undefined) return 'Комната не найдена';

        const execute = async (action: string, args?: Record<string, unknown>): Promise<void> => {
          if (member !== undefined && args !== undefined) args.login = member.login;
          return await sokiServer.execExecs('gamer', [{ action, args: { ...args, roomw } }], auth, auth);
        };

        const member = room.members.find(member => member.login === auth.login);
        const messageId = event.value.message.message_id;

        const setRoomMessage = (text: string, keyboard?: TelegramBot.InlineKeyboardButton[][]) =>
          editRoomTelegramMessage(room.name, text, event.value.from.id, messageId, keyboard);

        if (member === undefined) {
          if (action === gamerTgQueryParts.join) {
            await execute('requestAddToRoom', { tgMsgId: messageId });
            setRoomMessage(`Заявка на вступление в комнату подана. Дождись начала игры`);

            return 'Заявка подана';
          }

          return 'Пользователь не найден';
        }

        if (member.tgMsgId == null || member.tgMsgId !== messageId) {
          if (member.tgId === undefined) return 'Нужна регистрация через телеграм';

          if (member.tgMsgId != null) deleteMessage(event.value, member.tgMsgId);

          execute('setMemberTgMessageId', { value: messageId });
        }

        if (member.isInactive) return 'Тебя исключили из комнаты';
        if (member.status === GamerRoomMemberStatus.Requester) {
          setRoomMessage(
            `Тебя ещё не приняли, но заявка подана. Обратись, пожалуйста, к админам комнаты, чтоб рассмотреть возможность твоего вступления`,
          );

          return 'Заявка уже подана';
        }

        if (room.currentGame == null) return 'Игра не началась';
        if (room.currentGame !== 'alias') return 'Неизвестная игра';

        const aliasAlert = gamerTgAliasGameActions(action, event.value, room, execute, member, auth, setRoomMessage);

        if (aliasAlert !== false) return aliasAlert === true ? '' : aliasAlert;
      }

      return undefined;
    };

    const sentAnswer = await send();
    if (sentAnswer !== undefined) event.stopPropagation(sentAnswer);
  });

  jesmylTgBot.listenPersonalMessages(event => {
    const message = event.value;

    if (message.text === '/start') {
      const id = message.chat.id;
      try {
        jesmylTgBot.bot.sendMessage(id, 'На текущий момент доступны такие действия', startOptions);
      } catch (error) {}
    }
  });
};
