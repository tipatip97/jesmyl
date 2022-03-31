import { ExecArgs } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/MyLib";
import { Base } from "../../base/Base";
import { IExportableOrder, IExportableOrderTop } from "./Order.model";


export class EditableOrder extends Base<IExportableOrderTop> {

    setField<Def, Args, K extends keyof IExportableOrder>(fieldn: keyof IExportableOrder, value: IExportableOrder[K], args: ExecArgs<Def, Args>, refresh = true, onSet?: () => void | null) {
        const setExec = (action: string, onSet: () => void | null, additionalArgs: {}) => {
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

            action && setExec(action, null, { wid, isAnchor: this.top.leadOrd?.isAnchor });
            setExec('setAnchorInheritValue', onSet, { inhIndex: this.top.anchorInheritIndex, wid, value });
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

            setExec(action, onSet, { value });
        }


        if (fieldn === 'r') this.repeats = value;
        else this.top.source[fieldn] = value;

        if (refresh) {
            this.com.afterOrderChange();
            g.ss();
        }
    }

    setFieldValue(fieldn, value) {
        const action = 'setComOrderFieldValue';

        this.exec({
            prev: this.fieldValues[fieldn],
            value,
            method: 'set',
            action,
            createByPath: 1,
            args: {
                value,
                fieldn,
            }
        });

        this.fieldValues[fieldn] = value;
    }

    delChordsi() {
        delete this.c;
    }

    scope(action, uniq, wid) {
        return [this.top.com.scope(), '->', mylib.def(wid, this.wid), '.', mylib.typ('[action]', action), ':', [].concat(mylib.def(uniq, ['[uniq]'])).join(',')].join('');
    }

    exec(bag) {
        const { scope, args: { wid = null } = {} } = bag;

        mylib.setExecs(mylib.overlap({}, bag, {
            scope: this.scope(bag.action, bag.uniq, wid),
            args: mylib.overlap({
                wid: mylib.def(wid, this.wid),
                comw: this.top.com.wid,
                name: this.top.com.name,
                blockn: this.top.header({}, true),
                isAnchor: this.isAnchor
            }, bag.args),
            generalId: this.top.com.wid
        }, scope ? { scope } : null));
    }

    async setChordPosition(linei, pos) {
        const com = this.com;
        const prev = JSON.parse(JSON.stringify(this.positions[linei] || [])).sort((a, b) => a - b);
        const line = this.positions[linei] || [];
        const posi = line.indexOf(pos);
        const textLines = (com.texts[this.texti] || '').split('\n');
        const textLine = textLines[linei];
        const lineSplitted = textLine.split('');
        const vowels = com.getVowelPositions(textLine);

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
                wid: this.getLeadFirst('w'),
            },
            onSet: exec => {
                const lineSplitted = textLine.split('');

                exec.args.prev
                    .concat(positions)
                    .forEach(pos => {
                        const vowel = lineSplitted[vowels[pos]];
                        if (!vowel || vowel.length !== 1) return;

                        const inPos = positions.indexOf(pos) > -1;
                        const inPrev = exec.args.prev.indexOf(pos) > -1;
                        const [lbr, rbr] = inPos && inPrev
                            ? ['[', ']']
                            : !inPrev && inPos
                                ? ['{', '}']
                                : ['(', ')'];

                        lineSplitted[vowels[pos]] = lbr + vowel + rbr;
                    });

                const preInPos = line.indexOf(-1) > -1;
                const preInPrev = exec.args.prev.indexOf(-1) > -1;
                const postInPos = line.indexOf(-2) > -1;
                const postInPrev = exec.args.prev.indexOf(-2) > -1;
                const preLabel = preInPos && preInPrev ? ['●'] : preInPos && !preInPrev ? ['★'] : !preInPos && preInPrev ? ['☆'] : [];
                const postLabel = postInPos && postInPrev ? ['●'] : postInPos && !postInPrev ? ['★'] : !postInPos && postInPrev ? ['☆'] : [];

                exec.args.lineTitle = preLabel
                    .concat(lineSplitted)
                    .concat(postLabel)
                    .join('');
            }
        });
    }

    takeUniq() {
        if (this.unique != null) return this.unique;
        const value = this.top.com.ords.reduce((max, ord) => ord.u != null && ord.u > max ? ord.u : max, -1) - -1;

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