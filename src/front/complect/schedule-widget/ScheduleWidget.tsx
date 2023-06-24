import { useEffect, useMemo, useState } from "react";
import { indexExer } from "../../components/index/Index.store";
import useAuth from "../../components/index/useAuth";
import EvaIcon from "../eva-icon/EvaIcon";
import mylib from "../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../strong-control/StrongDateTimeExtracter";
import StrongEvaButton from "../strong-control/StrongEvaButton";
import StrongEditableField from "../strong-control/field/StrongEditableField";
import { useStrongExerContent } from "../strong-control/useStrongControl";
import useIsRedactArea from "../useIsRedactArea";
import { IScheduleWidget } from "./ScheduleWidget.model";
import './ScheduleWidget.scss';
import ScheduleWidgetStartTimeText from "./StartTimeText";
import ScheduleWidgetCustomAttachments from "./atts/custom/CustomAttachments";
import ScheduleWidgetTopicTitle from "./complect/TopicTitle";
import ScheduleWidgetControl from "./control/Control";
import ScheduleWidgetDay from "./days/Day";
import ScheduleWidgetEventList from "./events/EventList";
import { ScheduleWidgetAppAttsContext, ScheduleWidgetRights, ScheduleWidgetRightsContext, ScheduleWidgetSchContext, initialScheduleScope, makeAttStorage, takeScheduleStrongScopeMaker, useScheduleWidgetRights } from "./useScheduleWidget";
import { useIsRememberExpand } from "../expand/useIsRememberExpand";
import ScheduleWidgetLists from "./lists/Lists";

const msInMin = mylib.howMs.inMin;

export default function ScheduleWidget({
    schedule,
    rights: topRights,
}: {
    schedule?: IScheduleWidget,
    rights?: ScheduleWidgetRights,
}) {
    const selfScope = schedule ? takeScheduleStrongScopeMaker(schedule.w) : '';
    const auth = useAuth();
    const rights = useScheduleWidgetRights(schedule, topRights);

    const { editIcon, isRedact } = useIsRedactArea(true, null, rights.isCanRedact, true);
    const [startTime, setStartTime] = useState(schedule?.start);
    const content = useStrongExerContent(indexExer);
    const [expandNode, isExpand] = useIsRememberExpand(
        selfScope,
        <ScheduleWidgetTopicTitle
            prefix={<EvaIcon name="calendar-outline" />}
            titleBox={schedule ?? {}}
            altTitle="Расписание"
            topicBox={schedule}
        />,
        (isExpand) => isExpand && editIcon
    );

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

    return content(
        <ScheduleWidgetSchContext.Provider value={schedule}>
            <ScheduleWidgetAppAttsContext.Provider value={atts}>
                <ScheduleWidgetRightsContext.Provider value={rights}>
                    <div className="schedule-widget">
                        {expandNode}
                        {isExpand && <>
                            <div className="margin-big-gap-v">
                                {rights.isCanRedact && isRedact
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
                                    : <ScheduleWidgetStartTimeText schedule={schedule} date={date} />}
                                {rights.isCanRead
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
                                        {(rights.isCanReadTitles) && <StrongEditableField
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
                                        <ScheduleWidgetControl scope={selfScope} />
                                        <ScheduleWidgetLists scope={selfScope} />
                                        {isRedact && <>
                                            <ScheduleWidgetEventList
                                                selectScope=""
                                                selectFieldName=""
                                                scheduleScope={selfScope}
                                                postfix={<>Шаблоны событий <EvaIcon name="chevron-right" /></>}
                                                icon="at"
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
                    </div>
                </ScheduleWidgetRightsContext.Provider>
            </ScheduleWidgetAppAttsContext.Provider>
        </ScheduleWidgetSchContext.Provider>);
}