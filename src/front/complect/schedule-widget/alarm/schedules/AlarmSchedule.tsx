import StrongButton from "../../../strong-control/StrongButton";
import useIsExpand from "../../../expand/useIsExpand";
import ScheduleWidget from "../../ScheduleWidget";
import { IScheduleWidget } from "../../ScheduleWidget.model";
import ScheduleWidgetStartTimeText from "../../StartTimeText";
import ScheduleWidgetTopicTitle from "../../complect/TopicTitle";
import { takeScheduleStrongScopeMaker, useScheduleWidgetRights } from "../../useScheduleWidget";

export default function ScheduleWidgetAlarmSchedule({
    schedule
}: {
    schedule: IScheduleWidget,
}) {
    const schScope = takeScheduleStrongScopeMaker(schedule.w);
    const rights = useScheduleWidgetRights(schedule);
    const [titleNode, isExpand] = useIsExpand(false, <ScheduleWidgetTopicTitle
        titleBox={schedule}
        topicBox={schedule}
        altTitle=""
        iForceShowTopic
    />);

    let content = null;

    if (rights.myUser == null) {
        if (rights.isSwPublic) {
            if (rights.isSwBeforeRegistration) {
                content = <StrongButton
                    scope={schScope}
                    fieldName="users"
                    title="Буду участвовать"
                    confirm="Вы будете записаны как участник"
                />;
            } else if (rights.isSwHideContent)
                content = <div className="color--7 font-size:0.8em">Предварительной регистрации на мероприятие нет</div>
        }
    } else {
        if (rights.myUser.R === undefined || rights.myUser.R === 0) {
            if (!rights.isSwPublic || rights.isSwHideContent)
                content = <div className="color--7">Заявка принята</div>;
        } else if (!rights.isCanRead) {
            content = <div className="color--ko">Доступ к содержимому ограничен</div>;
        }
    }

    if (content)
        return <div className="margin-sm-gap">
            <div className="margin-gap-v">{titleNode}</div>
            {isExpand && <>
                <ScheduleWidgetStartTimeText schedule={schedule} />
                {content}
            </>}
        </div>;

    return <ScheduleWidget schedule={schedule} rights={rights} />;
}
