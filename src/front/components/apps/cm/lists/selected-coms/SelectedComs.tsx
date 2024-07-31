import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import useSelectedComs from '../../base/useSelectedComs';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';

export default function SelectedComs() {
  const coms = useSelectedComs().takeSelectedComs();
  const [popup, openPopup] = useBottomPopup(LocalListToolsPopup, coms);

  return (
    <PhaseContainerConfigurer
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
