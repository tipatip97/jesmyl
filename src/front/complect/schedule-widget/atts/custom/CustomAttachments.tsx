import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import { ScheduleWidgetAppAttCustomizable, ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetCustomAtt from "./CustomAtt";

export default function ScheduleWidgetCustomAttachments(props: StrongComponentProps<{
    tatts?: ScheduleWidgetAppAttCustomized[],
}>) {
    const { modalNode, screen } = useModal(({ header, body }) => {
        return <>
            {header(<div className="flex full-width between">
                Шаблоны вложений
                {!props.tatts?.some((att) => !att.title || !att.description) && <StrongEvaButton
                    scope={props.scope}
                    fieldName="tatts"
                    name="plus"
                    confirm="Создать шаблон вложения?"
                    mapExecArgs={(args) => {
                        const value: ScheduleWidgetAppAttCustomizable = {
                            description: '',
                            icon: 'attach-2-outline',
                            initVal: {},
                            title: '',
                        };

                        return {
                            ...args,
                            value,
                        };
                    }}
                />}
            </div>)}
            {body(props.tatts?.map((tatt) => {
                return <ScheduleWidgetCustomAtt
                    key={tatt.mi}
                    scope={props.scope}
                    tatt={tatt}
                />;
            }))}
        </>;
    });

    return <div>
        {modalNode}
        <EvaButton
            name="attach-2"
            postfix={<>Шаблоны вложений <EvaIcon name="chevron-right" /></>}
            onClick={() => screen()}
            className="flex-max margin-gap-v"
        />
    </div>;
}
