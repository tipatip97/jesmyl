import mylib from "../../../../../complect/my-lib/MyLib";
import { cmStorage } from "../../../../../shared/jstorages";
import { Base } from "../Base";
import { IExportableSetts } from "./Setts.model";
import { StyleProp } from "./StyleProp";

export class Setts extends Base<IExportableSetts> {
  styles: StyleProp[];

  constructor(top: IExportableSetts) {
    super(top);
    this.styles = mylib.typ([], top.styles).map(st => new StyleProp(st));
  }

  query(name: string, type: string, sep: string, add?: string) {
    return `${name === add ? '' : `${sep || ''}style-box-${mylib.normQuery(name)}${type ? `-${type}` : ''}`}${add ? `${sep || ' '}inherit-style${sep || ' '}${mylib.normQuery(add || '')}` : ''}`;
  }
}


export let setts: Setts | nil;

cmStorage.listen('settings', 'root', (val) => setts = new Setts(val));

