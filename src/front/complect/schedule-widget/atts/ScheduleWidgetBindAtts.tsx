import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { MyLib } from "../../my-lib/MyLib";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongDiv from "../../strong-control/StrongDiv";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import { ScheduleWidgetAttKey } from "../ScheduleWidget.model";
import { useScheduleWidgetAppAttsContext } from "../useScheduleWidget";
import ScheduleWidgetAttFace from "./ScheduleWidgetAttFace";
import "./ScheduleWidgetAtts.scss";

export default function ScheduleWidgetBindAtts({
    atts,
    forTitle,
    scope,
}: StrongComponentProps<{
    forTitle: string,
    atts?: Record<ScheduleWidgetAttKey, unknown>,
}>) {
    const appAtts = useScheduleWidgetAppAttsContext();
    const appAttList = MyLib.entries(appAtts);

    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(`Вложение для "${forTitle}"`)}
            {body(<>
                {appAttList.map(([attKey, att]) => {
                    const attScope = takeStrongScopeMaker(scope, ' attKey/', attKey);

                    return <StrongDiv
                        key={attKey}
                        scope={attScope}
                        fieldName=""
                        cud="U"
                        className={
                            'flex flex-gap bgcolor--1 padding-gap margin-big-gap-v pointer'
                            + (atts?.[attKey] ? ' disabled ' : '')}
                        mapExecArgs={(args) => {
                            if (atts?.[attKey]) return;
                            return {
                                ...args,
                                value: att.initialAttValue,
                            };
                        }}
                        onClick={closeModal}
                    >
                        <ScheduleWidgetAttFace
                            scope={scope}
                            att={att}
                            typeTitle={forTitle}
                            attKey={attKey}
                        />
                        <div className="fade-05 ">{att.description}</div>
                    </StrongDiv>;
                })}
            </>)}
        </>;
    });

    const attEntries = MyLib.entries(atts);

    return <div
        className="schedule-widget-bind-secs flex flex-gap">
        {modalNode}
        <EvaIcon name="attach" />
        {attEntries?.length
            ? attEntries.map(([attKey]) => {
                const attScope = takeStrongScopeMaker(scope, ' attKey/', attKey);

                return <ScheduleWidgetAttFace
                    isRedact
                    key={attKey}
                    scope={attScope}
                    att={appAtts[attKey as never]}
                    attKey={attKey as never}
                    typeTitle={forTitle}
                />;
            })
            : <span className="color--7">Вложений нет</span>}
        <EvaButton
            name="plus-circle-outline"
            onClick={() => screen()}
        />
    </div>;
}
