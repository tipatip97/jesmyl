import { useEffect } from "react";
import useAbsoluteBottomPopup from "../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import useQRMaster from "../../../../../complect/qr-code/useQRMaster";
import useSelectedComs from "../../base/useSelectedComs";
import { CmQRData } from "../../Cm.model";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";

export default function SelectedComs() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const coms = useSelectedComs().takeSelectedComs();
  const { clearQRData } = useQRMaster<CmQRData>('cm');

  useEffect(() => clearQRData('comws'), []);

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
      content={coms.map((com) => (
        <ComFace key={`selected-com-${com.wid}`} com={com} />
      ))}
    />
  );
}
