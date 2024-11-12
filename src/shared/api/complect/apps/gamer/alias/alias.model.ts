import { GamerRoomMemberLogin } from '../gamer.model';

export interface AliasGameTeam {
  title: string;
  members: GamerRoomMemberLogin[];
  messages: string[];
  score: number;
  rounds: number;
}

export enum GamerAliasRoomStatePhase {
  Initial,
  Wait,
  Speech,
  Results,
}

export interface AliasWordsPack {
  title: string;
  words: Record<string, number> | number;
  variants?: { id: number; title: string }[];
}

export interface StartAliasRoundState {
  teams: AliasGameTeam[];
  roundTime: number;
  dream: number;
  dicts: number[];
}

export interface GamerAliasRoomState extends StartAliasRoundState {
  phase: GamerAliasRoomStatePhase;
  speaks: number[];
  speakeri: number;
  wordsi: number;
  arsenal: number;
  startTs: number;
  wins: number[] | null;
  id: string;
  cor: AliasWordInfo[];
  inc: AliasWordInfo[];
  winfo: AliasWordInfo;
  fix: number[];
  invert: Record<number, string[]>;
}

export interface StartAliasRoundProps extends StartAliasRoundState {
  isResortWords: boolean;
}

export interface AliasWordInfo {
  word: string;
  wordi: number;
  plus: number;
  minus: number;
}
