import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { useMarks } from "../../marks/useMarks";
import { Com } from "./Com";

export default function ComAddMenu({
  onClick,
  com,
}: {
  onClick: () => void;
  com: Com;
}) {
  const { isMarked, toggle } = useMarks();
  const isComMarked = isMarked(com.wid);

  return (
    <>
      <div
        className="item flex pointer"
        onClick={() => {
          onClick();
          toggle(com.wid);
        }}
      >
        <EvaIcon name={isComMarked ? "star-outline" : "star"} className="icon" />
        <div className="title">
          {isComMarked ? "Удалить из Избранного" : "Добавить в Избранное"}
        </div>
      </div>
    </>
  );
}
