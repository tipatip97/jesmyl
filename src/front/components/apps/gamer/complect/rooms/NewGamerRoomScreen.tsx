import { useState } from 'react';
import TheButton from '../../../../../complect/Button';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { useGamerOfflineRooms } from '../../molecules';
import { useGamerRoomActions } from './hooks/actions';
import useGamerOfflineRoomsActions from './offline-room/hooks/actions';
import { useGamerRooms } from './room/hooks/rooms';

export default function NewGamerRoomScreen({ close, offline }: { close: () => void; offline?: boolean }) {
  const [isInclusiveRoomName, setIsInclusiveRoomName] = useState(false);
  const { createRoom } = useGamerRoomActions();
  const rooms = useGamerRooms();
  const { addOfflineRoom } = useGamerOfflineRoomsActions();
  const [offlineRooms] = useGamerOfflineRooms();
  const [name, setName] = useState('');

  return (
    <div className="flex center column padding-giant-gap">
      <KeyboardInput
        placeholder="Название комнаты"
        onInput={value => {
          setName(value);
          setIsInclusiveRoomName(
            !!rooms?.some(({ name }) => name === value) || !!offlineRooms?.some(({ name }) => name === value),
          );
        }}
      />
      {isInclusiveRoomName && <div className="error-message">Комната с таким названием уже существует!</div>}
      <div className="margin-big-gap">
        {offline ? (
          <TheButton
            onClick={() => {
              addOfflineRoom(name);
              close();
            }}
          >
            Создать
          </TheButton>
        ) : (
          <SendButton
            title="Отправить"
            disabled={isInclusiveRoomName || !name}
            onSuccess={close}
            onSend={() => createRoom(name)}
          />
        )}
      </div>
    </div>
  );
}
