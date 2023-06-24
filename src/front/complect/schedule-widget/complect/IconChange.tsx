import { ReactNode } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import { EvaIconName, evaPackNames } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";

const icons = evaPackNames.filter(name => name.endsWith('-outline'));

export default function ScheduleWidgetIconChange(props: StrongComponentProps<{
    icon: EvaIconName,
    header: ReactNode,
    used?: (EvaIconName | und)[],
}>) {
    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(props.header)}
            {body(icons.map((icon) => {
                return <StrongEvaButton
                    key={icon}
                    scope={props.scope}
                    fieldName="field"
                    name={icon}
                    cud="U"
                    className={'padding-big-gap' + (props.icon === icon ? ' color--7' : props.used?.includes(icon) ? ' fade-05' : '')}
                    onSuccess={closeModal}
                    mapExecArgs={(args, value) => {
                        return {
                            ...args,
                            ...props.mapExecArgs?.(args, value),
                            value: icon,
                            key: 'icon',
                        };
                    }}
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
            className="margin-gap-v"
        />
    </>;
}