import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed } from "../../base/Base";
import { Cols } from "../../cols/Cols";
import { blockStyles } from "./block-styles/BlockStyles";
import { StyleBlock } from "./block-styles/StyleBlock";
import { chordBemoleEquivalent, gSimpleHashChordReg, gSimpleHashedEachLetterChordReg, iRuUaReg, simpleHashChords, translationPushKinds } from "./Com.complect";
import { IExportableCom } from "./Com.model";
import { Order } from "./order/Order";
import { IExportableOrder, IExportableOrderTop } from "./order/Order.model";

export class Com extends BaseNamed<IExportableCom> {
  cols?: Cols;
  initial: Record<string, any>;
  ton?: number;
  tonc?: string;
  firstChord?: string;
  index: number = -1;
  initialName: string;
  protected _translationMap?: number[] | null;
  protected _o?: Order[];
  private _ords?: IExportableOrder[];
  private _chordLabels?: string[][][];
  private _usedChords?: Record<string, string>;

  constructor(top: IExportableCom, index: number, cols?: Cols) {
    super(top);
    this.initialName = this.name;
    this.index = index;
    this.cols = cols;

    this.initial = {};

    this.pullTransPosition(top);
  }

  get texts() { return this.forcedArray('t'); }
  set texts(val) { this.setExportable('t', val); }

  get audio() { return this.getBasicOr('a', ''); }

  get refs() { return this.getBasic('r'); }
  set refs(val) { this.setExportable('r', val); }

  static get fields() {
    // free: d e f h i j k s u v x y z
    return ['a', 'b', 'c', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 't', 'w'];
  }

  get chords() {
    return this.forcedArray('c');
  }
  set chords(val) {
    this.setExportable('c', val);
    this.resetChordLabels();
  }

  get translationPushKind() { return this.getBasicOr('k', 0); }
  set translationPushKind(val) { this.setExportable('k', val); }

  get isBemoled() { return this.getBasicOr('b', 0); }
  set isBemoled(val) {
    this.setExportable('b', val ? 1 : 0);
    this.resetChordLabels();
  }

  get initialTransPosition() { return mylib.def(this.initial.p, this.getBasic('p')); }
  set initialTransPosition(val) {
    if (this.initial.p == null) this.initial.p = mylib.typ(0, val);
    this.initialTransPos = mylib.typ(0, val);
  }

  get initialTransPos() { return mylib.def(this.initial.pos, this.initial.p, this.getBasic('p')); }
  set initialTransPos(val) {
    if (this.initial.pos == null) this.initial.pos = mylib.typ(0, val);
  }

  get transPosition() { return this.getBasic('p'); }
  set transPosition(value) {
    const v: number = mylib.typ(0, value) as number;
    const val = v > 11 ? v % 12 : v < 0 ? 12 + v : v;
    this.setExportable('p', val);
    this.initialTransPosition = val;
  }

  pullTransPosition(obj: IExportableCom) {
    if (obj) {
      if (obj.ton != null) this.initialTransPosition = obj.p;
      this.transPosition = mylib.def(obj.ton, obj.p);
    }
  }

  catMentions(): string[] {
    if (!this.cols) return [];
    const wid = this.wid;
    const refs = this.refs || {};
    const natives: string[] = [];

    const inCats = this.cols.cats
      .filter(cat => {
        if (refs[cat.wid]) natives.push(`${cat.name} ${refs[cat.wid]}`);
        return cat.stack.indexOf(wid) > -1
      })
      .map(cat => cat.name);

    return inCats.concat(natives);
  }

  turnBemoled() {
    this.isBemoled = this.isBemoled ? 0 : 1;
  }

  get langi() { return this.getBasicOr('l', 0); }
  set langi(val: number) { this.setExportable('l', val); }

  get langn() { return Com.langs[this.langi || 0]; }
  static get langs() { return ['русский', 'украинский']; }

  getVowelPositions(textLine: string) {
    const R = [];
    for (let i = 0; i < textLine.length; i++) iRuUaReg.test(textLine[i]) && R.push(i);
    return R;
  }

  transChord(chord: string, delta: number = 1) {
    const cindex = simpleHashChords.indexOf(chord);
    const di = cindex - -delta;
    const len = simpleHashChords.length;
    const nindex = di < 0
      ? len - -di
      : di > len
        ? di % len
        : di === len || -di === len
          ? 0
          : di;

    return simpleHashChords[nindex];
  }

  transBlock(cblock: string, delta = this.transPosition) {
    return cblock.replace(gSimpleHashChordReg, chord => this.transChord(chord, delta));
  }

  transBlocks(delta?: number) {
    return this.chords?.map((cblock: string) => this.transBlock(cblock, delta));
  }

  setChordsInitialTon() {
    delete this.ton;
    delete this.tonc;
    this.transPosition = this.initialTransPos;
    this.updateChordLabels();
  }

  transpose(delta: number) {
    if (this.transPosition != null) this.transPosition -= -delta;
    else this.transPosition = delta;

    this.ton = this.transPosition;
    this.tonc = mylib.def(this.tonc, this.chordLabels[0][0][0]);
    this.updateChordLabels();
  }

  getOrderedTexts(isIncluseEndstars = true) {
    return this.getOrderedBlocks().map((lines, linesi, linesa) => lines?.join('\n') + (isIncluseEndstars && linesa.length - 1 === linesi ? '\n* * *' : ''));
  }

  getOrderedBlocks() {
    const textBeats = this.orders?.reduce((text, ord) =>
      text + (ord.texti == null ? '' : (text ? '\n' : '') + ord.repeated), '').split(/\n/);

    const texts = this.translationMap().map(peaceSize => {
      return textBeats?.splice(0, peaceSize);
    });

    return texts;
  }

  translationMap() {
    if (this._translationMap != null) return this._translationMap;

    const kinds = translationPushKinds[this.translationPushKind];
    let curr = 0;
    const orders = this.orders ?? [];
    const len = orders.length;

    for (let ordi = 0; ordi < len;) {
      const ord = orders[ordi];

      if (!ord.text) {
        ordi++;
        continue;
      }

      curr += ord.text.split(/\n/).length;
      let nextOrd = orders[++ordi];

      while (nextOrd?.top.isInherit) {
        curr += nextOrd.text.split(/\n/).length;
        nextOrd = orders[++ordi];
      }

      kinds.push(curr);
      curr = 0;
    }

    return this._translationMap = kinds.clearList();
  }

  bracketsTransformed(str = '') {
    const brackets = [['«', '»'], ['„', '“'], ['"', '"'], ["'", "'"]];
    let level = 0;

    const text = str
      .replace(/(\s)-+(\s)/g, '$1—$2')
      .replace(/(\( ?)?("+)( ?\)?)/gs, function (_, pref = '', all, post = '', index, text) {
        const pre = text[index - 1];
        const isOpen = !pre || pre.search(/\s/) + 1;
        const brLevel = level - (isOpen ? 0 : 1);
        level -= (isOpen ? -1 : 1) * all.length;

        return pref[0] === '(' && post.endsWith(')')
          ? ''
          : (pref || '') + all
            .split('')
            .map((_br: string, bri: number) => (brackets[brLevel - (isOpen ? -bri : bri)] || ['`', '`'])[isOpen ? 0 : 1])
            .join('') + (post || '');
      })
      .replace(/\("+ \)$|^\( "+\)/g, '');

    return { text, level };
  }

  get chordLabels(): string[][][] {
    if (this._chordLabels == null) this.updateChordLabels();

    return this._chordLabels as string[][][];
  }

  get usedChords() {
    if (this._usedChords == null) this.updateChordLabels();

    return this._usedChords;
  }

  resetChordLabels() {
    delete this._usedChords;
    delete this._chordLabels;
  }

  updateChordLabels() {
    this._chordLabels = [];
    this._usedChords = {};
    let currTransPosition = this.transPosition;
    let firstChord: string = '';

    this.orders?.forEach(ord => {
      const ordLabels: string[][] = [];
      this._chordLabels?.push(ordLabels);
      const chords = this.actualChords(ord.chordsi, currTransPosition);

      if (ord.top.style?.isModulation) {
        currTransPosition = (this.transPosition || 0) + (ord.fieldValues?.md || 0);
      }

      (chords || '')
        .split(/\s*\n+\s*/)
        .forEach(line => {
          const lineLabels: string[] = [];
          ordLabels.push(lineLabels);

          (line || '')
            .split(/ +/)
            .forEach(chordSchema => {
              chordSchema
                .split(/[^#A-Z/0-9]+/i)
                .forEach(chord => this._usedChords && (this._usedChords[chord.replace(/B/, 'A#')] = chord));
              lineLabels.push(chordSchema);
              if (!firstChord) firstChord = chordSchema;
            });
        });
    });

    this.tonc = this.firstChord = firstChord;
  }

  static withBemoles(chords?: string, isSet: num = 0) {
    return (isSet ? chords?.replace(gSimpleHashedEachLetterChordReg, all => chordBemoleEquivalent[all] || all) : chords)?.replace(/A#/g, 'B');
  }

  actualChords(chordsScalar?: string | number, position = this.transPosition) {
    const chords = mylib.isStr(chordsScalar) ? chordsScalar as string : this.chords && this.chords[chordsScalar as number];
    return chords && Com.withBemoles(this.transBlock(chords, position), this.isBemoled);
  }

  get ords(): IExportableOrderTop[] {
    if (this._ords == null) this._ords = this.forcedArray('o');

    return this._ords as IExportableOrderTop[];
  }

  orderConstructor(top: IExportableOrderTop) {
    return new Order(top, this);
  }

  get orders(): Order[] | null { return this._o || this.setOrders(); }
  setOrders() {
    if (!blockStyles) return null;
    const val = this.ords
      .map((ord) => {
        ord.originWid = mylib.def(ord.originWid, ord.w);
        return ord;
      })
      .sort((a, b) => a.w - b.w);
    const orders = [];
    let minimals: [string?, number?][] = [];
    const styles = blockStyles.styles;
    const groups: Record<string, number> = {};
    let viewIndex = 0;
    let prev, prevOrd;
    const self = this;
    const translate = function () { return arguments[self.langi || 0]; };

    const getStyle = (o: Partial<IExportableOrderTop> | nil) => {
      return o && o.s != null
        ? styles.find((prop: StyleBlock) => prop.name === o.s)
        : null;
    };

    const setMin = (src: Partial<IExportableOrderTop>) => {
      const style = src.init ? src.init.style : src.style;
      const styleName = style?.name.trim();
      if (style?.isModulation) minimals = [];
      src.m = minimals.some(([s, c]) => styleName === s && src.c === c) ? 0 : 1;
      minimals.push([styleName, src.c]);
    };

    const header = (ord: IExportableOrderTop, style: StyleBlock, numered = true) => {
      const type = style.name.trim();
      const number = numered
        ? groups[type] = groups[type] == null
          ? 1
          : ord.a == null
            ? groups[type] + 1
            : groups[type]
        : '';

      return (bag = {}) => {
        return mylib.stringTemplater(style.header, mylib.overlap({
          num: numered ? groups[type] < 2 ? '' : ` ${number}` : '',
          translate,
        }, bag));
      };
    };

    for (let i = 0; i < val.length; i++) {
      const ord = val[i];
      if (ord == null) {
        orders.push(this.orderConstructor({ header: () => '' } as never));
        continue;
      }
      const targetOrd: Order | nil = ord.a == null ? null : orders.find(o => o.unique === ord.a);
      const top = Order.getWithExtendableFields(targetOrd?.top.source as IExportableOrderTop, ord);

      const style = getStyle(top);

      if (!style) {
        orders.push(this.orderConstructor({
          source: ord,
          header: () => ''
        } as never));
        continue;
      }

      if (style.isInherit) continue;

      top.style = style;
      top.source = ord;
      top.isNextInherit = !!getStyle(val[i + 1])?.isInherit;
      top.isNextAnchorOrd = !!(ord.u != null && val[i + 1] && val[i + 1].a === ord.u);
      top.isPrevTargetOrd = !!(targetOrd && (val[i - 1] === targetOrd.top.source));
      top.targetOrd = targetOrd;
      top.isAnchor = ord.a != null;
      top.isTarget = ord.u != null && val.some(o => o.a === ord.u);
      top.viewIndex = viewIndex++;
      top.sourceIndex = val.indexOf(ord);

      setMin(top);

      const newOrder = this.orderConstructor(top as IExportableOrderTop);
      orders.push(newOrder);

      top.header = newOrder.isEmptyHeader
        ? (bag, isRequired) => isRequired ? header(ord, style, false)(bag) : ''
        : targetOrd && targetOrd.top.header
          ? targetOrd.top.header
          : header(ord, style);

      top.prev = prev || null;

      if (prev) prev.top.next = newOrder;
      prev = newOrder;

      if (!top.isAnchor) {
        top.prevOrd = prevOrd || null;
        if (prevOrd) prevOrd.top.nextOrd = newOrder;
        prevOrd = newOrder;
      }

      let isAnchorInheritPlus = top.a != null;

      if (targetOrd && top.a != null) {
        let anci = (targetOrd.top.sourceIndex || 0) + 1;
        let anc = val[anci];
        let ancStyle = getStyle(anc);
        let anchorInheritIndex = 0;

        while (ancStyle?.isInherit) {
          isAnchorInheritPlus = true;
          const ancTop = Order.getWithExtendableFields(targetOrd.top.source as IExportableOrderTop, anc);

          ancTop.isAnchorInherit = true;
          ancTop.isInherit = true;
          ancTop.style = ancStyle;
          ancTop.source = anc;
          ancTop.header = top.header;
          ancTop.init = top as IExportableOrderTop;
          ancTop.targetOrd = targetOrd;
          ancTop.leadOrd = newOrder;
          ancTop.isNextInherit = !!getStyle(val[anci + 1])?.isInherit;
          ancTop.anchorInheritIndex = anchorInheritIndex++;
          ancTop.viewIndex = viewIndex++;
          ancTop.sourceIndex = val.indexOf(targetOrd.top.source as IExportableOrderTop);

          setMin(ancTop);

          const newAncOrd = this.orderConstructor(ancTop as IExportableOrderTop);
          orders.push(newAncOrd);

          anc = val[++anci];
          ancStyle = getStyle(anc);
        }
      }

      let nexti = i + 1;
      let next = val[nexti];
      let nextStyle = getStyle(next);

      while (nextStyle?.isInherit) {
        const nextTop = Order.getWithExtendableFields(targetOrd?.top.source as IExportableOrderTop, next);

        nextTop.isInherit = true;
        nextTop.style = nextStyle;
        nextTop.leadOrd = newOrder;
        nextTop.prev = prev;
        nextTop.init = top as IExportableOrderTop;
        nextTop.isNextInherit = !!getStyle(val[nexti + 1])?.isInherit;
        nextTop.isAnchorInheritPlus = isAnchorInheritPlus;
        nextTop.header = top.header;
        nextTop.source = next;
        nextTop.viewIndex = viewIndex++;
        nextTop.sourceIndex = val.indexOf(next);

        setMin(nextTop);

        const newNextOrd = this.orderConstructor(nextTop as IExportableOrderTop);
        orders.push(newNextOrd);

        if (prev) prev.top.next = newNextOrd;
        prev = newNextOrd;

        next = val[++nexti];
        nextStyle = getStyle(next);
      }
    };

    this._o = orders;
    return orders;
  }
}