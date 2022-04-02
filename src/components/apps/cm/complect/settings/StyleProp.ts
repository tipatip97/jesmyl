import { Base } from "../../base/Base";
import { IExportableStyleProp } from "./Setts.model";

export class StyleProp extends Base<IExportableStyleProp> {
  constructor(top: IExportableStyleProp) {
    super(top);

    this.headerProps = top.c;
    this.textProps = top.t;
  }

  get name() { return this.getOrBase('n'); }

  get header() { return this.getOrBase('h'); }

  get isInherit() { return this.getOrBase('i'); }

  get headerProps() { return this.getOrBase('c'); }
  set headerProps(val) { this.setExportable('c', val); }

  get textProps() { return this.getOrBase('t'); }
  set textProps(val) { this.setExportable('t', val); }

  get isModulation() { return this.getOrBase('md'); }

}
