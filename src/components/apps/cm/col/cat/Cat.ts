import mylib from "../../../../../complect/refresh/MyLib";
import { Com } from "../com/Com";
import { EditableCol } from "../EditableCol";
import { ComWrap, ICat, IExportableCat } from "./Cat.model";

export class Cat extends EditableCol<IExportableCat> implements ICat, Partial<IExportableCat> {
  index: number = -1;
  term?: string;
  topComs: Com[];
  coms: Com[] = [];
  wraps: ComWrap[] = [];
  removed?: boolean;
  t?: string[] | null;
  n?: string;

  constructor(obj: IExportableCat, coms: Com[]) {
    super(obj);
    if (!mylib.isObj(obj)) throw new Error('wrong Cat type in ICat');

    this.track = mylib.def(obj.t, null);
    this.topComs = coms;

    this.putComs();
  }

  get wid() { return this.getOrBase('w', 0); }

  get name() { return this.getOrBase('n', ''); }
  set name(val) { this.n = val; }

  get stack() { return this.getOrBase('s', ''); }

  get track(): string[] | undefined | null { return this.t; }
  set track(val: string[] | undefined | null) { this.t = val; }

  putComs() {
    this.coms = (
      this.track == null
        ? (this.topComs || []).filter(com => com && ~this.stack.indexOf(com.wid))
        : (this.topComs || []).filter(com => com && mylib.isExpected(com, this.track, this))
    ).slice(0);

    // this.search();
  }
  
  searchErrors(term: string) {
    // editable code
    return null;
  }

  search(term = this.term, cb: () => void, debounceTime = 0, dtCb: () => void) {
    const filter = () => {
      if (term) {
        const errors = this.searchErrors(term);

        if (errors != null) {
          this.wraps = errors;
        } else if (term === '@1') {
          this.wraps = this.coms.filter(com => !com.audio || !com.audio.trim()).map(com => ({ com }));
        } else if (term === '@2') {
          this.wraps = this.coms.map(com => ({ com, bag: [[com.nameCorrects(com.name), 'n']].concat(com.texts.map((t, ti) => [com.blockCorrects(t, 't'), ti])).filter(([s]) => s && s.errors) })).filter(({ bag }) => bag.length).map(({ com, bag }) => ({ com, errors: [].concat(bag).map(([{ errors, warnings, unknowns }, index]) => errors && errors.map(({ message }) => ce('div', {}, message + ' ' + (index + 1)))) }));
        } else {
          // const inner = mylib.convertStrIfReg(term);
          // let ratesBag = mylib.getRatesInclude(inner, reg => g.transcriptions.reduce((reg, trans) => reg.replace(RegExp(`[${trans[0]}]`, 'g'), `[${trans[1] || trans[0]}]`), reg));

          this.wraps = mylib.func(mylib.searchRate).call(this.coms, term, ['n', mylib.POSITION, ['orders', mylib.INDEX, 'text']], 'com');
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
