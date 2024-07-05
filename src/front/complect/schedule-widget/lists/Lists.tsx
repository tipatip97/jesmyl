import { IconArrowRight01StrokeRounded } from '../../../complect/the-icon/icons/arrow-right-01';
import { IconLeftToRightListBulletStrokeRounded } from '../../../complect/the-icon/icons/left-to-right-list-bullet';
import { IconPlusSignStrokeRounded } from '../../../complect/the-icon/icons/plus-sign';
import useIsExpand from '../../expand/useIsExpand';
import useFullContent from '../../fullscreen-content/useFullContent';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import IconButton from '../../the-icon/IconButton';
import ScheduleWidgetTeamGames from '../control/games/games/Games';
import ScheduleWidgetRoleList from '../control/roles/RoleList';
import { useScheduleWidgetRightsContext } from '../useScheduleWidget';
import { ScheduleWidgetListCategory } from './Category';

export default function ScheduleWidgetLists({
  scope,
  scheduleScope,
}: StrongComponentProps & { scheduleScope: string }) {
  const rights = useScheduleWidgetRightsContext();
  const listsScope = scope + ' lists';
  const [listsTitle, isExpand] = useIsExpand(
    true,
    'Списки',
    isExpand =>
      isExpand &&
      rights.isCanTotalRedact && (
        <StrongEvaButton
          scope={listsScope}
          fieldName="cats"
          Icon={IconPlusSignStrokeRounded}
          prefix="список"
          confirm="Создать новый список?"
        />
      ),
  );

  const [modalNode, screen] = useFullContent(() => {
    return (
      <>
        <h3 className="flex flex-gap">{listsTitle}</h3>
        {isExpand &&
          rights.schedule.lists.cats.map((cat, cati) => {
            return (
              <ScheduleWidgetListCategory
                key={cati}
                scope={listsScope}
                scheduleScope={scope}
                cat={cat}
                cati={cati}
              />
            );
          })}
        {rights.isCanRedact && <ScheduleWidgetRoleList scope={scheduleScope} />}
        {rights.isCanRedact && <ScheduleWidgetTeamGames scope={scheduleScope} />}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconLeftToRightListBulletStrokeRounded}
        postfix={
          <>
            Списки <IconArrowRight01StrokeRounded />
          </>
        }
        onClick={() => screen()}
        className="margin-gap-v flex-max"
      />
    </>
  );
}
