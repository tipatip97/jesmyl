import { Com } from "../../col/com/Com";
import { Order } from "./Order";

type Num = 0 | 1;

export interface IExportableOrder {
    a: number; // Ссылка на блок
    c: number; // Блок аккордов
    e: Num; // Без названия
    f: IExportableOrderFieldValues; // Особые значения
    m: Num; // Минималка
    o: Num; // Открыто в полном режиме
    p: number[]; // Позиции аккордов
    r: OrderRepeats | null; // Повторения
    s: string; // Тип блока
    t: number; // Текстовый блок
    u: number; // Целевой айди
    v: Num; // Видимость блока
    w: number; // Уникальный айди
}

export type EditableOrderRegion = [number | null, number | null, number | null, number | null, Order, Order, number[] | null, string | null, string, string?, number?];

export interface IExportableOrderFieldValues {
    md?: Num; // Признак модулирующего блока
}

export type SpecielOrderRepeats = Record<string, number>;
export type OrderRepeats = number | SpecielOrderRepeats;

export type Inheritancables<K extends keyof IExportableOrder = keyof IExportableOrder> = Record<K, Record<number, IExportableOrder[K]>>

export interface IExportableOrderTop extends IExportableOrder {
    com: Com;
    source?: IExportableOrderTop;
    targetOrd?: Order;
    leadOrd?: Order;
    isAnchorInherit?: boolean;
    inh?: Inheritancables;
    anchorInheritIndex?: number;
    inhFields?: string[];
    viewIndex?: number;
}


