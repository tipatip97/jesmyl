import { Base } from "../Base";
import { IExportableStyleProp } from "./Setts.model";

export class StyleProp extends Base<IExportableStyleProp> {
  constructor(top: IExportableStyleProp) {
    super(top);

    this.headerProps = top.c;
    this.textProps = top.t;
  }

  get name() { return this.getBasic('n'); }

  get header() { return this.getBasic('h'); }

  get isInherit() { return this.getBasic('i'); }

  get level() { return this.getBasic('l'); }

  get headerProps() { return this.getBasic('c'); }
  set headerProps(val) { this.setExportable('c', val); }

  get textProps() { return this.getBasic('t'); }
  set textProps(val) { this.setExportable('t', val); }

  get isModulation() { return this.getBasic('md'); }
  get tags() { return this.getBasic('tg'); }

}
