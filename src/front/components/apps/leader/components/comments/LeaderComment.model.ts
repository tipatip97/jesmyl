import { ClientExecutionDict } from '../../../../../complect/exer/Exer.model';

export interface LeaderCommentInitializable {
  comment: string;
}

export interface LeaderCommentExportable extends LeaderCommentInitializable {
  gamew: number;
  timerw?: number;
  teamw?: number;
}

export interface LeaderCommentImportable extends LeaderCommentInitializable {
  owner: string;
  fio: string;
  w: number;
}

export type SendingComment = ClientExecutionDict<unknown, LeaderCommentExportable>;
