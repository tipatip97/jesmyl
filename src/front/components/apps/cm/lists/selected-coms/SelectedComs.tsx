import { useBottomPopup } from "../../../../../complect/absolute-popup/bottom-popup/useBottomPopup";
import useSelectedComs from "../../base/useSelectedComs";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import { LocalListToolsPopup } from "../popups/LocalListToolsPopup";

export default function SelectedComs() {
  const coms = useSelectedComs().takeSelectedComs();
  const [popup, openPopup] = useBottomPopup(LocalListToolsPopup, coms);

  return (
    <PhaseCmContainer
      className="favorites-container"
      headTitle="Выбранное"
      onMoreClick={openPopup}
      content={<>
        {popup}
        {coms.map(com => <ComFace key={com.wid} com={com} />)}
      </>}
    />
  );
}
