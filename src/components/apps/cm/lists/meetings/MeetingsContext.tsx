import { useState } from "react";
import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { Meetings } from "./Meetings";
import { MeetingsContextBox } from "./Meetings.model";

export default function MeetingsContext<Meets extends Meetings>({
  meetings,
  onContextClick,
  onEventClick,
}: {
  meetings: Meets | nil;
  onContextClick: (box: MeetingsContextBox) => void;
  onEventClick: (event: Meets["event"]) => void;
}) {
  const [ccontext, setCcontext] = useState([]);
  const contexts: MeetingsContextBox[] = [];

  return (
    <PhaseCmContainer
      topClass="meetings-container"
      head="События"
      contentClass="flex column"
      content={
        <>
          {contexts.map((context) => {
            return (
              <BrutalItem
                key={`context-${context.id}`}
                icon="folder-outline"
                title={context.name}
                onClick={() => onContextClick(context)}
              />
            );
          })}
          {meetings?.events.map((event) => {
            return (
              <BrutalItem
                key={`event-${event.wid}`}
                icon="calendar-outline"
                title={event.name}
                onClick={() => onEventClick(event)}
              />
            );
          })}
        </>
      }
    />
  );
}
