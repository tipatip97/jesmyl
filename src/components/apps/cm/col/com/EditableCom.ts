import { ExecDict } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { ExportedCom } from "./ExportedCom";


export class EditableCom extends ExportedCom {
    exec<Value, Args>(bag: ExecDict<Value, Args>) {
        super.execCol(bag, 'com');
    }

    rename(name: string) {
        return this.renameCol(name, 'com');
    }

    remove(isRemoved = true) {
        this.removeCol('com', isRemoved);
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
