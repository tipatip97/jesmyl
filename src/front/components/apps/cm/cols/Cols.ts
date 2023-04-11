import mylib from "../../../../complect/my-lib/MyLib";
import SourceBased from "../../../../complect/SourceBased";
import { Cat } from "../col/cat/Cat";
import { Com } from "../col/com/Com";
import { IExportableCom } from "../col/com/Com.model";
import { ICols, IExportableCols } from "./Cols.model";

export class Cols extends SourceBased<IExportableCols> implements ICols {
  cols: IExportableCols;
  coms: Com[] = [];
  cats: Cat[] = [];

  constructor(cols: IExportableCols, prevComs?: Com[]) {
    super(cols);
    this.load(cols, prevComs);
    this.cols = cols;
  }

  load(cols: IExportableCols | null, prevComs?: Com[]) {
    if (prevComs) {
      this.coms = (cols?.coms ?? [])
        .sort((a, b) => a.w - b.w)
        .map((com, comi) => {
          let top: IExportableCom = com;

          const comw = com.w;
          let prevCom;
          prevCom = prevComs.find(c => c.wid === comw);
          if (prevCom && prevCom.ton != null) {
            top = {
              ...com,
              ton: prevCom.ton,
            };
          }

          return new Com(top, comi, this);
        });
    } else
      this.coms = (cols?.coms ?? [])
        .sort((a, b) => a.w - b.w)
        .map((com, comi) => new Com(com, comi, this));

    this.cats = mylib.typ([], cols?.cats)
      .sort((a, b) => a.w - b.w)
      .map(cat => new Cat(cat, this.coms));
  }

  appendCom(com: IExportableCom) {
    const prev = this.coms.find(({ wid }) => com.w === wid);
    if (prev) return;
    this.coms.push(new Com(com, this.coms.length, this));
    this.cols.coms.push(com);
    return this.cols;
  }
}
