import { FreeExecDict } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { EditableCol } from "../EditableCol";
import { Com } from "./Com";
import { IExportableCom } from "./Com.model";


export class EditableCom extends Com {
    do: EditableCol<IExportableCom>;

    constructor(com: Com) {
        super(com.top);
        this.do = new EditableCol(com.top);
        this.index = com.index;
    }

    exec<Value>(bag: FreeExecDict<Value>) {
        this.do.execCol(bag, 'com');
    }

    rename(name: string) {
        return this.do.renameCol(name, 'com');
    }

    remove(isRemoved = true) {
        this.do.removeCol('com', isRemoved);
    }

    setNativeNumber([catn, catw, number]: [string, number, number]) {
        let refs = this.refs;

        if (refs == null || mylib.isArr(refs)) {
            refs = this.refs = {};
        }
        const prevRefs = mylib.clone(this.refs);

        refs[catw] = number;
        this.refs = refs;

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
        let refs = this.refs;
        if (refs == null || mylib.isArr(refs)) {
            refs = this.refs = {};
        }
        const nNum = refs[catw];

        delete refs[catw];
        this.refs = refs;

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
