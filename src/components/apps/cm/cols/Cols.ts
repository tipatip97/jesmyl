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
        .map((com, comi) => {
          let top = com;

          const comw = com.w;
          let prevCom;
          prevCom = prevComs.find(c => c.wid === comw);
          if (prevCom && prevCom.ton != null) {
            top = {
              ...com,
              ton: prevCom.ton,
            };
          }

          const comc = new Com(top, comi);
          return comc;
        });
    } else this.coms = mylib.typ([], cols?.coms).map((com, comi) => new Com(com, comi));

    this.sort('coms');

    this.cats = mylib.typ([], cols?.cats).map(cat => new Cat(cat, this.coms));
    this.sort('cats');
  }


  sort(colsn: 'coms' | 'cats') {
    return this[colsn].sort((a, b) => a.wid - b.wid);
  }
}

