import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";
import { useMeetings } from "./useMeetings";

export default function TheMeetingsEvent() {
  const { currentMeeting } = useMeetings();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseCmContainer
      topClass="meeting-container"
      headTitle={currentMeeting?.name ?? "Событие"}
      onMoreClick={() => openAbsoluteBottomPopup(<LocalListToolsPopup coms={currentMeeting?.coms} />)}
      content={currentMeeting?.coms?.map((com) => (
        <ComFace
          key={`metting.com-face ${com.wid}`}
          com={com}
        />
      ))}
    />
  );
}
