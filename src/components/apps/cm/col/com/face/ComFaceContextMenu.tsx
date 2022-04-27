import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
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

  return (
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
  );
}
