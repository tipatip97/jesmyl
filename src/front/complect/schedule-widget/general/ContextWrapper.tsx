import { ReactNode, useMemo } from 'react';
import { IScheduleWidget } from 'shared/api';
import { indexExer } from '../../../components/index/IndexExer';
import { useStrongExerContent } from '../../strong-control/useStrongControl';
import {
  ScheduleWidgetAppAttsContext,
  ScheduleWidgetRights,
  ScheduleWidgetRightsContext,
  makeAttStorage,
  useScheduleWidgetRights,
} from '../useScheduleWidget';

export default function ScheduleWidgetContextWrapper({
  schedule,
  rights: topRights,
  children,
}: {
  schedule: IScheduleWidget;
  rights?: ScheduleWidgetRights;
  children: ReactNode;
}) {
  const rights = useScheduleWidgetRights(schedule, topRights);
  const content = useStrongExerContent(indexExer);
  const atts = useMemo(() => makeAttStorage(schedule), [schedule]);

  if (!schedule) return null;

  return content(
    <ScheduleWidgetAppAttsContext.Provider value={atts}>
      <ScheduleWidgetRightsContext.Provider value={rights}>{children}</ScheduleWidgetRightsContext.Provider>
    </ScheduleWidgetAppAttsContext.Provider>,
  );
}
