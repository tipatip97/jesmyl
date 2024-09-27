import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useBottomPopup } from '../../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import DebouncedSearchInput from '../../../../../../complect/DebouncedSearchInput';
import { useExerListener } from '../../../../../../complect/exer/hooks/useExer';
import { ComFaceList } from '../../../col/com/face/list/ComFaceList';
import { editCompositionNavs } from '../../editorNav';
import PhaseCmEditorContainer from '../../phase-editor-container/PhaseCmEditorContainer';
import { EditableCat } from '../categories/EditableCat';
import { useEditableCcat } from '../categories/useEditableCcat';
import { EditCompositionsMore } from './complect/EditCompositionsMore';
import EditComposition from './EditComposition';

export default function EditCompositions() {
  const zcat: EditableCat | und = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || '');
  const [popupNode, openPopup] = useBottomPopup(EditCompositionsMore);
  useExerListener();
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <Routes>
      <Route
        index
        element={
          <>
            {popupNode}
            <PhaseCmEditorContainer
              className="edit-compositions"
              headClass="flex between full-width"
              head={
                zcat && (
                  <DebouncedSearchInput
                    placeholder="Песни"
                    className="debounced-searcher round-styled"
                    initialTerm={term}
                    onSearch={term => zcat.search(term)}
                    debounce={500}
                    onTermChange={term => setTerm(term)}
                    onDebounced={() => {
                      if (listRef.current) listRef.current.scrollTop = 0;
                    }}
                  />
                )
              }
              onMoreClick={openPopup}
              contentRef={listRef}
              content={<ComFaceList list={zcat?.wraps.map(wrap => wrap.item)} />}
            />
          </>
        }
      />

      <Route
        path=":comw"
        element={<EditComposition />}
      >
        {editCompositionNavs.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Route>
    </Routes>
  );
}
