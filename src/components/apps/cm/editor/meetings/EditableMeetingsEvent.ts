import { ExecDict } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { cmExer } from "../../Cm.store";
import { IExportableMeetingsEvent } from "../../lists/meetings/Meetings.model";
import { MeetingsEvent } from "../../lists/meetings/MeetingsEvent";
import { EditableCols } from "../col/EditableCols";

export class EditableMeetingsEvent extends MeetingsEvent {
  initialName = this.name;
  cols?: EditableCols;

  constructor(top: IExportableMeetingsEvent, cols?: EditableCols) {
    super(top, cols);

    this.cols = cols;
  }

  scope(...args: (string | number)[]) {
    return (['meeting-event', this.wid].concat(Array.from(args))).join('.');
  }

  execArgs() {
    return {
      eventn: this.name,
      begin: this.begin,
      group: this.group,
      end: this.end,
      eventw: this.wid,
    };
  }

  exec<Value>(bag: ExecDict<Value>) {
    cmExer.set({
      ...bag,
      scope: this.scope(bag.action),
      args: {
        eventw: this.wid,
        eventn: this.name,
        ...bag.args,
        prev: bag.prev,
      }
    });
  }

  setGroup(groupw: number) {
    this.exec({
      action: 'setMeetingEventGroup',
      method: 'set',
      prev: this.group,
      value: groupw,
      args: {
        groupw
      }
    });

    this.group = groupw;
  }

  setStack(value: number[]) {
    this.exec({
      scope: this.scope('set.meet'),
      prev: this.stack,
      value,
      method: 'set',
      action: 'setMeetingEventStack',
      args: {
        value
      }
    });

    this.stack = mylib.clone(value);
    this.coms = this.takeComs();
  }

  moveCom(index: number) {
    const stack = [...this.stack];

    if (index) [stack[index - 1], stack[index]] = [stack[index], stack[index - 1]];
    else [stack[index + 1], stack[index]] = [stack[index], stack[index + 1]];

    this.setStack(stack);

    this.stack = stack;
    this.coms = this.takeComs();
  }

  rename(name: string) {
    this.exec({
      prev: this.name,
      value: name,
      method: 'set',
      action: 'meetingEventRename',
      args: {
        eventn: name,
      }
    });

    this.name = name;
  }

  switchRegular() {
    const value = +!this.isRegular;

    this.exec({
      action: 'setMeetingEventRegular',
      method: 'set',
      prev: this.isRegular || 0,
      value,
      args: { value }
    });

    this.isRegular = +!this.isRegular as num;
  }

}
