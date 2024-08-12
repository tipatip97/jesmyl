import { Route, Routes } from 'react-router-dom';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import CmTranslationComListContextInMeetings from '../../base/translations/InMeetings';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { cmCompositionRoute } from '../../routing/cmRoutingApp';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';
import { useMeetings } from './useMeetings';

export default function TheMeetingsEvent() {
  const { currentEvent } = useMeetings();
  const [popupNode, openPopup] = useBottomPopup(LocalListToolsPopup, currentEvent?.coms);

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="meeting-container"
            headTitle={currentEvent?.name ?? 'Событие'}
            onMoreClick={openPopup}
            content={
              <>
                {popupNode}
                <ComFaceList list={currentEvent?.coms} />
              </>
            }
          />
        }
      />

      {cmCompositionRoute(CmTranslationComListContextInMeetings)}
    </Routes>
  );
}
