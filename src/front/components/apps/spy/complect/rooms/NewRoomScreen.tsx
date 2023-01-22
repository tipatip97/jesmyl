import { useEffect, useState } from "react";
import TheButton from "../../../../../complect/Button";
import useKeyboard from "../../../../../complect/keyboard/useKeyboard";
import SendButton from "../../../../../complect/SendButton";
import useEditableRooms from "./room/useEditableRooms";
import useSpyOfflineRooms from "./offline-room/useSpyOfflineRooms";
import useSpyRooms from "./room/useSpyRooms";

export default function NewRoomScreen({ close, offline }: { close: () => void, offline?: boolean }) {
  const [isInclusiveRoomName, setIsInclusiveRoomName] = useState(false);
  const { createRoom } = useEditableRooms();
  const { rooms } = useSpyRooms();
  const { offlineRooms, addOfflineRoom } = useSpyOfflineRooms();
  const [name, setName] = useState('');

  const input = useKeyboard()("NewRoomScreen", {
    placeholder: "Название комнаты",
    onInput: (value) => {
      setName(value);
      setIsInclusiveRoomName(
        !!rooms?.some(({ name }) => name === value) || !!offlineRooms?.some(({ name }) => name === value)
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
        {
          offline
            ? <TheButton onClick={() => {
              addOfflineRoom(name);
              close();
            }}>Создать</TheButton>
            : <SendButton
              title="Отправить"
              disabled={isInclusiveRoomName || !name}
              onSuccess={close}
              onSend={() => createRoom(name)}
            />
        }
      </div>
    </div>
  );
}
