import { useRef, useState } from 'react';
import TheButton from '../../../../../../complect/Button';
import Dropdown from '../../../../../../complect/dropdown/Dropdown';
import EvaButton from '../../../../../../complect/eva-icon/EvaButton';
import mylib from '../../../../../../complect/my-lib/MyLib';
import GamerRoomMemberList from '../../../complect/GamerRoomMemberList';
import { useGamerRoomPlayers } from '../../../complect/rooms/room/hooks/players';
import { useMyPossibilitiesCurrentRoom } from '../../../complect/rooms/room/hooks/possibilities';
import { useAliasStartRound } from '../hooks/execs';
import { useAliasRoomState } from '../hooks/state';
import { AliasRoomTeamsConfigures, initialAliasTeamsPropsPart } from './TeamsConfigures';
import { AliasRoomWordsConfigures, initialAliasDictsPropsPart } from './words/WordsConfigures';

const roundTimesItems = [10, 60, 120, 180].map((id) => ({ title: `${id} сек.`, id }));

export const AliasRoomInitialContent = () => {
  const state = useAliasRoomState();
  const players = useGamerRoomPlayers();
  const startRound = useAliasStartRound(state, players);

  const [roundTime, setRoundTime] = useState(state?.roundTime || 60);
  const myPossibilities = useMyPossibilitiesCurrentRoom();
  const [isTeamsRejToStart, setIsTeamsRejToStart] = useState(false);
  const [isDictsRejToStart, setIsDictsRejToStart] = useState(false);
  const dictsRef = useRef(initialAliasDictsPropsPart);
  const teamsRef = useRef(initialAliasTeamsPropsPart);

  const isCantStartRound = isDictsRejToStart || isTeamsRejToStart;

  return (
    <>
      <GamerRoomMemberList />
      {myPossibilities.isManager && (
        <>
          <h2>
            Настройки (
            {players && (
              <>
                {players.length} {mylib.declension(players.length, 'участник', 'участника', 'участников')}
              </>
            )}
            )
          </h2>
          <AliasRoomWordsConfigures setIsDictsRejToStart={setIsDictsRejToStart} stateRef={dictsRef} />
          <div className="flex flex-gap margin-gap-v dropdown-ancestor">
            <EvaButton name="clock-outline" className="nowrap" postfix="Время раунда" />
            <Dropdown id={roundTime} items={roundTimesItems} onSelectId={setRoundTime} />
          </div>
          <AliasRoomTeamsConfigures
            isCantStartRound={isCantStartRound}
            setIsTeamsRejToStart={setIsTeamsRejToStart}
            stateRef={teamsRef}
          />
          <div className="flex center margin-big-gap">
            <TheButton
              disabled={isCantStartRound}
              onClick={() =>
                startRound({
                  ...dictsRef.current,
                  ...teamsRef.current,
                  roundTime,
                })
              }
            >
              Начать раунд
            </TheButton>
          </div>
        </>
      )}
    </>
  );
};
