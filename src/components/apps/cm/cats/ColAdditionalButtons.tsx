import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import { usePhase } from "../base/usePhase";
import { isAccessed } from "../Cm.complect";
import { useCcol } from "../col/useCcol";
import { useCols } from "../cols/useCols";

export default function ColAdditionButtons() {
  const [cols] = useCols();
  const { setPhase } = usePhase();
  const [, setCcat] = useCcol("cat");
  const [, setCcom] = useCcol("com");

  return (
    isAccessed("comAdd") && [
      <div
        key="new-cat-button"
        id="new-cat-button"
        className="mbtn msm m-ok"
        onClick={() => {
          setCcat(cols.addCat());
          setPhase("cat");
        }}
      >
        <EvaIcon name="folder-add-outline" alt="Новая категория" />
      </div>,
      <div
        key="com-new-button"
        className="mbtn m-no msm"
        onClick={() => {
          setCcom(cols.addCom());
          setPhase("editor");
        }}
      >
        <EvaIcon name="file-add-outline" alt="Новая песня" />
      </div>,
    ]
  );
}
