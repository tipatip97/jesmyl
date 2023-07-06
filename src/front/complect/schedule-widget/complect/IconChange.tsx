import { ReactNode } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import { EvaIconName, evaPackNames } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import StrongEvaButton from "../../strong-control/StrongEvaButton";

const icons = evaPackNames.filter(name => name.endsWith('-outline'));

export default function ScheduleWidgetIconChange(props: {
    scope: string,
    icon: EvaIconName,
    header: ReactNode,
    used?: (EvaIconName | und)[],
}) {
    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(props.header)}
            {body(icons.map((icon) => {
                return <StrongEvaButton
                    key={icon}
                    scope={props.scope}
                    fieldName="field"
                    fieldKey="icon"
                    fieldValue={icon}
                    name={icon}
                    cud="U"
                    className={'padding-big-gap' + (props.icon === icon ? ' color--7' : props.used?.includes(icon) ? ' fade-05' : '')}
                    onSuccess={closeModal}
                />;
            }))}
        </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name={props.icon}
            postfix="Изменить иконку"
            onClick={() => screen()}
            className="flex-max margin-gap-v"
        />
    </>;
}