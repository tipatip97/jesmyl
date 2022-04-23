import { Base } from "../base/Base";
import { Cat } from "../col/cat/Cat";
import { Com } from "../col/com/Com";
import { IExportableCols } from "./Cols.model";


export class EditableCols extends Base<IExportableCols> {
    coms?: Com[];
    cats?: Cat[];

    addCat() {
        // const cat = new Cat({ w: Date.now() }, this.coms ?? []);
        // this.cats?.push(cat);
        // return cat;
    }

    addCom() {
        // const com = new Com({ w: Date.now() });
        // this.coms?.push(com);
        // return com;
    }
}

