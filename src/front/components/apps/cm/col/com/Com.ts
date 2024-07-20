import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import mylib from '../../../../../complect/my-lib/MyLib';
import { IExportableCom, IExportableOrder } from '../../../../../models';
import { BaseNamed } from '../../base/BaseNamed';
import { blockStyles } from './block-styles/BlockStyles';
import { StyleBlock } from './block-styles/StyleBlock';
import {
  chordBemoleEquivalent,
  gSimpleHashChordReg,
  gSimpleHashedEachLetterChordReg,
  iRuUaReg,
  simpleHashChords,
  translationPushKinds,
} from './Com.complect';
import { Order } from './order/Order';
import { IExportableOrderTop, OrderTopHeaderBag } from './order/Order.model';

export class Com extends BaseNamed<IExportableCom> {
  initial: Record<string, any>;
  ton?: number;
  tonc?: string;
  firstChord?: string;
  number: string = '';
  initialName: string;
  excludedModulations: number[] = [];
  protected _o?: Order[];
  protected _ords?: IExportableOrder[];
  private _chordLabels?: string[][][];
  private _usedChords?: Record<string, string>;

  constructor(top: IExportableCom, index: number) {
    super(top);
    this.initialName = this.name;
    this.number = `${index + (index > 402 ? 2 : 1)}`;
    this.ton = top.ton;

    this.initial = {};

    this.pullTransPosition(top);
  }

  get texts() {
    return this.getBasic('t');
  }
  set texts(val) {
    this.setExportable('t', val);
  }

  get beatsPerMinute() {
    return this.getBasic('bpm');
  }
  set beatsPerMinute(val) {
    this.setExportable('bpm', val);
  }

  get meterSize() {
    return this.getBasic('s');
  }
  set meterSize(val) {
    this.setExportable('s', val);
  }

  get audio() {
    return this.getBasicOr('a', '');
  }
  set audio(val) {
    this.setExportable('a', val);
  }

  get chords() {
    return this.getBasic('c');
  }
  set chords(val) {
    this.setExportable('c', val);
    this.resetChordLabels();
  }

  get translationPushKind() {
    return this.getBasicOr('k', 0);
  }
  set translationPushKind(val) {
    this.setExportable('k', val);
  }

  get isBemoled() {
    return this.getBasicOr('b', 0);
  }
  set isBemoled(val) {
    this.setExportable('b', val ? 1 : 0);
    this.resetChordLabels();
  }

  get initialTransPosition() {
    return mylib.def(this.initial.p, this.getBasic('p'));
  }
  set initialTransPosition(val) {
    if (this.initial.p == null) this.initial.p = mylib.typ(0, val);
    this.initialTransPos = mylib.typ(0, val);
  }

  get initialTransPos() {
    return mylib.def(this.initial.pos, this.initial.p, this.getBasic('p'));
  }
  set initialTransPos(val) {
    if (this.initial.pos == null) this.initial.pos = mylib.typ(0, val);
  }

  get transPosition() {
    return this.getBasic('p');
  }
  set transPosition(value) {
    const v: number = mylib.typ(0, value) as number;
    const val = v > 11 ? v % 12 : v < 0 ? 12 + v : v;
    this.setExportable('p', val);
    this.initialTransPosition = val;
  }

  getFirstSimpleChord() {
    return (this.orders?.[0]?.chords ?? this.chords?.[0])?.match(makeRegExp('/[A-H]#?/'))?.[0];
  }

  pullTransPosition(obj: IExportableCom) {
    if (obj) {
      if (obj.ton != null) this.initialTransPosition = obj.p;
      this.transPosition = mylib.def(obj.ton, obj.p);
    }
  }

  turnBemoled() {
    this.isBemoled = this.isBemoled ? 0 : 1;
  }

  get langi() {
    return this.getBasicOr('l', 0);
  }
  set langi(val: number) {
    this.setExportable('l', val);
  }

  get langn() {
    return Com.langs[this.langi || 0];
  }
  static get langs() {
    return ['русский', 'украинский'];
  }

  getVowelPositions(textLine: string) {
    const R = [];
    for (let i = 0; i < textLine.length; i++) iRuUaReg.test(textLine[i]) && R.push(i);
    return R;
  }

  transChord(chord: string, delta: number = 1) {
    const cindex = simpleHashChords.indexOf(chord);
    const di = cindex - -delta;
    const len = simpleHashChords.length;
    const nindex = di < 0 ? len - -di : di > len ? di % len : di === len || -di === len ? 0 : di;

    return simpleHashChords[nindex];
  }

  transBlock(cblock: string, delta = this.transPosition) {
    return cblock?.replace(gSimpleHashChordReg, chord => this.transChord(chord, delta));
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
    if (this.transPosition !== undefined) this.transPosition -= -delta;
    else this.transPosition = delta;

    this.ton = this.transPosition;
    this.tonc = this.tonc ?? this.chordLabels[0][0][0];
    this.updateChordLabels();
  }

  getOrderedTexts(isIncluseEndstars = true, kind: number | und) {
    return this.getOrderedBlocks(kind).map(
      (lines, linesi, linesa) =>
        lines?.join('\n') + (isIncluseEndstars && linesa.length - 1 === linesi ? '\n* * *' : ''),
    );
  }

  getOrderedBlocks(kind: number | und) {
    const textBeats = this.orders
      ?.reduce((text, ord) => text + (!ord.isRealText() ? '' : (text ? '\n' : '') + ord.repeatedText()), '')
      .split(makeRegExp('/\\n/'));

    const texts = this.translationMap(kind)
      .map(peaceSize => textBeats?.splice(0, peaceSize)!)
      .filter(txt => txt);

    return texts;
  }

  translationMap(kind: number | und) {
    const kinds = translationPushKinds[kind ?? this.translationPushKind];
    let curr = 0;
    const orders = this.orders ?? [];
    const len = orders.length;
    const newlineReg = /\n/;

    for (let ordi = 0; ordi < len; ) {
      const ord = orders[ordi];

      if (!ord.isRealText()) {
        ordi++;
        continue;
      }

      curr += ord.text.split(newlineReg).length;
      let nextOrd = orders[++ordi];

      while (nextOrd?.top.isInherit) {
        if (nextOrd.isRealText()) curr += nextOrd.text.split(newlineReg).length;

        nextOrd = orders[++ordi];
      }

      kinds.push(curr);
      curr = 0;
    }

    return kinds.clearList();
  }

  bracketsTransformed = (() => {
    const brackets = [
      ['«', '»'],
      ['„', '“'],
      ['"', '"'],
      ["'", "'"],
    ];
    const backBrackets = ['`', '`'];
    const dashReg = makeRegExp(`/(\\s)-+(\\s)/g`);
    const openBracketReg = makeRegExp(`/(\\( ?)?("+)( ?\\)?)/g`);
    const closeBracketReg = makeRegExp(`/\\("+ \\)$|^\\( "+\\)/g`);
    const spacesLikeReg = makeRegExp(`/\\s/`);

    return (str = '') => {
      let level = 0;

      const text = str
        .replace(dashReg, '$1—$2')
        .replace(openBracketReg, function (_, pref = '', all: string, post = '', index, text) {
          const pre = text[index - 1];
          const isOpen = !pre || pre.search(spacesLikeReg) + 1;
          const brLevel = level - (isOpen ? 0 : 1);
          level -= (isOpen ? -1 : 1) * all.length;

          return pref[0] === '(' && post.endsWith(')')
            ? ''
            : (pref || '') +
                all
                  .split('')
                  .map((_, bri) => (brackets[brLevel - (isOpen ? -bri : bri)] ?? backBrackets)[isOpen ? 0 : 1])
                  .join('') +
                (post || '');
        })
        .replace(closeBracketReg, '');

      return { text, level };
    };
  })();

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

  toggleModulationInclusion(order: Order) {
    const orderWid = order.wid;
    const isExcluded = this.excludedModulations.includes(orderWid);

    this.excludedModulations = isExcluded
      ? this.excludedModulations.filter(ordWid => ordWid !== orderWid)
      : [...this.excludedModulations, orderWid];

    this.updateChordLabels();

    return this.excludedModulations;
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

      if (!this.excludedModulations.includes(ord.wid) && ord.top.style?.isModulation) {
        currTransPosition = (this.transPosition || 0) + (ord.fieldValues?.md || 0);
      }

      (chords || '').split(makeRegExp('/\\s*\\n+\\s*/')).forEach(line => {
        const lineLabels: string[] = [];
        ordLabels.push(lineLabels);

        (line || '').split(makeRegExp('/ +/')).forEach(chordSchema => {
          chordSchema
            .split(makeRegExp('/[^#A-Z/0-9]+/i'))
            .forEach(chord => this._usedChords && (this._usedChords[chord.replace(makeRegExp('/B/'), 'A#')] = chord));
          lineLabels.push(chordSchema);
          if (!firstChord) firstChord = chordSchema;
        });
      });
    });

    this.tonc = this.firstChord = firstChord;
  }

  static withBemoles(chords?: string, isSet: num = 0) {
    return (
      isSet ? chords?.replace(gSimpleHashedEachLetterChordReg, all => chordBemoleEquivalent[all] || all) : chords
    )?.replace(makeRegExp('/A#/g'), 'B');
  }

  actualChords(chordsScalar?: string | number, position = this.transPosition) {
    const chords = mylib.isStr(chordsScalar) ? (chordsScalar as string) : this.chords?.[chordsScalar as number];
    return chords && Com.withBemoles(this.transBlock(chords, position), this.isBemoled);
  }

  get ords(): IExportableOrderTop[] {
    if (this._ords == null) this._ords = [...(this.getBasic('o') || [])];

    return this._ords as IExportableOrderTop[];
  }

  orderConstructor(top: IExportableOrderTop) {
    return new Order(top, this);
  }

  get orders(): Order[] | null {
    return this._o || this.setOrders();
  }
  setOrders() {
    if (!blockStyles) return null;
    const tops = this.ords.sort((a, b) => a.w - b.w);
    const orders: ReturnType<typeof this.orderConstructor>[] = [];
    let minimals: [string?, number?][] = [];
    const styles = blockStyles.styles;
    const groups: Record<string, number> = {};
    let viewIndex = 0;
    let prev, prevOrd;

    const getStyle = (o: Partial<IExportableOrderTop> | nil) => {
      return o && o.s != null ? styles.find((prop: StyleBlock) => prop.key === o.s) : null;
    };

    const setMin = (src: Partial<IExportableOrderTop>) => {
      const style = src.init ? src.init.style : src.style;
      const styleName = style?.key.trim();
      if (style?.isModulation) minimals = [];
      src.m = minimals.some(([s, c]) => styleName === s && src.c === c) ? 0 : 1;
      minimals.push([styleName, src.c]);
    };

    const header = (ord: IExportableOrderTop, style: StyleBlock, numered = true) => {
      const type = style.key.trim();
      const number =
        numered && ord.v !== 0
          ? (groups[type] = groups[type] == null ? 1 : ord.a == null ? groups[type] + 1 : groups[type])
          : '';

      return (bag: OrderTopHeaderBag = {}) => {
        return (
          (style.title[this.langi] || style.title[0]) +
          (bag.isEdit
            ? ' №'
            : (numered ? (groups[type] < 2 ? '' : ` ${number}`) : '') +
              (bag.repeats ? ` ×  ${bag.repeats}р. ` : '') +
              (bag.isTexted ? ':' : ''))
        );
      };
    };

    for (let topi = 0; topi < tops.length; topi++) {
      const ordTop = tops[topi];
      if (ordTop == null) {
        orders.push(this.orderConstructor({ header: () => '' } as never));
        continue;
      }
      const targetOrd: Order | nil = ordTop.a == null ? null : orders.find(o => o.unique === ordTop.a);
      const top = Order.getWithExtendableFields(targetOrd?.top.source as IExportableOrderTop, ordTop);

      const style = getStyle(top);

      if (!style) {
        orders.push(
          this.orderConstructor({
            source: ordTop,
            header: () => '',
          } as never),
        );
        continue;
      }

      if (style.isInherit) continue;

      top.style = style;
      top.source = ordTop;
      top.isNextInherit = !!getStyle(tops[topi + 1])?.isInherit;
      top.isNextAnchorOrd = !!(ordTop.u != null && tops[topi + 1] && tops[topi + 1].a === ordTop.u);
      top.isPrevTargetOrd = !!(targetOrd && tops[topi - 1] === targetOrd.top.source);
      top.targetOrd = targetOrd;
      top.watchOrd = targetOrd;
      top.isAnchor = ordTop.a != null;
      top.isTarget = ordTop.u != null && tops.some(o => o.a === ordTop.u);
      top.viewIndex = viewIndex++;
      top.sourceIndex = tops.indexOf(ordTop);

      setMin(top);

      const newOrder = this.orderConstructor(top as IExportableOrderTop);
      orders.push(newOrder);

      top.header = newOrder.isEmptyHeader
        ? (bag, isRequired) => (isRequired ? header(ordTop, style, false)(bag) : '')
        : targetOrd && targetOrd.top.header! && !top.source.s
          ? targetOrd.top.header
          : header(ordTop, style);

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
        const srcIndex = targetOrd.top.sourceIndex || 0;
        let anci = srcIndex + 1;
        let anc = tops[anci];
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
          ancTop.watchOrd = orders[srcIndex + anchorInheritIndex + 1];
          ancTop.isNextInherit = !!getStyle(tops[anci + 1])?.isInherit;
          ancTop.anchorInheritIndex = anchorInheritIndex++;
          ancTop.viewIndex = viewIndex++;
          ancTop.sourceIndex = tops.indexOf(targetOrd.top.source as IExportableOrderTop);

          setMin(ancTop);

          const newAncOrd = this.orderConstructor(ancTop as IExportableOrderTop);
          orders.push(newAncOrd);

          anc = tops[++anci];
          ancStyle = getStyle(anc);
        }
      }

      let nexti = topi + 1;
      let next = tops[nexti];
      let nextStyle = getStyle(next);

      while (nextStyle?.isInherit) {
        const nextTop = Order.getWithExtendableFields(targetOrd?.top.source as IExportableOrderTop, next);

        nextTop.isInherit = true;
        nextTop.style = nextStyle;
        nextTop.leadOrd = newOrder;
        nextTop.prev = prev;
        nextTop.init = top as IExportableOrderTop;
        nextTop.isNextInherit = !!getStyle(tops[nexti + 1])?.isInherit;
        nextTop.isAnchorInheritPlus = isAnchorInheritPlus;
        nextTop.header = top.header;
        nextTop.source = next;
        nextTop.viewIndex = viewIndex++;
        nextTop.sourceIndex = tops.indexOf(next);

        setMin(nextTop);

        const newNextOrd = this.orderConstructor(nextTop as IExportableOrderTop);
        orders.push(newNextOrd);

        if (prev) prev.top.next = newNextOrd;
        prev = newNextOrd;

        next = tops[++nexti];
        nextStyle = getStyle(next);
      }
    }

    this._o = orders;
    return orders;
  }
}
