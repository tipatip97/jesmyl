import { useEffect, useState } from "react";
import useKeyboard from "../../../../complect/keyboard/useKeyboard";
import SendButton from "../../../../complect/SendButton";
import useEditableRooms from "./useEditableRooms";
import useRooms from "./useRooms";

export default function NewRoomScreen({ close }: { close: () => void }) {
  const [isInclusiveRoomName, setIsInclusiveRoomName] = useState(false);
  const { createRoom } = useEditableRooms();
  const { cache } = useRooms();

  const input = useKeyboard()("NewRoomScreen", {
    placeholder: "Название комнаты",
    onInput: (value) => {
      setIsInclusiveRoomName(
        !!cache?.rooms?.some(({ name }) => name === value)
      );
    },
  });

  useEffect(() => () => input.remove(), []);

  return (
    <div className="full-container flex center column padding-giant-gap">
      {input.node}
      {isInclusiveRoomName && (
        <div className="error-message">
          Комната с таким названием уже существует!
        </div>
      )}
      <div className="margin-big-gap">
        <SendButton
          title="Отправить"
          disabled={isInclusiveRoomName || !input.value()}
          onSuccess={close}
          onSend={() => createRoom(input.value())}
        />
      </div>
    </div>
  );
}
