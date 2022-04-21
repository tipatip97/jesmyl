import { useEffect, useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../complect/modal/Modal.service";
import mylib from "../../../../complect/my-lib/MyLib";
import { isAccessed } from "../Cm.complect";
import { useCcat, useCcom } from "../col/useCcol";
import { useCols } from "../cols/useCols";
import { ePhases } from "./Editor.complect";

export default function ENditor() {
  const [cols] = useCols();
  const [ccom] = useCcom();
  const [ccat] = useCcat();

  const cats = cols?.cats;

  const [currentEPhase, setCurrentEPhase] = useState("a");
  const [comName, setComName] = useState(ccom?.name || "");
  const [comRemoved, setComRemoved] = useState(ccom?.removed || false);
  const [comNatives, setComNatives] = useState<[string, number, number]>([
    "",
    0,
    0,
  ]);
  const [removedNativeNumber, toRemoveNativeNumber] = useState<
    [string, number]
  >(["", 0]);

  const getEPhase = () => {
    const [, , content] =
      ePhases.find(([ephasen]) => currentEPhase === ephasen) || [];
    return mylib.func(content).call({ coln: currentEPhase });
  };

  useEffect(() => ccom?.rename(comName), [comName]);
  useEffect(() => ccom?.remove(), [comRemoved]);
  useEffect(() => ccom?.setNativeNumber(comNatives), [comNatives]);
  useEffect(
    () => ccom?.removeNativeNumber(removedNativeNumber),
    [removedNativeNumber]
  );

  return ccom == null ? (
    <h1
      style={{
        color: "red",
      }}
    >
      Песня не найдена
    </h1>
  ) : (
    <>
      <div>
        {[
          <input
            style={{
              backgroundColor: ccom.removed ? "red" : undefined,
              borderColor: ccom.incorrectName ? "red" : undefined,
            }}
            className={`composition-title col-title ${
              ccat?.removed || !isAccessed("catRename") ? "inactive" : ""
            }`}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              setComName(event.target.value)
            }
            value={comName}
            placeholder="Песня без названия"
          />,
          <div className="binds-list-wrapper">
            <div
              key="binds-list mgroup"
              className="binds-list mgroup scrollable-x no-scroll"
            >
              {isAccessed("comDel") && (
                <div
                  className="mbtn m-ko msm"
                  onClick={() => {
                    modalService
                      .confirm(`Удалить Песню "${ccom.name}"?`)
                      .then((isRemove) => isRemove && setComRemoved(true));
                  }}
                >
                  <EvaIcon name="trash-2-outline" alt="Удалить" />
                </div>
              )}
              {cats?.map((cat) => {
                return !cat.wid ||
                  (cat.track && cat.track[0] !== ">w") ? null : (
                  <div
                    key={`cat-for-bind-${cat.wid}`}
                    className={`mbtn msm m-ok${
                      ~(cat.stack?.indexOf(ccom.wid) ?? -1) ? ` mactive` : ``
                    }${ccom.refs && ccom.refs[cat.wid] === 0 ? " m-no" : ""}`}
                    onClick={async () => {
                      const incorrectNumberReg = /^0|\D|^$/;

                      if (cat.track != null) {
                        await modalService.open((resolve) => ({
                          title: `Номер в сборнике`,
                          description:
                            !ccom.refs || ccom.refs[cat.wid] == null
                              ? `Добавь, пожалуйста, нативный номер для песни "${ccom.name}", соответственно сборнику "${cat.name}"`
                              : `Изменение нативного номера песни "${ccom.name}" по сборнику "${cat.name}"`,
                          inputs: [
                            {
                              value: (
                                (ccom.refs && ccom.refs[cat.wid]) ||
                                ""
                              ).toString(),
                              type: "number",
                              onInput: ({ input, setError }) => {
                                if (input.value.match(incorrectNumberReg)) {
                                  setError(
                                    "Некорректное значение. Принимаются только целые цифры больше нуля, не начинающиеся на ноль!"
                                  );
                                  return false;
                                } else {
                                  setError("");
                                }
                              },
                            },
                          ],
                          buttons: [
                            {
                              title: ({ getInput }) =>
                                `Запомнить${
                                  getInput()?.value?.match(incorrectNumberReg)
                                    ? ""
                                    : getInput()?.value
                                    ? ` №${getInput()?.value || "?"}`
                                    : ""
                                }`,
                              onClick: ({ getInput }) => {
                                setComNatives([
                                  cat.name ?? "",
                                  cat.wid,
                                  parseInt(getInput()?.value || ""),
                                ]);

                                resolve(false);
                              },
                              disabled: ({ getInput }) =>
                                !!getInput()?.value?.match(incorrectNumberReg),
                              hidden: () => !!(ccom.refs && ccom.refs[cat.wid]),
                            },
                            {
                              title: () => "Забыть нативный номер",
                              onClick: () => {
                                toRemoveNativeNumber([cat.name || "", cat.wid]);

                                resolve(false);
                              },
                              hidden: () => !ccom.refs || !ccom.refs[cat.wid],
                            },
                          ],
                        }));
                      } // else cat.toggleCom(ccom);

                      // this.fu();
                      // g.ss();
                    }}
                  >
                    {cat.name}{" "}
                    {ccom.refs && ccom.refs[cat.wid]
                      ? `№${ccom.refs[cat.wid]}`
                      : ""}
                  </div>
                );
              })}
            </div>
          </div>,
        ].filter((_, parti) => (ccom.removed ? parti === 0 : true))}
      </div>
      {ccom.texts?.length === 0 ? (
        <textarea
          className="text-heap-textarea"
          // onPaste={(event) => {
          //   ccom.parseBlocksFromClipboard(event);
          //   g.ss();
          // }}
          // onInput={(event) => {
          //   const value = event.target.value;
          //   const isEnLetter = /[a-z]/i.test(value);

          //   ccom.add("c", isEnLetter ? value : "");
          //   ccom.add("t", isEnLetter ? "" : value);

          //   g.ss();
          //   setCurrentEPhase(isEnLetter ? "c" : "");
          // }}
          placeholder="Для начала можно вставить текст песни в это поле. Текст должен быть разделён двумя переносами строк между блоками (припевом, куплетом, и т.д.). Он может содержать названия типа блоков (например: Куплет 1. или Припев, и т.д.)."
        />
      ) : (
        [
          <div className="com-editor-wrapper">
            {getEPhase()}
            {/* {((ccat.wraps || [])[0] || {}).errors && (
              <div className="white-space-pre error-text">
                {(
                  (ccat.wraps.find(({ com }) => com.wid === ccom.wid) || {})
                    .errors || []
                ).map((text: string, texti: number) => (
                  <div key={`errors in com ${texti}`}>{text}</div>
                ))}
              </div>
            )} */}
          </div>,
          <div className="mgroup scrollable-x no-scroll">
            {ePhases.map(([ephasen, ephase]) => {
              return (
                <div
                  key={`edit-phase-${ephasen}`}
                  id={`edit-phase-${ephasen}`}
                  className={`mbtn m-ok ${
                    currentEPhase === ephasen ? "mactive" : ""
                  } msm`}
                  onClick={() => setCurrentEPhase(ephasen)}
                >
                  {ephase}
                </div>
              );
            })}
          </div>,
        ]
      )}
    </>
  );
}
