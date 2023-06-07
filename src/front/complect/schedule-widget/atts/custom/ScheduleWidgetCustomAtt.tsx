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

export default function ScheduleWidgetCustomAtt({ att, scope, isRedact }: StrongComponentProps<{
    att: ScheduleWidgetAppAttCustomized,
    isRedact: boolean,
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
        <div className="flex between full-width">
            {<span className="flex flex-gap">
                <EvaButton name={att.icon} />
                {isRedact && <span className="pointer" onClick={() => screen()}>Изменить иконку</span>}
            </span>}
        </div>
        <StrongEditableField
            scope={selfScope}
            fieldName="field"
            value={att.title}
            isRedact={isRedact}
            isImpossibleEmptyValue
            icon="bookmark-outline"
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
