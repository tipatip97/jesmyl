import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import { takeStrongScopeMaker } from "../../../useScheduleWidget";
import { ScheduleChListAtt } from "./checkListAtt";

export default function ScheduleCheckListAtt({
    value,
    scope,
    isRedact,
}: {
    value: ScheduleChListAtt,
    scope: string,
    isRedact: boolean,
}) {
    const attScope = scope + ' checkList';

    return <>{
        <div>
            {value.list.map(([isDone, title], itemi) => {
                if (!isRedact && !title) return null;
                const itemScope = takeStrongScopeMaker(attScope, ' itemi/', itemi);
                return <div key={itemi} className="flex flex-gap full-width margin-gap-v">
                    <StrongEvaButton
                        scope={itemScope}
                        fieldName="check"
                        fieldValue={isDone ? 0 : 1}
                        className={'self-start' + (isDone ? '' : ' color--7')}
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
                        textClassName={isDone ? ' ' : 'color--7'}
                    />
                </div>;
            })}
            {isRedact && !value.list.some((li) => !li[1]) && <StrongEvaButton
                scope={attScope}
                fieldName=""
                name="plus"
            />}
        </div>
    }</>;
}
