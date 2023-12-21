import { useBottomPopup } from '../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import GamerMore from './complect/GamerMore';
import PhaseGamerContainer from './complect/PhaseGamerContainer';
import GamerOfflineRoomList from './complect/rooms/offline-room/GamerOfflineRoomList';
import GamerRoomList from './complect/rooms/room/GamerRoomList';

export default function Gamer() {
  const [popupNode, openPopup] = useBottomPopup(() => <GamerMore />);

  return (
    <PhaseGamerContainer
      className="spy-locations"
      withoutBackButton
      headTitle="Комнаты"
      onMoreClick={openPopup}
      content={
        <>
          {popupNode}
          <GamerRoomList />
          <GamerOfflineRoomList />
        </>
      }
    />
  );
}
