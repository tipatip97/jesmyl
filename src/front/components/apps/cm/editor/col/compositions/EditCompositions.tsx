import { useRef, useState } from 'react';
import DebouncedSearchInput from '../../../../../../complect/DebouncedSearchInput';
import { useBottomPopup } from '../../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import { useExerExec } from '../../../../../../complect/exer/hooks/useExer';
import LoadIndicatedContent from '../../../../../../complect/load-indicated-content/LoadIndicatedContent';
import mylib from '../../../../../../complect/my-lib/MyLib';
import useCmNav from '../../../base/useCmNav';
import { ComFace } from '../../../col/com/face/ComFace';
import { useCcom } from '../../../col/com/useCcom';
import { CorrectsBox } from '../../corrects-box/CorrectsBox';
import EditContainerCorrectsInformer from '../../edit-container-corrects-informer/EditContainerCorrectsInformer';
import PhaseCmEditorContainer from '../../phase-editor-container/PhaseCmEditorContainer';
import { EditableCat } from '../categories/EditableCat';
import { useEditableCcat } from '../categories/useEditableCcat';
import { EditCompositionsMore } from './complect/EditCompositionsMore';

export default function EditCompositions() {
  const ccom = useCcom();
  const { goTo } = useCmNav();
  const zcat: EditableCat | und = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || '');
  const [popupNode, openPopup] = useBottomPopup(EditCompositionsMore);
  useExerExec();
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
            {zcat?.wraps.map(({ com }, wrapi) => {
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
                    importantOnClick={() => {
                      goTo({ place: 'com', data: { ccomw: com.wid } }, null, com.isCreated);
                    }}
                  />
                </EditContainerCorrectsInformer>
              );
            })}
          </>
        }
      />
    </LoadIndicatedContent>
  );
}
