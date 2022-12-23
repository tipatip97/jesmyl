import { FreeExecDict, FreeExecDictUniq } from "../../../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../../../complect/my-lib/MyLib";
import { cmExer } from "../../../../../Cm.store";
import { Order } from "../../../../../col/com/order/Order";
import { EditableOrderRegion, IExportableOrder, IExportableOrderFieldValues, IExportableOrderTop, OrderRepeats } from "../../../../../col/com/order/Order.model";
import { EditableCom } from "../../EditableCom";

export class EditableOrder extends Order {
    _regions?: EditableOrderRegion<EditableOrder>[];
    com: EditableCom;

    constructor(top: IExportableOrderTop, com: EditableCom) {
        super(top, com);
        this.com = com;
    }

    get antiIsVisible() { return this.isVisible ? 0 : 1; }

    regionsOrders() {
        return this.com.orders;
    }

    get regions(): EditableOrderRegion<EditableOrder>[] | und {
        if (this._regions === undefined) this.setRegions();

        return this._regions;
    }

    setField<K extends keyof IExportableOrder>(fieldn: keyof IExportableOrder, value: IExportableOrder[K], args?: Record<string, any>, onFinish?: () => void, refresh = true, onSet?: () => void | null) {
        const setExec = (action: string, additionalArgs: {}, onSet?: () => void) => {
            this.exec({
                prev: ({
                    s: this.type,
                    c: this.chordsi,
                    t: this.texti,
                    o: this.isOpened,
                    r: this.repeats,
                    v: this.isVisible ? 1 : 0,
                    e: this.isEmptyHeader
                } as never)[fieldn],
                value,
                uniq: this.top.viewIndex,
                method: 'set',
                action,
                onSet,
                args: mylib.overlap({ fieldn }, args, additionalArgs)
            });
        };

        if (this.top.isAnchorInherit) {
            const wid = this.top.leadOrd?.wid;
            
            setExec('setAnchorInheritValue', { inhIndex: this.top.anchorInheritIndex, wid, value }, onSet);
        } else {
            const action = ({
                s: 'comSetOrderType',
                c: 'comSetOrderStringBlock',
                t: 'comSetOrderStringBlock',
                o: 'comSetOrderOpenedBlock',
                r: 'comSetOrderRepeatBlock',
                v: 'comSetOrderVisibleSign',
                e: 'comSetOrderEmptiedVal',
            } as Record<keyof Partial<IExportableOrder>, string>)[fieldn];

            setExec(action, { value }, onSet);
        }


        if (this.top.source) {
            if (this.top.isAnchorInherit) {
                const src = this.top.leadOrd?.top.source;
                if (src && !src.inh) src.inh = {} as never;
                const inh = src?.inh;

                if (inh && this.top.anchorInheritIndex != null) {
                    if (!inh[fieldn]) inh[fieldn] = {};
                    inh[fieldn][this.top.anchorInheritIndex] = value as never;
                }
            } else this.top.source[fieldn] = value as never;
            this.setExportable(fieldn, value);
        }

        if (refresh) {
            this.com.afterOrderChange();
            onFinish?.();
        }
    }

    setRepeats(_val?: OrderRepeats | null) { }

    get fieldValues() { return this.getBasicOr('f', {}); }
    set fieldValues(val) { this.setExportable('f', val); }

    setFieldValue<Key extends keyof IExportableOrderFieldValues>(fieldn: Key, value: IExportableOrderFieldValues[Key]) {
        this.exec({
            prev: this.fieldValues[fieldn],
            value,
            method: 'set',
            action: 'comSetOrderFieldValue',
            args: {
                value,
                fieldn,
            },
        });

        this.fieldValues[fieldn] = value;
    }

    scope(action: string, uniq?: FreeExecDictUniq, wid?: number | null) {
        return [this.com.scope(), '->', mylib.def(wid, this.wid), '.', mylib.typ('[action]', action), ':', ([] as (string | number)[]).concat(mylib.def(uniq, '[uniq]') || []).join(',')].join('');
    }

    isWithHead() {
        return !this.top.isInherit &&
            !this.top.isAnchorInheritPlus &&
            !this.isEmptyHeader;
    }

    exec<Value>(bag: FreeExecDict<Value>) {
        const { scope, args: { wid } = {} } = bag;

        cmExer.set({
            ...bag,
            scope: this.scope(bag.action, bag.uniq, wid),
            args: {
                ordw: mylib.def(wid, this.wid),
                comw: this.com.wid,
                name: this.com.name,
                blockn: this.top.header({}, true),
                isAnchor: this.isAnchor,
                ...bag.args
            },
            generalId: this.com.wid,
            ...(scope ? { scope } : null)
        });
    }

    isInheritValue<Key extends keyof IExportableOrder>(key: Key) {
        return this.top.isAnchorInherit
            ? this.top.anchorInheritIndex != null
            && this.top.leadOrd?.top.source?.inh?.[key][this.top.anchorInheritIndex] == null
            : this.top.isAnchor && this.top.source?.[key] == null
    }

    get texti() { return this.getBasic('t'); }
    set texti(val) { this.setExportable('t', val); }

    get text() {
        return (this.texti != null && this.com.texts && this.com.texts[this.texti]) || '';
    }

    get unique() { return this.top.source?.u ?? this.top.u; }
    set unique(val) { this.top.source && (this.top.source.u = val); }

    async setChordPosition(linei: number, pos: number) {
        const prev = mylib.clone(this.positions?.[linei] || []).sort((a: number, b: number) => a - b);
        const line = this.positions?.[linei] || [];
        const posi = line.indexOf(pos);
        const textLines = (this.text || '').split('\n');
        const textLine = textLines[linei];
        const lineSplitted = textLine.split('');
        const vowels = this.com.getVowelPositions(textLine);

        posi < 0
            ? line.push(pos)
            : line.splice(posi, 1);

        const positions = line.sort((a, b) => a - b);
        if (this.positions) this.positions[linei] = positions;

        positions.forEach(pos => {
            const vowel = lineSplitted[vowels[pos]];

            if (vowel && vowel.length === 1)
                lineSplitted[vowels[pos]] = `[${vowel}]`;
        });

        this.exec({
            uniq: linei,
            prev,
            value: line,
            method: 'set',
            action: 'comSetOrderChordPositionLine',
            args: {
                linei,
                value: line,
                ordw: this.getTargetFirst('w'),
            },
            onSet: exec => {
                const lineSplitted = textLine.split('');
                const prev = exec.args?.prev || [];

                prev
                    .concat(positions)
                    .forEach((pos: number) => {
                        const vowel = lineSplitted[vowels[pos]];
                        if (!vowel || vowel.length !== 1) return;

                        const inPos = positions.indexOf(pos) > -1;
                        const inPrev = prev.indexOf(pos) > -1;
                        const [lbr, rbr] = inPos && inPrev
                            ? ['[', ']']
                            : !inPrev && inPos
                                ? ['{', '}']
                                : ['<', '>'];

                        lineSplitted[vowels[pos]] = lbr + vowel + rbr;
                    });

                const preInPos = line.indexOf(-1) > -1;
                const preInPrev = prev.indexOf(-1) > -1;
                const postInPos = line.indexOf(-2) > -1;
                const postInPrev = prev.indexOf(-2) > -1;
                const preLabel = preInPos && preInPrev ? ['●'] : preInPos && !preInPrev ? ['★'] : !preInPos && preInPrev ? ['☆'] : [];
                const postLabel = postInPos && postInPrev ? ['●'] : postInPos && !postInPrev ? ['★'] : !postInPos && postInPrev ? ['☆'] : [];

                if (exec.args)
                    exec.args.lineTitle = preLabel
                        .concat(lineSplitted)
                        .concat(postLabel)
                        .join('');
            }
        });
    }

    cutChordPositions(line: string, linei: number) {
        const letters = this.com.getVowelPositions(line);

        this.positions?.[linei]?.reduceRight((stub, pos) => {
            if (pos > letters.length - 1) {
                this.setChordPosition(linei, pos);
            }
            return stub;
        }, 0);
    }


    removeInheritance<Key extends keyof IExportableOrder>(key: Key) {
        this.setField(key, null);
    }

    takeUniq() {
        if (this.unique != null) return this.unique;
        const value = this.com.ords.reduce((max: number, ord: IExportableOrder) => ord.u != null && ord.u > max ? ord.u : max, -1) - -1;

        this.exec({
            method: 'set',
            action: 'addOrderUnitUniq',
            value,
            args: {
                value
            }
        });

        this.unique = value;

        return value;
    }
}