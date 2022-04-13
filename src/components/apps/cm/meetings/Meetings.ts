import modalService from "../../../../complect/modal/Modal.service";
import { cmExer } from "../Cm.store";
import { Meeting } from "./Meeting";
import { IExportableMeeting } from "./Meetings.model";
import { Cols } from "../cols/Cols";

  export {};
  export class Meetings {
    stack: Meeting[];
    meetings: IExportableMeeting[];

    constructor(meetings: IExportableMeeting[], cols: Cols) {
      this.meetings = meetings;
      this.stack = meetings.map(meeting => new Meeting(meeting, cols));
    }
    
    create(cb: (meetings: IExportableMeeting[]) => void) {
      let n: string;
      let b = Date.now();
      let e = Date.now() + 1000 * 60 * 60 * 24;
      const w = Date.now();
      let bs = new Date(b).toISOString().split('T')[0];
      let es = new Date(e).toISOString().split('T')[0];
      let isOneDay = true;
      
      modalService.open({
        title: 'Новое событие',
        inputs: [
          {
            title: 'Название',
            placeholder: 'Название',
            type: 'text',
            onInput: ({input}) => n = input.value
          }, {
            title: 'Дата начала',
            type: 'date',
            min: bs,
            value: bs,
            onInput: ({input}) => {
              b = new Date(input.value).getTime();
              bs = new Date(b + 1000 * 60 * 60 * 24).toISOString().split('T')[0];
              
              if (b > e) {
                e = 0 + b;
                es = new Date(e).toISOString().split('T')[0];
              }
            },
          }, {
            title: 'Один день',
            type: 'checkbox',
            checked: () => isOneDay,
            onInput: () => isOneDay = !isOneDay,
          }, {
            title: 'Дата окончания',
            type: 'date',
            min: () => bs,
            value: es,
            onInput: ({input}) => e = new Date(input.value).getTime(),
            hidden: () => isOneDay
          }
        ],
        buttons: [
          {
            title: 'Создать',
            disabled: () => !n,
            onClick: () => {
              const meeting: IExportableMeeting = {n, b, e, w, s: []};
              this.add(meeting);
              cb && cb(this.meetings.concat(meeting));
            },
          }, {
            title: 'Отмена'
          }
        ]
      });
    }

    add({ n, b, e, w }: IExportableMeeting) {
      cmExer.set({
        action: 'addMeeting',
        args: {
          name: n,
          begin: b,
          end: e,
          id: w
        }
      });
    }
  }