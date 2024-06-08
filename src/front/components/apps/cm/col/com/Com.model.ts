import { TheIconType } from '../../../../../complect/the-icon/model';
import { BaseNamedExportables } from '../../base/BaseNamed';
import { MigratableEditableComToolName } from '../../editor/col/compositions/EditableCom.model';
import { IExportableOrder } from './order/Order.model';

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
  bpm?: number; // ударов в минуту
  s?: 3 | 4; // размерность песни

  ton?: number;
}

export type SettingsItemName = 'ton' | 'font-size' | 'open-anchors';

export interface SettingsItem {
  title: string;
  name: SettingsItemName;
  icon: TheIconType;
}

export type MigratableComToolName = (typeof menuComToolNameList)[number] | MigratableEditableComToolName;

export const menuComToolNameList = [
  'fullscreen-mode',
  'mark-com',
  'translation',
  'chords-variant',
  'chord-images',
  'selected-toggle',
  'share-by-qr',
  'is-mini-anchor',
  'open-player',
  'hide-metronome',
] as const;

export interface MigratableComTool {
  title: string;
  Icon: TheIconType;
  onClick: () => void | boolean;
  tool: MigratableComToolName;
}
