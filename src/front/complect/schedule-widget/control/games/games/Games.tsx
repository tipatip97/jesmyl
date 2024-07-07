import { IScheduleWidgetTeamGame } from '../../../../../models';
import { contextCreator } from '../../../../contextCreator';
import useIsExpand from '../../../../expand/useIsExpand';
import { StrongComponentProps } from '../../../../strong-control/Strong.model';
import { useScheduleWidgetRightsContext } from '../../../useScheduleWidget';
import { ScheduleWidgetShareButtons } from '../ShareButtons';
import ScheduleWidgetSortCriterias from '../criterias/SortCriterias';
import ScheduleWidgetTeamGameList from './GameList';

export const [SchWGamesScopeContext, useSchWGamesScopeContext] = contextCreator('');
export const [SchWGameScopeContext, useSchWGameScopeContext] = contextCreator('');
export const [SchWGameContext, useSchWGameContext] = contextCreator<IScheduleWidgetTeamGame>(null!);

export default function ScheduleWidgetTeamGames({ scope }: StrongComponentProps) {
  const rights = useScheduleWidgetRightsContext();
  const [teamsExpandNode, isTeamsExpand] = useIsExpand(
    false,
    <>Командные игры</>,
    isExpand => isExpand && <ScheduleWidgetShareButtons />,
  );
  const gamesScope = `${scope} games`;

  return (
    <>
      <h3>{teamsExpandNode}</h3>
      {isTeamsExpand && (
        <SchWGamesScopeContext.Provider value={gamesScope}>
          {rights.isCanRedact && <ScheduleWidgetSortCriterias scope={scope} />}
          <ScheduleWidgetTeamGameList />
        </SchWGamesScopeContext.Provider>
      )}
    </>
  );
}
