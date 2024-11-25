import { useMemo } from 'react';
import TheButton from '../../../../../../complect/Button';
import { useConfirm } from '../../../../../../complect/modal/confirm/useConfirm';
import { IconQrCodeStrokeRounded } from '../../../../../../complect/the-icon/icons/qr-code';
import RoomMemberFace from '../../../complect/GamerRoomMemberFace';
import { useGamerOfflineRoom } from '../../../complect/rooms/offline-room/hooks/current-room';
import { useGamerOfflineRoomsPassport } from '../../../complect/rooms/offline-room/hooks/passport';
import { useGamerOfflineRoomsPlayers } from '../../../complect/rooms/offline-room/hooks/players';
import SpyShowMyRole from '../SpyShowMyRole';
import { useSpyExcludeMember } from '../hooks/actions';
import { unsecretSpyRole } from '../hooks/locations';
import { useSpyOfflineRoomShareGameData } from './hooks/share-game';
import { useGamerOfflineCurrentRoomSpies } from './hooks/spies';
import { useSpyOfflineRoomState } from './hooks/state';
import useSpyOfflineRoomStateUpdaters from './hooks/updaters';

export default function SpyOfflineRoomStartedGame() {
  const players = useGamerOfflineRoomsPlayers();
  const passport = useGamerOfflineRoomsPassport();
  const currentOfflineRoom = useGamerOfflineRoom();
  const excludeMember = useSpyExcludeMember();
  const shareGameData = useSpyOfflineRoomShareGameData();
  const state = useSpyOfflineRoomState(currentOfflineRoom);
  const spies = useGamerOfflineCurrentRoomSpies(state, players);
  const [confirmNode, confirm] = useConfirm();

  const { finishGame } = useSpyOfflineRoomStateUpdaters();

  const myCleanRole = useMemo(() => {
    const myLogin = passport?.login;
    const myRole = myLogin && state?.roles?.[myLogin];
    return myRole ? unsecretSpyRole(myRole) : null;
  }, [passport, state?.roles]);

  return (
    <>
      {confirmNode}
      {currentOfflineRoom && (
        <>
          <h2 className="flex center">Игра #{state?.iterations}</h2>
          <div
            className="flex center flex-gap pointer"
            onClick={() => shareGameData()}
          >
            <IconQrCodeStrokeRounded />
            Оповестить
          </div>
          <div className="flex center margin-big-gap">
            {myCleanRole ? <SpyShowMyRole role={myCleanRole} /> : 'Ты не в игре'}
          </div>

          <h2 className="flex">Участники</h2>
          {players?.map(member => {
            return (
              <RoomMemberFace
                key={`m ${member.login}`}
                member={member}
                className={member.isInactive ? 'text-strike' : ''}
                descriptionPlus={
                  state?.retired && state.retired.includes(member.login)
                    ? spies && !spies.includes(member.login)
                      ? 'Выбыл'
                      : 'Шпион'
                    : ''
                }
                onClick={async () => {
                  if (await confirm('Участник выбыл?', 'Выбыл')) excludeMember(member.login);
                }}
              />
            );
          })}
          <div className="flex center">
            <TheButton
              className="margin-gap"
              onClick={() => finishGame()}
              confirm
            >
              Закончить игру
            </TheButton>
          </div>
        </>
      )}
    </>
  );
}
