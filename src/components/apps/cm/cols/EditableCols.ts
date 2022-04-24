import { EditableCat } from "../col/cat/EditableCat";
import { Com } from "../col/com/Com";
import { EditableCom } from "../col/com/EditableCom";
import { Cols } from "./Cols";


export class EditableCols extends Cols {
    cats: EditableCat[];
    coms: EditableCom[];

    constructor(cols: Cols, prevComs?: Com[]) {
        super(cols.top, prevComs);
        const coms = cols.coms;
        this.cats = cols.cats.map(cat => new EditableCat(cat.top, coms));
        this.coms = cols.coms.map((com) => new EditableCom(com));
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

