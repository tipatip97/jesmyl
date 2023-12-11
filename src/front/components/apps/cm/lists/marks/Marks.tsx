import { useBottomPopup } from "../../../../../complect/absolute-popup/useBottomPopup";
import ComFace from "../../col/com/face/ComFace";
import PhaseCmContainer from "../../complect/phase-container/PhaseCmContainer";
import LocalListToolsPopup from "../popups/LocalListToolsPopup";
import { useMarks } from "./useMarks";

export default function Marks() {
  const { markedComs } = useMarks();
  const [popupNode, openPopup] = useBottomPopup(() => <LocalListToolsPopup coms={markedComs} />);

  return (
    <PhaseCmContainer
      className="favorites-container"
      headTitle="Избранное"
      onMoreClick={openPopup}
      content={<>
        {popupNode}
        {markedComs?.map((com) => (
          <ComFace
            key={`marked-com-${com.wid}`}
            com={com}
          />
        ))}
      </>}
    />
  );
}
