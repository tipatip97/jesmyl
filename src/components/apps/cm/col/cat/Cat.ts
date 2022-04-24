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

  get stack() { return this.getOrBase('s', []); }

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

  searchErrors(term: string) {
    // editable code
    return null;
  }

  search(term = this.term, cb?: () => void, debounceTime = 0, dtCb?: () => void) {
    const filter = () => {
      if (term) {
        const errors = this.searchErrors(term);

        if (errors != null) {
          this.wraps = errors;
        } else if (term === '@1') {
          this.wraps = this.coms.filter(com => !com.audio || !com.audio.trim()).map(com => ({ com }));
        } else if (term === '@2') {
          // this.wraps = this.coms.map(com => ({ com, bag: [[com.nameCorrects(com.name), 'n']].concat(com.texts.map((t, ti) => [com.blockCorrects(t, 't'), ti])).filter(([s]) => s && s.errors) })).filter(({ bag }) => bag.length).map(({ com, bag }) => ({ com, errors: [].concat(bag).map(([{ errors, warnings, unknowns }, index]) => errors && errors.map(({ message }) => ce('div', {}, message + ' ' + (index + 1)))) }));
        } else {
          // const inner = mylib.convertStrIfReg(term);
          // let ratesBag = mylib.getRatesInclude(inner, reg => g.transcriptions.reduce((reg, trans) => reg.replace(RegExp(`[${trans[0]}]`, 'g'), `[${trans[1] || trans[0]}]`), reg));

          this.wraps = mylib.searchRate<ComWrap>(this.coms, term, ['name', mylib.c.POSITION, ['orders', mylib.c.INDEX, 'text']], 'com') as ComWrap[];
        }
      } else this.wraps = this.coms.map(com => ({ com }));
    };

    if (debounceTime) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        filter();
        dtCb && dtCb();
      }, debounceTime);
    } else filter();

    this.term = term;
    cb && cb();
  }

}
