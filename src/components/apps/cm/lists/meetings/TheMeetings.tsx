import BrutalItem from "../../../../../complect/brutal-item";
import PhaseContainer from "../../../../../complect/phase-container";
import { useMeetings } from "./useMeetings";

export default function TheMeetings() {
  const { meetings, goToMeeting } = useMeetings();

  return (
    <PhaseContainer
      topClass="meetings-container"
      head="События"
      contentClass="flex column"
      content={meetings?.map((meeting) => {
        return (
          <BrutalItem
            key={`meeting-${meeting.wid}`}
            icon="calendar"
            title={meeting.name}
            onClick={() => goToMeeting(meeting.wid)}
          />
        );
      })}
    />
  );
}
