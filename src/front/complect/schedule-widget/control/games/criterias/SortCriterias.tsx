import TheButton from '../../../../Button';
import useFullContent from '../../../../fullscreen-content/useFullContent';
import { StrongComponentProps } from '../../../../strong-control/Strong.model';
import StrongEvaButton from '../../../../strong-control/StrongEvaButton';
import { IconPlusSignStrokeRounded } from '../../../../the-icon/icons/plus-sign';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../../../useScheduleWidget';
import { ScheduleWidgetShareButtons } from '../ShareButtons';
import ScheduleWidgetSortCriteria from './SortCriteria';

export default function ScheduleWidgetSortCriterias({ scope }: StrongComponentProps) {
  const rights = useScheduleWidgetRightsContext();
  const criteriasScope = `${scope} games criterias`;

  const [fullNode, openFull] = useFullContent(() => {
    return (
      <>
        <h3 className="flex flex-gap">
          Список критериев
          <StrongEvaButton
            scope={criteriasScope}
            fieldName=""
            Icon={IconPlusSignStrokeRounded}
            confirm="Добавить новый критерий?"
          />
        </h3>

        <ScheduleWidgetShareButtons prefix="Фотографии" />

        {rights.schedule.games?.criterias.map((criteria, criteriai) => {
          return (
            <ScheduleWidgetSortCriteria
              key={criteriai}
              scope={takeStrongScopeMaker(criteriasScope, ' criti/', criteriai)}
              criteria={criteria}
            />
          );
        })}
      </>
    );
  });

  return (
    <>
      {fullNode}
      <TheButton onClick={() => openFull()}>Посмотреть критерии сортировки</TheButton>
    </>
  );
}
