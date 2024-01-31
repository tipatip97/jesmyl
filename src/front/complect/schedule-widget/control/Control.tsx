import EvaButton from '../../eva-icon/EvaButton';
import EvaIcon from '../../eva-icon/EvaIcon';
import useModal from '../../modal/useModal';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongDropdown from '../../strong-control/StrongDropdown';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import { useScheduleWidgetRightsContext } from '../useScheduleWidget';
import ScheduleWidgetRegisterType from './RegisterType';
import { ScheduleWidgetUserByLinkInvite } from './users/ByLinkInvite';
import { ScheduleWidgetUserByQrRedactor } from './users/ByQrRedactor';
import ScheduleWidgetUserList from './users/UserList';

const tgInformTimesItems = [
  { title: 'Напоминать только по началу', id: 0 },
  ...[5, 10, 15, 30].map(time => ({ title: 'Напоминать TG за ' + time + ' мин.', id: time })),
];

export default function ScheduleWidgetControl({ scope }: StrongComponentProps) {
  const rights = useScheduleWidgetRightsContext();

  const [modalNode, screen] = useModal(({ header, body }) => {
    return rights.isCanRedact ? (
      <>
        {header(
          <>
            Управление <span className="color--7">{rights.schedule.title}</span>
          </>,
        )}
        {body(
          <>
            <ScheduleWidgetUserList
              scope={scope}
              titlePostfix={
                rights.isCanRedactUsers &&
                (isExpand =>
                  isExpand && (
                    <span className="flex flex-gap">
                      <ScheduleWidgetUserByLinkInvite scope={scope} />
                      <ScheduleWidgetUserByQrRedactor scope={scope} />
                    </span>
                  ))
              }
            />
            <ScheduleWidgetRegisterType scope={scope} />
            {rights.isCanTotalRedact && (
              <>
                <StrongEvaButton
                  scope={scope}
                  cud="U"
                  fieldName="withTech"
                  fieldValue={rights.schedule.withTech ? 0 : 1}
                  name={rights.schedule.withTech ? 'checkmark-square-2-outline' : 'square-outline'}
                  postfix="Первый - технический день"
                  confirm={`Сделать первый день ${rights.schedule.withTech ? 'обычным' : 'подготовительным'}?`}
                  className="margin-gap-b"
                />
                {rights.schedule.tgInform === 0 ? (
                  <StrongEvaButton
                    scope={scope}
                    cud="U"
                    fieldName="tgInform"
                    fieldValue={1}
                    name="bell-off-outline"
                    postfix="TG-Напоминание: отключено"
                    className="margin-gap-b"
                  />
                ) : (
                  <StrongEvaButton
                    scope={scope}
                    cud="U"
                    fieldName="tgInform"
                    fieldValue={0}
                    name="bell-outline"
                    postfix={
                      rights.schedule.tgInformTime
                        ? 'TG-Напоминание: за ' + rights.schedule.tgInformTime + ' мин. и в начале события'
                        : 'TG-Напоминание: только по началу события'
                    }
                    className="margin-gap-b"
                  />
                )}
                <StrongDropdown
                  scope={scope}
                  cud="U"
                  fieldName="tgInformTime"
                  items={tgInformTimesItems}
                  disabled={rights.schedule.tgInform === 0}
                  id={rights.schedule.tgInformTime}
                  className="margin-big-gap-b"
                />
              </>
            )}
          </>,
        )}
      </>
    ) : (
      <>
        {header(<div>Участники</div>)}
        {body(
          rights.schedule.ctrl.users.map(user => {
            if (!user.R || user.login === undefined) return null;
            return (
              <div
                key={user.mi}
                className="margin-gap-v"
              >
                {user.fio && user.fio !== user.nick ? `${user.fio} (${user.nick})` : user.nick}
              </div>
            );
          }),
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      {rights.isCanRedact ? (
        <EvaButton
          name="settings-2-outline"
          postfix={
            <>
              Управление <EvaIcon name="chevron-right" />
            </>
          }
          onClick={screen}
          className="margin-gap-v flex-max"
        />
      ) : (
        <EvaButton
          name="people-outline"
          postfix={
            <>
              Участники <EvaIcon name="chevron-right" />
            </>
          }
          onClick={screen}
          className="margin-gap-v flex-max"
        />
      )}
    </>
  );
}
