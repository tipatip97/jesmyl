import mylib from "../../../../../complect/my-lib/MyLib";
import { isAccessed } from "../../Cm.complect";
import { EditableMeeting } from "./EditableMeeting";


export class Meeting extends EditableMeeting {
  get isEditable() {
    return isAccessed('canEditMeetings');
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