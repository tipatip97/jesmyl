import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed } from "../../base/Base";
import { Com } from "../com/Com";
import { catTrackers } from "./Cat.complect";
import { ComWrap, ICat, IExportableCat } from "./Cat.model";

export class Cat extends BaseNamed<IExportableCat> implements ICat {
  searchTimeout: any;

  index: number = -1;
  term?: string;
  topComs: Com[];
  coms: Com[];
  wraps: ComWrap[] = [];

  constructor(top: IExportableCat, coms: Com[]) {
    super(top);

    this.topComs = coms;

    this.coms = this.putComs();
  }

  get stack() { return this.getBasicOr('s', []); }
  set stack(val: number[]) { this.setExportable('s', val); }

  get kind(): string { return this.getBasic('k'); }
  set kind(val: string) { this.setExportable('k', val); }

  putComs() {
    const { select } = catTrackers.find(({ id }) => id === this.kind) || {};
    this.coms = select ? this.topComs.filter(com => select(com, this)) : [];

    this.search();

    return this.coms;
  }

  search(term = this.term, cb?: () => void) {
    if (term) {
      this.wraps = mylib.searchRate<ComWrap>(this.coms, term, ['name', mylib.c.POSITION, ['orders', mylib.c.INDEX, 'text']], 'com') as ComWrap[];

    } else this.wraps = this.coms.map(com => ({ com }));

    this.term = term;
    cb && cb();
  }

}
