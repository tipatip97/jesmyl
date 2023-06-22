import { ReactNode, useEffect } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import mylib, { MyLib } from "../../../my-lib/MyLib";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent } from "../../ScheduleWidget.model";
import ScheduleWidgetBindAtts from "../../atts/BindAtts";
import ScheduleWidgetCleans from "../../complect/Cleans";
import ScheduleWidgetTopicTitle from "../../complect/TopicTitle";
import ScheduleWidgetDayEventAtts from "../../events/atts/DayEventAtts";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";
import useIsExpand from "../../../expand/useIsExpand";
import { useIsRememberExpand } from "../../../expand/useIsRememberExpand";

const msInMin = mylib.howMs.inMin;
const msInDay = mylib.howMs.inDay;

const ratePoints = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const defRate: [number, string] = [0, ''];

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
    bottomContent: (isRedact: boolean) => ReactNode,
}) {
    const box = props.schedule.types?.[props.event.type];
    let timeMark = '';
    let timerClassNamePlus = '';
    const userRights = useScheduleWidgetRightsContext();
    const { editIcon, isRedact, isSelfRedact } = useIsRedactArea(true, null, userRights.isCanRedact, true);
    const selfScope = takeStrongScopeMaker(props.scope, ' eventMi/', props.event.mi);

    const now = Date.now();
    const eventTm = ScheduleWidgetCleans.takeEventTm(props.event, box);
    const eventFinishMs = props.schedule.start + props.wakeupMs + (props.prevTime) * msInMin + props.dayi * msInDay;
    const eventStartMs = eventFinishMs - eventTm * msInMin;
    const isPastEvent = now > eventFinishMs;

    const [, isExpand, switchIsExpand] = useIsRememberExpand(selfScope, null, null, isPastEvent || props.isPastDay || !userRights.isCanReadTitles);

    useEffect(() => {
        if (isSelfRedact) switchIsExpand(true);
    }, [isSelfRedact, switchIsExpand]);

    const isExpandEvent = isExpand && userRights.isCanReadTitles && !props.redact;
    let ratingTitleNodePrefix = null;

    if (isExpandEvent) {
        const ratingSum = props.event.rate === undefined ? 0 : MyLib.values(props.event.rate).reduce((sum, [rate]) => sum + rate, 0);

        ratingTitleNodePrefix = <>
            <EvaIcon name="heart-outline" />
            Рейтинг события
            <span className="event-rating-display">{ratingSum}</span>
        </>;
    }

    const [ratingTitleNode, isRatingExpand] = useIsExpand(false, ratingTitleNodePrefix);
    const [otherRatesTitleNode, isOtherRatesTitleExpand] = useIsExpand(false, <>Другие оценки</>);

    if (!box) return <>Неизвестный шаблон события</>;

    if (props.isShowPeriodsNotTs) {
        timeMark = eventTm + props.secretTime + 'м';
        timerClassNamePlus = props.event.tm == null || props.event.tm === box.tm || (props.event.tm === 0 && box.tm == null) ? '' : ' color--7';
    } else {
        const date = new Date(eventStartMs);
        timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    }

    let myRate = defRate;
    let rateScope = '';

    if (isExpandEvent && isRatingExpand) {
        myRate = (userRights.myUser && props.event.rate?.[userRights.myUser?.mi]) ?? defRate;
        if (userRights.myUser) rateScope = takeStrongScopeMaker(selfScope, ' rateMi/', userRights.myUser.mi);;
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
                {props.bottomContent(isRedact)}
                <div className="color--3 margin-gap-t">{ratingTitleNode}</div>
                {isRatingExpand && <div className="margin-big-gap-l margin-gap-v">
                    <div className="flex margin-gap-v">
                        {ratePoints.map((ratePoint) => {
                            const isFill = ratePoint === 0
                                ? myRate[0] === 0
                                : ratePoint < 0
                                    ? myRate[0] <= ratePoint
                                    : myRate[0] >= ratePoint;

                            return <StrongEvaButton
                                key={ratePoint}
                                scope={rateScope}
                                fieldName="rate"
                                cud="U"
                                className={(ratePoint < 0 ? 'color--ko' : ratePoint > 0 ? 'color--ok' : 'color--3') + (isFill ? '' : ' fade-05')}
                                name={ratePoint < 0 ? 'heart-off-outline' : ratePoint === 0 ? 'question-mark-circle-outline' : 'heart-outline'}
                                mapExecArgs={(args) => {
                                    if (ratePoint === myRate[0]) return;
                                    return {
                                        ...args,
                                        value: ratePoint,
                                    };
                                }}
                            />;
                        })}
                        <span className={'event-rating-display margin-gap-l' + (myRate[0] === 0 ? ' color--3' : myRate[0] < 0 ? ' color--ko' : ' color--ok')}>{myRate[0]}</span>
                    </div>
                    <StrongEditableField
                        scope={rateScope}
                        fieldName="description"
                        icon="message-square-outline"
                        value={myRate[1]}
                        title="Комментарий"
                        className="margin-gap-v"
                        isRedact
                        setSelfRedact
                        multiline
                    />
                    {userRights.isCanTotalRedact && props.event.rate && <>
                        <div className="color--3">{otherRatesTitleNode}</div>
                        {isOtherRatesTitleExpand && props.schedule.ctrl.users.map((user) => {
                            if (userRights.myUser && userRights.myUser.mi === user.mi) return null;
                            const rate = props.event.rate![user.mi];
                            if (rate === undefined) return null;

                            return <div key={user.mi} className="flex flex-gap">
                                <div className="color--3 margin-gap-t nowrap self-start">{user.alias || user.fio}: {rate[0]}</div>
                                {rate[1] &&
                                    <StrongEditableField
                                        scope={rateScope}
                                        fieldName="description"
                                        value={rate[1]}
                                        multiline
                                    />}
                            </div>;
                        })}
                    </>}
                </div>}
                <div className="sign-line" />
            </div>}
        </div>
        {timeToTitle}
    </>;
}
