import { EditableCat } from "./categories/EditableCat";
import { EditableCom } from "./compositions/EditableCom";
import { Cols } from "../../cols/Cols";


export class EditableCols {
    cats: EditableCat[];
    coms: EditableCom[];

    constructor(cols: Cols) {
        const coms = cols.coms;
        this.cats = cols.cats.map(cat => new EditableCat(cat, coms));
        this.coms = cols.coms.map((com) => new EditableCom(com, com.index));
    }

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

