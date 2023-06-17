import EvaButton from "../../../eva-icon/EvaButton";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker } from "../../useScheduleWidget";

const itIt = (it: unknown) => it;
const itNIt = (it: unknown) => !it;

export default function ScheduleWidgetCustomAttTitles({ att, scope, isRedact }: StrongComponentProps<{
    att: ScheduleWidgetAppAttCustomized,
    isRedact: boolean,
}>) {

    return <>
        <div className="flex flex-gap">
            <EvaButton name="list" className="color--7" />
            {isRedact
                ? <>Заголовки</>
                : <>{att.titles?.filter(itIt).join(', ') || <span className="color--7">Список пуст</span>}</>}

        </div>
        {isRedact && att.titles?.map((title, titlei) => {
            const titleScope = takeStrongScopeMaker(scope, ' titlei/', titlei);

            return <StrongEditableField
                key={titlei}
                scope={titleScope}
                fieldName=""
                isImpossibleEmptyValue
                value={title}
                isRedact={isRedact}
            />;
        })}
        {isRedact && !att.titles?.some(itNIt) &&
            <StrongEvaButton
                scope={scope}
                fieldName="titles"
                name="plus"
            />}
    </>;
}
