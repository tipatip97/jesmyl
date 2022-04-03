import mylib from "../../../../complect/my-lib/MyLib";
import { cmStorage } from "../../../../store/jstorages";
import { Cat } from "../col/cat/Cat";
import { Com } from "../col/com/Com";
import { ICol, ICols, IExportableCols } from "./Cols.model";
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

  setCcat(ccat: Cat | number): Cat | null {
    return this.setCcol('cat', ccat);
  }

  setCcom(ccom: Com | number) {
    return this.setCcol('com', ccom);
  }

  private setCcol<Coln extends keyof ICol>(coln: Coln, ccol: ICol[Coln] | number): ICol[Coln] | null {
    if (typeof ccol === 'number') {
      const cols: ICol[Coln][] = (coln === 'cat' ? this.cats : this.coms) as ICol[Coln][];
      ccol = cols.find((col: ICol[Coln]) => col.wid === ccol) as ICol[Coln];
    }
    if (!ccol) return null;
    cmStorage.set(`c${coln}`, (ccol as ICol[Coln]).wid);
    return ccol as ICol[Coln];
  }

  loadCcom() {
    return this.loadCcol('com');
  }

  loadCcat() {
    return this.loadCcol('cat');
  }

  private loadCcol<Coln extends keyof ICol>(coln: Coln): ICol[Coln] | null {
    const colw = cmStorage.get(`c${coln}`);
    const cols: ICol[Coln][] = (coln === 'cat' ? this.cats : this.coms) as ICol[Coln][];
    return cols.find((col: ICol[Coln]) => col.wid === colw) as ICol[Coln];
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
