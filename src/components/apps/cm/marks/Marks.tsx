import { useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../complect/modal/Modal.service";
import mylib from "../../../../complect/my-lib/MyLib";
import { usePhase } from "../base/usePhase";
import { Com } from "../col/com/Com";
import { useCcol } from "../col/useCcol";
import AddToMeetingButton from "../meetings/AddToMeetingButton";
import { MarksProps } from "./Marks.model";
import { useMarks } from "./useMarks";

export default function Marks(props: MarksProps) {
  const [isOpened, setIsOpened] = useState(false);

  const [updates, riseUpUpdates] = useState(0);
  const forceUpdate = () => riseUpUpdates(updates + 1);

  const { marks, setMarks, markedComs, bumerangMarks } = useMarks();
  const [ccom, setCcom] = useCcol("com");
  const { phase, setPhase } = usePhase();

  const isActive = (comw: number, com: Com, ccomw?: number) =>
    mylib.isFunc(props.setIsActive)
      ? (props.setIsActive as Function)(comw, com, ccomw)
      : ccomw === comw;

  return (
    <>
      <div
        key="marks-block"
        className={`marks-box${isOpened ? " opened" : ""}${
          marks.length ? "" : " hidden"
        }`}
      >
        {props.isHideSysButtons
          ? null
          : [
              <div
                key="open-marks-button"
                id="open-marks-button"
                className="open-button mbtn msm m-ok"
                title="Открыть закладки"
                onClick={() => setIsOpened(!isOpened)}
              >
                <EvaIcon name="bookmark-outline" alt="m" />
              </div>,
              <div
                key="print-button mbtn msm m-ko"
                className="print-button mbtn msm m-ko"
                title="Действия с закладками"
                onClick={() => {
                  modalService.open({
                    title: "Действия с закладками",
                    inputs: [
                      {
                        value: "Очистить список",
                        type: "button",
                        confirm: "Очистить список закладок",
                        onClick: () => setMarks([]),
                      },
                      [<AddToMeetingButton key="AddToMeetingButton" />],
                    ],
                  });
                }}
              >
                <EvaIcon name="settings-2-outline" alt="действия" />
              </div>,
            ]}
        <div key="marked-buttons-list" id="marked-buttons" className="list">
          {markedComs.map((com, comi, coma) => {
            const comw = com.wid;

            return [
              <div
                key={`marked-buttons-${comw}`}
                id={`mark-${comw}`}
                className={"mgroup btn-group mblock"}
              >
                <div
                  key={`order-button-${comw}`}
                  className={`mbtn msm m-br order-button ${
                    comi ? "up" : "down"
                  }-button-marked-sort ${coma.length < 2 ? 'mdisabled' : ''}`}
                  onClick={() => bumerangMarks(comw)}
                >
                  {comi ? "↑" : "↓"}
                </div>
                <div
                  key={`mark-${comw}`}
                  className={`mbtn msm com-button${com ? "" : " m-ko"}${
                    isActive(comw, com, ccom?.wid) ? " mactive" : ""
                  }`}
                  onClick={
                    props.onClick
                      ? () => {
                          (props.onClick as Function)(comw);
                          forceUpdate();
                        }
                      : () => {
                          setCcom(com);
                          mylib.cconsl(com);
                          if (phase !== "translations") setPhase("com");
                          setIsOpened(false);
                        }
                  }
                >
                  {com ? com.name : "Песня не найдена"}
                  <span key={`com-number${comw}`} className="com-number">
                    {com
                      ? com.index == null
                        ? "?"
                        : com.index - -1 || ""
                      : ""}
                  </span>
                </div>
              </div>,
            ];
          })}
        </div>
      </div>
      <div
        key="paranja"
        className="paranja"
        onClick={() => setIsOpened(false)}
      />
    </>
  );
}
