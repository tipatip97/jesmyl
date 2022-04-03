import { Com } from "../Com";
import { Order } from "../order/Order";


export interface IComLineProps {
    key: string;
    chordedOrd: boolean;
    textLine: string;
    textLinei: number;
    textLines: number;
    orderUnit: Order;
    orderUniti: number;
    onLetterClick: (linei: number) => void;
    onWordClick: (bag: IComLinePropsBag, event: MouseEvent) => void;
    setWordClass: () => boolean;
    isJoinLetters: boolean;
    setLineClassName: () => string;
    setChorded: (indexi: number) => boolean;
    ccom: Com;
}

export interface IComLinePropsBag {
    ord: Order;
    linei: number;
    wordi: number;
    word: string;
    words: number;
    lines: number;
}

