import { ReactNode } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import { evaPackNames } from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { takeStrongScopeMaker } from "../../../strong-control/useStrongControl";
import { ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetCustomAttTitles from "./ScheduleWidgetCustomAttTitles";

const icons = evaPackNames.filter(name => name.endsWith('-outline'));

export default function ScheduleWidgetCustomAtt({ att, scope, isRedact, topContent }: StrongComponentProps<{
    att: ScheduleWidgetAppAttCustomized,
    isRedact: boolean,
    topContent?: ReactNode,
}>) {
    const selfScope = takeStrongScopeMaker(scope, ' attMi/', att.mi);
    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(<>Иконка для вложения {att.title}</>)}
            {body(<>{
                icons.map((icon) => {
                    return <StrongEvaButton
                        key={icon}
                        scope={selfScope}
                        fieldName="field"
                        name={icon}
                        cud="U"
                        className={'margin-gap' + (att.icon === icon ? ' color--7' : '')}
                        onSuccess={closeModal}
                        mapExecArgs={(args) => {
                            return {
                                ...args,
                                key: 'icon',
                                value: icon,
                            };
                        }}
                    />;
                })}
            </>)}
        </>;
    });

    return <div className="bgcolor--5 padding-gap margin-gap-v">
        {modalNode}
        {topContent}
        <div className="flex between full-width">
            {isRedact && <span className="flex flex-gap pointer" onClick={() => screen()}>
                <EvaButton name={att.icon} />
                Изменить иконку
            </span>}
        </div>
        <StrongEditableField
            scope={selfScope}
            fieldName="field"
            value={att.title}
            isRedact={isRedact}
            isImpossibleEmptyValue
            icon={isRedact ? 'bookmark-outline' : att.icon}
            title="Название"
            mapExecArgs={(args) => ({ ...args, key: 'title' })}
        />
        <StrongEditableField
            scope={selfScope}
            fieldName="field"
            value={att.description}
            multiline
            isRedact={isRedact}
            icon="file-text-outline"
            isImpossibleEmptyValue
            title="Описание вложения"
            mapExecArgs={(args) => ({ ...args, key: 'description' })}
        />
        <ScheduleWidgetCustomAttTitles
            scope={selfScope}
            att={att}
            isRedact={isRedact}
        />
    </div>;
}
