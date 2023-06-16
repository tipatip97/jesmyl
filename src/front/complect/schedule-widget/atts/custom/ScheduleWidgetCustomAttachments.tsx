import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import { ScheduleWidgetAppAttCustomizable, ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetCustomAtt from "./ScheduleWidgetCustomAtt";

export default function ScheduleWidgetCustomAttachments(props: StrongComponentProps<{
    atts?: ScheduleWidgetAppAttCustomized[],
}>) {
    const { modalNode, screen } = useModal(({ header, body }) => {
        return <>
            {header(<div className="flex full-width between">
                Шаблоны вложений
                {!props.atts?.some((att) => !att.title || !att.description) && <StrongEvaButton
                    scope={props.scope}
                    fieldName="atts"
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
            {body(props.atts?.map((att) => {
                return <ScheduleWidgetCustomAtt
                    key={att.mi}
                    scope={props.scope}
                    att={att}
                />;
            }))}
        </>;
    });

    return <div>
        {modalNode}
        <div className="flex flex-gap pointer margin-big-gap-v" onClick={() => screen()}>
            Шаблоны вложений <EvaIcon name="eye-outline" />
        </div>
    </div>;
}
