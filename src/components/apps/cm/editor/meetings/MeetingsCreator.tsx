import { useState } from "react";
import { useSelector } from "react-redux";
import useExer from "../../../../../complect/exer/useExer";
import { RootState } from "../../../../../shared/store";
import { cmExer } from "../../Cm.store";
import { useEditableMeetings } from "./useEditableMeetings";

export default function MeetingsCreator({ close }: { close: () => void }) {
  const [name, setName] = useState("");
  const { meetings } = useEditableMeetings();
  const { exec } = useExer(cmExer);
  const currContext = useSelector(
    (state: RootState) => state.cm.currentMeetingsContext
  );
  const [, currContextw] = meetings?.getContexts(currContext) || [];

  return (
    <div className="full-container flex column full-height padding-big-gap center">
      <div className="full-width margin-gap-v flex">
        <div className="margin-gap-h">Название</div>
        <input
          className="full-width"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button
        disabled={!currContextw || !meetings}
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
