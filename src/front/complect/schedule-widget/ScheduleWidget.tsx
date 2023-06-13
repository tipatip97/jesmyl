import { useEffect, useMemo, useState } from "react";
import { indexExer } from "../../components/index/Index.store";
import useAuth from "../../components/index/useAuth";
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
import ScheduleWidgetRoleList from "./roles/RoleList";
import { ScheduleWidgetAppAttsContext, ScheduleWidgetIsMainRoleContext, initialScheduleScope, makeAttStorage, takeScheduleStrongScopeMaker } from "./useScheduleWidget";

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
    const auth = useAuth();

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

    return content(
        <ScheduleWidgetIsMainRoleContext.Provider value={!!(auth && auth.login === schedule.roles.find((role) => role.mi === 0)?.user?.login)}>
            <ScheduleWidgetAppAttsContext.Provider value={atts}>
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
                        {isRedact
                            ? <StrongControlDateTimeExtracter
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
                            : schedule.start && <div>
                                Начало: {date.getDate()} {mylib.monthFullTitles[date.getMonth()]} {date.getFullYear()}
                                {firstWup && ', ' + ScheduleWidgetCleans.computeDayWakeUpTime(firstWup, 'string')}
                            </div>}
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
                        <ScheduleWidgetRoleList schedule={schedule} scope={selfScope} />
                        {isRedact && <>
                            <ScheduleWidgetEventList
                                selectScope=""
                                selectFieldName=""
                                scheduleScope={selfScope}
                                buttonTitle="Шаблоны событий"
                                icon="eye-outline"
                                schedule={schedule}
                                scope={selfScope}
                            />
                            <ScheduleWidgetCustomAttachments scope={selfScope} atts={schedule.atts} />
                            {!schedule.start || <div className="flex flex-gap margin-big-gap-v">
                                Добавить день
                                <StrongEvaButton
                                    scope={selfScope}
                                    fieldName="days"
                                    name="plus-circle-outline"
                                    confirm="Дни удалять не возможно! Создать новый?"
                                />
                            </div>}
                            {auth && auth.level >= 80 && <StrongEvaButton
                                scope={initialScheduleScope}
                                fieldName="list"
                                cud="D"
                                className="color--ko"
                                name="trash-outline"
                                confirm="Восстановить расписание будет не возможно. Продолжить?"
                                prefix="Удалить расписание"
                                mapExecArgs={(args) => {
                                    return {
                                        ...args,
                                        value: schedule.w
                                    };
                                }}
                            />}
                        </>}
                    </div>
                    {isExpand && <>
                        {schedule.days?.map((day, dayi) =>
                            <ScheduleWidgetDay
                                scope={selfScope}
                                key={dayi}
                                day={day}
                                dayi={dayi}
                                schedule={schedule}
                            />
                        )}
                    </>}
                </div>
            </ScheduleWidgetAppAttsContext.Provider>
        </ScheduleWidgetIsMainRoleContext.Provider>);
}