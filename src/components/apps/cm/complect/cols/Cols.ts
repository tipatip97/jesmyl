import mylib from "../../../../../complect/refresh/MyLib";
import { cmStorage } from "../../../../../store/jstorages";
import { Cat } from "../../col/cat/Cat";
import { Com } from "../../col/com/Com";
import { ICols, IExportableCols } from "./Cols.model";
import { EditableCols } from "./EditableCols";

export class Cols extends EditableCols implements ICols {
  coms: Com[];
  cats: Cat[];

  constructor(cols: IExportableCols, prevComs?: Com[]) {
    super(cols);

    if (prevComs) {
      this.coms = mylib.typ([], cols.coms)
        .map(com => {
          let obj = com;

          const comw = com.w;
          let prevCom;
          prevCom = prevComs.find(c => c.wid === comw);
          if (prevCom && prevCom.ton != null) {
            obj = mylib.overlap({}, com, {
              ton: prevCom.ton,
              tonc: prevCom.tonc,
            });
          }

          const comc = new Com(obj);
          return comc;
        });
    } else this.coms = mylib.typ([], cols.coms).map(com => new Com(com));

    this.sort('coms');

    this.cats = mylib.typ([], cols.cats).map(cat => new Cat(cat, this.coms));
    this.sort('cats');
  }

  sort(colsn: 'coms' | 'cats') {
    const cols = this[colsn].sort((a, b) => a.wid - b.wid);
    cols.forEach((col, coli) => col.index = coli);
    return cols;
  }

  getCom(comw: number) {
    return this.getCol('coms', comw);
  }

  getCat(catw: number) {
    return this.getCol('cats', catw);
  }

  getCol(colsn: 'cats' | 'coms', colw: number) {
    return (this[colsn] as Com[]).find(col => col.wid === colw);
  }
}

const localCols = cmStorage.getOr('cols', { cats: [], coms: [] });
export const cols = new Cols(localCols);
