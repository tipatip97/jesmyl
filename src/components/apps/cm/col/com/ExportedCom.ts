import { EditableCol } from "../EditableCol";
import { IExportableCom } from "./Com.model";



export class ExportedCom extends EditableCol<IExportableCom> {
  get texts() { return this.forcedArray('t'); }
  set texts(val) { this.setExportable('t', val); }

  get audio() { return this.getOrBase('a', ''); }

  get refs() { return this.getOrBase('r', {}); }
  set refs(val) { this.setExportable('r', val); }
}
