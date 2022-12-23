import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import MeetingsInner from "./MeetingsInner";
import { useMeetings } from "./useMeetings";

export default function TheMeetings() {
  const { meetings, goToEvent } = useMeetings();

  if (!meetings) return null;

  return (
    <PhaseCmContainer
      topClass="meetings-container"
      head="События"
      content={
        <MeetingsInner
          meetings={meetings}
          onEventClick={(event) => goToEvent(event.wid)}
        />
      }
    />
  );
}
