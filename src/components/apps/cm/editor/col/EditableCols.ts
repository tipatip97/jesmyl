import { EditableCat } from "./categories/EditableCat";
import { EditableCom } from "./compositions/EditableCom";
import { Cols, widLimit } from "../../cols/Cols";
import { IExportableCols } from "../../cols/Cols.model";


export class EditableCols extends Cols {
    cats: EditableCat[];
    coms: EditableCom[];

    constructor(cols: IExportableCols) {
        super(cols);
        const coms = cols.coms;
        this.coms = coms.sort((a, b) => a.w > widLimit ? b.w > widLimit ? a.w - b.w : -1 : 1).map((com, comi) => new EditableCom(com, comi));
        this.cats = cols.cats.map(cat => new EditableCat(cat, this.coms));
    }

    addCat() {
        // const cat = new Cat({ w: Date.now() }, this.coms ?? []);
        // this.cats?.push(cat);
        // return cat;
    }

    addCom(com: EditableCom) {
        this.coms?.push(com);
        this.cats.forEach((cat) => cat.putComs());
    }
}

