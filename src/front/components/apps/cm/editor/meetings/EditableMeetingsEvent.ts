import { ClientExecutionDict } from '../../../../../complect/exer/Exer.model';
import mylib from '../../../../../complect/my-lib/MyLib';
import { cmExer } from '../../CmExer';
import { IExportableMeetingsEvent } from '../../../../../../back/apps/cm/Meetings.model';
import { MeetingsEvent } from '../../lists/meetings/MeetingsEvent';
import { EditableCom } from '../col/compositions/com/EditableCom';
import { EditableCols } from '../col/EditableCols';

export class EditableMeetingsEvent extends MeetingsEvent {
  initialName = this.name;
  cols?: EditableCols;
  prevComs?: EditableCom[];
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

  removeCom(com: EditableCom) {
    this.setStack(() => {
      this.stack = this.stack.filter(comw => com.wid !== comw);

      if (this.prevComs) this.prevComs.push(com);
      else this.prevComs = [com];
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
      const isNoPrevComs = !this.prevComs;

      if (isNoPrevComs) this.prevComs = this.coms;

      this.stack = isNoPrevComs
        ? mylib.clone(value)
        : this.stack.filter(comw => value.indexOf(comw) < 0).concat(mylib.clone(value));
    });
  }

  mergePrevComs(coms?: EditableCom[]) {
    if (coms) {
      this.mergeStack(coms.map(com => com.wid));
      this.prevComs = this.prevComs?.filter(prev => !coms.some(com => prev === com));
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
