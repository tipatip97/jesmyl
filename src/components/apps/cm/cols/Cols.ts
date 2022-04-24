import mylib from "../../../../complect/my-lib/MyLib";
import { Base } from "../base/Base";
import { Cat } from "../col/cat/Cat";
import { Com } from "../col/com/Com";
import { IExportableCom } from "../col/com/Com.model";
import { ICols, IExportableCols } from "./Cols.model";

export class Cols extends Base<IExportableCols> implements ICols {
  coms: Com[] = [];
  cats: Cat[] = [];
  ccat?: Cat;
  ccom?: Com;

  constructor(cols: IExportableCols, prevComs?: Com[]) {
    super(cols);
    this.load(cols, prevComs);
  }

  load(cols: IExportableCols | null, prevComs?: Com[]) {

    if (prevComs) {
      this.coms = (mylib.typ([], cols?.coms) as IExportableCom[])
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
    } else this.coms = mylib.typ([], cols?.coms).map(com => new Com(com));

    this.sort('coms');

    this.cats = mylib.typ([], cols?.cats).map(cat => new Cat(cat, this.coms));
    this.sort('cats');
  }


  sort(colsn: 'coms' | 'cats') {
    const cols = this[colsn].sort((a, b) => a.wid - b.wid);
    cols.forEach((col, coli) => col.index = coli);
    return cols;
  }
}

