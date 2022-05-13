import { Cols } from "../../cols/Cols";
import { MeetingsEvent } from "./MeetingsEvent";
import { IExportableMeetingsEvent, IExportableMeetings, MeetingsContext } from "./Meetings.model";

export class Meetings {
  event: MeetingsEvent;
  stack?: IExportableMeetingsEvent[];
  events: MeetingsEvent[];
  contexts: MeetingsContext[];

  constructor({ events, contexts }: IExportableMeetings = {} as IExportableMeetings, cols?: Cols) {
    this.stack = events;
    this.contexts = contexts;
    this.events = events?.map(event => new MeetingsEvent(event, cols));
    this.event = this.events[0];
  }
}