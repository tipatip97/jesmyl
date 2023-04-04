import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed } from "../../base/BaseNamed";
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
  searchedComs: Com[] = [];

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

  search(term = this.term, isNumberSearch?: boolean) {
    if (term) {
      this.wraps = mylib.searchRate<ComWrap>(this.coms, term, ['name', 'number', ['orders', mylib.c.INDEX, 'text']], 'com', isNumberSearch);

    } else this.wraps = this.coms.map(com => ({ com }));

    this.searchedComs = this.wraps.map(wrap => wrap.com);

    this.term = term;
  }

}
