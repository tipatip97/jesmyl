import { useState } from 'react';
import { ExpandableContent } from '../../../../../expand/ExpandableContent';
import StrongEditableField from '../../../../../strong-control/field/StrongEditableField';
import { IconPencilEdit01StrokeRounded } from '../../../../../the-icon/icons/pencil-edit-01';
import { useSchWGameContext, useSchWGameScopeContext } from '../Games';
import ScheduleWidgetTeamGameTeam from '../Team';
import { ScheduleWidgetTeamGamePrintTeamsButton } from './PrintTeamsButton';
import ScheduleWidgetTeamGameSetTeamsButton from './SetTeamsButton';
import { ScheduleWidgetTeamGameTranslateTeamsButton } from './TranslateTeamsButton';

export default function ScheduleWidgetTeamGame() {
  const [isRenaming, setIsRenaming] = useState(false);
  const gameScope = useSchWGameScopeContext();
  const game = useSchWGameContext();

  const titleNode = (
    <h3 className="flex flex-gap">
      <StrongEditableField
        scope={gameScope}
        fieldName="title"
        value={game.title}
        placeholder="Командная игра"
        isRedact={isRenaming}
      />
      <IconPencilEdit01StrokeRounded
        onClick={event => {
          event.stopPropagation();
          setIsRenaming(is => !is);
        }}
      />
      <ScheduleWidgetTeamGameTranslateTeamsButton />
      <ScheduleWidgetTeamGamePrintTeamsButton />
    </h3>
  );

  if (!game.teams?.length) {
    return (
      <ExpandableContent title={titleNode}>
        <ScheduleWidgetTeamGameSetTeamsButton />
      </ExpandableContent>
    );
  }

  return (
    <ExpandableContent title={titleNode}>
      <div className="margin-gap-v margin-big-gap-l">
        {game.teams.map(team => {
          return (
            <ScheduleWidgetTeamGameTeam
              key={team.mi}
              team={team}
            />
          );
        })}
      </div>
    </ExpandableContent>
  );
}
