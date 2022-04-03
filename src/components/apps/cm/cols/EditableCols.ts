import { Base } from "../base/Base";
import { Cat } from "../col/cat/Cat";
import { Com } from "../col/com/Com";
import { IExportableCols } from "./Cols.model";


export class EditableCols extends Base<IExportableCols> {
    coms?: Com[];
    cats?: Cat[];

    addCat() {
        const w = Date.now();
        this.cats?.push(new Cat({ w }, this.coms ?? []));
        return w;
    }

    addCom() {
        const w = Date.now();
        this.coms?.push(new Com());
        return w;
    }
}

