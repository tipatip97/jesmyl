import { ClientExecutionDict } from '../../../../../complect/exer/Exer.model';
import mylib from '../../../../../complect/my-lib/MyLib';
import { cmExer } from '../../CmExer';
import { IExportableMeetingsEvent } from '../../../../../../back/apps/cm/Meetings.model';
import { MeetingsEvent } from '../../lists/meetings/MeetingsEvent';
import { EditableCom } from '../col/compositions/com/EditableCom';
import { EditableCols } from '../col/EditableCols';
import { CmComWid } from '../../../../../../back/apps/cm/Cm.enums';

export class EditableMeetingsEvent extends MeetingsEvent {
  initialName = this.name;
  cols?: EditableCols;
  prevComws?: CmComWid[];
  coms?: EditableCom[];

  constructor(top: IExportableMeetingsEvent, cols?: EditableCols) {
    super(top, cols);

    this.cols = cols;
    this.coms = this.takeComs();
  }

  takeComs() {
    return (
      this.cols &&
      (this.stack
        .map(comw => (this.cols as EditableCols).coms.find(com => com.wid === comw))
        .filter(com => com) as EditableCom[])
    );
  }

  scope(...args: (string | number)[]) {
    return ['meeting-event', this.wid].concat(Array.from(args)).join('.');
  }

  execArgs() {
    return {
      eventn: this.name,
      begin: this.begin,
      contextw: this.contextw,
      end: this.end,
      eventw: this.wid,
    };
  }

  exec<Value>(bag: ClientExecutionDict<Value>) {
    cmExer.set({
      ...bag,
      scope: this.scope(bag.action),
      args: {
        eventw: this.wid,
        eventn: this.name,
        ...bag.args,
        prev: bag.prev,
      },
    });
  }

  setContext(contextw: number) {
    this.exec({
      action: 'setMeetingEventContext',
      method: 'set',
      prev: this.contextw,
      value: contextw,
      args: {
        contextw,
      },
    });

    this.contextw = contextw;
  }

  removeCom(comw: CmComWid) {
    this.setStack(() => {
      this.stack = this.stack.filter(cw => comw !== cw);

      if (this.prevComws) this.prevComws.push(comw);
      else this.prevComws = [comw];
    });
  }

  setStack(cb: () => void) {
    const prev = mylib.clone(this.stack);
    cb();
    const value = mylib.clone(this.stack);
    this.coms = this.takeComs();

    this.exec({
      method: 'set',
      prev,
      value,
      action: 'setMeetingEventStack',
      args: {
        value,
      },
    });
  }

  mergeStack(value: number[]) {
    this.setStack(() => {
      const isNoPrevComs = !this.prevComws;

      if (isNoPrevComs) this.prevComws = this.coms?.map(com => com.wid);

      this.stack = isNoPrevComs
        ? mylib.clone(value)
        : this.stack.filter(comw => value.indexOf(comw) < 0).concat(mylib.clone(value));
    });
  }

  mergePrevComs(comws?: CmComWid[]) {
    if (comws) {
      this.mergeStack(comws.map(comw => comw));
      this.prevComws = this.prevComws?.filter(prev => !comws.some(comw => prev === comw));
    }
  }

  moveCom(index: number) {
    this.setStack(() => {
      const stack = [...this.stack];

      if (index) [stack[index - 1], stack[index]] = [stack[index], stack[index - 1]];
      else [stack[index + 1], stack[index]] = [stack[index], stack[index + 1]];

      this.stack = stack;
    });
  }

  rename(name: string) {
    this.exec({
      prev: this.name,
      value: name,
      method: 'set',
      action: 'meetingEventRename',
      args: {
        value: name,
      },
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
      args: { value },
    });

    this.isRegular = +!this.isRegular as num;
  }
}
