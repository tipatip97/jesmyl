import { Cols } from "../../cols/Cols";
import { MeetingsEvent } from "./MeetingsEvent";
import { IExportableMeetingsEvent, IExportableMeetings, MeetingsContextMap, MeetingsContext, IExportableMeetingsContextMap } from "./Meetings.model";
import mylib from "../../../../../complect/my-lib/MyLib";

export class Meetings {
  event: MeetingsEvent;
  stack?: IExportableMeetingsEvent[];
  events: MeetingsEvent[];
  contexts: MeetingsContextMap;
  names: string[];

  constructor({ events, contexts, names }: IExportableMeetings = {} as IExportableMeetings, cols?: Cols) {
    this.stack = events;
    this.contexts = this.takeContexts(contexts);
    this.events = events?.map(event => new MeetingsEvent(event, cols));
    this.event = this.events[0];
    this.names = [...names];
  }

  takeContexts(contexts: IExportableMeetingsContextMap) {
    return Object.entries(contexts).reduce((ctxs, [contextw, context]) => {
      ctxs[contextw as never] = new MeetingsContext(context);
      return ctxs;
    }, {} as MeetingsContextMap);
  }

  getNames(currPath: number[]): string[][] {
      const usedNameis: number[] = [];
      const usedNames: string[] = [];
      Object.values(this.contexts || {}).forEach((path) => {
          if (!currPath.some((ctx, ctxi) => path.context[ctxi] !== ctx)) {
              usedNameis.push(path.context[currPath.length]);
              usedNames.push(this.names[path.context[currPath.length]]);
          }
      });
      return [this.names.filter((_, contexti) => usedNameis.indexOf(contexti) < 0), usedNames];
  }

  getContexts(currPath: number[]): [[number, string, number][], number | null] {
      let currGroupw: number | null = null;

      const contexts = Object.entries(this.contexts || {})
          .map(([groupw, path]): null | [number, string, number] => {
              if (currPath.length === path.context.length && mylib.isEq(currPath, path.context))
                  currGroupw = +groupw;
              if (currPath.length !== path.context.length - 1 || currPath.some((ctx, ctxi) => path.context[ctxi] !== ctx)) return null;

              const contexti = path.context[currPath.length];
              const context = this.names[contexti];

              return context ? [contexti, context, +groupw] : null;
          })
          .filter((context) => context);

      return [contexts as [number, string, number][], currGroupw];
  }
}