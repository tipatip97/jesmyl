import useAbsoluteBottomPopup from "../../../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import modalService from "../../../../../../complect/modal/Modal.service";
import useSelectedComs from "../../../base/useSelectedComs";
import ComFaceContextMenuEditorItems from "../../../editor/col/compositions/ComFaceContextMenuEditorItems";
import { useMarks } from "../../../lists/marks/useMarks";
import { Com } from "../Com";
import "./ComFace.scss";

export default function ComFaceContextMenu({
  onClick,
  com,
}: {
  onClick: () => void;
  com: Com;
}) {
  const { isMarked, toggleMarked } = useMarks();
  const isComMarked = isMarked(com.wid);
  const {
    clearSelectedComws,
    selectedComws,
    selectedComPosition: isSelected,
    toggleSelectedCom,
  } = useSelectedComs();
  const { prepareAbsoluteBottomPopupContent } = useAbsoluteBottomPopup();

  return <>{
    prepareAbsoluteBottomPopupContent({
      items: [{
        onClick: () => {
          onClick();
          toggleMarked(com.wid);
        },
        icon: isComMarked ? "star-outline" : "star",
        title: isComMarked ? "Удалить из Избранного" : "Добавить в Избранное"
      },
      {
        icon: isSelected(com)
          ? "minus-circle-outline"
          : "checkmark-circle-2-outline",
        title: isSelected(com) ? "Отменить выбор" : "Выбрать",
        onClick: () => toggleSelectedCom(com),
      },
      selectedComws.length ?
        [{
          onClick: () => {
            modalService
              .confirm("Очистить список выбранных?")
              .then((isClear) => isClear && clearSelectedComws());
          },
          icon: "close-circle-outline",
          title: 'Очистить выбранные',
        }] : null
      ]
    })
  }
    < ComFaceContextMenuEditorItems />
  </>;
}
