import { scheduleWidgetUserRights } from '../../../../models';
import { MyLib } from '../../../my-lib/MyLib';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import {
  IScheduleWidget,
  IScheduleWidgetDay,
  IScheduleWidgetDayEvent,
  ScheduleWidgetDayListItemTypeBox,
} from '../../ScheduleWidget.model';
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
        if (!appAtt || !scheduleWidgetUserRights.checkIsCan(userR, appAtt.R)) return null;
        const scope = takeStrongScopeMaker(props.scope, ' attKey/', attKey);

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
            isCanRedact={scheduleWidgetUserRights.checkIsCan(userR, appAtt.U)}
          />
        );
      })}
    </>
  );
}
