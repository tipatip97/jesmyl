import { useEffect, useMemo, useState } from "react";
import useKeyboard from "../../../../../../complect/keyboard/useKeyboard";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { useWid } from "../../../../../../complect/useWid";
import SendButton from "../../../complect/SendButton";
import useIsRedactArea from "../../../complect/useIsRedactArea";
import { liderExer } from "../../../Lider.store";
import useGames from "../useGames";
import { GameTimerConfigurable } from "./GameTimer.model";
import TimerCompetitionsSelector from "./TimerCompetitionsSelector";

export default function TimerFieldsConfigurer({
  timerFields,
  onUpdate,
  redact,
  redactable,
  onSend,
}: {
  timerFields?: GameTimerConfigurable;
  redact?: boolean;
  redactable?: boolean;
  onUpdate?: (names: string[] | und) => void;
  onSend?: (names: GameTimerConfigurable) => Promise<unknown> | und;
}) {
  const id = useWid();
  const inputGenerator = useKeyboard();
  const [names, updateNames] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const { editIcon, isRedact, setIsRedact } = useIsRedactArea(
    redactable,
    redact
  );
  const { cgame } = useGames();
  const teams = cgame?.teams || [];

  if (!liderExer.actionAccessedOrNull("updateGameTimerFields")) return null;

  return (
    <div className="margin-gap">
      <h2 className="flex flex-gap">
        Значения полей в таймерах
        {editIcon}
      </h2>
      <div className={isSending ? "disabled" : ""}>
        <TimerCompetitionsSelector
          joins={0}
          teams={teams}
          isRedact={isRedact}
          onSelect={() => {}}
        />
      </div>
      {onSend && (
        <div>
          <SendButton
            title="Отправить значения"
            confirm
            onFailure={() => setIsSending(false)}
            onSuccess={() => {
              setIsSending(false);
              setIsRedact(false);
            }}
            onSend={() => {
              setIsSending(true);
              // return onSend(finalNames.filter((name) => name));
            }}
          />
        </div>
      )}
    </div>
  );
}
