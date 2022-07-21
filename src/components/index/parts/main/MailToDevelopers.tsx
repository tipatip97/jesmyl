import { useState } from "react";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import useAuth from "../../useAuth";

export default function MailToDevelopers({ close }: { close: () => void }) {
  const [text, setText] = useState("");
  const { writeToDevelopers } = useAuth();
  const input = useKeyboard()("write-to developers", {
    multiline: true,
    onInput: (value) => setText(value),
  });

  return (
    <div className="full-container flex column center padding-big-gap">
      {input.node}
      <button
        disabled={!text}
        className="margin-gap"
        onClick={() => {
          writeToDevelopers(text);
          close();
        }}
      >
        Отправить
      </button>
    </div>
  );
}
