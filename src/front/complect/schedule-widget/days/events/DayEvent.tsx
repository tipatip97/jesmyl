import { ReactNode, useEffect } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import { useIsRememberExpand } from "../../../expand/useIsRememberExpand";
import mylib from "../../../my-lib/MyLib";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent } from "../../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../../atts/BindAtts";
import ScheduleWidgetCleans from "../../complect/Cleans";
import ScheduleWidgetTopicTitle from "../../complect/TopicTitle";
import ScheduleWidgetDayEventAtts from "../../events/atts/DayEventAtts";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import ScheduleWidgetDayEventRating from "./DayEventRating";

const msInMin = mylib.howMs.inMin;
const msInDay = mylib.howMs.inDay;

export default function ScheduleWidgetDayEvent(props: {
    scope: string,
    scheduleScope: string,
    event: IScheduleWidgetDayEvent,
    eventi: number,
    dayi: number,
    day: IScheduleWidgetDay,
    prevTime: number,
    secretTime: number,
    isShowPeriodsNotTs: boolean,
    onClickOnTs: () => void,
    redact: boolean | nil,
    wakeupMs: number,
    isPastDay: boolean,
    isLastEvent: boolean,
    bottomContent: (isRedact: boolean) => ReactNode,
}) {
    let timeMark = '';
    let timerClassNamePlus = '';
    const rights = useScheduleWidgetRightsContext();
    const box = rights.schedule.types?.[props.event.type];
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, null, rights.isCanRedact, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventMi/', props.event.mi);

    const now = Date.now();
    const eventTm = ScheduleWidgetCleans.takeEventTm(props.event, box);
    const eventFinishMs = rights.schedule.start + props.wakeupMs + (props.prevTime) * msInMin + props.dayi * msInDay;
    const eventStartMs = eventFinishMs - eventTm * msInMin;
    const isPastEvent = now > eventFinishMs;

    const [, isExpand, switchIsExpand] = useIsRememberExpand(selfScope, null, null, isPastEvent || props.isPastDay || !rights.isCanReadTitles);

    useEffect(() => {
        if (isSelfRedact) switchIsExpand(true);
    }, [isSelfRedact, switchIsExpand]);

    const isExpandEvent = isExpand && rights.isCanReadTitles && !props.redact;

    if (!box) return <>Неизвестный шаблон события</>;

    if (props.isShowPeriodsNotTs) {
        timeMark = eventTm + props.secretTime + 'м';
        timerClassNamePlus = props.event.tm == null || props.event.tm === box.tm || (props.event.tm === 0 && box.tm == null) ? '' : ' color--7';
    } else {
        const date = new Date(eventStartMs);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    const timeToTitle = rights.isCanReadSpecials && !props.redact && now > eventStartMs && now < eventFinishMs &&
        <div className="absolute pos-left pos-bottom margin-big-gap-l font-size:0.7em">
            {props.isLastEvent
                ? ScheduleWidgetCleans.minutesToTextTemplate(eventFinishMs - now, 'остал$onNum{{ась}{ось}} $num $txt')
                : 'через ' + ScheduleWidgetCleans.minutesToText(eventFinishMs - now, true)}
        </div>;

    return <>
        <div
            className={
                'day-event relative'
                + (props.isPastDay ? '' : isPastEvent ? ' past' : '')
                + (timeToTitle ? ' margin-big-gap-b' : '')
            }
        >
            <div
                className={'item-header flex flex-gap between' + (props.redact || !rights.isCanReadTitles ? '' : ' pointer')}
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
                        titleBox={box}
                        topicBox={props.event}
                    />
                </div>
                {editIcon}
            </div>
            {isExpandEvent && <div className="day-event-content no-scrollbar">
                <div className="sign-line" />
                {isRedact
                    ? <>
                        <StrongEvaButton
                            scope={selfScope}
                            fieldName="secret"
                            cud="U"
                            name={props.event.secret ? 'checkmark-square-2-outline' : 'square-outline'}
                            confirm={`Событие ${box.title} ${props.event.secret ? 'больше не секретное' : 'будет секретным'}?`}
                            mapExecArgs={(args) => ({ ...args, value: props.event.secret ? 0 : 1 })}
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
                        schedule={rights.schedule}
                        scheduleScope={props.scheduleScope}
                        forTitle={
                            <ScheduleWidgetTopicTitle
                                titleBox={box}
                                topicBox={props.event}
                            />}
                    />
                    : <>
                        <ScheduleWidgetDayEventAtts
                            scope={selfScope}
                            typeBox={box}
                            event={props.event}
                            day={props.day}
                            schedule={rights.schedule}
                            isPast={isPastEvent || props.isPastDay}
                        />
                        <ScheduleWidgetDayEventRating
                            scope={selfScope}
                            event={props.event}
                        />
                    </>}
                {props.bottomContent(isRedact)}
                <div className="sign-line" />
            </div>}
        </div>
        {timeToTitle}
    </>;
}
