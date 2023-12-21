import SourceBased from '../../../../../../complect/SourceBased';
import { Order } from '../order/Order';
import { IExportableStyleProp } from './BlockStyles.model';

export class StyleBlock extends SourceBased<IExportableStyleProp> {
  get key() {
    return this.getBasicOr('key', '');
  }

  normName(name: string) {
    return name.replace(/ /g, '_').replace(/\+/g, '_plus').replace(/>/g, '_shift');
  }

  getStyleName(ord: Order) {
    return `${this.normName(this.key)} ${this.isInherit ? 'inherit' : ''} ${this.normName(
      ord.top.leadOrd?.top.style?.key || '',
    )}`;
  }

  get title() {
    return this.getBasic('title');
  }

  get isInherit() {
    return this.getBasic('isInherit');
  }

  get group() {
    return this.getBasic('group');
  }

  get isModulation() {
    return this.getBasic('isModulation');
  }
  get tags() {
    return this.getBasic('tags');
  }
  get forChordedBlock() {
    return this.getBasic('forChordedBlock');
  }
}
