import { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import { BaseNamedExportables } from "../../base/Base";
import { MigratableEditableComToolName } from "../../editor/col/compositions/EditableCom.model";
import { IExportableOrder } from "./order/Order.model";


export interface ICom {
    name: string;
    wid: number;
    audio: string;
    nameCorrects: (name: string) => string;
    texts: string[];
}


export interface IExportableCom extends BaseNamedExportables {
    k?: number; // вариант группировки строк для трансляций
    p?: number; // позиции аккордов
    l?: number; // язык песни
    b?: num; // бемольная песня
    a?: string; // аудио файлы
    t?: string[]; // список текстов
    c?: string[]; // список аккорлов
    r?: Record<string, number>; // правила повторений
    o?: IExportableOrder[]; // порядковые блоки

    ton?: number;
}

export type SettingsItemName = 'ton' | 'font-size' | 'open-anchors';

export interface SettingsItem {
    title: string;
    name: SettingsItemName;
    icon: EvaIconName;
}

export type MigratableComToolName = typeof menuComToolNameList[number] | MigratableEditableComToolName;

export const menuComToolNameList = [
    "fullscreen-mode",
    "mark-com",
    "translation",
    "chords-variant",
    "chord-images",
    "selected-toggle",
  ] as const;

  export interface MigratableComTool {
    title: string;
    icon: EvaIconName;
    onClick: () => void | boolean;
    tool: MigratableComToolName;
}
