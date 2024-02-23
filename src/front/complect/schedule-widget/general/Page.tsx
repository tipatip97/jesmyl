import { ReactNode } from 'react';
import { AppName } from '../../../app/App.model';
import useAuth from '../../../components/index/useAuth';
import useConnectionState from '../../../components/index/useConnectionState';
import PhaseContainerConfigurer from '../../phase-container/PhaseContainerConfigurer';
import { PhaseContainerConfigurerProps } from '../../phase-container/PhaseContainerConfigurer.model';
import StrongButton from '../../strong-control/StrongButton';
import StrongClipboardPicker from '../../strong-control/field/clipboard/Picker';
import ScheduleWidget from '../ScheduleWidget';
import { IScheduleWidget } from '../ScheduleWidget.model';
import useScheduleWidget, { takeScheduleStrongScopeMaker } from '../useScheduleWidget';
import ScheduleCreateWidgetButton from './CreateButton';

export default function ScheduleWidgetPage(
  props: Omit<PhaseContainerConfigurerProps, 'content' | 'className'> & {
    schedulew: number;
    schedule?: IScheduleWidget;
    title: string;
    appName: AppName;
    headTitle: ReactNode;
  },
) {
  const { schedule } = useScheduleWidget(props.schedulew);
  const connectionNode = useConnectionState();
  const auth = useAuth();

  return (
    <PhaseContainerConfigurer
      {...props}
      className="ScheduleWidgetPage"
      headTitle={props.headTitle}
      head={
        <span className="flex flex-gap margin-gap">
          {connectionNode}
          <StrongClipboardPicker />
          {props.head}
        </span>
      }
      content={
        schedule ? (
          schedule.start === 0 ? (
            schedule.ctrl.users.some(user => user.login === auth.login) ? (
              <>Заявка отправлена</>
            ) : (
              <StrongButton
                scope={takeScheduleStrongScopeMaker(schedule.w)}
                fieldName="addMeByLink"
                title="Буду участвовать"
              />
            )
          ) : (
            <ScheduleWidget schedule={schedule} />
          )
        ) : (
          <ScheduleCreateWidgetButton
            appName={props.appName}
            title={props.title}
            schw={props.schedulew}
          />
        )
      }
    />
  );
}
