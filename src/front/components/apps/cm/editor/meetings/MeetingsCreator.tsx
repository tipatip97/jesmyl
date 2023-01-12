import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useExer from "../../../../../complect/exer/useExer";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
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
  const input = useKeyboard()("MeetingsCreator", {
    className: "full-width",
    initialValue: name,
    onChange: (value) => setName(value),
  });

  useEffect(() => () => input.remove(), [input]);

  return (
    <div className="full-container flex column full-height padding-big-gap center">
      <div className="full-width margin-gap-v flex">
        <div className="margin-gap-h">Название</div>
        {input.node}
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
