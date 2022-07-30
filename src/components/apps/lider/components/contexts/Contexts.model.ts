
export interface LeaderContextsImportable {
    list?: LeaderContextImportable[];
}

export interface LeaderContextImportable extends LeaderContextExportable {
    w: number;
}

export interface LeaderContextExportable extends LeaderContextCreatable {
    ts: number;
}

export interface LeaderContextCreatable {
    name: string;
    members: number[];
    mentors: number[];
}