import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed } from "../../base/Base";
import { Com } from "../com/Com";
import { ComWrap, ICat, IExportableCat } from "./Cat.model";

export class Cat extends BaseNamed<IExportableCat> implements ICat, Partial<IExportableCat> {
  searchTimeout: any;

  index: number = -1;
  term?: string;
  topComs: Com[];
  coms: Com[];
  wraps: ComWrap[] = [];
  t?: string[] | null;

  constructor(top: IExportableCat, coms: Com[]) {
    super(top);

    this.track = mylib.def(top.t, null);
    this.topComs = coms;

    this.coms = this.putComs();
  }

  get stack() { return this.getBasicOr('s', []); }

  get track(): string[] | undefined | null { return this.t; }
  set track(val: string[] | undefined | null) { this.t = val; }

  putComs() {
    this.coms = (
      this.track == null
        ? (this.topComs || []).filter(com => com && ~(this.stack?.indexOf(com.wid) || -1))
        : (this.topComs || []).filter(com => com && mylib.isExpected(com, this.track, this))
    ).slice(0);

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
