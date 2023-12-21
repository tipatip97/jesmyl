import mylib from '../../../../../complect/my-lib/MyLib';
import { BaseNamed } from '../../base/BaseNamed';
import { Com } from '../../col/com/Com';
import { Cols } from '../../cols/Cols';
import { IExportableMeetingsEvent } from './Meetings.model';

export class MeetingsEvent extends BaseNamed<IExportableMeetingsEvent> {
  coms?: Com[];
  cols?: Cols;

  constructor(top: IExportableMeetingsEvent, cols?: Cols) {
    super(top);
    this.cols = cols;

    this.coms = this.takeComs();
  }

  get contextw() {
    return this.getBasic('c');
  }
  set contextw(value) {
    this.setExportable('c', value);
  }

  get isRegular() {
    return this.getBasic('r');
  }
  set isRegular(value) {
    this.setExportable('r', value);
  }

  get begin() {
    return this.getBasic('b');
  }
  set begin(value) {
    this.setExportable('b', value);
  }

  get history() {
    return this.getBasic('h');
  }
  set history(value) {
    this.setExportable('h', value);
  }

  get end() {
    return this.getBasic('e');
  }
  set end(value) {
    this.setExportable('e', value);
  }

  get stack() {
    return this.getBasic('s');
  }
  set stack(value) {
    this.setExportable('s', value);
  }

  takeComs() {
    return (
      this.cols &&
      (this.stack.map(comw => (this.cols as Cols).coms.find(com => com.wid === comw)).filter(com => com) as Com[])
    );
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
