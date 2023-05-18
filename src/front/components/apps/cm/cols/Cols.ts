import SourceBased from "../../../../complect/SourceBased";
import { Cat } from "../col/cat/Cat";
import { Com } from "../col/com/Com";
import { IExportableCom } from "../col/com/Com.model";
import { ICols, IExportableCols } from "./Cols.model";

export class Cols extends SourceBased<IExportableCols> implements ICols {
  coms: Com[] = [];
  cats: Cat[] = [];

  constructor(cols: IExportableCols, prevComs?: Com[]) {
    super(cols);

    if (prevComs) {
      this.coms = [...cols?.coms || []]
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

          return new Com(top, comi);
        });
    } else
      this.coms = [...cols?.coms || []]
        .sort((a, b) => a.w - b.w)
        .map((com, comi) => new Com(com, comi));

    this.cats = [...cols?.cats || []]
      .sort((a, b) => a.w - b.w)
      .map(cat => new Cat(cat, this.coms));
  }
}
