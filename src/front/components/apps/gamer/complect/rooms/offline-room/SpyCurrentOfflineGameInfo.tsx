import styled from 'styled-components';
import EvaIcon from '../../../../../../complect/eva-icon/EvaIcon';
import SpyShowMyRole from '../../../games/spy/SpyShowMyRole';
import { useJoinedOfflineGame } from '../../../games/spy/offline-room/hooks/join-game';
import { useSpyOfflineRoomReshareGameData } from '../../../games/spy/offline-room/hooks/share-game';

export default function SpyCurrentOfflineGameInfo() {
  const offlineGame = useJoinedOfflineGame();
  const reshareGameData = useSpyOfflineRoomReshareGameData();

  return (
    <>
      {offlineGame && (
        <>
          <OfflineGame>
            <h3 className="flex center">Игра #{offlineGame.iterations}</h3>
            <div
              className="flex center flex-gap pointer"
              onClick={() => reshareGameData()}
            >
              Поделиться <EvaIcon name="qr-code" />
            </div>
            <SpyShowMyRole role={offlineGame.location} />
          </OfflineGame>
        </>
      )}
    </>
  );
}

const OfflineGame = styled.div`
  border: dashed 2px var(--color--3);
`;
