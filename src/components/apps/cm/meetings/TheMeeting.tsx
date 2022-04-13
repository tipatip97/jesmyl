import PhaseContainer from "../base/phase-container/PhaseContainer";
import ComFace from "../col/com/face/ComFace";
import { useMeetings } from "./useMeetings";

export default function TheMeeting() {
  const { currentMeeting } = useMeetings();

  return (
    <PhaseContainer
      topClass="meeting-container"
      head={currentMeeting?.name ?? "Событие"}
      content={currentMeeting?.coms.map((com) => (
        <ComFace key={`metting.com-face-${com.wid}`} com={com} forPhase="meeting_com" />
      ))}
    />
  );
}
