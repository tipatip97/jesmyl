import mylib from "../../../../../complect/my-lib/MyLib";
import { BaseNamed } from "../../base/Base";
import { Com } from "../../col/com/Com";
import { Cols } from "../../cols/Cols";
import { IExportableMeetingsEvent } from "./Meetings.model";


export class MeetingsEvent extends BaseNamed<IExportableMeetingsEvent> {
  coms?: Com[];

  constructor(top: IExportableMeetingsEvent, cols?: Cols) {
    super(top);

    this.coms = cols && top.s.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[];
  }

  get group() { return this.getBasic('g'); }
  set group(value) { this.setExportable('g', value); }

  get isRegular() { return this.getBasic('r'); }
  set isRegular(value) { this.setExportable('r', value); }

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