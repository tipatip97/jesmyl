import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useBottomPopup } from '../../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import DebouncedSearchInput from '../../../../../../complect/DebouncedSearchInput';
import { useExerListener } from '../../../../../../complect/exer/hooks/useExer';
import LoadIndicatedContent from '../../../../../../complect/load-indicated-content/LoadIndicatedContent';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { ComFace } from '../../../col/com/face/ComFace';
import { useCcom } from '../../../col/com/useCcom';
import { CorrectsBox } from '../../corrects-box/CorrectsBox';
import EditContainerCorrectsInformer from '../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import { editCompositionNavs } from '../../editorNav';
import PhaseCmEditorContainer from '../../phase-editor-container/PhaseCmEditorContainer';
import { EditableCat } from '../categories/EditableCat';
import { useEditableCcat } from '../categories/useEditableCcat';
import { EditCompositionsMore } from './complect/EditCompositionsMore';
import EditComposition from './EditComposition';

export default function EditCompositions() {
  const ccom = useCcom();
  const zcat: EditableCat | und = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || '');
  const [popupNode, openPopup] = useBottomPopup(EditCompositionsMore);
  useExerListener();
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToCurrent = () => {
    if (ccom) {
      setTimeout(() => {
        const currentFace = document.querySelector(`com_face_wid_${ccom.wid}`);
        if (listRef.current && currentFace) {
          mylib.scrollToView(currentFace, 'top', {
            parent: listRef.current,
          });
        }
      });
    }
  };

  return (
    <Routes>
      <Route
        index
        element={
          <LoadIndicatedContent
            isLoading={false}
            onLoad={scrollToCurrent}
          >
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
              content={
                <>
                  {zcat?.wraps.map(({ item: com }, wrapi) => {
                    return (
                      <EditContainerCorrectsInformer
                        key={wrapi}
                        corrects={new CorrectsBox().merge(...Object.values(com.corrects || {}))}
                      >
                        <ComFace
                          key={com.wid}
                          com={com}
                          comi={wrapi}
                          groupClass="editable-com"
                        />
                      </EditContainerCorrectsInformer>
                    );
                  })}
                </>
              }
            />
          </LoadIndicatedContent>
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
