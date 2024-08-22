import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/BottomPopup';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import CmTranslationComListContextInMeetings from '../../base/translations/InMeetings';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { cmCompositionRoute } from '../../routing/cmRoutingApp';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';
import { useMeetings } from './useMeetings';

export default function TheMeetingsEvent() {
  const { currentEvent } = useMeetings();
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="meeting-container"
            headTitle={currentEvent?.name ?? 'Событие'}
            onMoreClick={setIsOpenList}
            content={
              <>
                {isOpenList && (
                  <BottomPopup onClose={setIsOpenList}>
                    <LocalListToolsPopup coms={currentEvent?.coms} />
                  </BottomPopup>
                )}
                <ComFaceList list={currentEvent?.coms} />
              </>
            }
          />
        }
      />

      {cmCompositionRoute(children => (
        <CmTranslationComListContextInMeetings>{children}</CmTranslationComListContextInMeetings>
      ))}
    </Routes>
  );
}
