import { useMemo, useState } from "react";
import { indexExer } from "../../components/index/Index.store";
import EvaButton from "../eva-icon/EvaButton";
import mylib from "../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../strong-control/StrongDateTimeExtracter";
import StrongEvaButton from "../strong-control/StrongEvaButton";
import { takeStrongScopeMaker, useStrongExerContent } from "../strong-control/useStrongControl";
import useIsRedactArea from "../useIsRedactArea";
import { IScheduleWidget, ScheduleWidgetAppAtts } from "./ScheduleWidget.model";
import './ScheduleWidget.scss';
import ScheduleWidgetCleans from "./complect/ScheduleWidgetCleans";
import ScheduleWidgetDay from "./days/ScheduleWidgetDay";
import ScheduleWidgetEventList from "./events/ScheduleWidgetEventList";
import { ScheduleWidgetAppAttsContext, initialScheduleScope } from "./useScheduleWidget";

export default function ScheduleWidget({
    schedule,
    expand,
    appAtts,
}: {
    schedule?: IScheduleWidget,
    expand?: boolean,
    appAtts: ScheduleWidgetAppAtts,
}) {
    const [isExpand, setIsExpand] = useState<und | boolean>(expand);
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);
    const [startTime, setStartTime] = useState(schedule?.start);
    const content = useStrongExerContent(indexExer);

    const date = useMemo(() => new Date(schedule?.start || new Date().setMonth(new Date().getMonth() + 1)), [schedule?.start]);
    const dateValue = useMemo(() => date.getTime() ? date.toLocaleDateString().replace(/\./g, ' ') : '', [date]);

    if (!schedule) return null;

    const selfScope = takeStrongScopeMaker(initialScheduleScope, ` schw/`, schedule.w);

    const firstWup = schedule.days?.[0].wup;

    return content(<ScheduleWidgetAppAttsContext.Provider value={appAtts}>
        <div className="schedule-widget">
            <div className="flex flex-gap">
                <div className="flex flex-gap pointer" onClick={() => setIsExpand(is => !is)}>
                    <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
                    <div>{schedule.title || 'Расписание'}</div>
                </div>
                {editIcon}
            </div>
            <div className="margin-big-gap-v">
                {isRedact ?
                    <div className="margin-big-gap">
                        <StrongControlDateTimeExtracter
                            scope={selfScope}
                            fieldName="start"
                            title="Начало"
                            icon="clock-outline"
                            value={dateValue}
                            takeDate="day"
                            takeTime="NO"
                            onComponentsChange={(_, __, ___, date) => setStartTime(date.getTime())}
                            mapExecArgs={(args) => ({ ...args, value: startTime })}
                        />
                        <div className="flex flex-gap margin-big-gap-v">
                            Добавить день
                            <StrongEvaButton
                                scope={selfScope}
                                fieldName="days"
                                name="plus-circle-outline"
                                confirm="Дни удалять не возможно! Создать новый?"
                            />
                        </div>
                        <ScheduleWidgetEventList
                            selectScope=""
                            selectFieldName=""
                            buttonTitle="События дней"
                            icon="eye-outline"
                            schedule={schedule}
                            scope={selfScope}
                        />
                    </div>
                    : schedule.start && <div>
                        Начало: {date.getDate()} {mylib.monthFullTitles[date.getMonth()]} {date.getFullYear()}
                        {firstWup && ', ' + ScheduleWidgetCleans.computeDayWakeUpTime(firstWup, 'string')}
                    </div>}
            </div>
            {
                isExpand && <>
                    {schedule.days?.map((day, dayi) =>
                        <ScheduleWidgetDay
                            scope={selfScope}
                            key={dayi}
                            day={day}
                            dayi={dayi}
                            schedule={schedule}
                        />
                    )}
                </>
            }
        </div>
    </ScheduleWidgetAppAttsContext.Provider>);
}