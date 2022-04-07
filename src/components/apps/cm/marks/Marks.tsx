import { useState } from "react";
import EvaIcon from "../../../../complect/Eva";
import modalService from "../../../../complect/modal/Modal.service";
import mylib from "../../../../complect/my-lib/MyLib";
import { Com } from "../col/com/Com";
import AddToMeetingButton from "../complect/meetings/AddToMeetingButton";
import { useCcol, useMarks, usePhase } from "../hooks";
import { MarksProps } from "./Marks.model";

export default function Marks(props: MarksProps) {
  const [isOpened, setIsOpened] = useState(false);

  const [updates, riseUpUpdates] = useState(0);
  const forceUpdate = () => riseUpUpdates(updates + 1);

  const { marks, setMarks, markedComs, bumerangMarks } = useMarks();
  const [ccom, setCcom] = useCcol("com");
  const { setPhase } = usePhase();

  // g.marks.listenOnEmpty(isOpened => !isOpened && this.setState({ isOpened }));
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
              <button
                key="open-marks-button"
                id="open-marks-button"
                className="open-button mbtn msm m-ok"
                title="Открыть закладки"
                onClick={() => setIsOpened(!isOpened)}
              >
                <EvaIcon name="bookmark-outline" alt="m" />
              </button>,
              <button
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
                      // !g.meetings.isEditable ? null : 
                      [<AddToMeetingButton />]
                      // {
                      //   value: "Поделиться",
                      //   type: "button",
                      //   onClick: () => {
                      //     let description = "";
                      //     modalService.open({
                      //       title: "Поделиться",
                      //       description: "Нужно скопировать ссылку",
                      //       inputs: [
                      //         {
                      //           title: "Описание",
                      //           placeholder: "Необязательно",
                      //           onInput: ({ event }) =>
                      //             (description = event.target.value),
                      //         },
                      //         // {
                      //         //   title: "Ссылка",
                      //         //   value: () =>
                      //         //     applicanter.prepareStarterHref("marks_list", {
                      //         //       appAction: {
                      //         //         app: "cm",
                      //         //         type: "marksList",
                      //         //         val: {
                      //         //           s: g.marks.stack || [],
                      //         //           d: description,
                      //         //         },
                      //         //       },
                      //         //     }),
                      //         // },
                      //       ],
                      //     });
                      //   },
                      // },
                    ],
                  });
                }}
              >
                <EvaIcon name="settings-2-outline" alt="действия" />
              </button>,
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
                <button
                  key={`order-button-${comw}`}
                  className={`mbtn msm m-br order-button ${
                    comi ? "up" : "down"
                  }-button-marked-sort`}
                  disabled={coma.length < 2}
                  onClick={() => bumerangMarks(comw)}
                >
                  {comi ? "↑" : "↓"}
                </button>
                <button
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
                          setPhase("com");
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
                </button>
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
