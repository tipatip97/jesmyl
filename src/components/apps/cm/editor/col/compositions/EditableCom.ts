import { Exec } from "../../../../../../complect/exer/Exec";
import { FreeExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { blockStyles } from "../../../col/com/block-styles/BlockStyles";
import { cmExer } from "../../../Cm.store";
import { Cat } from "../../../col/cat/Cat";
import { Com } from "../../../col/com/Com";
import { IExportableCom } from "../../../col/com/Com.model";
import { IExportableOrderTop, INewExportableOrder } from "../../../col/com/order/Order.model";
import { CorrectsBox } from "../../corrects-box/CorrectsBox";
import { textedChord } from "../../Editor.complect";
import { EditableCol } from "../EditableCol";
import { EditableOrder } from "./complect/orders/EditableOrder";
import { EditableCols } from "../EditableCols";


export class EditableCom extends Com {
    corrects: Record<string, CorrectsBox | nil> = {};
    initialName: string;
    col: EditableCol<IExportableCom>;
    initial: Com;
    protected _o?: EditableOrder[];
    isCreated = false;

    constructor(top: IExportableCom, index: number, cols?: EditableCols) {
        super(top, index, cols);
        this.col = new EditableCol(top);
        this.initialName = this.name;
        this.initial = new Com(mylib.clone(top), index, cols);
    }

    get name() { return this.col?.getBasic('n') || ''; }
    set name(value) { this.col.setExportable('n', value); }

    scope(action?: string, uniq?: string | number) {
        return [this.wid, '.', mylib.typ('[action]', action), ':', [].concat(mylib.def(uniq, ['[uniq]'])).join(',')].join('');
    }

    get orders(): EditableOrder[] | null { return this._o || this.setOrders() as EditableOrder[]; }

    orderConstructor(top: IExportableOrderTop) {
        return new EditableOrder(top, this);
    }

    create<Value>(onLoad: (exec: Exec<Value>) => void) {
        if (this.isCreated) return false;
        this.exec({
            action: 'comAdd',
            args: {
                comw: this.wid,
            },
            onLoad
        });
        return this.isCreated = true;
    }

    exec<Value>(bag: FreeExecDict<Value>) {
        this.col.execCol(bag, 'com');
    }

    rename(name: string, exec?: <Val>(val?: Val) => Val | nil) {
        this.col.renameCol(name, 'com', (correct: string) => {
            this.rename(correct, exec);
            exec?.();
        });
    }

    setField<Fieldn extends keyof IExportableCom>(fieldn: Fieldn, value: IExportableCom[Fieldn], defVal?: IExportableCom[Fieldn]) {
        this.col.setFieldCol<keyof IExportableCom, 'com'>(fieldn, value, { b: 'comSetDefaultBemolType', a: '', c: '', k: '', l: '', n: '', o: '', p: '', r: '', t: '', ton: '', w: '', }, 'com', defVal);
        if (fieldn === 'b') this.isBemoled = value as num;
    }

    switchLang() {
        const value = this.langi ? 0 : 1;

        this.exec({
            action: 'comSetLangi',
            prev: this.langi,
            method: 'set',
            value,
            uniq: this.wid,
            args: {
                value
            },
        });

        this.langi = value;
    }

    remove(isRemoved = true) {
        this.col.removeCol('com', isRemoved);
    }

    setNativeNumber(cat: Cat, numberStr: string) {
        const number = parseInt(numberStr);

        const corrects =
            this.corrects[`setNativeNum:${cat.wid}`] =
            new CorrectsBox(numberStr.match(/^0|\D|^$/) ? [{
                message: 'Некорректное значение номера'
            }] : null);

        let refs = this.refs;

        if (refs == null) {
            refs = this.refs = {};
            this.exec({
                action: 'setNativeNumBox',
                method: 'add',
            });
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
                    return () => false;
            },
            args: {
                catn: cat.name,
                number,
                catw: cat.wid,
            },
            corrects
        });

        return numberStr;
    }

    async parseBlocksFromClipboard(clipboardEvent: React.ClipboardEvent<HTMLTextAreaElement>, cb?: (blocks: string[]) => boolean) {
        const blocks: string[] = (clipboardEvent.clipboardData?.getData('text') || await navigator.clipboard.readText())
            .trim()
            .split(/\n\s*\n/);

        if ((cb && cb(blocks)) !== false) this.parseBlocks(blocks);
    }

    parseBlocks(blocks: string[] | string) {
        type Thromb = { arr: number[], s?: string; str?: string; len?: number; c?: number; };
        const chords: string[] = [];
        const orders: INewExportableOrder[] = [];
        const trombs: Thromb[] = [];
        const texts: string[] = [];
        const cclen = this.chords?.length || 0;
        const ctlen = this.texts?.length || 0;
        let isMoved = true;

        if (!blockStyles) return;

        const [firstLeveled, firstAltLeveled] = blockStyles.styles.filter(style => style.level === 1).map(style => style.name);
        const [secondLeveled] = blockStyles.styles.filter(style => style.level === 2).map(style => style.name);
        const [thirdLeveled] = blockStyles.styles.filter(style => style.level === 3).map(style => style.name);
        const [inherited] = blockStyles.styles.filter(style => style.isInherit).map(style => style.name);

        (typeof blocks === 'string' ? blocks.split('\n\n') : blocks).forEach((block) => {
            const ctromb: Thromb = { arr: [] };
            trombs.push(ctromb);

            let schords = '';
            let stexts = '';

            block.split(/\n/).forEach((line) => {
                const trimmedLine = line.trim().replace(/\s+/g, ' ');

                if (trimmedLine.match(/^([A-H][^A-H]*)+$/)) {
                    schords += (schords ? '\n' : '') + trimmedLine;
                } else {
                    const lowerTrimmedLine = trimmedLine.toLowerCase();
                    const taggedStyle = stexts ? null : blockStyles?.styles.find(style => (style.tags || []).some(tag => lowerTrimmedLine.replace(/[^а-я]/g, '') === tag.toLowerCase().trim()));

                    if (taggedStyle) ctromb.s = taggedStyle.name;
                    else {
                        !this.name && this.correctRename(trimmedLine);
                        stexts += (stexts ? '\n' : '') + this.prepareCorrectTextLine(trimmedLine);
                        const letters = trimmedLine.match(/[аеёиоуэыяюaeouiіїє]/gi);
                        ctromb.arr.push(letters ? letters.length : 0);
                    }
                }
            });

            ctromb.str = JSON.stringify(ctromb.arr);
            ctromb.len = ctromb.arr.length;

            if (schords) {
                const index = chords.findIndex(c => c === schords);
                ctromb.c = index < 0 ? chords.length : index;
                if (index < 0) chords.push(schords);
            }
            if (stexts) texts.push(stexts);
        });
        let prevS: string | und;

        const isSingleBlockStyle = (name => {
            trombs.some((tromb): boolean => {
                const styleName = (tromb.s || '').trim();
                if (!styleName) return false;

                if (!name) {
                    name = styleName;
                    return false;
                }

                if (name !== styleName) {
                    name = '';
                    return true;
                }
                return false;
            });
            return name;
        })('');

        texts.forEach((_, texti) => {
            const ctromb = trombs[texti];
            let t = ctlen + texti, c, s = ctromb.s;

            if (chords.length) {
                if (ctromb.c != null) {
                    c = ctromb.c;
                } else if (chords.length === 1) {
                    c = cclen;
                } else if (chords.length === texts.length) {
                    c = cclen + texti;
                } else {
                    const sibling = trombs.find(tromb => tromb !== ctromb && tromb.s && ctromb.s && tromb.s.trim() === ctromb.s.trim());
                    c = sibling ? sibling.c : 0;
                }
            }
            if (isSingleBlockStyle && chords.length === 1) {
                s = s || (!(t % 2) ? firstLeveled : firstAltLeveled);
            } else if (chords.length === texts.length) {
                s = s || (c === 0 ? firstLeveled : c === 1 ? secondLeveled : thirdLeveled);
            } else {
                if (c === 0) isMoved = !isMoved;
                else isMoved = true;

                s = s || (c === 0 ? isMoved ? firstAltLeveled : firstLeveled : c === 1 ? secondLeveled : thirdLeveled);
            }
            if (!ctromb.s) {
                const prev = s;
                if (prevS === s) s = inherited;
                prevS = prev;
            }

            orders.push({ t, c, s, p: [] });
        });

        this.add('chords', chords);
        this.add('texts', texts);
        this.addOrders(orders);
    }

    takeName(text: string) {
        return text.split('\n').filter((line) => /^[^a-zA-Z\d#]+$/.exec(line))[0] || '';
    }

    afterOrderChange() {
        this.setOrders();
        this.resetChordLabels();
    }

    addOrders(orderDicts: INewExportableOrder[] = []) {
        orderDicts.forEach(dict => this.addOrder(dict, false));
        this.afterOrderChange();
    }

    add(fieldn: 'texts' | 'chords', value: string | string[]) {

        const emptyIndex = (mylib.findLastIndex(fieldn === 'texts' ? this.texts : this.chords, ch => ch) || 0) - -1;

        [value].flat().forEach((block, blocki) => {
            this.changeBlock(fieldn, emptyIndex + blocki, block);
        });

        if (fieldn === 'chords') this.resetChordLabels();

        return this;
    }

    addOrder({ t, s, c }: INewExportableOrder, refresh = true) {
        const w = this.getNextOrdWid();

        this.exec({
            action: 'comAddOrderBlock',
            args: {
                ordw: w,
                texti: t,
                type: s,
                chordsi: c,
            },
        });
        this.ords.push({ w, t, s, p: [], c, header: () => '', originWid: w });
        if (refresh) this.afterOrderChange();
    }

    isOrdWithHead(ord: EditableOrder) {
        return !ord.top.isInherit &&
            !ord.top.isPrevAnchorInheritPlus &&
            !ord.isEmptyHeader;
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
                return containers.some(contOrd => {
                    const isAnch = ord.isAnchor && contOrd.top.u === ord.top.a;
                    if (isAnch) indexes.push({ ordi, ord });
                    return isAnch;
                });
            });
        }

        return { containers, anchors, indexes: indexes.sort((a, b) => b.ordi - a.ordi) };
    }

    removeBlock(coln: 'texts' | 'chords', coli: number) {
        const { indexes } = this.getOrdersOnBlockDeletion(coln, coli);

        if (coln === 'texts' && indexes) {

            indexes.forEach(({ ord }) => {
                this.removeOrderBlock(ord);
            });
        }

        this.updateOrderSticks(coln, coli, -1, coln === 'chords');

        this.exec({
            action: 'removeBlock',
            args: {
                coli,
                coln: coln === 'texts' ? 't' : 'c',
            }
        });
        this[coln]?.splice(coli, 1);

        if (coln === 'chords') this.resetChordLabels();
    }

    isImpossibleToMigrateOrder(ord: EditableOrder, ordi: number, ords: EditableOrder[]) {
        let isSelfOrd = false;

        return ord.top.isAnchorInherit || ordi === ords.length - 1 || !ords.some((currOrd) => {
            if (currOrd === ord) {
                isSelfOrd = true;
                return false;
            }
            if (!isSelfOrd) return false;
            return !currOrd.top.isAnchorInherit;
        });
    }

    isCantMigrateOrder(ord: EditableOrder, ordi: number) {
        return ((!ordi && ord.top.isNextInherit) || ord.top.isNextAnchorOrd || (ord.top.isNextAnchorOrd && !ordi))
            || (index => !(index < 0 || index === cmExer.execs.length - 1))
                (cmExer.execs.findIndex(exec => exec.action === 'comMigrateOrders' && exec.args?.comw === this.wid));
    }

    migrateOrder(topOrd: EditableOrder) {
        if (!this.orders) return;
        const { top: { source: { w: to = null } = {} } = {} } = topOrd.top.next || topOrd.top.prev || {};

        if (to == null) {
            mylib.dconsl('migrate error', topOrd).config({ type: 0 });
            return;
        }

        const prev: Record<number, number> = {};
        const value: Record<number, number> = {};
        const from = topOrd.top.w;
        const min = Math.min(from, to);
        const max = Math.max(from, to);

        this.ords.forEach(ord => {
            if (ord.w > min && ord.w <= max) {
                prev[ord.w] = ord.w - 1;
                prev[ord.w - 1] = ord.w;
            }
        });

        this.orders.forEach(ord => {
            if (ord.top.source && prev[ord.wid] != null && !ord.top.isAnchorInherit)
                ord.top.source.w = prev[ord.wid];
        });

        this.orders.forEach(ord => {
            if (ord.top.source && ord.top.source.w !== ord.top.source.originWid)
                value[ord.top.source.originWid] = ord.top.source.w;
        });

        this.exec({
            value,
            method: 'migrate',
            action: 'comMigrateOrders',
            args: {
                value
            },
        });

        this.afterOrderChange();
    }

    removeOrderBlock({ wid, isAnchor, top }: EditableOrder) {
        this.exec({
            action: 'removeOrderBlock',
            uniq: wid,
            args: {
                wid,
                isAnchor: +isAnchor,
                blockn: top.header()
            },
            anti: ({ action, args, args: { comw } = {} }) => {
                if (action === "comAddOrderBlock" && comw === this.wid && wid === args?.wid)
                    return () => false;
            },
        });
        const index = this.ords.findIndex(o => o.w === wid);

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
            args: {
                ordw: wid,
                anchor,
                blockn: ord.top.header(),
            }
        });

        this.ords.push({ a: anchor, w: wid, originWid: wid, header: () => '' });
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
        return this.ords.reduce((w, ord) => (ord.w == null || ord.w < w) ? w : ord.w, -1) - -1;
    }

    changeBlock(coln: 'texts' | 'chords', coli: number, val: string) {
        const value = coln === 'texts' ? val : this.transBlock(val, 12 - (this.transPosition || 0));
        if (value == null) return;
        const corrects = this.blockCorrects(value, coln);

        this.exec({
            uniq: [coln, coli],
            prev: coln === 'texts' ? this.texts?.[coli] : this.chords?.[coli],
            value,
            method: 'set',
            action: 'changeBlocks',
            corrects,
            args: {
                text: value,
                coln: coln === 'texts' ? 't' : 'c',
                index: coli
            }
        });

        this.corrects[`changeBlocks_${coln}_${coli}`] = corrects;

        if (coln === 'texts' && this.texts) this.texts[coli] = value;
        else if (this.chords) this.chords[coli] = value

        if (coln === 'chords') this.resetChordLabels();
    }

    insertBlocks(coln: 'texts' | 'chords', coli: number, value = '', prev = '...') {
        if (coli === (this[coln]?.length || 0) - 1) {
            this.add(coln, '');
        } else {
            this[coln]
                ?.concat(value)
                .forEach((ccol, ccoli, ccola) => {
                    if (ccoli <= coli) return;
                    const val = ccoli - 1 === coli
                        ? value
                        : ccoli === coli
                            ? prev
                            : '' + ccola[ccoli - 1];

                    this.changeBlock(coln, ccoli, val);
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
                const value = isReset && ord[ccoln] === coli
                    ? -1
                    : colIndex - -delta;

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
                        ordw: ord.w
                    }
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
            .replace(/(\s*)[—–](\s*)/g, (_: string, pre: string, post: string) => `${pre && post ? ' ' : ''}-${pre && post ? ' ' : ''}`)
            .replace(/\s*([,.;!?:])\s*([^"])/g, '$1 $2');
    }

    correctRename(name: string) {
        return mylib.isStr(name) ? this.rename(this.correctName(name)) : name;
    }

    correctName(name: string) {
        return name.replace(this.col.getIncorrectNameReg(), '');
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
                catw: cat.wid,
            },
            anti: [
                ({ action, args }) => {
                    if (action === 'setNativeNum' && (args ? args.catw === cat.wid && args.comw === this.wid : false))
                        return () => null == prev;
                },
                ({ action, args }) => {
                    if (
                        action === 'setNativeNumBox' &&
                        args &&
                        args.comw === this.wid &&
                        !Object.keys(refs || {}).length &&
                        !Object.keys(this.initial.refs || {}).length
                    )
                        return () => {
                            if (this.initial.refs == null) delete this.refs;
                            return false;
                        }
                },
            ],
        });
        exec?.();
    }

    blockCorrects(value: string | und, coln: 'chords' | 'texts', blocki?: number, action?: string) {
        const blockNum = blocki == null ? '' : `. (${blocki - -1}-й блок)`;
        const ret = (err: string | null) => new CorrectsBox(err ? [{ message: err, code: 0 }] : null);

        if (coln === 'chords') {
            const errors: string[] = [];
            const text = (value || '')
                .trim()
                .split(/([\n\s ]+)/)
                .map((chord, chordi) => {
                    if (!(chordi % 2) && !textedChord.exec(chord)) {
                        errors.push(chord);
                        return `[${chord}]`;
                    }
                    return chord;
                })
                .join(' ');
            const few = errors.length > 1;

            return ret(errors.length ? `Аккорд${few ? 'ы' : ''} "${errors.join('; ')}" не верно написан${few ? 'ы' : ''}${blockNum}:\n\n${text}\n\n` : null);
        } else {
            let isThereErrors;
            let mistakes = '';
            const text = (value || '').replace(/[^-ієїа-яё().,":;!?\s']+/gi, all => {
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
                    `${pre}ихся кавычек`
                );
                return ret(`В тексте присутствует непарное количество ковычек.\nНеобходимо добавить ${Math.abs(level)} ${text}${blockNum}\n\n`);
            }
            return this.col.textCorrects(value, action);
        }
    }

    getRegionNextLetter() {
        const chars = this.orders?.map(ord => Object.keys(ord.repeats || {}).map(key => (key.match(/[a-z]/i) || [])[0]))
            .flat().filter(s => s)
            .map(letter => letter.charCodeAt(0));

        const next = chars && '.'.repeat(26).split('').map((c, ci) => 97 + ci).find(num => chars.indexOf(num) < 0);

        return next && String.fromCharCode(next);
    }

    setTranslationPushKind(value: number) {
        this.exec({
            action: 'comSetTranslationPushKind',
            method: 'set',
            prev: this.translationPushKind,
            value,
            args: {
                value
            }
        });

        this.translationPushKind = value;
        this._translationMap = null;
        this.translationMap();
    }
}
