import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useSelectedComs from "../../base/useSelectedComs";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";

export default function SelectedComs() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const coms = useSelectedComs().takeSelectedComs();

  return (
    <PhaseCmContainer
      topClass="favorites-container"
      headClass="flex between"
      headTitle="Выбранное"
      head={
        <>
          <EvaIcon
            name="more-vertical"
            className="action-button"
            onClick={() =>
              openAbsoluteBottomPopup(<LocalListToolsPopup coms={coms} />)
            }
          />
        </>
      }
      content={coms.map(com => <ComFace key={com.wid} com={com} />)}
    />
  );
}
