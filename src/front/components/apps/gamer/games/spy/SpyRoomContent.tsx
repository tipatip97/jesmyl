import { useState } from 'react';
import SendButton from '../../../../../complect/sends/send-button/SendButton';
import { useBottomPopup } from '../../../../../complect/absolute-popup/bottom-popup/useBottomPopup';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import mylib from '../../../../../complect/my-lib/MyLib';
import useAuth from '../../../../index/useAuth';
import { GamerRoomMember } from '../../Gamer.model';
import GamerRoomMemberList from '../../complect/GamerRoomMemberList';
import useGamerMembersCanPlay from '../../complect/rooms/hooks/members-can-play';
import { useGamerCurrentRoom } from '../../complect/rooms/room/hooks/current-room';
import { useGamerRoomPlayers } from '../../complect/rooms/room/hooks/players';
import { useMyPossibilitiesCurrentRoom } from '../../complect/rooms/room/hooks/possibilities';
import SpyLocations from './SpyLocations';
import SpyRoomGameFinished from './SpyRoomGameFinished';
import SpyRoomLocationsInGame from './SpyRoomLocationsInGame';
import SpyRoomMemberInStartGameMore from './SpyRoomMemberInStartGameMore';
import { useSpyFinishGame, useSpyResetResults, useSpyStartGame } from './hooks/actions';
import { useSpyCurrentLocation } from './hooks/current-location';
import { useSpyActualLocationsNaked, useSpyLocations } from './hooks/locations';
import { useSpyMyRole } from './hooks/my-role';
import { useGamerCurrentRoomSpies } from './hooks/spies';
import { useSpyRoomState } from './hooks/state';
import SpyRoomStartedGame from './started/StartedGame';

export default function SpyRoomContent() {
  const auth = useAuth();
  const players = useGamerRoomPlayers();
  const locations = useSpyLocations();
  const actualLocations = useSpyActualLocationsNaked();
  const currentRoom = useGamerCurrentRoom();
  const state = useSpyRoomState(currentRoom);
  const spies = useGamerCurrentRoomSpies(state, players);
  const currentLocation = useSpyCurrentLocation(state, players);
  const myRole = useSpyMyRole(state, auth);
  const finishGame = useSpyFinishGame();
  const resetResults = useSpyResetResults();

  const startGame = useSpyStartGame();
  const [popupNode, , openPopup] = useBottomPopup<GamerRoomMember>((_, __, member) => (
    <SpyRoomMemberInStartGameMore member={member} />
  ));

  const possibilities = useMyPossibilitiesCurrentRoom();
  const amIManager = possibilities.isManager;
  const canPlayMembers = useGamerMembersCanPlay(currentRoom);
  const [spyCount, setSpyCount] = useState(1);

  if (!currentRoom) return null;

  return (
    <>
      {popupNode}
      {state?.roles ? (
        state.finisher ? (
          <SpyRoomGameFinished
            location={currentLocation}
            state={state}
            isMembersClickable={amIManager}
            members={canPlayMembers}
            onResetResults={amIManager && (() => resetResults())}
            spies={spies}
          />
        ) : !amIManager && state.retired?.includes(auth.login || '') ? (
          spies?.includes(auth.login || '') ? (
            'Тебя разоблачили!'
          ) : (
            'Ты больше не в игре. Не сообщай, пожалуйста, название локации до конца игры'
          )
        ) : (
          <SpyRoomStartedGame
            iterations={state.iterations}
            myRole={myRole}
            retired={state.retired ?? []}
            isMeInactive={possibilities.isInactive}
            members={canPlayMembers}
            spies={spies}
            onFinishGame={amIManager && finishGame}
            onMemberClick={amIManager && openPopup}
          />
        )
      ) : !locations?.length ? (
        <div className="margin-big-gap text-center">Локаций нет</div>
      ) : (
        <>
          <GamerRoomMemberList />
          <SpyRoomLocationsInGame />
          {!actualLocations.length ? (
            <div className="color--3 margin-big-gap text-center">Свободных локаций не осталось</div>
          ) : (
            amIManager && (
              <>
                <h2 className="flex">
                  Новая игра
                  {players && ` (${players.length} ${mylib.declension(players.length, 'игрок', 'игрока', 'игроков')})`}
                </h2>
                <div className="full-width">
                  <span>Количество шпионов:</span>
                  <KeyboardInput
                    type="number"
                    onInput={value => setSpyCount(+value)}
                    value={'' + spyCount}
                  />
                </div>
                {players && (
                  <div className="flex center padding-giant-gap">
                    <SendButton
                      title="Начать игру"
                      disabled={!spyCount || players.length < spyCount}
                      onSend={() => startGame(spyCount)}
                    />
                  </div>
                )}
                <SpyLocations />
              </>
            )
          )}
        </>
      )}
    </>
  );
}
