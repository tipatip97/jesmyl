import { ExecDict } from "../../../../../complect/exer/Exer.model";
import { ExportedCat } from "./ExportedCat";


export class EditableCat extends ExportedCat {
    
  exec<Value, Args>(bag: ExecDict<Value, Args>) {
    super.exec(bag, 'cat');
  }
}

