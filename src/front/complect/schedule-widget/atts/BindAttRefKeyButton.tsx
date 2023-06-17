import { ReactNode } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import useModal from "../../modal/useModal";
import mylib from "../../my-lib/MyLib";
import StrongDiv from "../../strong-control/StrongDiv";
import { IScheduleWidget, ScheduleWidgetDayEventAttValues, ScheduleWidgetAppAtt, ScheduleWidgetAttKey, ScheduleWidgetAttRef } from "../ScheduleWidget.model";
import ScheduleWidgetAttFace from "./AttFace";
import "./Atts.scss";

export default function ScheduleWidgetBindAttRefKeyButton({
    atts,
    forTitle,
    attScope,
    attKey,
    refs,
    att,
    schedule,
}: {
    forTitle: ReactNode,
    atts?: ScheduleWidgetDayEventAttValues,
    attKey: ScheduleWidgetAttKey,
    refs: ScheduleWidgetAttRef[],
    attScope: string,
    att: ScheduleWidgetAppAtt,
    schedule: IScheduleWidget,
}) {
    const { modalNode, screen } = useModal(({ header, body }, closeModal) => {
        return <>
            {header(`Ссылка на вложение для "${forTitle}"`)}
            {body(<>
                {refs.map((attRef) => {
                    const [dayMi, eventMi] = attRef;
                    if (!schedule.days) return null;
                    const dayi = schedule.days.findIndex((day) => day.mi === dayMi);
                    if (dayi < 0) return null;
                    const event = schedule.days[dayi].list.find((event) => event.mi === eventMi);
                    if (!event) return null;
                    const dayDate = new Date(schedule.start + dayi * mylib.howMs.inDay);

                    return <StrongDiv
                        key={attKey + dayMi + eventMi}
                        scope={attScope}
                        fieldName=""
                        cud="U"
                        className="margin-big-gap-v"
                        mapExecArgs={(args) => {
                            if (atts?.[attKey]) return;
                            return {
                                ...args,
                                value: attRef,
                            };
                        }}
                        onClick={closeModal}
                    >
                        <div className="color--7">{dayi + 1} день, {mylib.dayFullTitles[dayDate.getDay()]} - {schedule.types?.[event.type].title}</div>
                        <div
                            className={
                                'flex flex-gap bgcolor--1 padding-gap pointer'
                                + (atts?.[attKey] ? ' disabled ' : '')}
                        >
                            <ScheduleWidgetAttFace
                                scope=""
                                scheduleScope=""
                                att={att}
                                typeTitle={forTitle}
                                attKey={attKey}
                                isLink
                            />
                            <div className="fade-05">{att.description}</div>
                        </div>
                    </StrongDiv>;
                })}
            </>)}
        </>;
    });

    return <>
        {modalNode}
        <EvaButton
            name="link-2-outline"
            disabled={!!atts?.[attKey]}
            className="absolute pos-top pos-right padding-gap"
            onClick={(event) => {
                event.stopPropagation();
                screen();
            }}
        />
    </>;
}
