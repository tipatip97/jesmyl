import { useState } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import SendButton from "../../../complect/SendButton";
import { liderExer } from "../../../Lider.store";
import useLeaderContexts from "../../contexts/useContexts";
import useLeaderGroups from "../useGroups";

export default function LeaderGroupFields() {
  const { ccontext } = useLeaderContexts();
  const { cgroup } = useLeaderGroups();
  const inputGenerator = useKeyboard();
  const [isRedact, setIsRedact] = useState(false);
  const [redactFields, updateRedactFields] = useState<
    Record<string, string | und>
  >({});
  const canRedact = liderExer.actionAccessedOrNull("setContextGroupFields");
  const fields = cgroup?.fields || {};

  return (
    <>
      <h2 className="flex flex-gap">
        Специальные поля
        {canRedact && !isRedact && (
          <EvaIcon
            name="edit-outline"
            className="pointer"
            onClick={() => setIsRedact(true)}
          />
        )}
      </h2>
      {ccontext?.blanks?.map(({ name, key, def, value }, blanki) => {
        if (value || !canRedact || !isRedact)
          return (
            <div key={`blanki ${blanki}`} className="flex flex-gap">
              <div className="nowrap">{name}:</div>
              <div className="color--3 pre-line">
                {value || fields[key] || "-"}
              </div>
            </div>
          );
        const valueInput = inputGenerator(
          `${ccontext.wid} ${cgroup?.wid} ${key}`,
          {
            initialValue: def || fields[key],
            multiline: true,
            onInput: (value) => {
              let val: und | string = value;

              if (fields[key] && fields[key] !== value) val = undefined;
              updateRedactFields({ ...redactFields, [key]: val });
            },
          }
        );

        return (
          <div key={`blanki* ${blanki}`} className="flex flex-gap margin-gap">
            <div className="nowrap">{name}</div>
            {valueInput.node}
          </div>
        );
      })}
      <div className="flex center margin-big-gap">
        {!Object.values(redactFields).filter((val) => val).length || (
          <SendButton
            title="Отправить значения"
            onSuccess={() => {
              updateRedactFields({});
              setIsRedact(false);
            }}
            onSend={() => {
              if (cgroup && ccontext)
                return new Promise((res, rej) =>
                  liderExer.send(
                    {
                      action: "setContextGroupFields",
                      method: "other",
                      args: {
                        value: redactFields,
                        groupw: cgroup.wid,
                        contextw: ccontext.wid,
                      },
                    },
                    res,
                    rej
                  )
                );
            }}
          />
        )}
      </div>
    </>
  );
}
