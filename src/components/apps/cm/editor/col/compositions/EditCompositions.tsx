import BrutalItem from "../../../../../../complect/brutal-item/BrutalItem";
import useCmNav from "../../../base/useCmNav";
import { useCcom } from "../../../col/com/useCcom";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import { useEditableCcat } from "../categories/useEditableCcat";

export default function EditCompositions() {
  const [, setCcom] = useCcom();
  const { setPhase } = useCmNav();
  const zcat = useEditableCcat(0);

  return (
    <PhaseCmEditorContainer
      topClass="edit-categories"
      headClass="flex between"
      headTitle="Песни"
      content={
        <>
          {zcat?.coms.map((com) => {
            return (
              <BrutalItem
                key={`category-on-change_${com.wid}`}
                icon="headphones-outline"
                title={`${com.name || ""}${
                  com.name !== com.initialName ? ` (${com.initialName})` : ""
                }`}
                onClick={() => {
                  setCcom(com.native);
                  setPhase("edit-composition");
                }}
              />
            );
          })}
        </>
      }
    />
  );
}
