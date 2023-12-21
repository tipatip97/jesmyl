import { useMemo, useState } from 'react';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import EvaIcon from '../../../../../complect/eva-icon/EvaIcon';
import useFullContent from '../../../../../complect/fullscreen-content/useFullContent';
import { TeamGameImportable } from '../../Leader.model';
import { LeaderCleans } from '../LeaderCleans';
import { GameTeamImportable } from './teams/GameTeams.model';
import LeaderGameTimerMaster from './timers/GameTimerMaster';
import TimerRatingBoard from './timers/complect/TimerRatingBoard';
import TimerSortRatingVariantSelector from './timers/complect/TimerSortRatingVariantSelector';
import { MyLib } from '../../../../../complect/my-lib/MyLib';

const itIt = (it: unknown) => it;

export default function LeaderGameTotalScoreTable({ game }: { game: TeamGameImportable }) {
  const [expandedTimers, setExpandedTimers] = useState<number[]>([]);
  const [openTimerw, setOpenTimerw] = useState(0);
  const openTimer = openTimerw ? game.timers?.find(it => it.w === openTimerw) : null;
  const [fullContent, openFullContent] = useFullContent(close => {
    return (
      openTimer && (
        <LeaderGameTimerMaster
          game={game}
          close={close}
          timer={openTimer}
        />
      )
    );
  });

  const node = useMemo(() => {
    if (!game.teams) return null;
    const teamRating: Map<GameTeamImportable, number> = new Map();
    const singleTimes: Map<GameTeamImportable, number> = new Map();
    let isSingleTimers = true;

    game.timers?.forEach(timer => {
      if (timer.isInactive) return;
      const teamsPlayed = LeaderCleans.rateSortedTimerTeams(timer, game, true);

      if (teamsPlayed.length > 1) {
        isSingleTimers = false;

        const teamsLen = teamsPlayed.length;

        teamsPlayed.forEach(({ team, finish }, ratei) => {
          if (!team || !finish) return;
          const score = teamsLen - ratei;
          teamRating.set(team, teamRating.has(team) ? teamRating.get(team)! + score : score);
        });
      }

      if (isSingleTimers && teamsPlayed[0]?.team)
        singleTimes.set(teamsPlayed[0].team, teamsPlayed[0].finish - teamsPlayed[0].start);
    });

    const results = Array.from(isSingleTimers ? singleTimes.entries() : teamRating.entries())
      .sort((b, a) => a[1] - b[1])
      .map(([team, balance]) => {
        return (
          <div key={team.w}>
            {team.name}:{' '}
            {isSingleTimers ? <span className="color--3">{LeaderCleans.computeMinFromMs(balance)}</span> : balance}
          </div>
        );
      });

    return isSingleTimers ? results.reverse() : results;
  }, [game]);

  return (
    <>
      {fullContent}
      <div className="margin-big-gap">
        <div className="color--3">Общий рейтинг (баллы)</div>
        {node?.length ? node : <div className="margin-gap-h">Нет активных таймеров</div>}
      </div>
      {game.timers?.map(timer => {
        const playedLen = MyLib.values(timer.finishes).filter(itIt).length;

        return (
          <div
            key={timer.w}
            className={'margin-big-gap-v' + (timer.isInactive || playedLen === 0 ? ' fade-05 ' : '')}
          >
            <div
              className="flex flex-gap pointer"
              onClick={() =>
                setExpandedTimers(
                  expandedTimers.includes(timer.w)
                    ? expandedTimers.filter(it => it !== timer.w)
                    : [...expandedTimers, timer.w],
                )
              }
            >
              <EvaIcon name={expandedTimers.includes(timer.w) ? 'chevron-up' : 'chevron-down'} />
              <span className="color--3">Таймер</span>
              <span className="color--7">{timer.name}</span>
              <EvaButton
                name="browser-outline"
                onClick={event => {
                  event.stopPropagation();

                  setOpenTimerw(timer.w);
                  openFullContent();
                }}
              />
            </div>
            {expandedTimers.includes(timer.w) && (
              <div className="margin-big-gap">
                {playedLen > 1 && (
                  <TimerSortRatingVariantSelector
                    isRedact={false}
                    sort={LeaderCleans.getTimerConfigurableField('sort', timer, game)}
                  />
                )}
                <TimerRatingBoard
                  timer={timer}
                  game={game}
                  withoutControls
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
