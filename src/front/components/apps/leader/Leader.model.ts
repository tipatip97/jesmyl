import { SendingComment } from './components/comments/LeaderComment.model';
import { LeaderContextsImportable } from './components/contexts/Contexts.model';
import { GameTeamExportable, GameTeamImportable } from './components/games/teams/GameTeams.model';
import {
  GameTimerConfigurable,
  GameTimerImportable,
  StoragedGameTimerImportableDict,
} from './components/games/timers/GameTimer.model';
import { HumanListSortVariant, PeopleImportable } from './components/people/People.model';

export interface LeaderState extends LeaderStoraged {
  isSendingMessagesError: boolean;
}

export interface LeaderStoraged {
  people?: PeopleImportable;
  contexts?: LeaderContextsImportable;
  games?: GamesStoreImportable;
  humanListSortVariant: HumanListSortVariant;
  gameTimers?: StoragedGameTimerImportableDict;
  sendingComments: SendingComment[];
}

export interface TeamGameImportable extends TeamGameExportable {
  w: number;
  teams?: GameTeamImportable[];
}

export interface TeamGameExportable {
  ts: number;
  contextw: number;
  name: string;
  dsc?: string;
  timerNames?: string[];
  timerFields?: GameTimerConfigurable;
  teams?: GameTeamExportable[];
  timers?: GameTimerImportable[];
}

export interface GamesStoreImportable {
  teamGames?: TeamGameImportable[];
}

export interface LeaderNavData {
  gamew: number;
  groupw: number;
  contextw: number;
}
