import { NavigationThrowNodeProps } from '../../../../../../complect/nav-configurer/Navigation.model';
import useQRMaster from '../../../../../../complect/qr-code/useQRMaster';
import { GamerNavData } from '../../../Gamer.model';
import { gamerOfflineRoomGames } from '../../../useGamerNav';
import GamerRoomContent from '../GamerRoomContent';
import { useGamerOfflineRoom } from './hooks/current-room';
import useGamerOfflineRoomsActions from './hooks/actions';
import { GamerOfflineRoomsContext } from './hooks/context';

export default function GamerOfflineRoom({ config }: { config: NavigationThrowNodeProps<GamerNavData> }) {
  const qrCodeState = useQRMaster();
  const currentOfflineRoom = useGamerOfflineRoom();
  const { removeOfflineGame, setRoomGame } = useGamerOfflineRoomsActions();

  return (
    <GamerOfflineRoomsContext.Provider value={qrCodeState}>
      {qrCodeState.qrNode}
      <GamerRoomContent
        config={config}
        isOwner={true}
        isManager={true}
        isInactive={false}
        room={currentOfflineRoom}
        games={gamerOfflineRoomGames}
        onGameChange={setRoomGame}
        onRoomRemove={removeOfflineGame}
      />
    </GamerOfflineRoomsContext.Provider>
  );
}
