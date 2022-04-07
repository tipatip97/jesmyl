import { EvaIcon } from "../../../../complect/Eva";
import { isAccessed } from "../Cm.complect";
import { useCcol, useCols, usePhase } from "../hooks";

export function TheColAdditionButtons() {
  const [cols] = useCols();
  const { setPhase } = usePhase();
  const [, setCcat] = useCcol("cat");
  const [, setCcom] = useCcol("com");

  return (
    isAccessed("comAdd") && [
      <button
        key="new-cat-button"
        id="new-cat-button"
        className="mbtn msm m-ok"
        onClick={() => {
          setCcat(cols.addCat());
          setPhase("cat");
        }}
      >
        <EvaIcon name="folder-add-outline" alt="Новая категория" />
      </button>,
      <button
        key="com-new-button"
        className="mbtn m-no msm"
        onClick={() => {
          setCcom(cols.addCom());
          setPhase("editor");
        }}
      >
        <EvaIcon name="file-add-outline" alt="Новая песня" />
      </button>,
    ]
  );
}
