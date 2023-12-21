import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import ComFace from '../../col/com/face/ComFace';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';
import { useMeetings } from './useMeetings';

export default function TheMeetingsEvent() {
  const { currentEvent } = useMeetings();
  const [popupNode, openPopup] = useBottomPopup(LocalListToolsPopup, currentEvent?.coms);

  return (
    <PhaseCmContainer
      className="meeting-container"
      headTitle={currentEvent?.name ?? 'Событие'}
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          {currentEvent?.coms?.map((com) => <ComFace key={`metting.com-face ${com.wid}`} com={com} />)}
        </>
      }
    />
  );
}
