import { useState } from "react";
import KeyboardInput from "../../../../complect/keyboard/KeyboardInput";
import useAuth from "../../useAuth";

export default function MailToDevelopers({ close }: { close: () => void }) {
  const [text, setText] = useState("");
  const { writeToDevelopers } = useAuth();

  return (
    <div className="full-container flex column center padding-big-gap">
      <KeyboardInput multiline onInput={(value) => setText(value)} />
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
