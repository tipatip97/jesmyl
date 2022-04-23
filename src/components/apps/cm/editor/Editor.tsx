import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import useCmNav from "../base/useCmNav";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";
import EditorCreatePopup from "./complect/EditorCreatePopup";

export default function Editor() {
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { setPhase } = useCmNav();
  return (
    <PhaseCmContainer
      topClass="cm-editor"
      withoutBackButton
      head="Редактор"
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
