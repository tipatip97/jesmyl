import { useState } from "react";
import useExer from "../../../../../complect/exer/useExer";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { cmExer } from "../../Cm.store";
import useCmNav from "../../base/useCmNav";
import { useEditableMeetings } from "./useEditableMeetings";

export default function MeetingsCreator({ close }: { close: () => void }) {
  const [name, setName] = useState("");
  const { meetings } = useEditableMeetings();
  const { exec } = useExer(cmExer);
  const { appRouteData: { eventContext = [] } } = useCmNav();
  
  const [, currContextw] = meetings?.getContexts(eventContext) || [];

  return (
    <div className="full-container flex column full-height padding-big-gap center">
      <div className="full-width margin-gap-v flex">
        <div className="margin-gap-h">Название</div>
        <KeyboardInput
          className="full-width"
          value={name}
          onChange={(value) => setName(value)}
        />
      </div>
      <button
        disabled={!name || !currContextw || !meetings}
        onClick={() => {
          meetings &&
            currContextw &&
            exec(meetings.addEvent(name, currContextw));
          close();
        }}
      >
        Создать
      </button>
      {!currContextw || !meetings ? (
        <div className="error-message">
          Не возможно создать событие вне контекста
        </div>
      ) : null}
    </div>
  );
}
