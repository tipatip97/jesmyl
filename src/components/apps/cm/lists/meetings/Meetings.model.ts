import { Base } from "../../base/Base";


export interface IExportableMeetingsEvent {
    n: string; // название из IExportableMeetings.names
    w: number; // уникальный айди
    r: num; // регулярное ли
    b: number; // время начала
    e: number; // время окончания
    s: number[]; // список песен
    g: number; // контекстуальная группа
}

export interface IExportableMeetingsContext {
    c: number[];
}

export class MeetingsContext extends Base<IExportableMeetingsContext> {
    get context() {
        return this.getBasic('c');
    }
    set context(val) {
        this.setExportable('c', val);
    }
}

export type MeetingsContextMap = Record<number, MeetingsContext>;
export type IExportableMeetingsContextMap = Record<number, IExportableMeetingsContext>;

export interface IExportableMeetings {
    names: string[];
    events: IExportableMeetingsEvent[];
    contexts: IExportableMeetingsContextMap;
}

export interface MeetingsContextBox {
    id: number;
    name: string;
}
