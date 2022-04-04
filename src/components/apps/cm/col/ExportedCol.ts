import { Base } from "../base/Base";
import { IExportedCol } from "./Col.model";



export class ExportedCol<Col extends IExportedCol> extends Base<Col> {
    n?: string;

    get wid() { return this.getOrBase('w', 0); }

    get name() { return this.getOrBase('n', ''); }
    set name(val) { this.setExportable('n', val); }
}
