import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { useMarks } from "../../../marks/useMarks";
import { Com } from "../Com";
import "./ComFace.scss";

export default function ComFaceContextMenu({
  onClick,
  com,
}: {
  onClick: () => void;
  com: Com;
}) {
  const { isMarked, toggle } = useMarks();
  const isComMarked = isMarked(com.wid);

  return (
    <div className="com-face-context-menu">
      <div
        className="item flex"
        onClick={() => {
          onClick();
          toggle(com.wid);
        }}
      >
        <EvaIcon name={isComMarked ? "star-outline" : "star"} />
        <div>
          {isComMarked ? "Удалить из Избранного" : "Добавить в Избранное"}
        </div>
      </div>
    </div>
  );
}
