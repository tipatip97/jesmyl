import StrongEditableField from '../../../../strong-control/field/StrongEditableField';
import StrongEvaButton from '../../../../strong-control/StrongEvaButton';
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
              name={isDone ? 'checkmark-square-outline' : 'square-outline'}
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
          name="plus"
          prefix="Пункт"
        />
      )}
    </>
  );
}
