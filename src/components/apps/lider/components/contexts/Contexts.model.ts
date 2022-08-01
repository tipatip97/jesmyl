import { LeaderGroupImportable } from "../groups/Groups.model";

export interface LeaderContextsImportable {
    list?: LeaderContextImportable[];
}

export interface LeaderContextImportable extends LeaderContextExportable {
    w: number;
    groups?: LeaderGroupImportable[];
}

export interface LeaderContextExportable extends LeaderContextCreatable {
    ts: number;
}

export interface LeaderContextCreatable {
    name: string;
    members: number[];
    mentors: number[];
}