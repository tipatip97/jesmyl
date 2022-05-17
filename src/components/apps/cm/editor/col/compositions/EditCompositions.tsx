import { useRef, useState } from "react";
import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import DebouncedInput from "../../../../../../complect/DebouncedInput";
import useExer from "../../../../../../complect/exer/useExer";
import LoadIndicatedContent from "../../../../../../complect/load-indicated-content/LoadIndicatedContent";
import mylib from "../../../../../../complect/my-lib/MyLib";
import useCmNav from "../../../base/useCmNav";
import { cmExer } from "../../../Cm.store";
import ComFace from "../../../col/com/face/ComFace";
import { useCcom } from "../../../col/com/useCcom";
import { CorrectsBox } from "../../corrects-box/CorrectsBox";
import EditContainerCorrectsInformer from "../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import { useEditableCcat } from "../categories/useEditableCcat";
import EditCompositionsMore from "./complect/EditCompositionsMore";

export default function EditCompositions() {
  const [ccom, setCcom] = useCcom();
  const { goTo } = useCmNav();
  const zcat = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || "");
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  useExer(cmExer);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToCurrent = () => {
    if (ccom) {
      setTimeout(() => {
        const currentFace = document.querySelector(
          `.com-face.editable-com.current.wid_${ccom.wid}`
        );
        if (listRef.current && currentFace) {
          mylib.scrollToView(currentFace, "top", {
            parent: listRef.current,
          });
        }
      });
    }
  };

  return (
    <LoadIndicatedContent isLoading={false} onLoad={scrollToCurrent}>
      <PhaseCmEditorContainer
        topClass="edit-compositions"
        headClass="flex between"
        headTitle="Песни"
        contentRef={listRef}
        onMoreClick={() => openAbsoluteBottomPopup(<EditCompositionsMore />)}
        head={
          !zcat ? null : (
            <DebouncedInput
              icon="search-outline"
              placeholder="Поиск песен"
              className="debounced-searcher"
              initialTerm={term}
              onSearch={(term) => zcat.search(term)}
              debounce={500}
              onTermChange={(term) => setTerm(term)}
            />
          )
        }
        content={
          <>
            {zcat?.wraps.map(({ com }, wrapi) => {
              return (
                <EditContainerCorrectsInformer
                  key={`coms-etitor_${wrapi}`}
                  corrects={new CorrectsBox().merge(
                    ...Object.values(com.corrects || {})
                  )}
                >
                  <ComFace
                    key={`category-on-change_${com.wid}`}
                    com={com}
                    groupClass="editable-com"
                    importantOnClick={() => {
                      setCcom(com, com.isCreated);
                      goTo("com", null, com.isCreated);
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
