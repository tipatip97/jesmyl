import { ExecDict } from "../../../../../complect/exer/Exer.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { Base } from "../../base/Base";
import { isAccessed } from "../../Cm.complect";
import { cmExer } from "../../Cm.store";
import { IExportableMeeting } from "./Meetings.model";



    export class EditableMeeting extends Base<IExportableMeeting> {
        get name() { return this.getOrBase('n'); }
        set name(value) { this.setExportable('n', value); }
      
        get wid() { return this.getOrBase('w'); }
        set wid(value) { this.setExportable('w', value); }
      
        get begin() { return this.getOrBase('b'); }
        set begin(value) { this.setExportable('b', value); }
      
        get end() { return this.getOrBase('e'); }
        set end(value) { this.setExportable('e', value); }
      
        get stack() { return this.getOrBase('s'); }
        set stack(value) { this.setExportable('s', value); }
      
        get isEditable() {
          return isAccessed('canEditMeetings');
        }
        
        args() {
          return mylib.overlap({
            n: this.name + '',
            b: this.begin - 0,
            e: this.end - 0
          });
        }
        
        // clearStack() {
        //   this.setStack([]);
        // }
        
        exec<Value, Args>(bag: ExecDict<Value, Args>) {
          cmExer.set(mylib.overlap({}, bag, {
            args: mylib.overlap({}, bag.args, {
              name: this.name,
              id: this.wid,
            }, this.args())
          }) as ExecDict<Value, Args>);
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
        
        // rename(name = '') {
        //   this.exec({
        //     scope: this.scope('rename'),
        //     prev: this.name,
        //     value: name,
        //     method: 'set',
        //     action: 'renameMeeting',
        //     args: {
        //       name
        //     },
        //     onSet: (exec) => exec.args.name = exec.value
        //   });
          
        //   this.name = name;
        // }
        
        // scope(uniq: string) {
        //   return (['meeting', this.wid, uniq].concat(Array.from(arguments))).join('.');
        // }
        
        // removeEnd() {
        //   this.exec({
        //     action: 'setMeetingRegular'
        //   });
          
        //   this.end = 0;
        // }
        
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
