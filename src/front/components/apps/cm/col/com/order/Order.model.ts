import { ReactNode } from "react";
import { StyleBlock } from "../block-styles/StyleBlock";
import { ChordVisibleVariant } from "../../../Cm.model";
import { Com } from "../Com";
import { Order } from "./Order";


export interface InheritancableOrder {
    r?: OrderRepeats | null; // Повторения
    p?: number[][] | nil; // Позиции аккордов
    v?: num; // Видимость блока
}

export interface IExportableOrder extends InheritancableOrder {
    a?: number; // Ссылка на блок
    c?: number; // Блок аккордов
    e?: num; // Без названия
    f?: IExportableOrderFieldValues; // Особые значения
    m?: num; // Минималка
    o?: num; // Открыто в полном режиме
    s?: string; // Тип блока
    t?: number | null; // Текстовый блок
    u?: number; // Целевой айди
    w: number; // Уникальный айди
    inh?: Inheritancables; // 
    originWid?: number; // Неизменяемый уникальный айди
}

export type INewExportableOrder = Omit<IExportableOrder, 'w' | 'originWid'>;

export type EditableOrderRegion<Ord extends Order> = {
    startLinei: number | null,
    startWordi: number | null,
    endLinei: number | null,
    endWordi: number | null,
    startOrd: Ord | undefined,
    endOrd: Ord | undefined,
    others: number[] | null,
    key: string | null,
    startKey: string,
    endKey?: string,
    count?: number
};

export interface IExportableOrderFieldValues {
    md?: number; // Значение модуляции
}

export type SpecielOrderRepeats = Record<string, number>;
export type OrderRepeats = number | SpecielOrderRepeats;

export type Inheritancables<K extends keyof InheritancableOrder = keyof InheritancableOrder> = Partial<Record<K, Record<number, InheritancableOrder[K]>>>

export interface IExportableOrderTop extends IExportableOrder {
    source?: IExportableOrderTop;
    init?: IExportableOrderTop;
    targetOrd?: Order | nil;
    leadOrd?: Order;
    watchOrd?: Order | nil;
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
    isAnchorInheritPlus?: boolean;
    isNextInherit?: boolean;
    isNextAnchorOrd?: boolean;
    isPrevTargetOrd?: boolean;
    anchorInheritIndex?: number;
    sourceIndex?: number;
    viewIndex?: number;
    header?: (bag?: OrderTopHeaderBag, isRequired?: boolean) => ReactNode;
    style?: StyleBlock;
}

export interface OrderTopHeaderBag {
    isEdit?: boolean;
    isTexted?: boolean;
    repeats?: string;
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
    asLineComponent?: (props: IComLineProps) => ReactNode;
    asHeaderComponent?: (props: IComOrdHeaderProps) => ReactNode;
    isMiniAnchor?: boolean;
    orderUnit: Order;
    orderUniti: number;
    com: Com;
    chordVisibleVariant: ChordVisibleVariant;
    showInvisibles?: boolean;
}

export interface IComOrdHeaderProps extends IComOrdProps {
    headerNode: ReactNode;
}

export interface IComOrdProps {
    chordedOrd: boolean;
    orderUnit: Order;
    orderUniti: number;
    isJoinLetters: boolean;
    com: Com;
}

export interface IComLineProps extends IComOrdProps {
    textLine: string;
    textLinei: number;
    textLines: number;
    wordCount: number;
    words: string[];
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
    setWordClass?: (props: IComLineProps & { wordi: number; }) => string;
}

export interface IComLinePropsBag {
    ord: Order;
    linei: number;
    wordi: number;
    word: string;
    words: number;
    lines: number;
}

