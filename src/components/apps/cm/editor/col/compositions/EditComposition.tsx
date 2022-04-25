import { useEditableCcom } from "./useEditableCcom";
import PhaseCmEditorContainer from "../../phase-editor-container/PhaseCmEditorContainer";
import PhaseCmEditorContainerItem from "../../phase-editor-container/PhaseCmEditorContainerItem";
import useEditComposition from "./useEditComposition";

export default function EditCategory() {
  const ccom = useEditableCcom();
  const { rename } = useEditComposition(ccom);

  if (!ccom) return null;

  return (
    <PhaseCmEditorContainer
      topClass="edit-categories"
      headClass="flex between"
      headTitle={`Категория - ${ccom.initialName}`}
      content={
        <>
          {
            <PhaseCmEditorContainerItem
              action="catRename"
              corrects={ccom?.corrects.catRename}
            >
              Название:
              <input
                value={ccom?.name}
                onChange={(event) => rename(event.target.value)}
              />
            </PhaseCmEditorContainerItem>
          }
        </>
      }
    />
  );
}
