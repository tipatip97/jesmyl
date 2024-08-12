import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/BottomPopup';
import PhaseContainerConfigurer from '../../../../../complect/phase-container/PhaseContainerConfigurer';
import CmTranslationComListContextInMarks from '../../base/translations/InMarks';
import { ComFaceList } from '../../col/com/face/list/ComFaceList';
import { cmCompositionRoute } from '../../routing/cmRoutingApp';
import { LocalListToolsPopup } from '../popups/LocalListToolsPopup';
import { useMarks } from './useMarks';

export default function Marks() {
  const { markedComs } = useMarks();
  const [isOpenTools, setIsOpenTools] = useState(false);

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="favorites-container"
            headTitle="Избранное"
            onMoreClick={setIsOpenTools}
            content={
              <>
                {isOpenTools && (
                  <BottomPopup onClose={setIsOpenTools}>
                    <LocalListToolsPopup coms={markedComs} />
                  </BottomPopup>
                )}
                <ComFaceList list={markedComs} />
              </>
            }
          />
        }
      />

      {cmCompositionRoute(CmTranslationComListContextInMarks)}
    </Routes>
  );
}
