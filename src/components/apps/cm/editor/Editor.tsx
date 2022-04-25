import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import useCmNav from "../base/useCmNav";
import EditorCreatePopup from "./complect/EditorCreatePopup";
import PhaseCmEditorContainer from "./phase-editor-container/PhaseCmEditorContainer";

export default function Editor() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { setPhase } = useCmNav();
  return (
    <PhaseCmEditorContainer
      topClass="cm-editor"
      withoutBackButton
      headClass="flex between"
      headTitle="Редактор"
      content={
        <>
          <BrutalItem
            icon="plus-circle-outline"
            title="Создать"
            onClick={() => openAbsoluteBottomPopup(<EditorCreatePopup />)}
          />
          <BrutalItem
            icon="book-open-outline"
            title="Категории"
            onClick={() => setPhase("edit-categories")}
          />
        </>
      }
    />
  );
}
