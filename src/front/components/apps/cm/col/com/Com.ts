import { makeRegExp } from '../../../../../../back/complect/makeRegExp';
import { itIt } from '../../../../../../back/complect/utils';
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
import { IExportableOrderMe, OrderTopHeaderBag } from './order/Order.model';

export class Com extends BaseNamed<IExportableCom> {
  initial: Record<string, any>;
  ton?: number;
  tonc?: string;
  firstChord?: string;
  number: string = '';
  initialName: string;
  excludedModulations: number[] = [];

  protected _o?: Order[];
  protected _ords?: IExportableOrderMe[];
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
      .filter(itIt);

    return texts;
  }

  translationMap(kind: number | und) {
    const kinds = translationPushKinds[kind ?? this.translationPushKind];
    let curr = 0;
    const orders = this.orders ?? [];
    const len = orders.length;
    const newlineReg = makeRegExp('/\\n/');

    for (let ordi = 0; ordi < len; ) {
      const ord = orders[ordi];

      if (!ord.isRealText()) {
        ordi++;
        continue;
      }

      curr += ord.text.split(newlineReg).length;
      let nextOrd = orders[++ordi];

      while (nextOrd?.me.isInherit) {
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

      if (!this.excludedModulations.includes(ord.wid) && ord.me.style?.isModulation) {
        currTransPosition = (this.transPosition || 0) + (ord.fieldValues?.md || 0);
      }

      (chords || '').split(makeRegExp('/\\n/')).forEach(line => {
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

  protected emptyOrderHeader = () => '';
  protected mapTopOrdInOrdMe = (top: IExportableOrder): IExportableOrderMe => ({ top, header: this.emptyOrderHeader });
  get ords() {
    if (this._ords == null) this._ords = [...(this.getBasic('o') || [])].map(this.mapTopOrdInOrdMe);

    return this._ords;
  }

  orderConstructor(me: IExportableOrderMe) {
    return new Order(me, this);
  }

  get orders(): Order[] | null {
    return this._o || this.setOrders();
  }
  setOrders() {
    if (!blockStyles) return null;
    const ords = this.ords;
    const orders: ReturnType<typeof this.orderConstructor>[] = [];
    let minimals: [string?, number?][] = [];
    const styles = blockStyles.styles;
    const groups: Record<string, number> = {};
    let viewIndex = 0;
    let prev, prevOrd;

    const getStyle = (ord: IExportableOrderMe | nil) => {
      return ord?.top.s != null ? styles.find((prop: StyleBlock) => prop.key === ord.top.s) : null;
    };

    const setMin = (src: IExportableOrderMe) => {
      const styleName = src.style?.key.trim();
      if (src.style?.isModulation) minimals = [];
      src.top.m = minimals.some(([s, c]) => styleName === s && src.top.c === c) ? 0 : 1;
      minimals.push([styleName, src.top.c]);
    };

    const header = (ord: IExportableOrderMe, style: StyleBlock, numered = true) => {
      const type = style.key.trim();
      const number =
        numered && ord.top.v !== 0
          ? (groups[type] = groups[type] == null ? 1 : ord.top.a == null ? groups[type] + 1 : groups[type])
          : '';

      return (bag: OrderTopHeaderBag | nil) => {
        bag ??= {};

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

    for (let topi = 0; topi < ords.length; topi++) {
      const ordMe = ords[topi];
      if (ordMe == null) {
        orders.push(this.orderConstructor({ header: this.emptyOrderHeader, top: {} } as IExportableOrderMe));
        continue;
      }
      const targetOrd: Order | nil = ordMe.top.a == null ? null : orders.find(o => o.unique === ordMe.top.a);
      const me = Order.getWithExtendableFields(targetOrd?.me, ordMe);

      const style = getStyle(me);

      if (!style) {
        orders.push(
          this.orderConstructor({
            top: ordMe.top,
            source: ordMe,
            header: this.emptyOrderHeader,
          }),
        );
        continue;
      }

      if (style.isInherit) continue;

      me.style = style;
      me.source = ordMe;
      me.isNextInherit = !!getStyle(ords[topi + 1])?.isInherit;
      me.isNextAnchorOrd = !!(ordMe.top.u != null && ords[topi + 1] && ords[topi + 1].top.a === ordMe.top.u);
      me.isPrevTargetOrd = !!(targetOrd && ords[topi - 1] === targetOrd.me.source);
      me.targetOrd = targetOrd;
      me.watchOrd = targetOrd;
      me.isAnchor = ordMe.top.a != null;
      me.isTarget = ordMe.top.u != null && ords.some(me => me.top.a === ordMe.top.u);
      me.viewIndex = viewIndex++;
      me.sourceIndex = ords.indexOf(ordMe);

      setMin(me);

      const newOrder = this.orderConstructor(me);
      orders.push(newOrder);

      me.header = newOrder.isEmptyHeader
        ? (bag, isRequired) => (isRequired ? header(ordMe, style, false)(bag) : '')
        : targetOrd && targetOrd.me.header! && !me.source.top.s
          ? targetOrd.me.header
          : header(ordMe, style);

      me.prev = prev || null;

      if (prev) prev.me.next = newOrder;
      prev = newOrder;

      if (!me.isAnchor) {
        me.prevOrd = prevOrd || null;
        if (prevOrd) prevOrd.me.nextOrd = newOrder;
        prevOrd = newOrder;
      }

      let isAnchorInheritPlus = me.top.a != null;

      if (targetOrd && me.top.a != null) {
        const srcIndex = targetOrd.me.sourceIndex || 0;
        let anci = srcIndex + 1;
        let anc = ords[anci];
        let ancStyle = getStyle(anc);
        let anchorInheritIndex = 0;

        while (ancStyle?.isInherit) {
          isAnchorInheritPlus = true;
          const ancMe = Order.getWithExtendableFields(targetOrd.me.source, anc);

          ancMe.isAnchorInherit = true;
          ancMe.isInherit = true;
          ancMe.style = ancStyle;
          ancMe.source = anc;
          ancMe.header = me.header;
          ancMe.init = me.top;
          ancMe.targetOrd = targetOrd;
          ancMe.leadOrd = newOrder;
          ancMe.watchOrd = orders[srcIndex + anchorInheritIndex + 1];
          ancMe.isNextInherit = !!getStyle(ords[anci + 1])?.isInherit;
          ancMe.anchorInheritIndex = anchorInheritIndex++;
          ancMe.viewIndex = viewIndex++;
          ancMe.sourceIndex = ords.indexOf(targetOrd.me);

          setMin(ancMe);

          const newAncOrd = this.orderConstructor(ancMe);
          orders.push(newAncOrd);

          anc = ords[++anci];
          ancStyle = getStyle(anc);
        }
      }

      let nexti = topi + 1;
      let next = ords[nexti];
      let nextStyle = getStyle(next);

      while (nextStyle?.isInherit) {
        const nextMe = Order.getWithExtendableFields(targetOrd?.me.source, next);

        nextMe.isInherit = true;
        nextMe.style = nextStyle;
        nextMe.leadOrd = newOrder;
        nextMe.prev = prev;
        nextMe.init = me.top;
        nextMe.isNextInherit = !!getStyle(ords[nexti + 1])?.isInherit;
        nextMe.isAnchorInheritPlus = isAnchorInheritPlus;
        nextMe.header = me.header;
        nextMe.source = next;
        nextMe.viewIndex = viewIndex++;
        nextMe.sourceIndex = ords.indexOf(next);

        setMin(nextMe);

        const newNextOrd = this.orderConstructor(nextMe);
        orders.push(newNextOrd);

        if (prev) prev.me.next = newNextOrd;
        prev = newNextOrd;

        next = ords[++nexti];
        nextStyle = getStyle(next);
      }
    }

    this._o = orders;
    return orders;
  }
}
