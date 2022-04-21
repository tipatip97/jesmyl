import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import PhaseCmContainer from "../complect/phase-container/PhaseCmContainer";
import EditorCreatePopup from "./complect/EditorCreatePopup";

export default function Editor() {
    const {openAbsoluteBottomPopup} = useAbsoluteBottomPopup();
  return (
    <PhaseCmContainer
      topClass="cm-editor"
      head="Редактор"
      content={
        <>
          <BrutalItem
            icon="plus-circle-outline"
            title="Создать"
            onClick={() => openAbsoluteBottomPopup(<EditorCreatePopup />)}
          />
        </>
      }
    />
  );
}
