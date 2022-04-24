import { FreeExecDict } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { CorrectsBox } from "../../editor/corrects-box/CorrectsBox";
import { EditableCol } from "../EditableCol";
import { Com } from "./Com";
import { IExportableCom } from "./Com.model";


export class EditableCom extends EditableCol<IExportableCom> {
    native: Com;
    corrects: Record<string, CorrectsBox | nil> = {};
    index: number;
    initialName: string;

    constructor(com: Com, index: number) {
        super(com.top);
        this.native = new Com(com.top, index);
        this.index = com.index;
        this.initialName = com.name;
    }

    exec<Value>(bag: FreeExecDict<Value>) {
        this.execCol(bag, 'com');
    }

    rename(name: string) {
        return this.renameCol(name, 'com');
    }

    remove(isRemoved = true) {
        this.removeCol('com', isRemoved);
    }

    setNativeNumber([catn, catw, number]: [string, number, number]) {
        let refs = this.native.refs;

        if (refs == null || mylib.isArr(refs)) {
            refs = this.native.refs = {};
        }
        const prevRefs = mylib.clone(this.native.refs);

        refs[catw] = number;
        this.native.refs = refs;

        this.exec({
            prev: prevRefs,
            value: refs,
            method: 'set',
            action: 'setNativeNum',
            args: {
                catn,
                number,
                refs
            }
        });
    }

    removeNativeNumber([catn, catw]: [string, number]) {
        let refs = this.native.refs;
        if (refs == null || mylib.isArr(refs)) {
            refs = this.native.refs = {};
        }
        const nNum = refs[catw];

        delete refs[catw];
        this.native.refs = refs;

        this.exec({
            action: 'removeNativeNum',
            args: {
                catn,
                catw,
                nNum
            }
        });

    }
}
