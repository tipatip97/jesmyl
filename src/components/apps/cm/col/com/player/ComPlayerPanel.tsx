import { useDispatch } from "react-redux";
import EvaIcon from "../../../../../../complect/Eva";
import { changeRollMode, changeRollModeMarks } from "../../../Cm.store";
import { useMarks } from "../../../hooks";

export default function ComPlayerPanel() {
  const dispatch = useDispatch();
  
  const { markedComs } = useMarks();

  return (
    <div key="com-player" className="com-player">
      {[
        ["play-circle-outline", "Прокручивать"],
        ["book-open-outline", "Заметки"],
      ].map(([name, alt], conti) => {
        return conti && !markedComs.length ? null : (
          <div
            key={`collapse-mode-${name}`}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(changeRollMode("pause"));
              if (conti) dispatch(changeRollModeMarks(true));
              // g.updateFlexFontSize(400);
            }}
          >
            <EvaIcon name={name} alt={alt} />
          </div>
        );
      })}
      {/* <CollapsePane /> */}
    </div>
  );
}
