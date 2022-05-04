import { FreeExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { setts } from "../../../base/settings/Setts";
import { Cat } from "../../../col/cat/Cat";
import { Com } from "../../../col/com/Com";
import { IExportableCom } from "../../../col/com/Com.model";
import { INewExportableOrder } from "../../../col/com/order/Order.model";
import { CorrectsBox } from "../../corrects-box/CorrectsBox";
import { textedChord } from "../../Editor.complect";
import { EditableCol } from "../EditableCol";


export class EditableCom extends EditableCol<IExportableCom> {
    native: Com;
    corrects: Record<string, CorrectsBox | nil> = {};
    index: number;
    initialName: string;
    refs?: Record<string, number>;
    texts?: string[];
    chords?: string[];

    constructor(com: Com) {
        super(com.top);
        this.native = com;
        this.index = com.index;
        this.initialName = com.name;
        this.refs = mylib.clone(com.refs);

        this.setReals(com, ['texts', 'chords']);
    }

    exec<Value>(bag: FreeExecDict<Value>) {
        this.execCol(bag, 'com');
    }

    rename(name: string, exec?: <Val>(val?: Val) => Val | nil) {
        this.renameCol(name, 'com', (correct: string) => {
            this.rename(correct, exec);
            exec?.();
        });
    }

    remove(isRemoved = true) {
        this.removeCol('com', isRemoved);
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
            prev: this.native.refs?.[cat.wid],
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

    parseBlocks(blocks: string[]) {
        type Thromb = { arr: number[], s?: string; str?: string; len?: number; c?: number; };
        const chords: string[] = [];
        const orders: INewExportableOrder[] = [];
        const trombs: Thromb[] = [];
        const texts: string[] = [];
        const cclen = this.chords?.length || 0;
        const ctlen = this.texts?.length || 0;
        let isMoved = true;

        if (!setts) return;

        const [firstLeveled, firstAltLeveled] = setts.styles.filter(style => style.level === 1).map(style => style.name);
        const [secondLeveled] = setts.styles.filter(style => style.level === 2).map(style => style.name);
        const [thirdLeveled] = setts.styles.filter(style => style.level === 3).map(style => style.name);
        const [inherited] = setts.styles.filter(style => style.isInherit).map(style => style.name);

        blocks.forEach((block, blocki) => {
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
                    const taggedStyle = stexts ? null : setts?.styles.find(style => (style.tags || []).some(tag => lowerTrimmedLine.replace(/[^а-я]/g, '') === tag.toLowerCase().trim()));

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

        this.add('c', chords);
        this.add('t', texts);
        this.addOrders(orders);
    }
    
    afterOrderChange() {
        this.native.setOrders();
        this.native.resetChordLabels();
    }

    addOrders(orderDicts: INewExportableOrder[] = []) {
        orderDicts.forEach(dict => this.addOrder(dict, false));
        this.afterOrderChange();
    }

    add(fieldn: 't' | 'c', value: string | string[]) {

        if (fieldn === 'c' || fieldn === 't') {
            const emptyIndex = (mylib.findLastIndex(fieldn === 't' ? this.texts : this.chords, ch => ch) || 0) - -1;

            [value].flat().forEach((block, blocki) => {
                this.changeBlock(fieldn, emptyIndex + blocki, block);
            });
        }

        if (fieldn === 'c') this.native.resetChordLabels();

        return this;
    }

    addOrder({ t, s, c }: INewExportableOrder, refresh = true) {
        const w = this.getNextOrdWid();

        this.exec({
            action: 'comAddOrderBlock',
            args: {
                wid: w,
                texti: t,
                type: s,
                chordsi: c,
            }
        });
        this.native.ords.push({ w, t, s, p: [], c, header: () => '', originWid: w });
        if (refresh) this.afterOrderChange();
    }

    getNextOrdWid() {
        return this.native.ords.reduce((w, ord) => (ord.w == null || ord.w < w) ? w : ord.w, -1) - -1;
    }

    changeBlock(coln: 't' | 'c', coli: number, val: string) {
        const value = coln === 't' ? val : this.native.transBlock(val, 12 - (this.native.transPosition || 0));
        if (value == null) return;

        this.exec({
            uniq: [coln, coli],
            prev: coln === 't' ? this.texts?.[coli] : this.chords?.[coli],
            value,
            method: 'set',
            action: 'changeBlocks',
            corrects: this.blockCorrects(value, coln),
            args: {
                text: value,
                coln,
                index: coli
            }
        });


        if (coln === 't' && this.texts) this.texts[coli] = value;
        else if (this.chords) this.chords[coli] = value

        if (coln === 'c') this.native.resetChordLabels();
    }

    prepareCorrectTextLine(line: string) {
        return line
            .replace(/(\s*)[«„]\s*/g, (_: string, pre: string) => `${pre ? ' ' : ''}"`)
            .replace(/\s*[»“](\s*)/g, (_: string, post: string) => `"${post ? ' ' : ''}`)
            .replace(/(\s*)[—–](\s*)/g, (_: string, pre: string, post: string) => `${pre && post ? ' ' : ''}-${pre && post ? ' ' : ''}`)
            .replace(/\s*([,.;!?:])\s*([^"])/g, '$1 $2');
    }

    correctRename(name: string) {
        return mylib.isStr(name) ? this.rename(name.replace(this.getIncorrectNameReg(), '')) : name;
    }

    removeNativeNumber(cat: Cat, exec?: <Val>(v?: Val) => Val | nil) {
        delete this.corrects[`setNativeNum:${cat.wid}`];

        let refs = this.refs;
        if (refs == null || mylib.isArr(refs)) {
            refs = this.refs = {};
        }
        const prev = this.native.refs?.[cat.wid];
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
                        !Object.keys(this.native.refs || {}).length
                    )
                        return () => {
                            if (this.native.refs == null) delete this.refs;
                            return false;
                        }
                },
            ],
        });
        exec?.();
    }

    blockCorrects(value: string | und, coln: 'c' | 't', blocki?: number, action?: string) {
        const blockNum = blocki == null ? '' : `. (${blocki - -1}-й блок)`;
        const ret = (err: string | null) => new CorrectsBox(err ? [{ message: err, code: 0 }] : null);

        if (coln === 'c') {
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

            const { level } = this.native.bracketsTransformed(value);
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
            return this.textCorrects(value, action);
        }
    }
}
