import { useState } from "react";
import { useSelector } from "react-redux";
import useExer from "../../../../../complect/exer/useExer";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import { RootState } from "../../../../../shared/store";
import { cmExer } from "../../Cm.store";
import { useEditableMeetings } from "./useEditableMeetings";

const currContextSelector = (state: RootState) => state.cm.currentMeetingsContext;

export default function MeetingsCreator({ close }: { close: () => void }) {
  const [name, setName] = useState("");
  const { meetings } = useEditableMeetings();
  const { exec } = useExer(cmExer);
  const currContext = useSelector(currContextSelector);
  const [, currContextw] = meetings?.getContexts(currContext) || [];

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
