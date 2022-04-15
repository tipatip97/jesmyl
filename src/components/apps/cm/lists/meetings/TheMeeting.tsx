import useAbsolutePopup from "../../../../../complect/absolute-popup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import PhaseContainer from "../../base/phase-container/PhaseContainer";
import ComFace from "../../col/com/face/ComFace";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";
import { useMeetings } from "./useMeetings";

export default function TheMeeting() {
  const { currentMeeting } = useMeetings();
  const { openAbsolutePopup } = useAbsolutePopup();

  return (
    <PhaseContainer
      topClass="meeting-container"
      headClass="flex between"
      head={(backButton) => (
        <>
          <div className="flex">
            {backButton}
            {currentMeeting?.name ?? "Событие"}
          </div>
          <EvaIcon
            name="more-vertical"
            className="action-button"
            onClick={() =>
              openAbsolutePopup(
                <LocalListToolsPopup coms={currentMeeting?.coms} />
              )
            }
          />
        </>
      )}
      content={currentMeeting?.coms?.map((com) => (
        <ComFace
          key={`metting.com-face-${com.wid}`}
          com={com}
          specialPhase="meeting"
        />
      ))}
    />
  );
}
