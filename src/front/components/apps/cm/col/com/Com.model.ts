import { TheIconType } from '../../../../../complect/the-icon/model';
import { MigratableEditableComToolName } from '../../editor/col/compositions/EditableCom.model';

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
