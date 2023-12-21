import { useState } from 'react';
import SourceBased from '../../../../../complect/SourceBased';
import Dropdown from '../../../../../complect/dropdown/Dropdown';
import KeyboardInput from '../../../../../complect/keyboard/KeyboardInput';
import mylib, { AddRestMode } from '../../../../../complect/my-lib/MyLib';
import { TeamGameImportable } from '../../Leader.model';
import useLeaderContext from '../contexts/useContexts';
import HumanFace from '../people/HumanFace';
import { GameTeamImportable } from './teams/GameTeams.model';
import TheGameTeam from './teams/TheGameTeam';
import TheButton from '../../../../../complect/Button';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import { LeaderCleans } from '../LeaderCleans';
import { useGetRandomTwiceName } from '../../../../../complect/hooks/random-twice-name/useGetRandomTwiceName';

export default function GameTeamListComputer({
  onUpdate,
  noComments,
  game,
}: {
  game: TeamGameImportable;
  onUpdate: (teams: GameTeamImportable[]) => void;
  noComments?: boolean;
}) {
  const { contextMembers } = useLeaderContext();
  const [teams, updateTeams] = useState<GameTeamImportable[] | und>();
  const [teamsCount, setTeamsCount] = useState(1);
  const [addRestMode, setAddRestMode] = useState<AddRestMode>('strong');
  const nameRandomizer = useGetRandomTwiceName();

  const readyMembers = LeaderCleans.membersReadyToPlay(contextMembers);
  const [isShowCantPlayers, setIsShowCantPlayers] = useState(false);

  if (!readyMembers) return null;

  const countInTeam = teamsCount && readyMembers.length / teamsCount;

  const truncated = Math.trunc(countInTeam);
  const restCount = readyMembers?.length % teamsCount;
  const restLabelPrefix = mylib.declension(
    restCount,
    `Оставшегося ${restCount} участника`,
    `Оставшихся ${restCount} участника`,
    `Оставшихся ${restCount} участников`,
  );

  const cantPlayers = contextMembers
    ?.map((human, humani) => !readyMembers.some(({ w }) => w === human.w) && <HumanFace key={humani} human={human} />)
    .filter((player) => player);

  return (
    <>
      {
        <>
          <div>
            Общее количество участников - {readyMembers.length}{' '}
            {mylib.declension(readyMembers.length, 'человек', 'человека', 'человек')}
          </div>
          <div className="flex full-width">
            <div className="nowrap">Количество команд</div>
            <div className="full-width margin-gap-h">
              <KeyboardInput type="number" onChange={(value) => setTeamsCount(+value)} />
            </div>
          </div>
          {teamsCount <= readyMembers.length ? (
            <>
              {countInTeam ? (
                <div>
                  Состав команд по {truncated}
                  {truncated !== countInTeam
                    ? ` - ${truncated + 1} ${mylib.declension(truncated + 1, 'человеку', 'человека', 'человек')}`
                    : ` ${mylib.declension(truncated, 'человеку', 'человека', 'человек')}`}
                </div>
              ) : null}
              {truncated !== countInTeam ? (
                <Dropdown
                  id={addRestMode}
                  className="margin-gap-v"
                  items={[
                    {
                      title: `${restLabelPrefix} в сильную команду`,
                      id: 'strong',
                    },
                    {
                      title: `${restLabelPrefix} в слабую команду`,
                      id: 'weak',
                    },
                    {
                      title: `${restLabelPrefix} ${restCount === 1 ? 'определить' : 'распределить'} случайным образом`,
                      id: 'random',
                    },
                  ]}
                  onSelect={({ id }) => setAddRestMode(id)}
                />
              ) : null}
              <div className="flex around margin-big-gap">
                <TheButton
                  disabled={!teamsCount}
                  onClick={() => {
                    const teams = mylib.groupByFieldsSoftly(
                      ['isMan', (user) => user.ufp1 + user.ufp2, 'bDay'],
                      readyMembers,
                      teamsCount,
                      addRestMode,
                    );
                    const newTeams = teams.map((humans) => {
                      return {
                        name: nameRandomizer().join(' '),
                        w: 0,
                        ts: SourceBased.makeNewTs(),
                        members: humans.map((human) => human.w),
                      };
                    });

                    updateTeams(newTeams);
                    onUpdate(newTeams);
                  }}
                >
                  Рассчитать{teams ? ' заново' : ''}
                </TheButton>
              </div>

              {!!cantPlayers?.length && (
                <>
                  <div
                    className="flex flex-gap margin-gap error-message"
                    onClick={() => setIsShowCantPlayers((is) => !is)}
                  >
                    Не войдут {cantPlayers?.length}
                    <EvaButton name={isShowCantPlayers ? 'chevron-up' : 'chevron-down'} />
                  </div>
                  {isShowCantPlayers && cantPlayers}
                </>
              )}
              {teams?.map((team, teami) => {
                return (
                  <TheGameTeam
                    key={teami}
                    team={team}
                    game={game}
                    noComments={noComments}
                    onTeamRename={() => {
                      const newTeams = [...teams];
                      newTeams[teami] = {
                        ...newTeams[teami],
                        name: nameRandomizer().join(' '),
                      };
                      updateTeams(newTeams);
                    }}
                  />
                );
              })}
            </>
          ) : (
            <div className="error-message padding-giant-gap text-center">
              Количество команд превышает допустимое число
            </div>
          )}
        </>
      }
    </>
  );
}
