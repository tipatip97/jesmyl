

export interface IExportableMeetingsEvent {
    n: string; // название из IExportableMeetings.names
    w: number; // уникальный айди
    r: num; // регулярное ли
    b: number; // время начала
    e: number; // время окончания
    s: number[]; // список песен
    g: number; // контекстуальная группа
}

export type MeetingsContext = string;

export interface IExportableMeetings {
    contexts: MeetingsContext[];
    events: IExportableMeetingsEvent[];
    groups: Record<number, (keyof IExportableMeetings['contexts'])[]>;
}

export interface MeetingsContextBox {
    id: number;
    name: MeetingsContext;
}
