import { ReactNode } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import { EvaIconName, evaPackNames } from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { StrongControlProps } from "../../strong-control/Strong.model";
import StrongEvaButton from "../../strong-control/StrongEvaButton";

const icons = evaPackNames.filter(name => name.endsWith('-outline'));

export default function ScheduleWidgetIconChange(props: StrongControlProps<{
    icon: EvaIconName,
    header: ReactNode,
}>) {
    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(props.header)}
            {body(<>{
                icons.map((icon) => {
                    return <StrongEvaButton
                        key={icon}
                        scope={props.scope}
                        fieldName="field"
                        name={icon}
                        cud="U"
                        className={'margin-gap' + (props.icon === icon ? ' color--7' : '')}
                        onSuccess={closeModal}
                        mapExecArgs={(args, value) => {
                            return {
                                ...args,
                                ...props.mapExecArgs?.(args, value),
                                value: icon,
                            };
                        }}
                    />;
                })}
            </>)}
        </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name={props.icon}
            postfix="Изменить иконку"
            onClick={() => screen()}
        />
    </>;
}