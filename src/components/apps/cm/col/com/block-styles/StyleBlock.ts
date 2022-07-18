import SourceBased from "../../../../../../complect/SourceBased";
import { Order } from "../order/Order";
import { IExportableStyleProp } from "./BlockStyles.model";

export class StyleBlock extends SourceBased<IExportableStyleProp> {
  get name() {
    return this.getBasicOr('n', '');
  }

  normName(name: string) {
    return name.replace(/ /g, '_').replace(/\+/g, '_plus').replace(/>/g, '_shift');
  }

  getStyleName(ord: Order) {
    return `${this.normName(this.name)} ${this.isInherit ? 'inherit' : ''} ${this.normName(ord.top.leadOrd?.top.style?.name || '')}`;
  }

  get header() { return this.getBasic('h'); }

  get isInherit() { return this.getBasic('i'); }

  get level() { return this.getBasic('l'); }

  get isModulation() { return this.getBasic('md'); }
  get tags() { return this.getBasic('tg'); }

}
