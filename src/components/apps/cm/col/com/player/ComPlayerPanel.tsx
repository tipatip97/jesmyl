import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { EvaIconName } from "../../../../../../complect/eva-icon/EvaIcon.model";
import useRoll from "../../../base/useRoll";
import { useMarks } from "../../../marks/useMarks";

export default function ComPlayerPanel() {
  const { markedComs } = useMarks();
  const { switchRollModeMarks, switchRollMode } = useRoll();

  return (
    <div key="com-player" className="com-player">
      {(
        [
          ["play-circle-outline", "Прокручивать"],
          ["book-open-outline", "Заметки"],
        ] as [EvaIconName, string][]
      ).map(([name, alt]: [EvaIconName, string], conti) => {
        return conti && !markedComs.length ? null : (
          <div
            key={`collapse-mode-${name}`}
            onClick={(event) => {
              event.stopPropagation();
              switchRollMode("pause");
              if (conti) switchRollModeMarks(true);
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
