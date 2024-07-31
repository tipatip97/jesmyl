import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';
import { useMarks } from './useMarks';

export default function Marks() {
  const { markedComs } = useMarks();
  const [popupNode, openPopup] = useBottomPopup(LocalListToolsPopup, markedComs);

  return (
    <PhaseContainerConfigurer
      className="favorites-container"
      headTitle="Избранное"
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          <ComFaceList list={markedComs} />
        </>
      }
    />
  );
}
