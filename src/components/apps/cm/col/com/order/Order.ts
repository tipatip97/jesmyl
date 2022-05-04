import mylib from "../../../../../../complect/my-lib/MyLib";
import { Base } from "../../../base/Base";
import { Com } from "../Com";
import { orderFields } from "./Order.consts";
import { EditableOrderRegion, IExportableOrderFieldValues, IExportableOrderTop, Inheritancables, OrderRepeats, SpecielOrderRepeats } from "./Order.model";

export class Order extends Base<IExportableOrderTop> {
  _regions?: EditableOrderRegion[];
  com: Com;

  constructor(top: IExportableOrderTop, com: Com) {
    super(top);
    this.com = com;

    this.texti = mylib.isNum(top.t) ? top.t : null;

    this.positions = mylib.def(top.p, []);
    this.fieldValues = top.f;
  }

  // get com() { return this.top.com; }

  static getWithExtendableFields(source: IExportableOrderTop, target: IExportableOrderTop): Partial<IExportableOrderTop> {
    const inhFields: string[] = [];
    const result: Partial<IExportableOrderTop> = {
      inhFields
    };
    if (source == null)
      mylib.overlap(result, target);
    else
      orderFields.forEach(({ name, isExt, extIf = el => el == null }) => {
        if (isExt && source[name] != null && extIf(target[name] as [])) {
          result[name] = source[name] as never;
          inhFields.push(name);
        } else {
          result[name] = target[name] as never;
        }
      });
    return result;
  }

  // static toDict(ord) {
  //   const dict = {};
  //   IOrder.fields.forEach(({ name, forDict }) => forDict !== false && ord[name] != null && (dict[name] = ord[name]));
  //   return dict;
  // }

  get isMin() { return this.top.m; }

  get wid() { return this.top.source?.w || this.top.w; }
  set wid(val: number) { this.top.source && (this.top.source.w = val); }

  get unique() { return this.top.source?.u ?? this.top.u; }
  set unique(val) { this.top.source && (this.top.source.u = val); }

  get isAnchor() { return this.getBasic('a') != null; }

  get anchor() { return this.getBasic('a'); }
  set anchor(val) { this.setExportable('a', val); }

  get isEmptyHeader() { return this.getBasic('e'); }
  set isEmptyHeader(val) { this.setExportable('e', val); }

  get isOpened() { return this.getBasic('o'); }
  set isOpened(val) { this.setExportable('o', val); }

  get chordsi() { return this.getBasic('c'); }
  set chordsi(val) { this.setExportable('c', val); }

  get texti() { return this.getBasic('t'); }
  set texti(val) { this.setExportable('t', val); }

  get positions(): number[][] | und { return (this.top.targetOrd?.top.source || this.top.source)?.p || this.top.p; }
  set positions(val: number[][] | und) {
    const source = (this.top.targetOrd?.top.source || this.top.source)
    source && (source.p = val);
  }

  get type() { return this.getBasic('s'); }
  set type(val) { this.setExportable('s', val); }

  get text() {
    return (this.texti != null && this.com.texts && this.com.texts[this.texti]) || '';
  }

  get antiVis() { return this.isVisible ? 0 : 1; }
  get isVisible() { return this.getBasic('v') !== 0; }
  set isVisible(val) { this.setExportable('v', val ? 1 : 0); }

  get fieldValues(): IExportableOrderFieldValues | und { return this.getBasicOr('f', {}); }
  set fieldValues(val) { this.setExportable('f', val); }

  get repeatsTitle(): string {
    const repeats = this.repeats;

    if (!repeats) return '';
    if (typeof repeats === 'number') return repeats < 2 ? '' : repeats + '';
    if (repeats['.']) return repeats['.'] < 2 ? '' : repeats['.'] + '';
    const lastLineIndex = this.text.split(/\n/).length - 1;
    const region = this.regions?.find(([begLine, , endLine]) => begLine === 0 && endLine === lastLineIndex);

    return region ? region[10] + '' : '';
  }

  get repeats(): OrderRepeats | null {
    if (this.top.isAnchorInherit) {
      return this.getInheritance('r') as never;
    } else if (this.top && this.top.source && this.top.source.r != null)
      return this.top.source.r;
    else {
      const repeats = this.getLeadFirst('r');
      const nrepeats: Record<string, number> = {};
      const reg = /[a-z]/i;

      return Object.entries((repeats && (mylib.isNum(repeats) ? { '.': repeats } : repeats)) || nrepeats).reduce((acc: Record<string, number>, [key, val]) => {
        if (!reg.exec(key)) acc[key] = val as number;
        return acc;
      }, nrepeats);
    }
  }

  set repeats(val: OrderRepeats | null) {
    if (this.top.isAnchorInherit && this.top.leadOrd?.top.source) {
      const inh = this.top.leadOrd.top.source.inh || { r: {} };
      const repeats = inh.r = inh.r || {};

      if (this.top.anchorInheritIndex != null) repeats[this.top.anchorInheritIndex] = val;
      this.top.leadOrd.top.source.inh = inh as never;
    } else if (this.top.source) this.top.source.r = val;
  }

  setRepeats(val: OrderRepeats | null) {
    this.repeats = val;
  }

  get regions() {
    if (this._regions === undefined) this.setRegions();

    return this._regions;
  }

  resetRegions() { delete this._regions; }

  setRegions() {
    const text = (this.text || '').split(/\n+/).map((txt: string) => txt.split(/\s+/));
    const lines = text.length;

    this._regions = this.repeats === 0 ? [] : Object.entries(mylib.isNum(this.repeats) ? { '.': this.repeats } : (this.repeats || {})).map(([key, count]: [string, number]): EditableOrderRegion => {

      if (key === '.') return [0, 0, lines - 1, (text[text.length - 1] || '').length - 1, this, this, null, null, key, key, count];
      else if (key.startsWith('~')) {
        const [, linei, wordi] = key.split(/[~:]/);

        return [+linei, +wordi, null, null, this, this, null, null, key, key, count];
      } else {
        const letter: string = (/[a-z]/i.exec(key) || [])[0];

        if (letter) {
          const [first, second, third] = key.split(/[a-z:]/i).map(num => parseInt(num));
          const isBeg = /^[a-z]/i.exec(key);
          let others: number[] = [];
          let finishKey: string = '';

          const ord = this.com.orders?.find((ord: Order) => !mylib.isNum(ord.repeats) && Object.keys(ord.repeats || {}).some(key => {
            if (key[!isBeg ? 'startsWith' : 'endsWith'](letter)) {
              others = key.split(/[a-z:]/i).filter(s => s).map(num => +num);
              finishKey = key;
              return true;
            }
            return false;
          }));

          return (isBeg
            ? [second, third, null, null, this, ord, others, key, finishKey]
            : [null, null, first, second, ord, this, others, key, finishKey]);
        } else {
          const [beg, end] = key.split(/-/);
          const [begLinei, begWordi = 0] = beg.split(/:/).map(num => parseInt(num));
          let [endLinei, endWordi] = (end || '').split(/:/).map(num => parseInt(num));
          if (end) {
            if (endWordi == null) {
              endWordi = (text[endLinei] || '').length - 1;
            }
          } else[endLinei, endWordi] = [begLinei, (text[begLinei] || '').length - 1];

          return [begLinei, begWordi, endLinei, endWordi, this, this, null, null, key, key, count];
        }
      }
    });
  }

  getInheritance<Key extends keyof Inheritancables = keyof Inheritancables>(fieldn: Key): Inheritancables[Key] | null {
    return (this.top.isAnchorInherit && this.top.anchorInheritIndex != null && this.top.leadOrd?.top.source?.inh && this.top.leadOrd.top.source.inh[fieldn] != null
      ? this.top.leadOrd.top.source.inh[fieldn][this.top.anchorInheritIndex]
      : this.top.source
        ? this.top.source[fieldn]
        : null) as never;
  }

  getSourceFirst<Key extends keyof IExportableOrderTop>(fieldn: Key) {
    return this.top && mylib.def(this.getInheritance(fieldn as never), (this.top.targetOrd?.top.source || {} as IExportableOrderTop)[fieldn]);
  }

  getLeadFirst<Key extends keyof IExportableOrderTop>(fieldn: Key) {
    return this.top && mylib.def((this.top.targetOrd?.top.source || {} as IExportableOrderTop)[fieldn], this.getInheritance(fieldn as never));
  }

  get repeated() {
    const reps = this.repeats;
    const { text } = this.com.bracketsTransformed(this.text);

    if (!reps) return text;

    const rep = (txt: string, rp = 2, b = true, e = true) => `${!b || (rp < 1) ? '' : `${'/'.repeat(rp)}&nbsp;`}${txt || ''}${!e || (rp < 2) ? '' : `&nbsp;${'\\'.repeat(rp)}`}`;

    if (mylib.isNum(reps)) return rep(text, reps as number);
    else {
      const poss: Record<number, Record<number, number[]>> = {};

      Object
        .keys(reps)
        .sort((a, b) => {
          let acount = 0, bcount = 0;
          const [abeg = '', aend = ''] = a.split('-');
          const [, abegWord] = abeg.split(':');
          const [aendLine, aendWord] = aend.split(':');

          const [bbeg = '', bend = ''] = b.split('-');
          const [, bbegWord] = bbeg.split(':');
          const [bendLine, bendWord] = bend.split(':');

          if (abegWord) acount++;
          if (aendWord) acount++;
          if (aendLine) acount++;

          if (bbegWord) bcount++;
          if (bendWord) bcount++;
          if (bendLine) bcount++;

          return acount - bcount;
        })
        .forEach(key => {
          if (key === '.') return;

          const pushRep = (linei: number, wordi: number, fix = 1) => {
            const tr = poss[linei] = mylib.typ({}, poss[linei]);
            const td = tr[wordi] = mylib.typ([], tr[wordi]);
            td.push(fix * (reps as SpecielOrderRepeats)[key]);
          }

          if (/[a-z]$/i.exec(key)) {
            const [linei, wordi] = key.split(/[:a-z]/i);
            pushRep(+linei, +wordi, -1);
            return;
          }

          if (key.startsWith('~') || /^[a-z]/i.exec(key)) {
            const [, linei, wordi] = key.split(/[~:a-z]/i);
            pushRep(+linei, +wordi);
            return;
          }

          const [beg = '', end = ''] = key.split('-');
          const [begLine, begWord = -1] = beg.split(':');
          let [endLine, endWord = -2] = end.split(':');
          endLine = endLine || begLine;

          if (begLine) pushRep(+begLine, +begWord);
          if (endLine) pushRep(+endLine, +endWord, -1);

        });

      const repld = text
        .split(/\n+/)
        .map((line, linei) => {
          const words = line.split(/ +/);

          const repldLine = words
            .map((word, wordi) => {
              const counts = mylib.typ([], (poss[linei] || {})[wordi]);

              return !counts.length
                ? word
                : counts.reduce((prev, count) => rep(prev, Math.abs(count), count > 0, count < 0), word);
            })
            .join(' ');

          const counts = ((poss[linei] || {})[-1] || [])
            .concat((poss[linei] || {})[-2] || []);

          return counts.length
            ? counts.reduce((prev, count) => rep(prev, Math.abs(count), count > 0, count < 0), repldLine)
            : repldLine;
        })
        .join('\n');

      return (mylib.isNum((reps as SpecielOrderRepeats)['.']) ? rep(repld, (reps as SpecielOrderRepeats)['.']) : repld)
    }
  }

}
