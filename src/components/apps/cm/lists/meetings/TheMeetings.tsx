import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import MeetingsContext from "./MeetingsContext";
import { useMeetings } from "./useMeetings";

export default function TheMeetings() {
  const { meetings, goToMeeting } = useMeetings();

  return (
    <PhaseCmContainer
      topClass="meetings-container"
      head="События"
      contentClass="flex column"
      content={
        <MeetingsContext
          meetings={meetings}
          onContextClick={() => {}}
          onEventClick={(event) => goToMeeting(event.wid)}
        />
      }
    />
  );
}
