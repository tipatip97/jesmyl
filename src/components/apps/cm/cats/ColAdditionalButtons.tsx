import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useNav from "../base/useNav";
import { isAccessed } from "../Cm.complect";
import { useCcat, useCcom } from "../col/useCcol";
import { useCols } from "../cols/useCols";

export default function ColAdditionButtons() {
  const [cols] = useCols();
  const { setPhase } = useNav();
  const [, setCcat] = useCcat();
  const [, setCcom] = useCcom();

  return (
    isAccessed("comAdd") && [
      <div
        id="new-cat-button"
        className="mbtn msm m-ok"
        onClick={() => {
          const cat = cols?.addCat();
          if (cat) setCcat(cat);
          setPhase("cat");
        }}
      >
        <EvaIcon name="folder-add-outline" alt="Новая категория" />
      </div>,
      <div
        className="mbtn m-no msm"
        onClick={() => {
          const com = cols?.addCom();
          if (com) setCcom(com);
          setPhase("editor");
        }}
      >
        <EvaIcon name="file-add-outline" alt="Новая песня" />
      </div>,
    ]
  );
}
