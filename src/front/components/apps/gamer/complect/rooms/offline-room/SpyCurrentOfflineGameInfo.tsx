import styled from 'styled-components';
import { IconQrCodeStrokeRounded } from '../../../../../../complect/the-icon/icons/qr-code';
import SpyShowMyRole from '../../../games/spy/SpyShowMyRole';
import { useSpyOfflineRoomReshareGameData } from '../../../games/spy/offline-room/hooks/share-game';
import { useJoinedOfflineGame } from '../../../molecules';

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
              Поделиться <IconQrCodeStrokeRounded />
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
