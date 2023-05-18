import { Cols } from "../../cols/Cols";
import { IExportableCols } from "../../cols/Cols.model";
import { EditableCat } from "./categories/EditableCat";
import { EditableCom } from "./compositions/EditableCom";

export class EditableCols extends Cols {
    cats: EditableCat[];
    coms: EditableCom[];

    constructor(cols: IExportableCols) {
        super(cols);
        this.coms = [...cols.coms]
            .sort((a, b) => a.w - b.w)
            .map((com, comi) => new EditableCom(com, comi));

        this.cats = cols.cats.map(cat => new EditableCat(cat, this.coms));
    }

    isComExists(com: EditableCom) {
        return this.coms.includes(com);
    }

    addCom(com: EditableCom) {
        if (this.isComExists(com)) return false;
        this.coms?.push(com);
        this.cats.forEach((cat) => cat.putComs());
        return true;
    }
}

