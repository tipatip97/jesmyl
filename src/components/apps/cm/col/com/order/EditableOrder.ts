import { ExecArgs, ExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { EditableCom } from "../EditableCom";
import { Order } from "./Order";
import { IExportableOrder, IExportableOrderFieldValues, IExportableOrderTop, OrderRepeats } from "./Order.model";

export class EditableOrder extends Order {
    self: Order;
    com: EditableCom;

    constructor(top: IExportableOrderTop, com: EditableCom) {
        super(top, com);
        this.self = this as never;
        this.com = com;
    }

    setField<Def, K extends keyof IExportableOrder>(fieldn: keyof IExportableOrder, value: IExportableOrder[K], args: ExecArgs<Def>, refresh = true, onSet?: () => void | null) {
        const setExec = (action: string, additionalArgs: {}, onSet?: () => void) => {
            this.exec({
                prev: this.top.inhFields && this.top.inhFields.indexOf(fieldn) < 0
                    ? this.top.source
                        ? this.top.source[fieldn] != null ? this.top.source[fieldn] : args.def
                        : null
                    : null,
                value,
                uniq: this.top.viewIndex,
                method: 'set',
                action,
                onSet,
                args: mylib.overlap({ fieldn }, args, additionalArgs)
            });
        };

        if (this.top.isAnchorInherit) {
            const action = this.top.leadOrd?.top.source?.inh == null
                ? 'setAnchorInheritValueWithoutInh'
                : this.top.leadOrd.top.source.inh[fieldn] == null
                    ? 'setAnchorInheritValueWithoutBox'
                    : null;

            const wid = this.top.leadOrd?.wid;

            action && setExec(action, { wid, isAnchor: this.top.leadOrd?.isAnchor });
            setExec('setAnchorInheritValue', { inhIndex: this.top.anchorInheritIndex, wid, value }, onSet);
        } else {
            const action = ({
                m: 'setComOrderMinimal',
                s: 'setComOrderType',
                c: 'setComOrderStringBlock',
                t: 'setComOrderStringBlock',
                o: 'setComOrderOpenedBlock',
                r: 'setComOrderRepeatBlock',
                v: 'setComOrderVisibleSign',
                e: 'setComOrderEmptiedVal',
            } as Record<keyof Partial<IExportableOrder>, string>)[fieldn];

            setExec(action, { value }, onSet);
        }


        if (fieldn === 'r') this.setRepeats(value as IExportableOrder['r']);
        else if (this.top.source) this.top.source[fieldn] = value as never;

        if (refresh) {
            // this.top.com.afterOrderChange();
            // g.ss();
        }
    }

    setRepeats(val: OrderRepeats | null) { }
    get fieldValues() { return this.getOrBase('f', {}); }
    set fieldValues(val) { this.setExportable('f', val); }
    get positions() { return []; }
    set positions(val: number[][]) { }

    setFieldValue<Key extends keyof IExportableOrderFieldValues>(fieldn: Key, value: IExportableOrderFieldValues[Key]) {
        const action = 'setComOrderFieldValue';

        this.exec({
            prev: this.fieldValues[fieldn],
            value,
            method: 'set',
            action,
            createByPath: true,
            args: {
                value,
                fieldn,
            }
        });

        this.fieldValues[fieldn] = value;
    }

    // delChordsi() {
    //     delete this.c;
    // }

    // get wid() { return this.top.source?.w || this.top.w; }
    // set wid(val: number) { this.top.source && (this.top.source.w = val); }

    // get isAnchor() { return this.getOrBase('a') != null; }

    // get texti() { return -1; }
    // set texti(val: number) { }

    scope(action: string, uniq?: number | string, wid?: number | null) {
        return [this.com.do.scope(), '->', mylib.def(wid, this.self.wid), '.', mylib.typ('[action]', action), ':', ([] as (string | number)[]).concat(mylib.def(uniq, '[uniq]') || []).join(',')].join('');
    }

    exec<Value>(bag: ExecDict<Value>) {
        const { scope, args: { wid } = {} } = bag;

        // cmExer.set({
        //     ...bag,
        //     scope: this.scope(bag.action, bag.uniq, wid),
        //     args: {
        //         wid: mylib.def(wid, this.self.wid),
        //         comw: this.top.com.wid,
        //         name: this.top.com.name,
        //         blockn: this.top.header({}, true),
        //         isAnchor: this.self.isAnchor,
        //         ...bag.args
        //     },
        //     generalId: this.top.com.wid,
        //     ...(scope ? { scope } : null)
        // });
    }

    async setChordPosition(linei: number, pos: number) {
        const prev = JSON.parse(JSON.stringify(this.positions[linei] || [])).sort((a: number, b: number) => a - b);
        const line = this.positions[linei] || [];
        const posi = line.indexOf(pos);
        const textLines = (this.self.text || '').split('\n');
        const textLine = textLines[linei];
        const lineSplitted = textLine.split('');
        const vowels = this.com.getVowelPositions(textLine);

        posi < 0
            ? line.push(pos)
            : line.splice(posi, 1);

        const positions = this.positions[linei] = line.sort((a, b) => a - b);
        //this.top.source.positions[linei] = positions;

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
            action: 'setComOrderChordPositionLine',
            args: {
                linei,
                line,
                wid: this.self.getLeadFirst('w'),
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
                                : ['(', ')'];

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

    takeUniq() {
        if (this.self.unique != null) return this.self.unique;
        const value = this.com.ords.reduce((max: number, ord: IExportableOrder) => ord.u != null && ord.u > max ? ord.u : max, -1) - -1;

        this.exec({
            method: 'set',
            action: 'addOrderUnitUniq',
            value,
            args: {
                value
            }
        });

        this.self.unique = value;

        return value;
    }
}