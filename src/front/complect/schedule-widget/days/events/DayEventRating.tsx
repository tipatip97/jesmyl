import { ReactNode } from "react";
import EvaIcon from "../../../eva-icon/EvaIcon";
import useIsExpand from "../../../expand/useIsExpand";
import { MyLib } from "../../../my-lib/MyLib";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import StrongEditableField from "../../../strong-control/field/StrongEditableField";
import { IScheduleWidgetDayEvent } from "../../ScheduleWidget.model";
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from "../../useScheduleWidget";

const ratePoints = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const defRate: [number, string] = [0, ''];
const isNNull = (is: unknown) => is !== null;

export default function ScheduleWidgetDayEventRating(props: StrongComponentProps & {
    event: IScheduleWidgetDayEvent,
}) {
    const rights = useScheduleWidgetRightsContext();

    const ratingSum = props.event.rate === undefined ? 0 : MyLib.values(props.event.rate).reduce((sum, [rate]) => sum + rate, 0);

    const [titleNode, isExpand] = useIsExpand(false, <>
        <EvaIcon name="heart-outline" />
        Рейтинг события
        <span className="event-rating-display">{ratingSum}</span>
    </>);
    const [otherRatesTitleNode, isOtherRatesTitleExpand] = useIsExpand(false, <>Другие оценки</>);


    let myRate = defRate;
    let rateScope = '';
    let ratingNode = null;

    if (isExpand) {
        myRate = (rights.myUser && props.event.rate?.[rights.myUser?.mi]) ?? defRate;
        if (rights.myUser) rateScope = takeStrongScopeMaker(props.scope, ' rateMi/', rights.myUser.mi);;


        if (rights.isCanTotalRedact && rights.myUser) {
            let usersRateNode: ReactNode[] | null = null;
            const myUser = rights.myUser;
            const rates = props.event.rate;

            if (isOtherRatesTitleExpand && rates) {
                usersRateNode = rights.schedule.ctrl.users.map((user) => {
                    if (myUser.mi === user.mi) return null;
                    const rate = rates[user.mi];
                    if (rate === undefined) return null;

                    return <div key={user.mi} className="flex flex-gap">
                        <div className={'margin-gap-t nowrap self-start text-bold' + (rate[0] < 0 ? ' color--ko' : rate[0] > 0 ? ' color--ok' : ' color--3')}>
                            {user.alias || user.fio}: {rate[0]}
                        </div>
                        {rate[1] &&
                            <StrongEditableField
                                scope={rateScope}
                                fieldName="description"
                                value={rate[1]}
                                multiline
                            />}
                    </div>;
                }).filter(isNNull);

            }

            ratingNode = <>
                <div className="color--3">{otherRatesTitleNode}</div>
                {isOtherRatesTitleExpand && (usersRateNode?.length
                    ? usersRateNode
                    : <span className="color--7 text-italic margin-gap-l">Оценок нет</span>)}
            </>
        }
    }

    return <>
        <div className="color--3 margin-gap-v">{titleNode}</div>
        {isExpand && <div className="margin-big-gap-l margin-gap-v">
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
                        isCanSend={ratePoint !== myRate[0]}
                        fieldValue={ratePoint}
                        cud="U"
                        className={(ratePoint < 0 ? 'color--ko' : ratePoint > 0 ? 'color--ok' : 'color--3') + (isFill ? '' : ' fade-05')}
                        name={ratePoint < 0 ? 'heart-off-outline' : ratePoint === 0 ? 'question-mark-circle-outline' : 'heart-outline'}
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
            {ratingNode}
        </div>}
    </>;
}
