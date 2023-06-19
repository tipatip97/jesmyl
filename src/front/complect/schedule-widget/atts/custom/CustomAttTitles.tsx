import EvaButton from "../../../eva-icon/EvaButton";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker } from "../../useScheduleWidget";

const itIt = (it: unknown) => it;
const itNIt = (it: unknown) => !it;

export default function ScheduleWidgetCustomAttTitles({ tatt, scope, isRedact }: StrongComponentProps<{
    tatt: ScheduleWidgetAppAttCustomized,
    isRedact: boolean,
}>) {

    return <>
        <div className="flex flex-gap">
            <EvaButton name="list" className="color--7" />
            {isRedact
                ? <>Заголовки</>
                : <>{tatt.titles?.filter(itIt).join(', ') || <span className="color--7">Список пуст</span>}</>}

        </div>
        {isRedact && tatt.titles?.map((title, titlei) => {
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
        {isRedact && !tatt.titles?.some(itNIt) &&
            <StrongEvaButton
                scope={scope}
                fieldName="titles"
                name="plus"
            />}
    </>;
}
