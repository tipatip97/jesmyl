import { ReactNode } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useModal from "../../modal/useModal";
import mylib, { MyLib } from "../../my-lib/MyLib";
import { StrongComponentProps } from "../../strong-control/Strong.model";
import StrongDiv from "../../strong-control/StrongDiv";
import { IScheduleWidget, ScheduleWidgetAttKey, ScheduleWidgetDayEventAttValues } from "../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetAppAttsContext, useScheduleWidgetRightsContext } from "../useScheduleWidget";
import ScheduleWidgetBindAttRefKeyButton from "./BindAttRefKeyButton";
import ScheduleWidgetAttFace from "./AttFace";
import "./Atts.scss";
import ScheduleWidgetCustomAttachments from "./custom/CustomAttachments";
import { scheduleWidgetUserRights } from "../../../../back/apps/index/rights";

export default function ScheduleWidgetBindAtts({
    atts,
    forTitle,
    scope,
    scheduleScope,
    schedule,
    mapExecArgs,
    cantBindLinks,
    topContent,
    customAttTopContent,
}: StrongComponentProps<{
    scheduleScope: string,
    forTitle: ReactNode,
    atts?: ScheduleWidgetDayEventAttValues,
    schedule: IScheduleWidget,
    cantBindLinks?: boolean,
    topContent?: ReactNode,
    customAttTopContent?: (scope: string, attKey: ScheduleWidgetAttKey) => ReactNode,
}>) {
    const [appAtts, attRefs] = useScheduleWidgetAppAttsContext();
    const appAttList = MyLib.entries(appAtts);
    const rights = useScheduleWidgetRightsContext();
    const myUserR = rights.myUser?.R;

    const { modalNode, screen } = useModal(({ header, body, footer }, closeModal) => {
        return <>
            {header(<div className="flex flex-gap">Вложение на <span className="color--7">{forTitle}</span></div>)}
            {body(<>
                {topContent}
                {appAttList.map(([attKey, tatt]) => {
                    if (!tatt.title
                        || !scheduleWidgetUserRights.checkIsCan(myUserR, tatt.R)
                        || !scheduleWidgetUserRights.checkIsCan(myUserR, tatt.U)) return null;
                    const attScope = takeStrongScopeMaker(scope, ' attKey/', attKey);

                    return <StrongDiv
                        key={attKey}
                        scope={attScope}
                        fieldName=""
                        cud="U"
                        className={
                            'relative flex flex-gap bgcolor--1 padding-gap margin-big-gap-v pointer'
                            + (atts?.[attKey] ? ' disabled ' : '')}
                        mapExecArgs={mapExecArgs || ((args) => {
                            if (atts?.[attKey]) return;
                            return {
                                ...args,
                                value: tatt.initVal,
                            };
                        })}
                        onClick={closeModal}
                    >
                        <ScheduleWidgetAttFace
                            scope={scope}
                            scheduleScope={scheduleScope}
                            tatt={tatt}
                            typeTitle={forTitle}
                            attKey={attKey}
                        />
                        <div className="fade-05 ">{tatt.description}</div>
                        {!cantBindLinks && !!attRefs[attKey]?.length &&
                            <ScheduleWidgetBindAttRefKeyButton
                                refs={attRefs[attKey]}
                                forTitle={forTitle}
                                attScope={attScope}
                                tatt={tatt}
                                attKey={attKey}
                                atts={atts}
                                schedule={schedule}
                            />}
                    </StrongDiv>;
                })}
            </>)}
            {footer(<>
                <ScheduleWidgetCustomAttachments
                    scope={scheduleScope}
                    tatts={schedule.tatts}
                />
            </>)}
        </>;
    });

    const attEntries = atts ? MyLib.entries(atts) : [];

    return <>
        {modalNode}
        <div className="flex flex-gap">
            <EvaIcon name="attach" />
            Вложения
            <EvaButton
                name="plus-outline"
                onClick={() => screen()}
            />
        </div>
        <div className="schedule-widget-bind-secs flex flex-gap no-scrollbar">
            {attEntries?.length
                ? attEntries.map(([attKey]) => {
                    const attScope = takeStrongScopeMaker(scope, ' attKey/', attKey);

                    return <ScheduleWidgetAttFace
                        isRedact
                        key={attKey}
                        scope={attScope}
                        scheduleScope={scheduleScope}
                        tatt={appAtts[attKey]}
                        attKey={attKey}
                        typeTitle={forTitle}
                        isLink={mylib.isArr(atts?.[attKey])}
                        customAttTopContent={customAttTopContent}
                    />;
                })
                : <span className="color--7">Вложений нет</span>}
        </div>
    </>;
}
