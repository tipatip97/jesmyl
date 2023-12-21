import { FreeExecDict } from '../../../../../../complect/exer/Exer.model';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { cmExer } from '../../../Cm.store';
import { Cat } from '../../../col/cat/Cat';
import { blockStyles } from '../../../col/com/block-styles/BlockStyles';
import { StyleBlock } from '../../../col/com/block-styles/StyleBlock';
import { Com } from '../../../col/com/Com';
import { chordDiezEquivalent, gSimpleBemoleChordReg } from '../../../col/com/Com.complect';
import { IExportableCom } from '../../../col/com/Com.model';
import { IExportableOrderTop, INewExportableOrder } from '../../../col/com/order/Order.model';
import { CorrectsBox } from '../../corrects-box/CorrectsBox';
import {
  checkIsChordLineReg,
  correctNotSlavicNameReg_i,
  ruDifferentLowerLettersStr,
  slavicLowerLettersStr,
  textedChordReg,
  uaDifferentLowerLettersStr,
} from '../../Editor.complect';
import { EditableCol } from '../EditableCol';
import { EditableOrder } from './complect/orders/EditableOrder';

const freeSlavicLineReg_gi = new RegExp(`[^${slavicLowerLettersStr} ]`, 'gi');
const ruDifferentReg = new RegExp(`[${ruDifferentLowerLettersStr}]`);
const uaDifferentReg = new RegExp(`[${uaDifferentLowerLettersStr}]`);
const melodicLettersReg = /[аеёиоуэыяюaeouiіїє]/gi;

export class EditableCom extends Com {
  corrects: Record<string, CorrectsBox | nil> = {};
  initialName: string;
  col: EditableCol<IExportableCom>;
  initial: Com;
  protected _o?: EditableOrder[];

  constructor(top: IExportableCom, index: number) {
    super(mylib.clone(top), index);
    this.col = new EditableCol(top);
    this.initialName = this.name;
    this.initial = new Com(mylib.clone(top), index);
  }

  get name() {
    return this.col?.getBasic('n') || '';
  }
  set name(value) {
    this.col.setExportable('n', value);
  }

  get isCreated() {
    return this.col.isCreated;
  }
  set isCreated(val: boolean) {
    this.col.isCreated = val;
  }

  scope(action?: string, uniq?: string | number) {
    return [this.wid, '.', mylib.typ('[action]', action), ':', [].concat(mylib.def(uniq, ['[uniq]'])).join(',')].join(
      '',
    );
  }

  get ords(): IExportableOrderTop[] {
    if (this._ords == null) this._ords = mylib.clone(this.getBasic('o')) ?? [];

    return this._ords as IExportableOrderTop[];
  }

  get orders(): EditableOrder[] | null {
    return this._o || (this.setOrders() as EditableOrder[]);
  }

  orderConstructor(top: IExportableOrderTop) {
    return new EditableOrder(top, this);
  }

  create() {
    this.isCreated = true;
    return this;
  }

  publicate(onLoad: () => void) {
    this.col.execCol(
      {
        action: 'comAdd',
        method: 'set',
        prev: NaN,
        args: {
          comw: this.wid,
          value: this.toCreateDict(),
        },
        onLoad,
      },
      'com',
    );
  }

  toCreateDict() {
    return {
      ...this.top,
      ...this.basics,
      ...this.col.toDict(),
      n: this.name,
      c: this.chords,
      t: this.texts,
      o: this.ords.map((topOrd) => {
        const ord = mylib.clone(topOrd);
        delete ord.originWid;
        delete ord.header;

        if (!ord.p?.length) delete ord.p;

        return ord;
      }),
    };
  }

  setCreatedCom(elseCb?: () => void) {
    if (this.isCreated)
      setTimeout(() =>
        this.col.execCol(
          {
            action: 'comAdd',
            method: 'set',
            prev: NaN,
            args: {
              value: this.toCreateDict(),
            },
          },
          'com',
        ),
      );
    else elseCb?.();
  }

  exec<Value>(bag: FreeExecDict<Value>) {
    this.setCreatedCom(() => this.col.execCol(bag, 'com'));
  }

  rename(
    name: string,
    onCorrecting?: ((val?: string) => any | nil | void) | nil,
    isSetExec = true,
    isSetAllText?: boolean,
  ) {
    this.col.renameCol(
      name,
      'com',
      (correct: string) => {
        this.rename(correct, onCorrecting);
        onCorrecting?.(correct);
      },
      isSetExec,
      isSetAllText,
    );

    this.setCreatedCom();
  }

  setField<Fieldn extends keyof IExportableCom>(
    fieldn: Fieldn,
    value: IExportableCom[Fieldn],
    defVal?: IExportableCom[Fieldn],
  ) {
    this.col.setFieldCol<keyof IExportableCom, 'com'>(
      fieldn,
      value,
      { b: 'comSetDefaultBemolType', a: '', c: '', k: '', l: '', n: '', o: '', p: '', r: '', t: '', ton: '', w: '' },
      'com',
      defVal,
    );
    if (fieldn === 'b') this.isBemoled = value as num;
  }

  switchLang() {
    const prev = this.langi;
    const value = (this.langi = this.langi ? 0 : 1);

    this.exec({
      action: 'comSetLangi',
      prev,
      method: 'set',
      value,
      uniq: this.wid,
      args: {
        value,
      },
    });
  }

  remove(isRemoved = true) {
    this.col.removeCol('com', isRemoved);
  }

  comeBack() {
    this.col.comeBackCol('com');
  }

  setNativeNumber(cat: Cat, numberStr: string) {
    const number = parseInt(numberStr);

    const corrects = (this.corrects[`setNativeNum:${cat.wid}`] = new CorrectsBox(
      numberStr.match(/^0|\D|^$/)
        ? [
            {
              message: 'Некорректное значение номера',
            },
          ]
        : null,
    ));

    let refs = this.refs;

    if (refs == null) {
      refs = this.refs = {};
    }

    refs[cat.wid] = number;

    this.refs = refs;

    this.exec({
      action: 'setNativeNum',
      prev: this.initial.refs?.[cat.wid],
      method: 'set',
      value: number,
      uniq: cat.wid,
      anti: ({ action, args }) => {
        if (action === 'removeNativeNum' && (args ? args.catw === cat.wid && args.comw === this.wid : false))
          return (strategy) => strategy.RememberNew;
      },
      args: {
        catn: cat.name,
        value: number,
        catw: cat.wid,
      },
      corrects,
    });

    return numberStr;
  }

  async parseBlocksFromClipboard(value: string, cb?: (blocks: string[]) => boolean) {
    const blocks: string[] = value.trim().split(/\n\s*\n/);

    if ((cb && cb(blocks)) !== false) this.parseBlocks(blocks);
  }

  parseBlocks(blocks: string[] | string) {
    type Unit = {
      style?: StyleBlock;
      chords?: string;
      text?: string;
      chordLinesCount?: number;
      texti?: number;
      chordsi?: number;
      cleanText?: string;
      firstLineSlogs?: number;
    };

    const units: Unit[] = [];
    let languagei: number | und | null;
    const errors: string[] = [];
    const slogUnits: Record<number, Unit[]> = {};
    const setLanguagei = (reg: RegExp, text: string, langi: number) => {
      if (text.match(reg)) {
        if (languagei !== undefined && languagei !== langi) {
          languagei = null;
          errors.push('Не удалось определить язык песни');
        } else languagei = langi;
      }
    };
    const inheritStyle = blockStyles?.styles.find(({ isInherit }) => isInherit);

    (typeof blocks === 'string' ? blocks.split(/\n+\s*\n+/) : blocks).forEach((block) => {
      if (!block) return;
      const unit: Unit = {};
      const textLines: string[] = [];
      const chordLines: string[] = [];
      units.push(unit);

      block.split('\n').forEach((line, linei) => {
        const freeLine = line.replace(/\s+/g, ' ').trim();

        if (languagei !== null) {
          setLanguagei(ruDifferentReg, freeLine, 0);
          setLanguagei(uaDifferentReg, freeLine, 1);
        }

        if (linei === 0) {
          unit.style = this.takeStyleByTitle(freeLine);
          if (unit.style) return;
        }

        if (freeLine.match(checkIsChordLineReg)) {
          chordLines.push(freeLine);
        } else {
          if (textLines.length === 0) {
            const letters = freeLine.match(melodicLettersReg);
            const slogs = letters?.length;
            if (slogs !== undefined) {
              if (slogUnits[slogs] === undefined) slogUnits[slogs] = [];
              unit.firstLineSlogs = slogs;
              slogUnits[slogs].push(unit);
            }
          }
          textLines.push(freeLine);
        }
      });

      const unitTextLines: string[][] = [];
      const chordLinesCount = (unit.chordLinesCount = chordLines.length);
      let chords: string | und;

      const pushTextLines = (chordLinesCount: number) => {
        for (let i = 0; i < chordLinesCount; i++) {
          const lines = textLines; //.slice(i * chordLinesCount, (i + 1) * chordLinesCount);
          if (lines.length) unitTextLines.push(lines);
        }
      };

      if (chordLinesCount === 0) {
        const unitStyle = unit.style;
        if (unitStyle) {
          const sameUnit = units.find(({ style }) => unitStyle === style);

          if (sameUnit) {
            if (sameUnit.chordLinesCount) pushTextLines(sameUnit.chordLinesCount);
            chords = sameUnit.chords;
          }
        }
      } else {
        const textLinesCount = textLines.length;
        chords = chordLines.join('\n');

        if (chordLinesCount < textLinesCount) {
          const partsCount = textLinesCount / chordLinesCount;
          if (partsCount !== Math.trunc(partsCount)) unitTextLines.push(textLines);
          else pushTextLines(chordLinesCount);
        } else unitTextLines.push(textLines);
      }

      unitTextLines.forEach((lines, linesi) => {
        const currUnit = linesi === 0 ? unit : {};

        currUnit.text = lines.join('\n');
        currUnit.chords = chords;
        currUnit.cleanText = lines.map((line) => line.replace(freeSlavicLineReg_gi, '')).join('\n');

        if (linesi > 0) {
          currUnit.style = inheritStyle;
          units.push(currUnit);
        }
      });
    });

    const texts: string[] = [];
    const chords: string[] = [];
    const unitSlogGroups = Object.values(slogUnits).sort((a, b) => b.length - a.length);

    let uniq = 0;
    const orders: INewExportableOrder[] = [];

    units.forEach((unit, uniti) => {
      if (unit.style === undefined && blockStyles) {
        if (!unit.text) {
          if (uniti === 0) unit.style = blockStyles.forChordedBlock[0];
          else unit.style = blockStyles.forChordedBlock[1];
        }
        const prevUnit = units[uniti - 1];
        if (prevUnit?.style && prevUnit.text && unit.firstLineSlogs === prevUnit.firstLineSlogs) {
          const style = blockStyles.getNextLevelSortedStyle(prevUnit.style);
          if (style) unit.style = style;
        } else {
          const uniti = unitSlogGroups.findIndex((units) => units.includes(unit));
          if (uniti !== undefined) {
            const style = blockStyles.getNextLevelSortedStyle(uniti);
            if (style) unit.style = style;
          }
        }
      }

      if (unit.text) {
        let texti: number;
        const sameTextUnit = units.find((u) => u.cleanText === unit.cleanText && u.texti !== undefined);

        if (sameTextUnit?.texti !== undefined) texti = sameTextUnit.texti;
        else texti = texts.push(unit.text) - 1;

        unit.texti = texti;
      }

      if (unit.chords) {
        let chordsi: number;
        const sameChordsUnit = units.find((u) => u.chords === unit.chords && u.chordsi !== undefined);

        if (sameChordsUnit?.chordsi !== undefined) chordsi = sameChordsUnit.chordsi;
        else chordsi = chords.push(unit.chords) - 1;

        unit.chordsi = chordsi;
      }

      const ord: INewExportableOrder = {};

      const similarOrd = orders.find(
        (ord) => ord.c === unit.chordsi && ord.t === unit.texti && ord.s === unit.style?.key,
      );
      if (similarOrd) {
        if (similarOrd.u === undefined) similarOrd.u = uniq++;
        ord.a = similarOrd.u;
      } else {
        if (unit.chordsi !== undefined) ord.c = unit.chordsi;
        if (unit.texti !== undefined) ord.t = unit.texti;
        if (unit.style !== undefined) ord.s = unit.style.key;
      }

      orders.push(ord);
    });

    if (languagei) this.langi = languagei;

    this.add('chords', chords.length ? chords : ['']);
    this.add('texts', texts.length ? texts : ['']);
    this.addOrders(orders);

    return errors;
  }

  takeStyleByTitle(text: string) {
    if (!text) return;
    const preparedText = text
      .toLowerCase()
      .replace(/[^а-я]/g, '')
      .trim();
    return blockStyles?.styles.find((style) => style.tags?.some((tag) => preparedText.startsWith(tag)));
  }

  afterOrderChange() {
    this.setOrders();
    this.resetChordLabels();
  }

  addOrders(orderDicts: INewExportableOrder[] = []) {
    orderDicts.forEach((dict) => this.addOrder(dict, false));
    this.afterOrderChange();
  }

  add(fieldn: 'texts' | 'chords', value: string | string[], isInsert = false) {
    const emptyIndex = (mylib.findLastIndex(fieldn === 'texts' ? this.texts : this.chords, (ch) => ch) || 0) - -1;

    [value].flat().forEach((block, blocki) => {
      this.changeBlock(fieldn, emptyIndex + blocki, block, isInsert);
    });

    if (fieldn === 'chords') this.resetChordLabels();

    return this;
  }

  addOrder(topOrd: INewExportableOrder, refresh = true) {
    const w = this.getNextOrdWid();

    this.exec({
      action: 'comAddOrderBlock',
      method: 'push',
      args: {
        ordw: w,
        texti: topOrd.t,
        type: topOrd.s,
        chordsi: topOrd.c,
        anchor: topOrd.a,
        uniq: topOrd.u,
      },
    });

    const ord: IExportableOrderTop = { w, header: () => '' };

    (['t', 's', 'a', 'u', 'c'] as (keyof IExportableOrderTop)[]).forEach((key) => {
      if (topOrd[key as never] != null) ord[key] = topOrd[key as never];
    });

    this.ords.push(ord);
    if (refresh) this.afterOrderChange();
  }

  isOrdWithHead(ord: EditableOrder) {
    return !ord.top.isInherit && !ord.top.isAnchorInheritPlus && !ord.isEmptyHeader;
  }

  getOrdersOnBlockDeletion(coln: 'texts' | 'chords', coli: number) {
    if (!this.orders) return {};
    const indexes: { ordi: number; ord: EditableOrder }[] = [];
    const containers = this.orders.filter((ord, ordi) => {
      const isContains = (coln === 'texts' ? ord.texti : ord.chordsi) === coli;
      if (isContains) indexes.push({ ordi, ord });
      return isContains;
    });
    let anchors: EditableOrder[] = [];

    if (coln === 'texts') {
      anchors = this.orders.filter((ord, ordi) => {
        return containers.some((contOrd) => {
          const isAnch = ord.isAnchor && contOrd.top.u === ord.top.a;
          if (isAnch) indexes.push({ ordi, ord });
          return isAnch;
        });
      });
    }

    return { containers, anchors, indexes: indexes.sort((a, b) => b.ordi - a.ordi) };
  }

  removeBlock(coln: 'texts' | 'chords', coli: number) {
    if (coln === 'texts') {
      const { indexes } = this.getOrdersOnBlockDeletion(coln, coli);

      indexes?.forEach(({ ord }) => {
        this.removeOrderBlock(ord);
      });
    }

    this.updateOrderSticks(coln, coli, -1, coln === 'chords');
    const colnLiteral = coln === 'texts' ? 't' : 'c';
    const currLen = this[coln]?.length;

    this.exec({
      action: 'removeBlock',
      method: 'remove',
      uniq: `${coln}-${coli}`,
      args: {
        value: coli,
        coln: colnLiteral,
      },
      anti: (exec) => {
        const { action, args, data } = exec;
        if (action === 'changeBlocks' && args && args.coln === colnLiteral && args.comw === this.wid) {
          if (args.index === coli)
            return data?.isInsert
              ? (strategy) => strategy.RemoveNew
              : args.value === ''
                ? (strategy) => strategy.RememberNew
                : null;
          else if (currLen !== undefined && args.index === currLen - 1) return (strategy) => strategy.RememberNew;
        }
      },
    });
    this[coln]?.splice(coli, 1);

    if (coln === 'chords') this.resetChordLabels();
  }

  replaceBemoles(coli: number) {
    if (this.chords) {
      const col = this.chords[coli];
      if (col) {
        const val = col.replace(gSimpleBemoleChordReg, (chord) => chordDiezEquivalent[chord] || chord);
        this.changeBlock('chords', coli, val);
      }
    }
  }

  isImpossibleToMigrateOrder(ord: EditableOrder, ordi: number, ords: EditableOrder[]) {
    let isSelfOrd = false;

    return (
      ord.top.isAnchorInherit ||
      ordi === ords.length - 1 ||
      !ords.some((currOrd) => {
        if (currOrd === ord) {
          isSelfOrd = true;
          return false;
        }
        if (!isSelfOrd) return false;
        return !currOrd.top.isAnchorInherit;
      })
    );
  }

  isCantMigrateOrder(ord: EditableOrder, ordi: number) {
    return (
      (!ordi && ord.top.isNextInherit) ||
      ord.top.isNextAnchorOrd ||
      (ord.top.isNextAnchorOrd && !ordi) ||
      ((index) => !(index < 0 || index === cmExer.execs.length - 1))(
        cmExer.execs.findIndex((exec) => exec.action === 'comMigrateOrders' && exec.args?.comw === this.wid),
      )
    );
  }

  migrateOrder(topOrd: EditableOrder) {
    if (!this.orders) return;
    const { top: { source: { w: to = null } = {} } = {} } = topOrd.top.next || topOrd.top.prev || {};

    if (to == null) {
      return;
    }

    const prev: Record<number, number> = {};
    const value: Record<number, number> = {};
    const from = topOrd.top.w;
    const min = Math.min(from, to);
    const max = Math.max(from, to);

    this.ords.forEach((ord) => {
      if (ord.w > min && ord.w <= max) {
        prev[ord.w] = ord.w - 1;
        prev[ord.w - 1] = ord.w;
      }
    });

    this.orders.forEach((ord) => {
      if (ord.top.source && prev[ord.wid] != null && !ord.top.isAnchorInherit) ord.top.source.w = prev[ord.wid];
    });

    this.orders.forEach((ord) => {
      const originWid = ord.originWid;
      if (originWid != null && ord.top.source && ord.top.source.w !== originWid) value[originWid] = ord.top.source.w;
    });

    this.exec({
      value,
      method: 'migrate',
      action: 'comMigrateOrders',
      args: {
        value,
      },
    });

    this.afterOrderChange();
  }

  removeOrderBlock({ wid, isAnchor, top }: EditableOrder) {
    this.exec({
      action: 'removeOrderBlock',
      uniq: wid,
      method: 'remove',
      args: {
        ordw: wid,
        isAnchor: +isAnchor,
        blockn: top.header?.(),
      },
      anti: ({ action, args, args: { comw } = {} }) => {
        if (action === 'comAddOrderBlock' && comw === this.wid && wid === args?.wid)
          return (strategy) => strategy.RememberNew;
      },
    });
    const index = this.ords.findIndex((o) => o.w === wid);

    this.ords.splice(index, 1);
    this.afterOrderChange();

    this.resetChordLabels();
  }

  addOrderAnchor(ord: EditableOrder) {
    if (ord.isAnchor) {
      console.error('Не возможно ссылаться на ссылку');
      return;
    }

    const anchor = ord.takeUniq();
    const wid = this.getNextOrdWid();

    this.exec({
      action: 'comAddOrderAnchorBlock',
      method: 'push',
      args: {
        ordw: wid,
        anchor,
        blockn: ord.top.header?.(),
      },
    });

    this.ords.push({ a: anchor, w: wid, header: () => '' });
    this.afterOrderChange();
  }

  setTransPosition(value: number | und) {
    this.exec({
      prev: this.transPosition,
      value,
      method: 'set',
      action: 'comSetTransPosition',
      args: {
        value,
      },
    });

    this.transPosition = value;

    this.resetChordLabels();
  }

  getNextOrdWid() {
    return (this.ords?.reduce((w, ord) => (ord.w == null || ord.w < w ? w : ord.w), -1) ?? -1) - -1;
  }

  changeBlock(coln: 'texts' | 'chords', coli: number, val: string, isInsert = false) {
    const value = coln === 'texts' ? val : this.transBlock(val, 12 - (this.transPosition || 0));
    if (value == null) return;
    const execValue = value.replace(/^\s+|\s+$/gm, '');
    const corrects = this.setBlockCorrects(coln, coli, val);
    const colnLiteral = coln === 'texts' ? 't' : 'c';

    this.exec({
      uniq: [coln, coli],
      prev: (coln === 'texts' ? this.texts : this.chords)?.[coli]?.replace(/^\s+|\s+$/gm, ''),
      value: execValue,
      method: 'set',
      action: 'changeBlocks',
      corrects,
      args: {
        value: execValue,
        coln: colnLiteral,
        index: coli,
      },
      data: {
        isInsert,
      },
    });

    if (coln === 'texts' && this.texts) this.texts[coli] = value;
    else if (this.chords) {
      this.chords[coli] = value;
      this.resetChordLabels();
    }
  }

  setBlockCorrects(coln: 'texts' | 'chords', coli: number, val: string, isSetAllText?: boolean) {
    const corrects = this.blockCorrects(val, coln, coli, undefined, isSetAllText);
    this.corrects[`${coln}-block-${coli}`] = corrects;
    return corrects;
  }

  insertBlocks(coln: 'texts' | 'chords', coli: number, value = '', prev = '...') {
    if (coli === (this[coln]?.length || 0) - 1) {
      this.add(coln, '', true);
    } else {
      this[coln]?.concat(value).forEach((_, ccoli, ccola) => {
        if (ccoli <= coli) return;
        const val = ccoli - 1 === coli ? value : ccoli === coli ? prev : '' + ccola[ccoli - 1];

        this.changeBlock(coln, ccoli, val, true);
      });

      this.updateOrderSticks(coln, coli, 1);
    }

    if (coln === 'chords') this.resetChordLabels();
  }

  updateOrderSticks(coln: 'texts' | 'chords', coli: number, delta: number, isReset?: boolean) {
    const ccoln = coln === 'texts' ? 't' : 'c';
    this.ords.forEach((ord, ordi) => {
      const colIndex = ord[ccoln] || 0;
      if (isReset ? colIndex >= coli : colIndex > coli) {
        const value = isReset && ord[ccoln] === coli ? -1 : colIndex - -delta;

        this.exec({
          uniq: [ordi, coln],
          prev: 0 - -colIndex,
          value,
          method: 'set',
          action: 'updateOrderStick',
          args: {
            coln: coln === 'texts' ? 't' : 'c',
            value,
            ordi,
            ordw: ord.w,
          },
        });
        ord[ccoln] = value;
      }
    });
    this.afterOrderChange();
  }

  prepareCorrectTextLine(line: string) {
    return line
      .replace(/(\s*)[«„]\s*/g, (_: string, pre: string) => `${pre ? ' ' : ''}"`)
      .replace(/\s*[»“](\s*)/g, (_: string, post: string) => `"${post ? ' ' : ''}`)
      .replace(
        /(\s*)[—–](\s*)/g,
        (_: string, pre: string, post: string) => `${pre && post ? ' ' : ''}-${pre && post ? ' ' : ''}`,
      )
      .replace(/\s*([,.;!?:])\s*([^"])/g, '$1 $2');
  }

  correctRename(name: string) {
    return mylib.isStr(name) ? this.rename(this.takeCorrectName(name)) : name;
  }

  correctName(name: string) {
    return name.replace(correctNotSlavicNameReg_i, '');
  }

  takeCorrectName(text: string) {
    let name = '';

    text.split(/\n\s*\n/).find((block) => {
      return block.split('\n').find((line) => {
        const lowerLine = line.toLowerCase().replace(/^[^а-яё]+/g, '');
        if (this.takeStyleByTitle(lowerLine)) return false;

        if (/^[^a-zA-Z\d#]+$/.exec(lowerLine)) {
          name = line;
          return true;
        }
        return false;
      });
    });

    return name.replace(/[^а-я!]+$/i, '');
  }

  removeNativeNumber(cat: Cat, exec?: <Val>(v?: Val) => Val | nil) {
    delete this.corrects[`setNativeNum:${cat.wid}`];

    let refs = this.refs;
    if (refs == null || mylib.isArr(refs)) {
      refs = this.refs = {};
    }
    const prev = this.initial.refs?.[cat.wid];
    delete refs[cat.wid];

    this.exec({
      action: 'removeNativeNum',
      method: 'remove',
      uniq: cat.wid,
      prev,
      args: {
        catn: cat.name,
        value: cat.wid,
      },
      anti: [
        ({ action, args }) => {
          if (action === 'setNativeNum' && (args ? args.catw === cat.wid && args.comw === this.wid : false))
            return (strategy) => (null == prev ? strategy.RemoveNew : strategy.RememberNew);
        },
      ],
    });
    exec?.();
  }

  blockCorrects(
    value: string | und,
    coln: 'chords' | 'texts',
    blocki?: number,
    action?: string,
    isSetAllText?: boolean,
  ) {
    const blockNum = blocki == null ? '' : `. (${blocki - -1}-й блок)`;
    const ret = (err: string | null) => new CorrectsBox(err ? [{ message: err, code: 0 }] : null);

    if (coln === 'chords') {
      const errors: string[] = [];
      const text = (value || '')
        .trim()
        .split(/([\n\s ]+)/)
        .map((chord, chordi) => {
          if (!(chordi % 2) && !chord.match(textedChordReg)) {
            errors.push(chord);
            return `[${chord}]`;
          }
          return chord;
        })
        .join(' ');
      const few = errors.length > 1;

      return ret(
        errors.length
          ? `Аккорд${few ? 'ы' : ''} "${errors.join('; ')}" не верно написан${
              few ? 'ы' : ''
            }${blockNum}:\n\n${text}\n\n`
          : null,
      );
    } else {
      let isThereErrors;
      let mistakes = '';
      const text = (value || '').replace(/[^-ієїа-яё().,":;!?\s']+/gi, (all) => {
        isThereErrors = true;
        mistakes += all;
        return `[${all}]`;
      });
      if (isThereErrors) return ret(`Присутствуют недопустимые символы${blockNum}: ${mistakes}\n\n${text}\n\n`);

      const { level } = this.bracketsTransformed(value);
      if (level) {
        const pre = level < 0 ? 'открывающ' : 'закрывающ';
        const text = mylib.declension(
          Math.abs(level),
          `${pre}уюся кавычку`,
          `${pre}ихся кавычки`,
          `${pre}ихся кавычек`,
        );
        return ret(
          `В тексте присутствует непарное количество ковычек.\nНеобходимо добавить ${Math.abs(
            level,
          )} ${text}${blockNum}\n\n`,
        );
      }
      return this.col.textCorrects(value, action, isSetAllText);
    }
  }

  getRegionNextLetter() {
    const chars = this.orders
      ?.map((ord) => Object.keys(ord.repeats || {}).map((key) => (key.match(/[a-z]/i) || [])[0]))
      .flat()
      .filter((s) => s)
      .map((letter) => letter?.charCodeAt(0));

    const next =
      chars &&
      '.'
        .repeat(26)
        .split('')
        .map((_, ci) => 97 + ci)
        .find((num) => chars.indexOf(num) < 0);

    return next && String.fromCharCode(next);
  }

  setTranslationPushKind(value: number) {
    this.exec({
      action: 'comSetTranslationPushKind',
      method: 'set',
      prev: this.translationPushKind,
      value,
      args: { value },
    });

    this.translationPushKind = value;
    this._translationMap = null;
    this.translationMap();
  }

  setAudio(val: string) {
    if (this.isCreated) {
      this.audio = val.trim();
      return false;
    }
    const prev = this.audio.trim();
    const value = val.trim().replace(/\n{2,}/, '\n');
    this.exec({
      action: 'comSetAudio',
      method: 'set',
      prev,
      value,
      args: {
        prev,
        value,
        comw: this.wid,
        name: this.name,
      },
    });
  }
}
