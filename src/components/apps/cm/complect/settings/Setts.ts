import mylib from "../../../../../complect/refresh/MyLib";
import { Base } from "../../base/Base";
import { IRxportableSetts } from "./Setts.model";
import { StyleProp } from "./StyleProp";

export class Setts extends Base<IRxportableSetts> {
  styles: StyleProp[];

  constructor(top: IRxportableSetts) {
    super(top);
    this.styles = mylib.typ([], top.styles).map(st => new StyleProp(st));
  }

  query(name: string, type: string, sep: string, add?: string) {
    return `${name === add ? '' : `${sep || ''}style-box-${mylib.normQuery(name)}${type ? `-${type}` : ''}`}${add ? `${sep || ' '}inherit-style${sep || ' '}${mylib.normQuery(add || '')}` : ''}`;
  }
}


export const setts = new Setts();
