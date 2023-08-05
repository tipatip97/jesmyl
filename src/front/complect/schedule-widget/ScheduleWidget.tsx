import { ReactNode, useEffect, useMemo, useState } from "react";
import useAuth from "../../components/index/useAuth";
import EvaButton from "../eva-icon/EvaButton";
import EvaIcon from "../eva-icon/EvaIcon";
import { useIsRememberExpand } from "../expand/useIsRememberExpand";
import mylib from "../my-lib/MyLib";
import { crossApplicationLinkCoder } from "../qr-code/QRCodeMaster";
import StrongButton from "../strong-control/StrongButton";
import StrongControlDateTimeExtracter from "../strong-control/StrongDateTimeExtracter";
import StrongEvaButton from "../strong-control/StrongEvaButton";
import StrongEditableField from "../strong-control/field/StrongEditableField";
import useIsRedactArea from "../useIsRedactArea";
import { IScheduleWidget } from "./ScheduleWidget.model";
import './ScheduleWidget.scss';
import ScheduleWidgetCustomAttachments from "./atts/custom/CustomAttachments";
import ScheduleWidgetStartTimeText from "./complect/StartTimeText";
import ScheduleWidgetTopicTitle from "./complect/TopicTitle";
import ScheduleWidgetControl from "./control/Control";
import ScheduleWidgetDay from "./days/Day";
import ScheduleWidgetEventList from "./events/EventList";
import ScheduleWidgetContextWrapper from "./general/ContextWrapper";
import { ScheduleWidgetCopy } from "./general/Copy";
import ScheduleWidgetLists from "./lists/Lists";
import { ScheduleWidgetRights, initialScheduleScope, takeScheduleStrongScopeMaker, useScheduleWidgetRights } from "./useScheduleWidget";

const msInMin = mylib.howMs.inMin;

export default function ScheduleWidget({
    schedule,
    rights: topRights,
    altActionsNode,
}: {
    schedule?: IScheduleWidget,
    rights?: ScheduleWidgetRights,
    altActionsNode?: ReactNode,
}) {
    const selfScope = schedule ? takeScheduleStrongScopeMaker(schedule.w) : '';
    const auth = useAuth();
    const rights = useScheduleWidgetRights(schedule, topRights);

    const { editIcon, isRedact } = useIsRedactArea(true, null, rights.isCanRedact, true);
    const [startTime, setStartTime] = useState(schedule?.start);
    const [expandNode, isExpand] = useIsRememberExpand(
        selfScope,
        <ScheduleWidgetTopicTitle
            prefix={<EvaIcon name="calendar-outline" />}
            titleBox={schedule ?? {}}
            altTitle="Расписание"
            topicBox={schedule}
        />,
        (isExpand) => isExpand
            ? <span className="flex flex-gap">
                <EvaButton
                    name="link-2"
                    onClick={() => {
                        if (schedule) {
                            navigator.share({
                                url: crossApplicationLinkCoder.encode({
                                    appName: 'index',
                                    key: 'schw',
                                    value: schedule.w,
                                }),
                                title: schedule.title,
                                text: `Расписание ${schedule.title}${schedule.dsc ? `: ${schedule.dsc}` : ''}`,
                            });
                        }
                    }}
                />
                {editIcon}
            </span>
            : altActionsNode
    );

    const date = useMemo(() => new Date(schedule?.start || Date.now()), [schedule?.start]);
    const dateValue = useMemo(() => date.getTime() ? date.toLocaleDateString().replace(/\./g, ' ') : '', [date]);

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

    let blockContent = null;

    if (rights.myUser == null) {
        if (rights.isSwPublic) {
            if (rights.isSwBeforeRegistration) {
                blockContent = <StrongButton
                    scope={selfScope}
                    fieldName="users"
                    title="Буду участвовать"
                    confirm="Вы будете записаны как участник"
                />;
            } else if (rights.isSwHideContent)
                blockContent = <div className="color--7 font-size:0.8em">Предварительной регистрации на мероприятие нет</div>
        }
    } else {
        if (rights.myUser.R === undefined || rights.myUser.R === 0) {
            if (!rights.isSwPublic || rights.isSwHideContent)
                blockContent = <div className="color--7">Заявка принята</div>;
        } else if (!rights.isCanRead) {
            blockContent = <div className="color--ko">Доступ к содержимому ограничен</div>;
        }
    }

    if (blockContent)
        return <div className="margin-sm-gap">
            <div className="margin-gap-v">{expandNode}</div>
            {isExpand && <>
                <ScheduleWidgetStartTimeText schedule={schedule} />
                {blockContent}
            </>}
        </div>;

    if (!schedule) return null;

    if (blockContent)
        return <ScheduleWidgetContextWrapper schedule={schedule} rights={rights}>
            {blockContent}
        </ScheduleWidgetContextWrapper>;

    return <ScheduleWidgetContextWrapper schedule={schedule} rights={rights}>
        <div className={'schedule-widget' + (isExpand ? ' expand' : '')}>
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
                            {isRedact && <>
                                <StrongEditableField
                                    scope={selfScope}
                                    fieldName="field"
                                    fieldKey="title"
                                    value={schedule}
                                    isRedact
                                    icon="credit-card-outline"
                                    title="Заголовок"
                                />
                                <StrongEditableField
                                    scope={selfScope}
                                    fieldName="field"
                                    fieldKey="topic"
                                    value={schedule}
                                    isRedact
                                    icon="bookmark-outline"
                                    title="Название"
                                />
                            </>}
                            {(isRedact || schedule.dsc) && <StrongEditableField
                                scope={selfScope}
                                fieldName="field"
                                fieldKey="dsc"
                                value={schedule}
                                isRedact={isRedact}
                                multiline
                                textClassName=" "
                                icon="file-text-outline"
                                title="Описание"
                            />}
                            {rights.isCanReadTitles && <>
                                <ScheduleWidgetControl scope={selfScope} />
                                <ScheduleWidgetLists
                                    scope={selfScope}
                                    scheduleScope={selfScope}
                                />
                            </>}
                            {isRedact && <>
                                <ScheduleWidgetEventList
                                    selectScope=""
                                    selectFieldName=""
                                    scheduleScope={selfScope}
                                    postfix={<>Шаблоны событий <EvaIcon name="chevron-right" /></>}
                                    icon="at"
                                    schedule={schedule}
                                />
                                <ScheduleWidgetCustomAttachments scope={selfScope} tatts={schedule.tatts} />
                                {!schedule.days.length && !schedule.tatts.length && !schedule.types.length &&
                                    <ScheduleWidgetCopy schw={schedule.w} />}
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
                                            schw: schedule.w
                                        };
                                    }}
                                />}
                            </>}
                            {schedule.days.map((day, dayi) => {
                                if (dayi === 0 && schedule.withTech && !rights.isCanReadSpecials) return null;

                                return <ScheduleWidgetDay
                                    scope={selfScope}
                                    key={dayi}
                                    day={day}
                                    dayi={dayi}
                                    schedule={schedule}
                                    isCanOpenFull
                                />
                            })}
                        </>
                        : <></>}
                </div>
            </>}
        </div>
    </ScheduleWidgetContextWrapper>;
}