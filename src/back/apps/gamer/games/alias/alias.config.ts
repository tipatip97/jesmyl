import Eventer, { EventerValueListeners } from '../../../../complect/Eventer';
import { ExecutionArgs } from '../../../../complect/executer/Executer.model';
import { filer } from '../../../../complect/filer/Filer';
import { ActionBox, ActionBoxOnFinalCallback } from '../../../../models';
import { NounPronsType } from '../../../index/models/nounProns.model';
import { GamerRoom } from '../../gamer.model';
import { AliasHelp } from './AliasHelp';
import {
  AliasGameTeam,
  AliasWordInfo,
  AliasWordsPack,
  GamerAliasRoomState,
  GamerAliasRoomStatePhase,
  StartAliasRoundProps,
} from './alias.model';

const isIs = (is: unknown) => is;

const extractState = <Ret>(props: ExecutionArgs | nil): Ret => props?.$$vars?.$$currentValue;
const speechTimerId = (state: GamerAliasRoomState) => 'alias-timeout:' + state.teams[0].title;
const clearSpeechTimer = (props: ExecutionArgs | null) => {
  const state = extractState<GamerAliasRoomState | nil>(props);
  if (!state) return;
  return {
    clearId: speechTimerId(state),
  };
};

const stateChange: EventerValueListeners<GamerRoom> = [];

export const AliasGameActions = {
  stateChange,
};

const getTokenizedWinfoLine = (state: Pick<GamerAliasRoomState, 'token' | 'dicts' | 'lens'>) =>
  AliasHelp.getTokenizedWordInfos(state.token, state.dicts, state.lens, getWordPacks(), getNounPronsWords());

const getWordPacks = () => filer.contents.gamer['aliasWordPacks'].data as AliasWordsPack[];
const getNounPronsWords = () => filer.contents.index['nounPronsWords'].data as NounPronsType;
const getRooms = () => filer.contents.gamer.rooms?.data as GamerRoom[];

const onPhaseChangeSuccessCallback: ActionBoxOnFinalCallback = args => {
  if (args?.roomw == null) return;
  const room = getRooms().find(room => room.w === args.roomw);
  if (room == null) return;
  Eventer.invokeValue(stateChange, room);
};

export const aliasGameConfig: ActionBox = {
  '<phases>': {
    '<start round>': {
      expected: {},
      action: 'startAliasRound',
      method: 'set_all',
      onSuccess: onPhaseChangeSuccessCallback,
      value: (() => {
        const itMembers = (it: AliasGameTeam) => it.members;
        const itZero = () => 0;

        return (props: StartAliasRoundProps): Partial<GamerAliasRoomState> => {
          const state = extractState<GamerAliasRoomState | nil>(props);
          const [speakeri] = state ? AliasHelp.takeSpeakerDetails(state) : [0];

          const newState: Partial<GamerAliasRoomState> = {
            phase: GamerAliasRoomStatePhase.Wait,
            teams: props.teams,
            speaks: props.teams.map(itMembers).flat().map(itZero),
            roundTime: props.roundTime,
            speakeri,
            dream: props.dream,
            dicts: props.dicts,
            cor: [],
            inc: [],
            fix: [],
            invert: {},
            wins: null,
          };

          if (props.isResortWords || !state?.token) {
            if (state) AliasHelp.removeTokenizedWordInfos(state.token);
            newState.token = AliasHelp.makeSortToken();
            newState.wordsi = 0;
            newState.lens = AliasHelp.takeLens(null, props.dicts, getWordPacks(), getNounPronsWords());

            const winfos = getTokenizedWinfoLine({
              dicts: props.dicts,
              lens: newState.lens,
              token: newState.token,
            });
            newState.arsenal = winfos.length;
            newState.winfo = winfos[0];
          }

          return newState;
        };
      })(),
    },
    '<start speech>': {
      action: 'startAliasSpeech',
      onSuccess: onPhaseChangeSuccessCallback,
      method: 'set_all',
      value: () => ({
        phase: GamerAliasRoomStatePhase.Speech,
        startTs: Date.now(),
      }),
    },
    '<start timeout>': {
      action: 'startAliasSpeechTimeout',
      onSuccess: onPhaseChangeSuccessCallback,
      timer: props => {
        const state = extractState<GamerAliasRoomState | nil>(props);
        if (!state) return;
        return {
          startMs: (state.roundTime || 1) * 1000 + 1000,
          startId: speechTimerId(state),
        };
      },
      method: 'set_all',
      value: {
        phase: GamerAliasRoomStatePhase.Results,
        startTs: 0,
      },
    },
    '<pass end>': {
      action: 'resetAliasSpeech',
      method: 'set_all',
      onSuccess: onPhaseChangeSuccessCallback,
      timer: clearSpeechTimer,
      value: {
        phase: GamerAliasRoomStatePhase.Results,
        startTs: 0,
      },
    },
    '<reset game>': {
      action: 'resetAliasGame',
      onSuccess: onPhaseChangeSuccessCallback,
      method: 'set_all',
      timer: clearSpeechTimer,
      value: {
        phase: GamerAliasRoomStatePhase.Initial,
        startTs: 0,
      },
    },
    '<compute score>': {
      action: 'computeAliasScore',
      onSuccess: onPhaseChangeSuccessCallback,
      method: 'set_all',
      value: {
        phase: GamerAliasRoomStatePhase.Wait,
        inc: [],
        cor: [],
        fix: [],
        invert: {},
      },
      side: (() => {
        const itNNull = (it: unknown) => it !== null;

        return props => {
          const state = extractState<GamerAliasRoomState | nil>(props);
          if (state == null || props == null) return;
          const [speakeri, currTeami] = AliasHelp.takeSpeakerDetails(state);

          const winfos = getTokenizedWinfoLine(state);
          const mapper = (winfo: AliasWordInfo) => winfos[winfo.wordi];

          const score =
            state.teams[currTeami].score +
            (winfos
              ? AliasHelp.computeGameScore(
                  state.cor.map(mapper).filter(isIs),
                  state.inc.map(mapper).filter(isIs),
                  props.isTgCompute ? state.invert : state.fix,
                )
              : -1000000);

          const arsenal = winfos.length - state.wordsi + 1;
          const value: Partial<GamerAliasRoomState> = {
            speakeri,
            arsenal,
          };

          if (
            arsenal < 1 ||
            (state.teams.some((team, teami) => (currTeami === teami ? score : team.score) >= state.dream) &&
              !state.teams.some(
                (team, teami, teama) =>
                  team.rounds + (currTeami === teami ? 1 : 0) !== teama[0].rounds + (currTeami === 0 ? 1 : 0),
              ))
          ) {
            const scores = state.teams.map((team, teami) => (currTeami === teami ? score : team.score));
            const maxScore = Math.max(...scores);
            value.wins = scores.map((score, scorei) => (score === maxScore ? scorei : null!)).filter(itNNull);
          } else {
            value.wordsi = state.wordsi + 1;
            value.winfo = winfos[state.wordsi + 1];
          }

          return {
            '/': {
              method: 'set_all',
              value,
            },
            '/wordsi': {
              method: 'formula',
              value: 'X + 1',
            },
            [`/speaks/${state.speakeri}`]: {
              method: 'formula',
              value: 'X + 1',
            },
            [`/teams/${currTeami}/score`]: {
              method: 'set',
              value: score,
            },
            [`/teams/${currTeami}/rounds`]: {
              method: 'formula',
              value: 'X + 1',
            },
          } as const;
        };
      })(),
    },
  },
  '<skip member turn>': {
    action: 'skipTheMemberTurn',
    onSuccess: onPhaseChangeSuccessCallback,
    method: 'set_all',
    value: props => {
      const state = extractState<GamerAliasRoomState | nil>(props);
      const [speakeri] = state ? AliasHelp.takeSpeakerDetails(state, state.speakeri) : [0];
      return { speakeri };
    },
  },
  '<strike word>': {
    action: 'strikeAliasWord',
    side: props => {
      const state = extractState<GamerAliasRoomState | nil>(props);

      if (state == null) return;

      const winfos = getTokenizedWinfoLine(state);
      if (winfos[state.wordsi + 1] == null) return;

      return {
        '/': {
          method: 'set_all',
          value: {
            wordsi: state.wordsi + 1,
            winfo: winfos[state.wordsi + 1],
          },
        },
        '/{scope}': {
          method: 'push',
          value: state.winfo,
        },
      };
    },
  },
  '/fix': {
    expected: [],
    action: 'fixAliasWord',
    method: 'toggle',
    value: '{wordi}',
  },
  '/invert': {
    expected: {},
    action: 'invertAliasWord',
    onSuccess: onPhaseChangeSuccessCallback,
    side: (props, auth) => {
      const invert = extractState<Record<number, number[]>>(props);
      return {
        '/{wordi}': invert?.[props?.wordi]
          ? {
              method: 'toggle',
              value: auth?.login,
            }
          : {
              method: 'set',
              value: [auth?.login],
            },
      };
    },
  },
};
