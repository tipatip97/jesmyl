import { ExecutionArgs } from '../../../../complect/executer/Executer.model';
import { filer } from '../../../../complect/filer/Filer';
import { ActionBox } from '../../../../models';
import { NounPronsType } from '../../../index/models/nounProns.model';
import { AliasHelp } from './AliasHelp';
import {
  AliasGameTeam,
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

const getWordPacks = () => filer.contents.gamer['aliasWordPacks'].data as AliasWordsPack[];
const getNounPronsWords = () => filer.contents.index['nounPronsWords'].data as NounPronsType;

export const aliasGameConfig: ActionBox = {
  '<phases>': {
    '<start round>': {
      expected: {},
      action: 'startAliasRound',
      method: 'set_all',
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
          };

          if (state != null && props.isResortWords) {
            AliasHelp.removeTokenizedWordInfos(state.token);
            newState.token = AliasHelp.makeSortToken();
            newState.wordsi = 0;
            newState.lens = AliasHelp.takeLens(null, props.dicts, getWordPacks(), getNounPronsWords());
          }

          return newState;
        };
      })(),
    },
    '<start speech>': {
      action: 'startAliasSpeech',
      method: 'set_all',
      value: () => ({
        phase: GamerAliasRoomStatePhase.Speech,
        startTs: Date.now(),
      }),
    },
    '<start timeout>': {
      action: 'startAliasSpeechTimeout',
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
      timer: clearSpeechTimer,
      value: {
        phase: GamerAliasRoomStatePhase.Results,
        startTs: 0,
      },
    },
    '<reset game>': {
      action: 'resetAliasGame',
      method: 'set_all',
      timer: clearSpeechTimer,
      value: {
        phase: GamerAliasRoomStatePhase.Initial,
        startTs: 0,
      },
    },
    '<compute score>': {
      action: 'computeAliasScore',
      method: 'set_all',
      value: {
        phase: GamerAliasRoomStatePhase.Wait,
        inc: [],
        cor: [],
        fix: [],
        invert: {},
      },
      side: props => {
        const state = extractState<GamerAliasRoomState | nil>(props);
        if (state == null) return;
        const [speakeri, currTeami] = AliasHelp.takeSpeakerDetails(state);

        const aliasWordPacks = AliasHelp.getTokenizedWordInfos(
          state.token,
          state.dicts,
          state.lens,
          getWordPacks(),
          getNounPronsWords(),
        );
        const mapper = (wordi: number) => aliasWordPacks[wordi];

        const score = aliasWordPacks
          ? AliasHelp.computeGameScore(
              state.cor.map(mapper).filter(isIs),
              state.inc.map(mapper).filter(isIs),
              state.fix,
            )
          : -1000000;

        return {
          '/': {
            method: 'set_all',
            value: {
              speakeri,
            },
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
            value: state.teams[currTeami].score + score,
          },
          [`/teams/${currTeami}/rounds`]: {
            method: 'formula',
            value: 'X + 1',
          },
        } as const;
      },
    },
  },
  '<skip member turn>': {
    action: 'skipTheMemberTurn',
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

      return {
        '/wordsi': {
          method: 'formula',
          value: 'X + 1',
        },
        '/{scope}': {
          method: 'push',
          value: state?.wordsi,
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
    action: 'rejectAliasWord',
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
