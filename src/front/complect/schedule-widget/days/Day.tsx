import { useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import mylib, { MyLib } from "../../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../../strong-control/StrongDateTimeExtracter";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay } from "../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../useScheduleWidget";
import "./Day.scss";
import ScheduleWidgetDayEventList from "./events/DayEventList";
import { renderComponentInNewWindow } from "../../../..";
import ScheduleWidgetPrintableDay from "./PrintableDay";

const dotReg = /\./;

export interface ScheduleWidgetDayProps {
    day: IScheduleWidgetDay,
    dayi: number,
    schedule: IScheduleWidget,
    scope: string,
}

const isNIs = (is: unknown) => !is;

export default function ScheduleWidgetDay({
    day, dayi, schedule, scope,
}: ScheduleWidgetDayProps) {
    const dayStartMs = schedule.start + mylib.howMs.inDay * dayi;
    const date = new Date(dayStartMs);
    const isPastDay = Date.now() > dayStartMs + mylib.howMs.inDay;
    const title = mylib.dayFullTitles[date.getDay()];
    const times: number[] = [];
    const selfScope = takeStrongScopeMaker(scope, ' dayMi/', day.mi);
    const [isShowDay, setIsShowDay] = useState(!isPastDay);
    const rights = useScheduleWidgetRightsContext();
    const { editIcon, isRedact } = useIsRedactArea(true, null, rights.isCanRedact, true);

    const dayRating = useMemo(() => {
        let rating = 0;
        day.list.forEach((event) => {
            event.rate && MyLib.values(event.rate).forEach(rate => rating += rate[0]);
        });
        return rating;
    }, [day.list]);

    day.list.forEach((item) => {
        times.push((item.tm || schedule.types?.[item.type]?.tm || 0) + (times[times.length - 1] || 0));
    });

    return <div className={'ScheduleWidgetDay relative' + (isPastDay ? ' past' : '')}>
        <div className="day-title flex flex-gap padding-gap-v sticky pos-top">
        {title}, {dayi + 1} день
        </div>
        <div className="edit-day-panel absolute pos-top pos-right margin-gap-t">
            {isPastDay
                ? <>
                    <EvaButton
                        name={isShowDay ? 'eye-off-outline' : 'eye-outline'}
                        onClick={() => setIsShowDay(isNIs)}
                    />
                    {isShowDay && editIcon}
                </>
                : editIcon}
        </div>
        {isShowDay &&
            <>
                {rights.isCanReadTitles && <div className="day-info">
                    <StrongEditableField
                        scope={selfScope}
                        fieldName="field"
                        value={day}
                        fieldKey="topic"
                        isRedact={isRedact}
                        icon="bookmark-outline"
                        title="Тема дня"
                    />
                    <StrongEditableField
                        scope={selfScope}
                        fieldName="field"
                        value={day}
                        fieldKey="dsc"
                        isRedact={isRedact}
                        multiline
                        textClassName=" "
                        icon="file-text-outline"
                        title="Описание дня"
                    />
                    {isRedact && <>
                        <StrongControlDateTimeExtracter
                            scope={selfScope}
                            fieldName="field"
                            value={day.wup?.toFixed?.(2).replace(dotReg, ' ') || ''}
                            icon="clock-outline"
                            title="Начало дня"
                            takeDate="NO"
                            takeTime="hour-min"
                            mapExecArgs={(args, value) => {
                                return {
                                    ...args,
                                    key: 'wup',
                                    value: +value.replace(/:/, '.'),
                                };
                            }}
                        />
                        <EvaButton
                            name="printer-outline"
                            className="margin-gap-v"
                            onClick={() => renderComponentInNewWindow(
                                (win) => <ScheduleWidgetPrintableDay
                                    day={day}
                                    dayi={dayi}
                                    schedule={schedule}
                                    scope={scope}
                                    win={win}
                                />)}
                            postfix="Распечатать распорядок дня"
                        />
                    </>}
                    {!isRedact && <EvaButton
                        name="heart-outline"
                        className={dayRating < 0 ? 'color--ko' : dayRating > 0 ? 'color--ok' : 'color--3'}
                        postfix={'Рейтинг дня: ' + dayRating}
                    />}
                </div>}
                <ScheduleWidgetDayEventList
                    day={day}
                    dayi={dayi}
                    scope={selfScope}
                    scheduleScope={scope}
                    isPastDay={isPastDay}
                />
            </>}
    </div>;
}