import { useEffect } from "react";
import mylib from "../../../my-lib/MyLib";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent } from "../../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../../atts/ScheduleWidgetBindAtts";
import ScheduleWidgetCleans from "../../complect/ScheduleWidgetCleans";
import ScheduleWidgetTopicTitle from "../../complect/TopicTitle";
import ScheduleWidgetDayEventAtts from "../../events/atts/ScheduleWidgetDayEventAtts";
import { takeStrongScopeMaker, useIsSchWidgetExpand, useScheduleWidgetRolesContext } from "../../useScheduleWidget";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";

const msInMin = mylib.howMs.inMin;
const msInDay = mylib.howMs.inDay;

export default function ScheduleWidgetDayEvent(props: {
    scope: string,
    scheduleScope: string,
    event: IScheduleWidgetDayEvent,
    eventi: number,
    dayi: number,
    schedule: IScheduleWidget,
    day: IScheduleWidgetDay,
    prevTime: number,
    secretTime: number,
    isShowPeriodsNotTs: boolean,
    onClickOnTs: () => void,
    redact: boolean | nil,
    wakeupMs: number,
    isPastDay: boolean,
    isLastEvent: boolean,
}) {
    const box = props.schedule.types?.[props.event.type];
    let timeMark = '';
    let timerClassNamePlus = '';
    const userRights = useScheduleWidgetRolesContext();
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, null, userRights.isCanRedact, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventMi/', props.event.mi);

    const now = Date.now();
    const eventTm = ScheduleWidgetCleans.takeEventTm(props.event, box);
    const eventFinishMs = props.schedule.start + props.wakeupMs + (props.prevTime ) * msInMin + props.dayi * msInDay;
    const eventStartMs = eventFinishMs - eventTm * msInMin;
    const isPastEvent = now > eventFinishMs;

    const [isExpand, switchIsExpand] = useIsSchWidgetExpand(selfScope, isPastEvent || props.isPastDay || !userRights.isCanReadTitles);

    useEffect(() => {
        if (isSelfRedact) switchIsExpand(true);
    }, [isSelfRedact, switchIsExpand]);

    if (!box) return <>Неизвестный шаблон события</>;
    const isExpandEvent = isExpand && userRights.isCanReadTitles && !props.redact;

    if (props.isShowPeriodsNotTs) {
        timeMark = eventTm + props.secretTime + 'м';
        timerClassNamePlus = props.event.tm == null || props.event.tm === box.tm || (props.event.tm === 0 && box.tm == null) ? '' : ' color--7';
    } else {
        const date = new Date(eventStartMs);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    const timeToTitle = userRights.isCanReadSpecials && !props.redact && now > eventStartMs && now < eventFinishMs &&
        <div className="absolute pos-left pos-bottom margin-big-gap-l font-size:0.7em">
            {props.isLastEvent
                ? ScheduleWidgetCleans.minutesToTextTemplate(eventFinishMs - now, 'остал$onNum{{ась}{ось}} $num $txt')
                : 'через ' + ScheduleWidgetCleans.minutesToText(eventFinishMs - now, true)}
        </div>;

    return <>
        <div
            className={
                'day-event relative'
                + (isExpandEvent ? ' expand' : '')
                + (props.isPastDay ? '' : isPastEvent ? ' past' : '')
                + (timeToTitle ? ' margin-big-gap-b' : '')
            }
        >
            <div
                className={'item-header flex flex-gap between' + (props.redact || !userRights.isCanReadTitles ? '' : ' pointer')}
                onClick={() => !props.redact && switchIsExpand()}
            >
                <div className="left-part flex flex-gap">
                    <span
                        className={'time-mark pointer' + timerClassNamePlus}
                        onClick={event => {
                            event.stopPropagation();
                            props.onClickOnTs();
                        }}
                    >{timeMark}</span>
                    {!isExpandEvent && !!props.event.secret && <EvaIcon
                        name="gift-outline"
                        className="color--ko"
                    />}
                    <ScheduleWidgetTopicTitle
                        className="color--3"
                        titleBox={box}
                        topicBox={props.event}
                    />
                </div>
                {editIcon}
            </div>
            <div className="day-event-content">
                {isRedact
                    ? <>
                        <StrongEvaButton
                            scope={selfScope}
                            fieldName="field"
                            cud="U"
                            name={props.event.secret ? 'checkmark-square-2-outline' : 'square-outline'}
                            confirm={`Событие ${box.title} ${props.event.secret ? 'больше не секретное' : 'будет секретным'}?`}
                            mapExecArgs={(args) => ({ ...args, key: 'secret', value: props.event.secret ? 0 : 1 })}
                            postfix="Секретное событие"
                        />
                        <StrongEditableField
                            isRedact
                            scope={selfScope}
                            fieldName="field"
                            type="number"
                            value={'' + eventTm}
                            postfix=" мин"
                            title="Продолжительность, мин"
                            icon="clock-outline"
                            mapExecArgs={(args) => ({ ...args, key: 'tm' })}
                        />
                        <StrongEditableField
                            isRedact
                            scope={selfScope}
                            fieldName="txtField"
                            value={props.event.topic}
                            title="Тема"
                            icon="bookmark-outline"
                            mapExecArgs={(args) => ({ ...args, txtKey: 'topic' })}
                        />
                    </>
                    : !!props.event.secret && <EvaButton
                        name="gift-outline"
                        className="color--ko margin-gap-v"
                        postfix="Это секретное событие"
                    />}
                <StrongEditableField
                    isRedact={isRedact}
                    scope={selfScope}
                    fieldName="txtField"
                    multiline
                    value={props.event.dsc}
                    title="Содержание"
                    textClassName=" "
                    icon="file-text-outline"
                    mapExecArgs={(args) => ({ ...args, txtKey: 'dsc' })}
                />
                {isRedact ?
                    <ScheduleWidgetBindAtts
                        atts={props.event.atts}
                        scope={selfScope}
                        schedule={props.schedule}
                        scheduleScope={props.scheduleScope}
                        forTitle={
                            <ScheduleWidgetTopicTitle
                                titleBox={box}
                                topicBox={props.event}
                            />}
                    />
                    : <ScheduleWidgetDayEventAtts
                        scope={selfScope}
                        typeBox={box}
                        event={props.event}
                        day={props.day}
                        schedule={props.schedule}
                        isPast={isPastEvent || props.isPastDay}
                    />}
            </div>
        </div>
        {timeToTitle}
    </>;
}
