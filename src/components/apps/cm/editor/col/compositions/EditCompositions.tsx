import { useState } from "react";
import BrutalItem from "../../../../../../complect/brutal-item/BrutalItem";
import DebouncedInput from "../../../../../../complect/DebouncedInput";
import useExer from "../../../../../../complect/exer/useExer";
import useCmNav from "../../../base/useCmNav";
import { cmExer } from "../../../Cm.store";
import { useCcom } from "../../../col/com/useCcom";
import { CorrectsBox } from "../../corrects-box/CorrectsBox";
import EditContainerCorrectsInformer from "../../edit-container-corrects-informer/EditContainerCorrectsInformer";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import { useEditableCcat } from "../categories/useEditableCcat";

export default function EditCompositions() {
  const [, setCcom] = useCcom();
  const { goTo } = useCmNav();
  const zcat = useEditableCcat(0);
  const [term, setTerm] = useState(zcat?.term || "");
  useExer(cmExer);

  return (
    <PhaseCmEditorContainer
      topClass="edit-compositions"
      headClass="flex between"
      headTitle="Песни"
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
                <BrutalItem
                  key={`category-on-change_${com.wid}`}
                  icon="headphones-outline"
                  title={`${com.name || ""}${
                    com.name !== com.initialName ? ` (${com.initialName})` : ""
                  }`}
                  onClick={() => {
                    setCcom(com);
                    goTo("com");
                  }}
                />
              </EditContainerCorrectsInformer>
            );
          })}
        </>
      }
    />
  );
}
