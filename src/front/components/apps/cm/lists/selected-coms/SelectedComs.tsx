import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import useSelectedComs from "../../base/useSelectedComs";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";

export default function SelectedComs() {
  const [popup, openPopup] = useBottomPopup(() => <LocalListToolsPopup coms={coms} />);
  const coms = useSelectedComs().takeSelectedComs();

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
