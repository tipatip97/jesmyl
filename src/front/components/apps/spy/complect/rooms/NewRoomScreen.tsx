import { useState } from "react";
import TheButton from "../../../../../complect/Button";
import KeyboardInput from "../../../../../complect/keyboard/KeyboardInput";
import SendButton from "../../../../../complect/SendButton";
import useSpyOfflineRooms from "./offline-room/useSpyOfflineRooms";
import useEditableRooms from "./room/useEditableRooms";
import useSpyRooms from "./room/useSpyRooms";

export default function NewRoomScreen({ close, offline }: { close: () => void, offline?: boolean }) {
  const [isInclusiveRoomName, setIsInclusiveRoomName] = useState(false);
  const { createRoom } = useEditableRooms();
  const { rooms } = useSpyRooms();
  const { offlineRooms, addOfflineRoom } = useSpyOfflineRooms();
  const [name, setName] = useState('');

  return (
    <div className="full-container flex center column padding-giant-gap">
      <KeyboardInput
        placeholder="Название комнаты"
        onInput={(value) => {
          setName(value);
          setIsInclusiveRoomName(
            !!rooms?.some(({ name }) => name === value) || !!offlineRooms?.some(({ name }) => name === value)
          );
        }}
      />
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
