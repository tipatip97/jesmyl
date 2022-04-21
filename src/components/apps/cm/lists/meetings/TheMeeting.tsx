import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";
import { useMeetings } from "./useMeetings";

export default function TheMeeting() {
  const { currentMeeting } = useMeetings();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseCmContainer
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
              openAbsoluteBottomPopup(
                <LocalListToolsPopup coms={currentMeeting?.coms} />
              )
            }
          />
        </>
      )}
      content={currentMeeting?.coms?.map((com) => (
        <ComFace
          key={`metting.com-face ${com.wid}`}
          com={com}
          specialPhase="meeting"
        />
      ))}
    />
  );
}
