import mylib from "../../../../../complect/my-lib/MyLib";
import { Com } from "../../col/com/Com";
import { Cols } from "../../cols/Cols";
import { EditableMeeting } from "./EditableMeeting";
import { IExportableMeeting } from "./Meetings.model";


export class Meeting extends EditableMeeting {
  coms?: Com[];

  constructor(top: IExportableMeeting, cols?: Cols) {
    super(top);

    this.coms = cols && top.s.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[];
  }

  getTitle() {
    return `${this.name}${this.end ? `, ${this.getDate()}` : ''}`;
  }

  getDate() {
    if (!this.end) return '';

    const date = new Date(this.begin).toLocaleDateString();
    const interval = this.begin === this.end ? '' : ` (${mylib.intervalToString(this.begin, this.end)})`;

    return `${date}${interval}`;
  }
}