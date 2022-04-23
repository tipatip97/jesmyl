import { ExecDict } from "../../../../../complect/exer/Exer.model";
import { ExportedCat } from "./ExportedCat";


export class EditableCat extends ExportedCat {

  exec<Value>(bag: ExecDict<Value>) {
    super.execCol(bag, 'cat');
  }

  rename(name: string) {
    this.renameCol(name, 'cat');
  }
}

