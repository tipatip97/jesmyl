import { FreeExecDict } from "../../../../../../complect/exer/Exer.model";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { CorrectsBox } from "../../corrects-box/CorrectsBox";
import { EditableCol } from "../EditableCol";
import { Com } from "../../../col/com/Com";
import { IExportableCom } from "../../../col/com/Com.model";
import { Cat } from "../../../col/cat/Cat";


export class EditableCom extends EditableCol<IExportableCom> {
    native: Com;
    corrects: Record<string, CorrectsBox | nil> = {};
    index: number;
    initialName: string;
    refs?: Record<string, number>;

    constructor(com: Com, index: number) {
        super(com.top);
        this.native = new Com(com.top, index);
        this.index = com.index;
        this.initialName = com.name;
        this.refs = mylib.clone(com.refs);
    }

    exec<Value>(bag: FreeExecDict<Value>) {
        this.execCol(bag, 'com');
    }

    rename(name: string, exec: <Val>(val?: Val) => Val | nil) {
        this.renameCol(name, 'com', (correct: string) => exec(this.rename(correct, exec)));
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
        exec && exec();
    }
}
