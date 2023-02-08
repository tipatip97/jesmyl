import { useEffect, useMemo, useState } from "react";
import KeyboardInput from "../../../../../../complect/keyboard/KeyboardInput";
import mylib from "../../../../../../complect/my-lib/MyLib";
import SendButton from "../../../../../../complect/SendButton";
import { useWid } from "../../../../../../complect/useWid";
import useIsRedactArea from "../../../complect/useIsRedactArea";
import { leaderExer } from "../../../Leader.store";

export default function TimerNameListConfigurer({
  timerNames,
  onUpdate,
  redact,
  redactable,
  onSend,
}: {
  timerNames?: string[];
  redact?: boolean;
  redactable?: boolean;
  onUpdate?: (names: string[] | und) => void;
  onSend?: (names: string[]) => Promise<unknown> | und;
}) {
  const id = useWid();
  const [names, updateNames] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const { editIcon, isRedact, setIsRedact } = useIsRedactArea(
    redactable,
    redact
  );

  const redactNames = useMemo(() => {
    return names.length ? names : timerNames ?? [];
  }, [names, timerNames]);

  const finalNames = useMemo(() => {
    return mylib.isEq(
      timerNames,
      redactNames.filter((name) => name)
    )
      ? undefined
      : redactNames;
  }, [redactNames, timerNames]);

  useEffect(() => onUpdate?.(finalNames), [finalNames]);
  if (!leaderExer.actionAccessedOrNull("updateGameTimerNames")) return null;

  return (
    <div className="margin-gap">
      <h2 className="flex flex-gap">
        Названия таймеров
        {editIcon}
      </h2>
      {isRedact ? (
        <>
          <div className={isSending ? "disabled" : ""}>
            {redactNames.map((name, namei) => {
              return (
                <div key={`namei ${namei}`} className="margin-gap-v">
                  {
                    <KeyboardInput
                      value={name}
                      onChange={(value) => {
                        const newNames = [...redactNames];
                        newNames[namei] = value;
                        updateNames(newNames);
                      }}
                    />
                  }
                </div>
              );
            })}
            {!redactNames.some((name) => !name) &&
              <KeyboardInput
                placeholder="Новое название точки"
                onChange={(value) => updateNames([...redactNames, value])}
              />}
          </div>
          {onSend && (
            <div>
              {finalNames && (
                <SendButton
                  title="Отправить названия"
                  confirm
                  onFailure={() => setIsSending(false)}
                  onSuccess={() => {
                    setIsSending(false);
                    setIsRedact(false);
                  }}
                  onSend={() => {
                    setIsSending(true);
                    return onSend(finalNames.filter((name) => name));
                  }}
                />
              )}
            </div>
          )}
        </>
      ) : (
        timerNames?.map((name, namei) => {
          return <div key={`namei${namei}`}>{name}</div>;
        })
      )}
    </div>
  );
}
