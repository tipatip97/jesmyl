import { cmExer } from "../../Cm.store";
import { IExportableMeetings, IExportableMeetingsEvent } from "../../lists/meetings/Meetings.model";
import { EditableCols } from "../col/EditableCols";
import { EditableMeetingsEvent } from "./EditableMeeting";
import { MeetingSection } from "./EditMeetings.model";

export class EditableMeetings {
    stack?: IExportableMeetingsEvent[];
    events: EditableMeetingsEvent[];
    contexts: string[];

    constructor({ events, contexts }: IExportableMeetings = {} as IExportableMeetings, cols?: EditableCols) {
        this.stack = events;
        this.contexts = contexts;
        this.events = events?.map(event => new EditableMeetingsEvent(event, cols));
    }

    addContext(contextn: string) {
        cmExer.set({
            action: 'addMeetingsContext',
            method: 'push',
            args: {
                contextn
            }
        });
    }

    addEvent(name: string) {
        const event = new EditableMeetingsEvent({
            n: name,
            b: 0,
            e: 0,
            g: -1,
            r: 0,
            s: [],
            w: Date.now(),
        });

        cmExer.set({
            action: 'addMeetingsEvent',
            method: 'push',
            args: event.execArgs()
        });

        this.events.push(event);
    }

    create(section: MeetingSection, name: string) {
        console.log(section);
        switch (section) {
            case 'context': this.addContext(name); break;
            case 'group': this.addContext(name); break;
            case 'event': this.addEvent(name); break;
        }
    }

    createMeeting(cb: (meetings?: IExportableMeetingsEvent[]) => void) {
        // let n: string;
        // let b = Date.now();
        // let e = Date.now() + 1000 * 60 * 60 * 24;
        // const w = Date.now();
        // let bs = new Date(b).toISOString().split('T')[0];
        // let es = new Date(e).toISOString().split('T')[0];
        // let isOneDay = true;

        // modalService.open({
        //     title: 'Новое событие',
        //     inputs: [
        //         {
        //             title: 'Название',
        //             placeholder: 'Название',
        //             type: 'text',
        //             onInput: ({ input }) => n = input.value
        //         }, {
        //             title: 'Дата начала',
        //             type: 'date',
        //             min: bs,
        //             value: bs,
        //             onInput: ({ input }) => {
        //                 b = new Date(input.value).getTime();
        //                 bs = new Date(b + 1000 * 60 * 60 * 24).toISOString().split('T')[0];

        //                 if (b > e) {
        //                     e = 0 + b;
        //                     es = new Date(e).toISOString().split('T')[0];
        //                 }
        //             },
        //         }, {
        //             title: 'Один день',
        //             type: 'checkbox',
        //             checked: () => isOneDay,
        //             onInput: () => isOneDay = !isOneDay,
        //         }, {
        //             title: 'Дата окончания',
        //             type: 'date',
        //             min: () => bs,
        //             value: es,
        //             onInput: ({ input }) => e = new Date(input.value).getTime(),
        //             hidden: () => isOneDay
        //         }
        //     ],
        //     buttons: [
        //         {
        //             title: 'Создать',
        //             disabled: () => !n,
        //             onClick: () => {
        //                 const meeting: IExportableMeeting = { r: 0, n, b, e, w, s: [] };
        //                 this.add(meeting);
        //                 cb && cb(this.meetings?.concat(meeting));
        //             },
        //         }, {
        //             title: 'Отмена'
        //         }
        //     ]
        // });
    }

    // add({ n, b, e, w }: IExportableMeeting) {
    //     cmExer.set({
    //         action: 'addMeeting',
    //         args: {
    //             name: n,
    //             begin: b,
    //             end: e,
    //             id: w
    //         }
    //     });
    // }
}