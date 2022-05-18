import { useState } from "react";
import useAuth from "../../useAuth";

export default function MailToDevelopers({ close }: { close: () => void }) {
  const [text, setText] = useState("");
  const { writeToDevelopers } = useAuth();

  return (
    <div className="full-container flex column center padding-big-gap">
      <textarea
        className="full-width no-resize half-height"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
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
