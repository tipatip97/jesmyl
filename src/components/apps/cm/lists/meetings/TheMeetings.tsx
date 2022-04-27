import BrutalItem from "../../../../../complect/brutal-item/BrutalItem";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { useMeetings } from "./useMeetings";

export default function TheMeetings() {
  const { meetings, goToMeeting } = useMeetings();

  return (
    <PhaseCmContainer
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
