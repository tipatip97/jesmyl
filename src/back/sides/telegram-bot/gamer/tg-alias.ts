import TelegramBot from 'node-telegram-bot-api';
import { LocalSokiAuth } from 'shared/api';
import { Eventer } from 'shared/utils';
import {
  GamerAliasRoomState,
  GamerAliasRoomStatePhase,
} from '../../../../shared/api/complect/apps/gamer/alias/alias.model';
import { AliasCleans } from '../../../../shared/api/complect/apps/gamer/alias/AliasCleans';
import {
  GamerRoom,
  GamerRoomMember,
  GamerRoomMemberStatus,
} from '../../../../shared/api/complect/apps/gamer/gamer.model';
import { AliasGameActions } from '../../../apps/gamer/games/alias/alias.config';
import { editRoomTelegramMessage, gamerTgQueryParts, makeTgGamerTgQueryData } from './tg-gamer';

export const aliasTgGameActions = {
  start: 'start',
  correct: 'correct',
  incorrect: 'incorrect',
  computeResults: 'compute',
  showResults: 'showResults',
} as const;

const timeouts: Record<number, TimeOut> = {};

const makeQuery = (roomw: number, action: string, sign?: number | string) =>
  makeTgGamerTgQueryData(roomw, action) + (sign === undefined ? '' : sign);

const onAliasPahseChange = (room: GamerRoom) => {
  const state = room.games?.alias as GamerAliasRoomState;
  if (state === undefined) return;

  const members = state.teams.map(team => team.members).flat();

  for (const member of room.members) {
    const speakeri = members.indexOf(member.login);
    if (speakeri < 0) continue;

    if (
      member.isInactive ||
      member.status === GamerRoomMemberStatus.Requester ||
      member.tgId === undefined ||
      member.tgMsgId == null
    )
      continue;

    if (state.wins != null) {
      const winners = state.wins
        .map(winTeami => {
          const team = state.teams[winTeami];

          return (
            '<b>' +
            team.title +
            `</b> (${team.score}):\n` +
            room.members.map(member => (team.members.includes(member.login) ? `  ${member.name}` : '')).join('')
          );
        })
        .join('\n\n');
      editRoomTelegramMessage(room.name, `Наилучшие поздравления!\n\n${winners}`, member.tgId, member.tgMsgId);

      continue;
    }

    if (state.phase === GamerAliasRoomStatePhase.Speech) {
      if (state.speakeri !== speakeri) continue;
      clearInterval(timeouts[room.w]);

      if (state.arsenal === 0) {
        editRoomTelegramMessage(room.name, 'Слов больше не осталось', member.tgId, member.tgMsgId);
        continue;
      }

      const sendCurrWordData = () => {
        const lessTime = Math.floor((state.startTs + state.roundTime * 1000 - Date.now()) / 1000);
        if (lessTime < 0) {
          editRoomTelegramMessage(room.name, 'Время вышло', member.tgId!, member.tgMsgId!, [
            [{ text: 'Вывести результаты', callback_data: makeQuery(room.w, aliasTgGameActions.showResults) }],
          ]);
          return;
        }
        editRoomTelegramMessage(
          room.name,
          '__________' +
            lessTime +
            ' сек. осталось\n\n\n\n' +
            state.winfo.word +
            '\n\n\n\n___________________________________',
          member.tgId!,
          member.tgMsgId!,
          [
            [
              { text: `✅ верно +${state.winfo.plus}`, callback_data: makeQuery(room.w, aliasTgGameActions.correct) },
              {
                text: `❌ неверно -${state.winfo.minus}`,
                callback_data: makeQuery(room.w, aliasTgGameActions.incorrect),
              },
            ],
          ],
        );
      };

      timeouts[room.w] = setInterval(sendCurrWordData, 3000);
      sendCurrWordData();
      continue;
    }

    if (state.speakeri === speakeri) {
      if (state.phase === GamerAliasRoomStatePhase.Initial) {
        editRoomTelegramMessage(room.name, 'Игра ещё не началась', member.tgId, member.tgMsgId);
        continue;
      }

      if (state.phase === GamerAliasRoomStatePhase.Wait) {
        editRoomTelegramMessage(room.name, 'Твоя очередь.\nПо готовности нажми "Старт"', member.tgId, member.tgMsgId, [
          [{ text: 'Старт', callback_data: makeQuery(room.w, aliasTgGameActions.start) }],
        ]);
        continue;
      }

      if (state.phase === GamerAliasRoomStatePhase.Results) {
        clearInterval(timeouts[room.w]);

        const results =
          state.cor
            .map(winfo => {
              const isInvert = state.invert[winfo.wordi]?.length;
              return (isInvert ? '❌ ' : '✅ ') + winfo.word + (isInvert ? ` -${winfo.minus}\n` : ` +${winfo.plus}\n`);
            })
            .join('') +
          '\n' +
          state.inc
            .map(winfo => {
              const isInvert = state.invert[winfo.wordi]?.length;
              return (isInvert ? '✅ ' : '❌ ') + winfo.word + (isInvert ? ` +${winfo.plus}\n` : ` -${winfo.minus}\n`);
            })
            .join('');

        editRoomTelegramMessage(
          room.name,
          `Результаты ${AliasCleans.computeGameScore(state.cor, state.inc, state.invert)}:\n${results}`,
          member.tgId,
          member.tgMsgId,
          [[{ text: 'Отправить результаты', callback_data: makeQuery(room.w, aliasTgGameActions.computeResults) }]],
        );
        continue;
      }
    } else {
      const results = state.teams
        .map(team => {
          const members = team.members.includes(member.login)
            ? team.members
                .map(
                  memberLogin =>
                    `\n  ${room.members.find(member => member.login === memberLogin)?.name || 'Неизвестный'}`,
                )
                .join('')
            : '';
          return `<b>${team.title} ${team.score}${members ? ':' : ''}</b>${members}`;
        })
        .join('\n\n');
      editRoomTelegramMessage(room.name, results, member.tgId, member.tgMsgId);
    }
  }
};

export const gamerTgAliasGameActions = (
  action: string,
  query: TelegramBot.CallbackQuery,
  room: GamerRoom,
  execute: (action: string, args?: Record<string, unknown>) => Promise<void>,
  member: GamerRoomMember,
  auth: LocalSokiAuth,
  setRoomMessage: (text: string, keyboard?: TelegramBot.InlineKeyboardButton[][]) => void,
): boolean | string => {
  if (action === gamerTgQueryParts.join) {
    onAliasPahseChange(room);
    return 'Игра уже идёт';
  }

  if (action === aliasTgGameActions.start) {
    execute('startAliasSpeech');
    execute('startAliasSpeechTimeout');
    return 'Время пошло. Удачи!';
  }

  if (action === aliasTgGameActions.correct) {
    execute('strikeAliasWord', { scope: 'cor' }).then(() => onAliasPahseChange(room));
    return 'Слово отправлено ✅';
  }

  if (action === aliasTgGameActions.incorrect) {
    execute('strikeAliasWord', { scope: 'inc' }).then(() => onAliasPahseChange(room));
    return 'Слово отправлено ❌';
  }

  if (action.startsWith(aliasTgGameActions.computeResults)) {
    execute('computeAliasScore', { isTgCompute: true });
    return 'Результаты отправлены';
  }

  if (action.startsWith(aliasTgGameActions.showResults)) {
    execute('resetAliasSpeech');
    return 'Показываю результаты';
  }

  return false;
};

Eventer.listenValue(AliasGameActions.stateChange, onAliasPahseChange);
