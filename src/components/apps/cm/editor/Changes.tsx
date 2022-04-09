import { useState } from "react";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import modalService from "../../../../complect/modal/Modal.service";
import mylib from "../../../../complect/my-lib/MyLib";
import { actions } from "../Cm.complect";
import { cmExer } from "../Cm.store";
import { Com } from "../col/com/Com";
import { Meeting } from "../meetings/Meeting";

const totalArgs = {
  getMeetingDate: (begin: number, end: number) =>
    new Meeting({ b: begin, e: end } as never).getDate(),
  comLang: (langi: number) => Com.langs[langi],
};

export default function Changes() {
  cmExer.setLocals();
  const [sendDisabled, setSendDisabled] = useState(false);
  const [updates, setUpdates] = useState(0);
  const forceUpdate = () => setUpdates(updates + 1);

  const execs = cmExer.execs || [];
  const isSomeRejected = execs.some((ex) => ex.errors);
  const isSomeIncorrect = execs.some((ex) => ex.internalError);
  const isSomeWarning = execs.some((ex) => ex.internalWarning);
  const isSomeDelRejected = execs.some((ex) => ex.errors && ex.del);

  return (
    <>
      <div
        key="send-execs-buttons"
        className="send-execs-buttons mgroup msm"
        onContextMenu={() => {
          if (
            cmExer.isThereLocals() &&
            modalService.confirm("Удалить сохранённые изменения?")
          ) {
            cmExer.removeLocals();
            forceUpdate();
          }
        }}
      >
        <button
          key="send-execs"
          className={`mbtn ${isSomeWarning ? "m-ko" : ""}`}
          disabled={
            isSomeIncorrect || sendDisabled || !execs.some((ex) => !ex.del)
          }
          onClick={async () => {
            if (!execs.some((ex) => !ex.del)) return;
            if (
              !(await modalService.confirm(`Отправить отмеченные изменения?`))
            )
              return;
            setSendDisabled(true);

            cmExer.load(
              () => {
                forceUpdate();
                setTimeout(async () => {
                  if (
                    cmExer.execs.some((ex) => ex.del) &&
                    (await modalService.confirm(
                      `Сбросить неотмеченные изменения?`
                    ))
                  )
                    cmExer.execs = [];
                  cmExer.removeLocals();
                }, 10);
              },
              null,
              () => setSendDisabled(false)
            );
          }}
        >
          svg('paper-plane-outline', 'Отправить отмеченные')
        </button>
        {isSomeRejected ? (
          <button
            key="save-local-rejected"
            className="save-local-rejected mbtn m-no"
            onClick={async () => {
              if (
                isSomeDelRejected &&
                !(await modalService.confirm(
                  "Сбросить все отклонённые изменения?"
                ))
              )
                return;

              if (isSomeDelRejected) {
                cmExer.removeAll();
                // mylib.showToast("Отклонённые изменения удалены.");
              } else {
                cmExer.saveLocally();
                // mylib.showToast("Отклонённые изменения сохранены.");
              }
              forceUpdate();
            }}
          >
            {isSomeDelRejected ? (
              <EvaIcon name="trash-2-outline" alt="Сбросить отклонённые" />
            ) : (
              <EvaIcon name="save-outline" alt="Сохранить отклонённые" />
            )}
          </button>
        ) : null}
      </div>
      ,
      {execs.map((exec, execi) => {
        const isNotInRights =
          !exec.errors &&
          ((rights) =>
            rights && !rights.some((right) => right.action === exec.action))(
            actions
          );

        return (
          <div
            key={`exec-item-${execi}`}
            onClick={() => {
              exec.del = !exec.del;
              forceUpdate();
            }}
            style={{
              border:
                exec.errors || exec.internalError
                  ? "red solid 1px"
                  : isNotInRights || exec.internalWarning
                  ? "orange solid 1px"
                  : undefined,
            }}
          >
            <input
              key={`reason-checkbox-${exec.id}`}
              type="checkbox"
              checked={!exec.del}
            />
            <label
              key={`reason=label-${exec.id}`}
              dangerouslySetInnerHTML={{
                __html: mylib.stringTemplater(
                  actions?.find(({ action }) => action === exec.action)?.title ||
                    "",
                  mylib.overlap(totalArgs, exec.args || {})
                ),
              }}
            />
            {isNotInRights ? (
              <div
                key={`warning-message-${exec.strack}`}
                style={{
                  color: "orange",
                }}
              >
                Неизвестное действие
              </div>
            ) : null}
            {exec.errors || exec.internalError || exec.internalWarning ? (
              <div
                key={`reason=label-error-${exec.strack}`}
                style={{
                  color: "red",
                  whiteSpace: "pre-wrap",
                }}
                onClick={() => mylib.dconsl(exec)}
              >
                <p>{exec.internalError || ""}</p>
                <p>
                  {exec.errors || ""}
                  {exec.reason ? `:${exec.reason[0]}` : ""}
                </p>
                <p style={{ color: "orange" }}>{exec.internalWarning || ""}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
