import StrongEditableField from "../../../../strong-control/field/StrongEditableField";
import StrongEvaButton from "../../../../strong-control/StrongEvaButton";
import { takeStrongScopeMaker } from "../../../../strong-control/useStrongControl";
import useIsRedactArea from "../../../../useIsRedactArea";
import { ScheduleWidgetAppAttResultItem } from "../../../ScheduleWidget.model";
import { ScheduleChListAtt } from "./checkListAtt";

export default function ScheduleCheckListAtt({
    value,
    attItem,
    scope,
}: {
    value: ScheduleChListAtt,
    attItem: ScheduleWidgetAppAttResultItem<ScheduleChListAtt>,
    scope: string,
}) {
    const attScope = scope + ` checkList`;
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);

    return <>{
        <div>
            {editIcon}
            {value.list.map(([isDone, title], itemi) => {
                const itemScope = takeStrongScopeMaker(attScope, ' itemi/', itemi);
                return <div key={itemi} className="flex flex-gap full-width margin-gap-v">
                    <StrongEvaButton
                        scope={itemScope}
                        fieldName="check"
                        className={'self-start' + (isDone ? '' : ' color--7')}
                        cud="U"
                        name={isDone ? 'checkmark-square-outline' : 'square-outline'}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                value: isDone ? 0 : 1,
                            };
                        }}
                    />
                    <StrongEditableField
                        scope={itemScope}
                        fieldName="title"
                        className="full-width"
                        value={title}
                        multiline
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
