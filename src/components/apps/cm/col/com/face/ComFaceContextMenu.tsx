import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../../complect/my-lib/MyLib";
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
    saveSelectedComws,
    getLocalSelectedComws,
  } = useSelectedComs();

  return (
    <>
      <div
        className="abs-item flex"
        onClick={() => {
          onClick();
          toggleMarked(com.wid);
        }}
      >
        <EvaIcon
          name={isComMarked ? "star-outline" : "star"}
          className="abs-icon"
        />
        <div>
          {isComMarked ? "Удалить из Избранного" : "Добавить в Избранное"}
        </div>
      </div>
      <div className="abs-item flex" onClick={() => toggleSelectedCom(com)}>
        <EvaIcon
          name={
            isSelected(com)
              ? "minus-circle-outline"
              : "checkmark-circle-2-outline"
          }
          className="abs-icon"
        />
        <div>{isSelected(com) ? "Отменить выбор" : "Выбрать"}</div>
      </div>
      {selectedComws.length ? (
        <>
          <div className="abs-item flex" onClick={() => clearSelectedComws()}>
            <EvaIcon name="close-circle-outline" className="abs-icon" />
            <div>Очистить выбранные</div>
          </div>
          {mylib.isEq(getLocalSelectedComws(), selectedComws) ? null : (
            <div className="abs-item flex" onClick={() => saveSelectedComws()}>
              <EvaIcon name="shopping-bag-outline" className="abs-icon" />
              <div>Запомнить выбранные</div>
            </div>
          )}
        </>
      ) : null}
      <ComFaceContextMenuEditorItems />
    </>
  );
}
