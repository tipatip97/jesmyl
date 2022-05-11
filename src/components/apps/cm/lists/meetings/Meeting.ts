import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed } from "../../base/Base";
import { Com } from "../../col/com/Com";
import { Cols } from "../../cols/Cols";
import { IExportableMeeting } from "./Meetings.model";


export class Meeting extends BaseNamed<IExportableMeeting> {
  coms?: Com[];

  constructor(top: IExportableMeeting, cols?: Cols) {
    super(top);

    this.coms = cols && top.s.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[];
  }

  get begin() { return this.getBasic('b'); }
  set begin(value) { this.setExportable('b', value); }

  get end() { return this.getBasic('e'); }
  set end(value) { this.setExportable('e', value); }

  get stack() { return this.getBasic('s'); }
  set stack(value) { this.setExportable('s', value); }

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