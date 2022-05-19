import { Base } from "../../../base/Base";
import { Order } from "../order/Order";
import { IExportableStyleProp } from "./BlockStyles.model";

export class StyleBlock extends Base<IExportableStyleProp> {
  get name() {
    return this.getBasicOr('n', '');
  }

  getStyleName(ord: Order) {
    return `${this.name.replace(/ /g, '_')
      .replace(/\+/g, '_plus')
      .replace(/>/g, '_shift')} ${this.isInherit ? 'inherit' : ''} ${ord.top.leadOrd?.top.style?.name || ''}`;
  }

  get header() { return this.getBasic('h'); }

  get isInherit() { return this.getBasic('i'); }

  get level() { return this.getBasic('l'); }

  get isModulation() { return this.getBasic('md'); }
  get tags() { return this.getBasic('tg'); }

}
