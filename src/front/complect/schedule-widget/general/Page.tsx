import { useParams } from 'react-router-dom';
import { useAuth, useIndexSchedules } from '../../../components/index/molecules';
import useConnectionState from '../../../components/index/useConnectionState';
import PhaseContainerConfigurer from '../../phase-container/PhaseContainerConfigurer';
import StrongButton from '../../strong-control/StrongButton';
import StrongClipboardPicker from '../../strong-control/field/clipboard/Picker';
import ScheduleWidget from '../ScheduleWidget';
import { ScheduleWidgetGoToLiveTranslationButton } from '../live-translations/GoToLiveTranslationButton';
import { takeScheduleStrongScopeMaker } from '../useScheduleWidget';

export default function ScheduleWidgetPage() {
  const schedules = useIndexSchedules();
  const schw = +useParams().schw!;
  const schedule = schedules.list.find(({ w }) => w === schw);
  const connectionNode = useConnectionState();
  const auth = useAuth();

  return (
    <PhaseContainerConfigurer
      className="ScheduleWidgetPage"
      headTitle={schedule?.title ?? 'Мероприятие'}
      head={
        <span className="flex flex-gap margin-gap">
          {connectionNode}
          <ScheduleWidgetGoToLiveTranslationButton />
          <StrongClipboardPicker />
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
          <div className="flex center color--ko">Мероприятие не найдено</div>
        )
      }
    />
  );
}
