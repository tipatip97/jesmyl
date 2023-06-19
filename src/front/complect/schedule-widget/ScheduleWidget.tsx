import { useEffect, useMemo, useState } from "react";
import { indexExer } from "../../components/index/Index.store";
import useAuth from "../../components/index/useAuth";
import mylib from "../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../strong-control/StrongDateTimeExtracter";
import StrongEvaButton from "../strong-control/StrongEvaButton";
import StrongEditableField from "../strong-control/field/StrongEditableField";
import { useStrongExerContent } from "../strong-control/useStrongControl";
import useIsExpand from "../useIsExpand";
import useIsRedactArea from "../useIsRedactArea";
import { IScheduleWidget } from "./ScheduleWidget.model";
import './ScheduleWidget.scss';
import ScheduleWidgetCustomAttachments from "./atts/custom/CustomAttachments";
import ScheduleWidgetCleans from "./complect/Cleans";
import ScheduleWidgetTopicTitle from "./complect/TopicTitle";
import ScheduleWidgetDay from "./days/Day";
import ScheduleWidgetEventList from "./events/EventList";
import ScheduleWidgetControl from "./control/Control";
import { ScheduleWidgetAppAttsContext, ScheduleWidgetRolesContext, ScheduleWidgetSchContext, initialScheduleScope, makeAttStorage, takeScheduleStrongScopeMaker, useScheduleWidgetRoles } from "./useScheduleWidget";
import StrongButton from "../strong-control/StrongButton";
import EvaIcon from "../eva-icon/EvaIcon";

const msInMin = mylib.howMs.inMin;

export default function ScheduleWidget({
    schedule,
    expand,
}: {
    schedule?: IScheduleWidget,
    expand?: boolean,
}) {
    const [expandNode, isExpand] = useIsExpand(
        expand ?? false, null,
        <ScheduleWidgetTopicTitle
            titleBox={schedule ?? {}}
            altTitle="Расписание"
            topicBox={schedule}
        />);
    const auth = useAuth();
    const roles = useScheduleWidgetRoles(schedule);

    const { editIcon, isRedact } = useIsRedactArea(true, null, roles.isCanRedact, true);
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

    return content(
        <ScheduleWidgetSchContext.Provider value={schedule}>
            <ScheduleWidgetAppAttsContext.Provider value={atts}>
                <ScheduleWidgetRolesContext.Provider value={roles}>
                    <div className="schedule-widget">
                        <div className="flex flex-gap">
                            {expandNode}
                            {editIcon}
                        </div>
                        {isExpand && <>
                            <div className="margin-big-gap-v">
                                {roles.isCanRedact && isRedact
                                    ? <StrongControlDateTimeExtracter
                                        scope={selfScope}
                                        fieldName="start"
                                        title="Начало"
                                        icon="calendar-outline"
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
                                {roles.isCanRead
                                    ? <>
                                        {isRedact && <StrongEditableField
                                            scope={selfScope}
                                            fieldName="field"
                                            value={schedule.topic}
                                            isRedact
                                            icon="bookmark-outline"
                                            title="Название"
                                            mapExecArgs={(args) => ({ ...args, key: 'topic' })}
                                        />}
                                        {roles.isCanReadTitles && <StrongEditableField
                                            scope={selfScope}
                                            fieldName="field"
                                            value={schedule.dsc}
                                            isRedact={isRedact}
                                            multiline
                                            textClassName=" "
                                            icon="file-text-outline"
                                            title="Описание"
                                            mapExecArgs={(args) => ({ ...args, key: 'dsc' })}
                                        />}
                                        <ScheduleWidgetControl schedule={schedule} scope={selfScope} />
                                        {isRedact && <>
                                            <ScheduleWidgetEventList
                                                selectScope=""
                                                selectFieldName=""
                                                scheduleScope={selfScope}
                                                postfix={<>Шаблоны событий <EvaIcon name="chevron-right" /></>}
                                                icon="list"
                                                schedule={schedule}
                                                scope={selfScope}
                                            />
                                            <ScheduleWidgetCustomAttachments scope={selfScope} tatts={schedule.tatts} />
                                            {!schedule.start || <StrongEvaButton
                                                scope={selfScope}
                                                fieldName="days"
                                                name="plus-outline"
                                                postfix="Добавить день"
                                                confirm="Дни удалять не возможно! Создать новый?"
                                                className="margin-gap-v"
                                            />}
                                            {auth && auth.level >= 80 && <StrongEvaButton
                                                scope={initialScheduleScope}
                                                fieldName="list"
                                                cud="D"
                                                className="color--ko"
                                                name="trash-outline"
                                                confirm="Восстановить расписание будет не возможно. Продолжить?"
                                                postfix="Удалить расписание"
                                                mapExecArgs={(args) => {
                                                    return {
                                                        ...args,
                                                        value: schedule.w
                                                    };
                                                }}
                                            />}
                                        </>}
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
                                    : <></>}
                            </div>
                        </>}
                        {auth && !schedule.ctrl.users.some(user => user.login === auth.login)
                            && <StrongButton
                                scope={selfScope}
                                fieldName="users"
                                title="Хочу участвовать"
                            />}
                    </div>
                </ScheduleWidgetRolesContext.Provider>
            </ScheduleWidgetAppAttsContext.Provider>
        </ScheduleWidgetSchContext.Provider>);
}