import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";
import { useMeetings } from "./useMeetings";

export default function TheMeetingsEvent() {
  const { currentEvent } = useMeetings();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseCmContainer
      topClass="meeting-container"
      headTitle={currentEvent?.name ?? "Событие"}
      onMoreClick={() => openAbsoluteBottomPopup(<LocalListToolsPopup coms={currentEvent?.coms} />)}
      content={currentEvent?.coms?.map((com) => (
        <ComFace
          key={`metting.com-face ${com.wid}`}
          com={com}
        />
      ))}
    />
  );
}
