import EvaIcon from "../../../eva-icon/EvaIcon";
import useModal from "../../../modal/useModal";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import useIsRedactArea from "../../../useIsRedactArea";
import { ScheduleWidgetAppAttCustomizable, ScheduleWidgetAppAttCustomizableType, ScheduleWidgetAppAttCustomized } from "../../ScheduleWidget.model";
import ScheduleWidgetCustomAtt from "./ScheduleWidgetCustomAtt";

export default function ScheduleWidgetCustomAttachments(props: StrongComponentProps<{
    atts?: ScheduleWidgetAppAttCustomized[],
}>) {
    const { editIcon, isRedact } = useIsRedactArea(true, null, true, true);

    const { modalNode, screen } = useModal(({ header, body, footer }) => {
        return <>
            {header(<div className="flex full-width between">
                Шаблоны вложений
                {editIcon}
            </div>)}
            {body(<div>{
                props.atts?.map((att) => {
                    return <ScheduleWidgetCustomAtt
                        key={att.mi}
                        scope={props.scope}
                        att={att}
                        isRedact={isRedact}
                    />;
                })
            }</div>)}
            {!isRedact || props.atts?.some((att) => !att.title || !att.description)
                ? null
                : footer(<span className="flex flex-gap">
                    Новый шаблон вложения
                    <StrongEvaButton
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
                                type: ScheduleWidgetAppAttCustomizableType.KeyValue,
                            };

                            return {
                                ...args,
                                value,
                            };
                        }}
                    />
                </span>)}
        </>;
    });

    return <div>
        {modalNode}
        <div className="flex flex-gap pointer margin-big-gap-v" onClick={() => screen()}>
            Шаблоны вложений <EvaIcon name="edit-outline" />
        </div>
    </div>;
}
