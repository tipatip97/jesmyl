import { IExportableCols } from '../../../../../models';
import { Cols } from '../../cols/Cols';
import { EditableCat } from './categories/EditableCat';
import { EditableCom } from './compositions/EditableCom';

export class EditableCols extends Cols {
  cats: EditableCat[];
  coms: EditableCom[];

  constructor(cols: IExportableCols) {
    super(cols);
    this.coms = cols.coms.map((com, comi) => new EditableCom(com, comi)).sort((a, b) => a.wid - b.wid);

    this.cats = cols.cats.map(cat => new EditableCat(cat, this.coms));
  }

  isComExists(com: EditableCom) {
    return this.coms.includes(com);
  }

  addCom(com: EditableCom) {
    if (this.isComExists(com)) return false;
    this.coms?.push(com);
    this.cats.forEach(cat => cat.putComs());
    return true;
  }
}
