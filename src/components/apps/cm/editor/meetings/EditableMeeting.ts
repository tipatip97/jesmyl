import { ExecDict } from "../../../../../complect/exer/Exer.model";
import { cmExer } from "../../Cm.store";
import { MeetingsEvent } from "../../lists/meetings/MeetingsEvent";
import { IExportableMeetingsEvent } from "../../lists/meetings/Meetings.model";
import { EditableCols } from "../col/EditableCols";



export class EditableMeetingsEvent extends MeetingsEvent {
  initialName = this.name;

  // constructor(top: IExportableMeeting, cols?: EditableCols) {
  //   super(top, cols);
  // }

  scope(...args: (string | number)[]) {
    return (['meeting', this.wid].concat(Array.from(args))).join('.');
  }

  // clearStack() {
  //   this.setStack([]);
  // }

  execArgs(): IExportableMeetingsEvent {
    return {
      n: this.name,
      b: this.begin,
      g: this.group,
      e: this.end,
      r: this.isRegular,
      s: [],
      w: this.wid,
    };
  }

  exec<Value>(bag: ExecDict<Value>) {
    cmExer.set({
      ...bag,
      args: {
        meetingw: this.wid,
        meetingn: this.name,
        ...bag.args,
        prev: bag.prev,
      }
    });
  }

  // setStack(value) {
  //   this.exec({
  //     scope: this.scope('set.meet'),
  //     prev: this.stack,
  //     value,
  //     method: 'set',
  //     action: 'setMeetingStack',
  //     args: {
  //       value
  //     }
  //   });

  //   this.stack = value.slice(0);
  // }

  rename(name: string) {
    this.exec({
      scope: this.scope('rename'),
      prev: this.name,
      value: name,
      method: 'set',
      action: 'meetingRename',
      args: {
        meetingn: name,
      }
    });

    this.name = name;
  }

  switchRegular() {
    const value = +!this.isRegular;

    this.exec({
      action: 'setMeetingRegular',
      method: 'set',
      prev: this.isRegular || 0,
      value,
      args: { value }
    });

    this.isRegular = +!this.isRegular as num;
  }

  // appendMarks(value = []) {
  //   this.setStack(this.stack.filter(comw => value.indexOf(comw) < 0).concat(value));
  // }

  // remove() {
  //   this.exec({
  //     action: 'remMeeting'
  //   });

  //   g.meetings.remove(this);
  // }

  // editableDetails() {
  //   return {
  //     inputs: [
  //       {
  //         title: 'Переименовать',
  //         value: this.name,
  //         type: 'text',
  //         onInput: ({event}) => {
  //           this.rename(event.target.value);
  //           g.ss();
  //         }
  //       },
  //       this.stack.length == 0
  //         ? null
  //         : {
  //           value: 'Открепить закладки',
  //           type: 'button',
  //           confirm: `Открепить все закладки из события ${this.getTitle()}`,
  //           closable: true,
  //           onClick: () => {
  //             this.clearStack();
  //             g.ss();
  //           }
  //         },
  //       g.selectedComs.length < 1
  //         ? null
  //         : {
  //           value: 'Записать выбранные',
  //           type: 'button',
  //           closable: true,
  //           onClick: () => {
  //             const isThereMarks = this.stack.length > 0;
  //             if (!isThereMarks) {
  //               this.setStack(g.selectedComs);
  //               g.selectedComs = [];
  //               g.ss();
  //             }

  //             return isThereMarks;
  //           },
  //           modal: {
  //             title: 'Записать выбранные',
  //             inputs: [
  //               {
  //                 value: 'Перезаписать',
  //                 type: 'button',
  //                 closable: true,
  //                 onClick: () => {
  //                   this.setStack(g.selectedComs);
  //                   g.selectedComs = [];
  //                   g.ss();
  //                 }
  //               }, {
  //                 value: 'Добавить',
  //                 type: 'button',
  //                 closable: true,
  //                 onClick: () => {
  //                   this.appendMarks(g.selectedComs);
  //                   g.selectedComs = [];
  //                   g.ss();
  //                 }
  //               }
  //             ]
  //           }
  //         },
  //       !this.end
  //         ? null
  //         : {
  //           type: 'button',
  //           value: 'Сделать регулярным',
  //           confirm: `Сделать регулярным событие "${this.n}"`,
  //           onClick: () => {
  //             this.removeEnd();
  //             g.ss();
  //           }
  //         },
  //       {
  //         type: 'button',
  //         value: 'Удалить',
  //         className: 'm-ko',
  //         confirm: `Удалить событие "${this.n}"`,
  //         onClick: () => {
  //           this.remove();
  //           g.ss();
  //         }
  //       },
  //     ]
  //   };
  // }
}
