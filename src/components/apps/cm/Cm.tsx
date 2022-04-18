import { ReactNode, useEffect } from "react";
import onBackButton from "../../../complect/back-button-listener";
import { cmStorage } from "../../../shared/jstorages";
import useCmNav from "./base/useCmNav";
import useParanja from "./base/useParanja";
import { CmPhase } from "./Cm.model";
import "./Cm.scss";
import TheCat from "./col/cat/TheCat";
import TheCom from "./col/com/TheCom";
import { useCols } from "./cols/useCols";
import Editor from "./editor/Editor";
import Lists from "./lists/Lists";
import Marks from "./lists/marks/Marks";
import TheMeeting from "./lists/meetings/TheMeeting";
import TheMeetings from "./lists/meetings/TheMeetings";
import Other from "./other/Other";
import Translations from "./translation/Translation";

const Comps: Record<CmPhase, () => ReactNode> = {
  all: () => <TheCat />,
  cat: () => <TheCat specialPhase={"thematic"} />,
  com: () => <TheCom />,
  editor: () => <Editor />,
  translation: () => <Translations />,
  lists: () => <Lists />,
  marks: () => <Marks />,
  meetings: () => <TheMeetings />,
  meeting: () => <TheMeeting />,
  other: () => <Other />,
};

export default function CmApplication() {
  const { phase, goBack } = useCmNav();
  const [, setCols] = useCols();

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));
  const { onParanjaClick, paranjaMode } = useParanja();

  onBackButton.listen("cm-listener", () => goBack());
  useEffect(() => () => onBackButton.mute("cm-listener"), []);

  return (
    <>
      <div className={`main-container phase-${phase}`}>
        <div className="header"></div>
        <div className="content">
          {Object.entries(Comps).map(([phasen, phaseComp]) => {
            if (phasen !== phase) return null;
            return (
              <div key={`phase-content.${phasen}`} className="phase-content">
                {phasen === phase ? phaseComp() : null}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`paranja ${paranjaMode || ""}`}
        onClick={() => onParanjaClick()}
      />
    </>
  );
}
