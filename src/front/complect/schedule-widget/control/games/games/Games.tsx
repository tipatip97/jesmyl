import { IScheduleWidgetTeamGame } from '../../../../../models';
import { contextCreator } from '../../../../contextCreator';
import useIsExpand from '../../../../expand/useIsExpand';
import { StrongComponentProps } from '../../../../strong-control/Strong.model';
import ScheduleWidgetSortCriterias from '../criterias/SortCriterias';
import ScheduleWidgetTeamGameList from './GameList';

export const [SchWGamesScopeContext, useSchWGamesScopeContext] = contextCreator('');
export const [SchWGameScopeContext, useSchWGameScopeContext] = contextCreator('');
export const [SchWGameContext, useSchWGameContext] = contextCreator<IScheduleWidgetTeamGame>(null!);

export default function ScheduleWidgetTeamGames({ scope }: StrongComponentProps) {
  const [teamsExpandNode, isTeamsExpand] = useIsExpand(false, <>Командные игры</>);
  const gamesScope = `${scope} games`;

  return (
    <>
      <h3>{teamsExpandNode}</h3>
      {isTeamsExpand && (
        <SchWGamesScopeContext.Provider value={gamesScope}>
          <ScheduleWidgetSortCriterias scope={scope} />
          <ScheduleWidgetTeamGameList scope={scope} />
        </SchWGamesScopeContext.Provider>
      )}
    </>
  );
}
