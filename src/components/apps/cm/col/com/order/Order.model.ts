import { Com } from "../Com";
import { StyleProp } from "../../../complect/settings/StyleProp";
import { Order } from "./Order";
import { ReactNode } from "react";


export interface IExportableOrder {
    a: number; // Ссылка на блок
    c: number; // Блок аккордов
    e: num; // Без названия
    f: IExportableOrderFieldValues; // Особые значения
    m: num; // Минималка
    o: num; // Открыто в полном режиме
    p: number[][]; // Позиции аккордов
    r: OrderRepeats | null; // Повторения
    s: string; // Тип блока
    t: number; // Текстовый блок
    u: number; // Целевой айди
    v: num; // Видимость блока
    w: number; // Уникальный айди
    originWid: number; // Неизменяемый уникальный айди
}

export type EditableOrderRegion = [number | null, number | null, number | null, number | null, Order | undefined, Order | undefined, number[] | null, string | null, string, string?, number?];

export interface IExportableOrderFieldValues {
    md?: num; // Признак модулирующего блока
}

export type SpecielOrderRepeats = Record<string, number>;
export type OrderRepeats = number | SpecielOrderRepeats;

export type Inheritancables<K extends keyof IExportableOrder = keyof IExportableOrder> = Record<K, Record<number, IExportableOrder[K]>>

export interface IExportableOrderTop extends IExportableOrder {
    com: Com;
    source?: IExportableOrderTop;
    init?: IExportableOrderTop;
    targetOrd?: Order | nil;
    leadOrd?: Order;
    ord?: Order;
    sourceOrd?: Order | nil;
    prev?: Order | null;
    next?: Order | null;
    prevOrd?: Order | null;
    nextOrd?: Order | null;
    isAnchor?: boolean;
    isTarget?: boolean;
    isInherit?: boolean;
    isAnchorInherit?: boolean;
    isPrevAnchorInheritPlus?: boolean;
    isNextInherit?: boolean;
    isNextAnchorOrd?: boolean;
    isPrevTargetOrd?: boolean;
    inh?: Inheritancables;
    anchorInheritIndex?: number;
    sourceIndex?: number;
    inhFields?: string[];
    headClassName?: string;
    textClassName?: string;
    viewIndex?: number;
    header: (bag?: OrderTopHeaderBag, isRequired?: boolean) => string;
    style?: StyleProp;
}

export interface OrderTopHeaderBag {
    isTexted?: boolean;
    r?: string;
}
export interface OrderExecArgs<Value> {
    wid?: number | null;
    value?: Value;
    fieldn?: keyof IExportableOrderFieldValues;
    linei?: number;
    line?: number[];
    lineTitle?: string;
}

export interface OrderField {
    name: keyof IExportableOrder;
    title: string;
    isExt?: boolean;
    extIf?: (poss?: [] | null) => boolean;
    type: string | string[];
}

export interface ITheOrderProps {
    asLineComponent: () => ReactNode;
    setChorded: () => boolean;
    setHideAnchor: () => boolean;
    onLineClick: () => void;
    setOrdClassName: () => string;
    orderUnit: Order;
    orderUniti: number;
    currTransPosition: number;
    isAnchorInheritHide: boolean;
    ccom: Com;
}


