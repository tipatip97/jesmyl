import useIsExpand from '../../../../expand/useIsExpand';
import { StrongComponentProps } from '../../../../strong-control/Strong.model';
import StrongEvaButton from '../../../../strong-control/StrongEvaButton';
import { IconPlusSignStrokeRounded } from '../../../../the-icon/icons/plus-sign';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../../../useScheduleWidget';
import { SchWGameContext, SchWGameScopeContext, useSchWGamesScopeContext } from './Games';
import ScheduleWidgetTeamGame from './game/Game';

export default function ScheduleWidgetTeamGameList({ scope }: StrongComponentProps) {
  const rights = useScheduleWidgetRightsContext();
  const gamesScope = useSchWGamesScopeContext();

  const [teamsListExpandNode, isTeamsListExpand] = useIsExpand(
    false,
    <h4>Игры</h4>,
    isExpand =>
      isExpand &&
      rights.isCanTotalRedact &&
      !rights.schedule.games?.list.some(team => !team.title) && (
        <StrongEvaButton
          scope={gamesScope}
          fieldName="list"
          Icon={IconPlusSignStrokeRounded}
          prefix="игра"
          confirm="Добавить новую игру?"
        />
      ),
  );

  return (
    <>
      {teamsListExpandNode}
      {isTeamsListExpand && (
        <>
          {rights.schedule.games?.list.map(game => {
            return (
              <SchWGameScopeContext.Provider
                key={game.mi}
                value={takeStrongScopeMaker(gamesScope, ` gameMi/`, game.mi)}
              >
                <SchWGameContext.Provider value={game}>
                  <ScheduleWidgetTeamGame />
                </SchWGameContext.Provider>
              </SchWGameScopeContext.Provider>
            );
          })}
        </>
      )}
    </>
  );
}
