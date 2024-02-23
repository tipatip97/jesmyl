import useAuth from '../../../components/index/useAuth';
import useConnectionState from '../../../components/index/useConnectionState';
import PhaseContainerConfigurer from '../../phase-container/PhaseContainerConfigurer';
import { PhaseContainerConfigurerProps } from '../../phase-container/PhaseContainerConfigurer.model';
import StrongClipboardPicker from '../../strong-control/field/clipboard/Picker';
import ScheduleWidget from '../ScheduleWidget';
import { useSchedules } from '../useScheduleWidget';
import ScheduleCreateWidgetButton from './CreateButton';

export default function ScheduleWidgetListPage(props: Omit<PhaseContainerConfigurerProps, 'content' | 'className'>) {
  const schedules = useSchedules();
  const connectionNode = useConnectionState();
  const auth = useAuth();

  return (
    <PhaseContainerConfigurer
      {...props}
      className="ScheduleWidgetPage ScheduleWidgetListPage"
      head={
        <span className="flex flex-gap margin-gap">
          {connectionNode}
          <StrongClipboardPicker />
          {props.head}
        </span>
      }
      content={
        <>
          {schedules.list.map(schedule => {
            if (!schedule.start) return null;
            return (
              <ScheduleWidget
                key={schedule.w}
                schedule={schedule}
              />
            );
          })}
          {auth && auth.level > 29 && (
            <ScheduleCreateWidgetButton
              appName="index"
              schw={Date.now()}
              title=""
            />
          )}
        </>
      }
    />
  );
}
