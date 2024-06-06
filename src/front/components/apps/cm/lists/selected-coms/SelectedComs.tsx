import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import useSelectedComs from '../../base/useSelectedComs';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import PhaseCmContainer from '../../complect/phase-container/PhaseCmContainer';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';

export default function SelectedComs() {
  const coms = useSelectedComs().takeSelectedComs();
  const [popup, openPopup] = useBottomPopup(LocalListToolsPopup, coms);

  return (
    <PhaseCmContainer
      className="favorites-container"
      headTitle="Выбранное"
      onMoreClick={openPopup}
      content={
        <>
          {popup}
          <ComFaceList list={coms} />
        </>
      }
    />
  );
}
