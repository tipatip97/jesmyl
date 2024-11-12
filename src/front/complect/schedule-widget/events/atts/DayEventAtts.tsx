import { MyLib } from 'front/utils';
import {
  IScheduleWidget,
  IScheduleWidgetDay,
  IScheduleWidgetDayEvent,
  ScheduleWidgetDayListItemTypeBox,
  scheduleWidgetUserRights,
} from 'shared/api';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import {
  takeStrongScopeMaker,
  useScheduleWidgetAppAttsContext,
  useScheduleWidgetRightsContext,
} from '../../useScheduleWidget';
import ScheduleWidgetDayEventAtt from './DayEventAtt';

export default function ScheduleWidgetDayEventAtts(
  props: StrongComponentProps<{
    typeBox: ScheduleWidgetDayListItemTypeBox;
    event: IScheduleWidgetDayEvent;
    day: IScheduleWidgetDay;
    dayi: number;
    isPast: boolean;
    schedule: IScheduleWidget;
  }>,
) {
  const [appAtts] = useScheduleWidgetAppAttsContext();
  const rights = useScheduleWidgetRightsContext();
  const userR = rights.myUser?.R ?? rights.schedule.ctrl.defu;
  const atts = MyLib.entries(props.event.atts);

  MyLib.entries(props.typeBox.atts).forEach(attEntry => {
    if (!atts.some(entry => entry[0] === attEntry[0])) atts.push(attEntry);
  });

  return (
    <>
      {atts.map(([attKey, att]) => {
        const appAtt = appAtts[attKey];

        if (
          !appAtt ||
          (!scheduleWidgetUserRights.checkInvertIsCan(userR, appAtt.R) &&
            (appAtt.Rs?.length ? rights.myUser && !appAtt.Rs.includes(rights.myUser.mi) : false))
        )
          return null;

        const scope = takeStrongScopeMaker(props.scope, ' attKey/', attKey);

        const isCanUpdate =
          scheduleWidgetUserRights.checkInvertIsCan(userR, appAtt.U) ||
          (appAtt.Us?.length ? !!rights.myUser && appAtt.Us.includes(rights.myUser.mi) : false);

        return (
          <ScheduleWidgetDayEventAtt
            key={attKey}
            scope={scope}
            typeBox={props.typeBox}
            att={att}
            attKey={attKey}
            day={props.day}
            dayi={props.dayi}
            schedule={props.schedule}
            event={props.event}
            isPast={props.isPast}
            isCanRedact={isCanUpdate}
          />
        );
      })}
    </>
  );
}
