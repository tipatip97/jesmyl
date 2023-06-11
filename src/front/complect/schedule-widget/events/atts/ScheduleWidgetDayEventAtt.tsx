import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import mylib from "../../../my-lib/MyLib";
import { StrongComponentProps } from "../../../strong-control/Strong.model";
import { ScheduleWidgetScopePhase, strongScopeKeyValueSeparator } from "../../../strong-control/useStrongControl";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetAttKey, ScheduleWidgetAttRef, ScheduleWidgetDayEventAttValue, ScheduleWidgetDayListItemTypeBox } from "../../ScheduleWidget.model";
import ScheduleWidgetTopicTitle from "../../complect/TopicTitle";
import { useIsSchWidgetExpand, useScheduleWidgetAppAttsContext } from "../../useScheduleWidget";
import ScheduleWidgetDayEventPeriodicTranslation from "./DayEventPeriodicTranslationAtt";

const isNIs = (is: unknown) => !is;
const makeReg = (phase: ScheduleWidgetScopePhase) => {
    return new RegExp(`(${phase}${strongScopeKeyValueSeparator})\\d+`);
};

const dayPhaseMarkerReg = makeReg('dayMi');
const eventPhaseMarkerReg = makeReg('eventMi');

export default function ScheduleWidgetDayEventAtt(props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox,
    event: IScheduleWidgetDayEvent,
    day: IScheduleWidgetDay,
    attKey: ScheduleWidgetAttKey,
    att: ScheduleWidgetDayEventAttValue,
    isPast: boolean,
    schedule: IScheduleWidget,
}>) {
    const [appAtts] = useScheduleWidgetAppAttsContext();
    const appAtt = appAtts[props.attKey];
    const [isExpand, switchIsExpand] = useIsSchWidgetExpand(props.scope, props.isPast);
    const { isRedact, editIcon, setIsSelfRedact } = useIsRedactArea(true, null, true, true);

    if (!appAtt) return <div className="error-message">Неизвестное вложение</div>;
    let notateNode = null;

    let linkTitle = null;
    let attContent = null;
    let isCanRedact = true;

    try {
        let attValue = props.att;
        let scope = props.scope;

        if (mylib.isArr(props.att)) {
            const [dayMi, eventMi] = props.att as ScheduleWidgetAttRef;
            const day = props.schedule.days?.find(day => day.mi === dayMi);
            const event = day?.list.find(event => event.mi === eventMi);


            if (attValue[0] as number < 0) {
                isCanRedact = false;
                notateNode = <EvaIcon name="eye-outline" className="color--3 icon-scale-05" />;

                attContent = isExpand && <ScheduleWidgetDayEventPeriodicTranslation
                    att={attValue as [1, 2]}
                    attKey={props.attKey}
                    schedule={props.schedule}
                    day={props.day}
                    appAtt={appAtt}
                />;
            } else notateNode = <EvaIcon name="link-2" className="color--3 icon-scale-05" />;

            if (props.schedule.days && day && event?.atts) {
                scope = scope
                    .replace(dayPhaseMarkerReg, `$1${day.mi}`)
                    .replace(eventPhaseMarkerReg, `$1${event.mi}`);

                attValue = event.atts[props.attKey];

                if (props.schedule.types)
                    linkTitle = isExpand && <div className="flex margin-big-gap-l margin-gap-b">
                        <EvaIcon name="link-2" className="color--3 icon-scale-05" />
                        <ScheduleWidgetTopicTitle
                            titleBox={props.schedule.types[event.type]}
                            topicBox={event}
                            prefix={
                                props.day.mi !== day.mi && <span>{`${props.schedule.days.indexOf(day) + 1} день, `}</span>
                            }
                        />
                    </div>;
            } else attContent ??= <div className="error-message">Источник удалён</div>;
        }

        attContent ??= isExpand && <div>
            {appAtt.result?.(
                attValue ?? appAtt.initVal,
                scope,
                isRedact,
                (is) => setIsSelfRedact(is ?? isNIs),
            )}
        </div>;
    } catch (error) {
        attContent = <div className="error-message">Контент не доступен</div>;
    }

    return <>
        <div className="flex flex-gap between color--7 margin-gap-v">
            <div className="flex flex-gap pointer" onClick={() => switchIsExpand()}>
                <EvaIcon name={appAtt.icon} />
                {appAtt.title}
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </div>
            <div className="flex">
                {isCanRedact && isExpand && editIcon}
                {notateNode}
            </div>
        </div>
        {linkTitle}
        <div className="margin-big-gap-l">{attContent}</div>
    </>;
}
