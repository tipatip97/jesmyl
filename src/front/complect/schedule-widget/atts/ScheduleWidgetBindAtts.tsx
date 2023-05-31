import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import { MyLib } from "../../my-lib/MyLib";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongDiv from "../../strong-control/StrongDiv";
import { ScheduleWidgetAttKey } from "../ScheduleWidget.model";
import { useScheduleWidgetAppAttsContext } from "../useScheduleWidget";
import ScheduleWidgetAttFace from "./ScheduleWidgetAttFace";
import "./ScheduleWidgetAtts.scss";

export default function ScheduleWidgetBindAtts({
    isRedact,
    atts,
    typeTitle,
    scope,
}: StrongComponentProps<{
    typeTitle: string,
    isRedact: boolean,
    atts?: ScheduleWidgetAttKey[],
}>) {
    const appAtts = useScheduleWidgetAppAttsContext();
    const appAttList = MyLib.entries(appAtts);

    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(`Вложение для "${typeTitle}"`)}
            {body(<>
                {appAttList.map(([attKey, att]) => {
                    return <StrongDiv
                        key={attKey}
                        scope={scope}
                        fieldName="atts"
                        className={
                            'flex flex-gap bgcolor--1 padding-gap margin-big-gap-v pointer'
                            + (atts?.includes(attKey) ? ' disabled ' : '')}
                        mapExecArgs={(args) => {
                            if (atts?.includes(attKey)) return;
                            return {
                                ...args,
                                value: attKey,
                            };
                        }}
                        onClick={closeModal}
                    >
                        <ScheduleWidgetAttFace
                            isRedact={false}
                            scope={scope}
                            att={att}
                            typeTitle={typeTitle}
                            attKey={attKey}
                        />
                        <div className="fade-05 ">{att.description}</div>
                    </StrongDiv>;
                })}
            </>)}
        </>;
    });

    return <div
        className={
            'schedule-widget-bind-secs flex flex-gap'
            + (isRedact ? ' redact ' : '')
            + (!atts?.length ? ' empty ' : '')
        }>
        {modalNode}
        <EvaIcon name="attach" className={isRedact ? '' : 'color--7'} />
        {!atts?.length && <span className={isRedact ? 'color--7' : ''}>Вложений нет</span>}
        {atts?.map((attKey) => {
            return <ScheduleWidgetAttFace
                key={attKey}
                scope={scope}
                isRedact={isRedact}
                att={appAtts[attKey]}
                attKey={attKey}
                typeTitle={typeTitle}
            />;
        })}
        {isRedact &&
            <EvaButton
                name="plus-circle-outline"
                onClick={() => screen()}
            />}
    </div>;
}
