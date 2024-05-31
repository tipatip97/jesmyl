import StrongEditableField from '../../../../strong-control/field/StrongEditableField';
import StrongEvaButton from '../../../../strong-control/StrongEvaButton';
import { IconCheckmarkSquare02StrokeRounded } from '@icons/checkmark-square-02';
import { IconPlusSignStrokeRounded } from '@icons/plus-sign';
import { IconSquareStrokeRounded } from '@icons/square';
import { takeStrongScopeMaker } from '../../../useScheduleWidget';
import { ScheduleChListAtt } from './checkListAtt';

export default function ScheduleCheckListAtt({
  value,
  scope,
  isRedact,
}: {
  value: ScheduleChListAtt;
  scope: string;
  isRedact: boolean;
}) {
  const attScope = scope + ' checkList';

  return (
    <>
      {value.list.map(([isDone, title], itemMi) => {
        if (!isRedact && !title) return null;
        const itemScope = takeStrongScopeMaker(attScope, ' itemMi/', itemMi);
        return (
          <div
            key={itemMi}
            className="flex flex-gap full-width margin-big-gap-b"
          >
            <StrongEvaButton
              scope={itemScope}
              fieldName="check"
              fieldValue={isDone ? 0 : 1}
              className={'self-start relative z-index:15 color--3 ' + (isDone ? 'fade-05' : '')}
              cud="U"
              isCanSend={!!scope}
              Icon={isDone ? IconCheckmarkSquare02StrokeRounded : IconSquareStrokeRounded}
            />
            <StrongEditableField
              scope={itemScope}
              fieldName="title"
              className="full-width"
              value={title}
              isRedact={isRedact}
              textClassName={'mood-for-2 relative z-index:5 color--3 ' + (isDone ? 'fade-05' : '')}
            />
          </div>
        );
      })}
      {isRedact && !value.list.some(li => !li[1]) && (
        <StrongEvaButton
          scope={attScope}
          fieldName=""
          Icon={IconPlusSignStrokeRounded}
          prefix="Пункт"
        />
      )}
    </>
  );
}
