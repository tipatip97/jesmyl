import { useState } from "react";
import KeyboardInput from "../../../../../../complect/keyboard/KeyboardInput";
import SendButton from "../../../../../../complect/SendButton";
import useIsRedactArea from "../../../complect/useIsRedactArea";
import { leaderExer } from "../../../Leader.store";
import useLeaderContexts from "../../contexts/useContexts";
import useLeaderGroups from "../useGroups";

export default function LeaderGroupFields() {
  const { ccontext } = useLeaderContexts();
  const { cgroup } = useLeaderGroups();
  const [redactFields, updateRedactFields] = useState<
    Record<string, string | und>
  >({});
  const canRedact = leaderExer.actionAccessedOrNull("setContextGroupFields");
  const { editIcon, isRedact, setIsRedact } = useIsRedactArea(
    true,
    null,
    canRedact
  );
  const fields = cgroup?.getFieldValues() || {};

  return (
    <>
      <h2 className="flex flex-gap">
        Специальные поля
        {editIcon}
      </h2>
      {ccontext?.blanks?.map(({ name, key, def, value }, blanki) => {
        if (value || !canRedact || !isRedact)
          return (
            <div key={`blanki ${blanki}`} className="flex flex-gap">
              <div className="nowrap">{name}:</div>
              <div className="color--3 pre-line">{fields[key] || "-"}</div>
            </div>
          );

        return (
          <div key={`blanki* ${blanki}`} className="flex flex-gap margin-gap">
            <div className="nowrap">{name}</div>
            <KeyboardInput
              value={fields[key]}
              multiline
              onChange={(value) => {
                let val: und | string = value;

                if (fields[key] === value) val = undefined;
                updateRedactFields({ ...redactFields, [key]: val });
              }}
            />
          </div>
        );
      })}
      <div className="flex center margin-big-gap">
        {Object.entries(redactFields).some(
          ([key, val]) => fields[key] !== val
        ) && (
            <SendButton
              title="Отправить значения"
              onSuccess={() => {
                updateRedactFields({});
                setIsRedact(false);
              }}
              onSend={() => {
                if (cgroup && ccontext)
                  return new Promise((res, rej) =>
                    leaderExer.send(
                      {
                        action: "setContextGroupFields",
                        method: "set_all",
                        args: {
                          value: redactFields,
                          groupw: cgroup.wid,
                          contextw: ccontext.wid,
                        },
                      },
                    ).then(res).catch(rej)
                  );
              }}
            />
          )}
      </div>
    </>
  );
}
