import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useIsExpand from "../../expand/useIsExpand";
import useFullContent from "../../fullscreen-content/useFullContent";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";
import { useScheduleWidgetRightsContext } from "../useScheduleWidget";
import { ScheduleWidgetListCategory } from "./Category";

export default function ScheduleWidgetLists({ scope }: StrongComponentProps) {
    const rights = useScheduleWidgetRightsContext();
    const listsScope = scope + ' lists';
    const [listsTitle, isExpand] = useIsExpand(true,
        'Списки',
        isExpand => isExpand && <StrongEvaButton
            scope={listsScope}
            fieldName="cats"
            name="plus"
            prefix="список"
            confirm="Создать новый список?"
        />);

    const [modalNode, screen] = useFullContent(() => {
        return <>
            <h3 className="flex flex-gap">
                {listsTitle}
            </h3>
            {isExpand && rights.schedule.lists.cats.map((cat, cati) => {
                return <ScheduleWidgetListCategory
                    key={cati}
                    scope={listsScope}
                    scheduleScope={scope}
                    cat={cat}
                    cati={cati}
                />
            })}
        </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name="list"
            postfix={<>Списки <EvaIcon name="chevron-right" /></>}
            onClick={() => screen()}
            className="margin-gap-v flex-max"
        />
    </>;
}
