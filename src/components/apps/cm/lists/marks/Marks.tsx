import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";
import { useMarks } from "./useMarks";

export default function Marks() {
  const { markedComs } = useMarks();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  return (
    <PhaseCmContainer
      topClass="favorites-container"
      headClass="flex between"
      head={(backButton) => (
        <>
          <div className="flex">
            {backButton}
            Избранное
          </div>
          <EvaIcon
            name="more-vertical"
            className="action-button"
            onClick={() =>
              openAbsoluteBottomPopup(<LocalListToolsPopup coms={markedComs} />)
            }
          />
        </>
      )}
      content={markedComs?.map((com) => (
        <ComFace
          key={`marked-com-${com.wid}`}
          com={com}
          specialPhase="marked"
        />
      ))}
    />
  );
}
