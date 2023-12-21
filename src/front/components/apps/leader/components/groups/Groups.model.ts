export interface LeaderGroupImportable extends LeaderGroupExportable {
  w: number;
  ts: number;
}

export interface LeaderGroupCreatable {
  contextw: number;
  name: string;
  mentors: number[];
  members: number[];
}

export interface LeaderGroupExportable extends LeaderGroupCreatable {
  ts: number;
  isInactive?: boolean;
  fields?: Record<string, string>;
}

export interface LeaderGroupChangable {
  contextw: number;
  name?: string;
  addMentors?: number[];
  addMembers?: number[];
  delMentors?: number[];
  delMembers?: number[];
}
