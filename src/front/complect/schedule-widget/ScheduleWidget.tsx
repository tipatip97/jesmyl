import { useEffect, useMemo, useState } from "react";
import { indexExer } from "../../components/index/Index.store";
import EvaButton from "../eva-icon/EvaButton";
import mylib from "../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../strong-control/StrongDateTimeExtracter";
import StrongEvaButton from "../strong-control/StrongEvaButton";
import StrongEditableField from "../strong-control/field/StrongEditableField";
import { useStrongExerContent } from "../strong-control/useStrongControl";
import useIsRedactArea from "../useIsRedactArea";
import { IScheduleWidget } from "./ScheduleWidget.model";
import './ScheduleWidget.scss';
import ScheduleWidgetCustomAttachments from "./atts/custom/ScheduleWidgetCustomAttachments";
import ScheduleWidgetCleans from "./complect/ScheduleWidgetCleans";
import ScheduleWidgetTopicTitle from "./complect/TopicTitle";
import ScheduleWidgetDay from "./days/ScheduleWidgetDay";
import ScheduleWidgetEventList from "./events/ScheduleWidgetEventList";
import { ScheduleWidgetAppAttsContext, makeAttStorage, takeScheduleStrongScopeMaker } from "./useScheduleWidget";

const msInMin = mylib.howMs.inMin;

export default function ScheduleWidget({
    schedule,
    expand,
}: {
    schedule?: IScheduleWidget,
    expand?: boolean,
}) {
    const [isExpand, setIsExpand] = useState<und | boolean>(expand);
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);
    const [startTime, setStartTime] = useState(schedule?.start);
    const content = useStrongExerContent(indexExer);

    const date = useMemo(() => new Date(schedule?.start || Date.now()), [schedule?.start]);
    const dateValue = useMemo(() => date.getTime() ? date.toLocaleDateString().replace(/\./g, ' ') : '', [date]);
    const atts = useMemo(() => makeAttStorage(schedule), [schedule]);

    const [updates, setUpdates] = useState<null | number>(null);
    useEffect(() => {
        let time = msInMin;
        if (updates === null) {
            const now = Date.now();
            time = time - Math.floor((now / time - Math.floor(now / time)) * time);
        }
        const to = setTimeout(setUpdates, time, updates! + 1);
        return () => clearTimeout(to);
    }, [updates]);

    if (!schedule) return null;

    const selfScope = takeScheduleStrongScopeMaker(schedule.w);

    const firstWup = schedule.days?.[0].wup;

    return content(<ScheduleWidgetAppAttsContext.Provider value={atts}>
        <div className="schedule-widget">
            <div className="flex flex-gap">
                <div className="flex flex-gap pointer" onClick={() => setIsExpand(is => !is)}>
                    <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
                    <ScheduleWidgetTopicTitle
                        titleBox={schedule}
                        altTitle="Расписание"
                        topicBox={schedule}
                    />
                </div>
                {editIcon}
            </div>
            <div className="margin-big-gap-v">
                {isRedact && <StrongEditableField
                    scope={selfScope}
                    fieldName="field"
                    value={schedule.topic}
                    isRedact={isRedact}
                    icon="bookmark-outline"
                    title="Название"
                    mapExecArgs={(args) => ({ ...args, key: 'topic' })}
                />}
                <StrongEditableField
                    scope={selfScope}
                    fieldName="field"
                    value={schedule.dsc}
                    isRedact={isRedact}
                    multiline
                    textClassName=" "
                    icon="file-text-outline"
                    title="Описание"
                    mapExecArgs={(args) => ({ ...args, key: 'dsc' })}
                />
                {isRedact ?
                    <>
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
                        <ScheduleWidgetEventList
                            selectScope=""
                            selectFieldName=""
                            buttonTitle="Шаблоны событий"
                            icon="eye-outline"
                            schedule={schedule}
                            scope={selfScope}
                        />
                        <ScheduleWidgetCustomAttachments scope={selfScope} atts={schedule.atts} />
                        {!!schedule.start && <div className="flex flex-gap margin-big-gap-v">
                            Добавить день
                            <StrongEvaButton
                                scope={selfScope}
                                fieldName="days"
                                name="plus-circle-outline"
                                confirm="Дни удалять не возможно! Создать новый?"
                            />
                        </div>}
                    </>
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