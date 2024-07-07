import { IconArrowRight01StrokeRounded } from '../../../complect/the-icon/icons/arrow-right-01';
import { IconCheckmarkSquare02StrokeRounded } from '../../../complect/the-icon/icons/checkmark-square-02';
import { IconNotification01StrokeRounded } from '../../../complect/the-icon/icons/notification-01';
import { IconNotificationOff01StrokeRounded } from '../../../complect/the-icon/icons/notification-off-01';
import { IconSettings01StrokeRounded } from '../../../complect/the-icon/icons/settings-01';
import { IconSquareStrokeRounded } from '../../../complect/the-icon/icons/square';
import { IconUserStrokeRounded } from '../../../complect/the-icon/icons/user';
import useModal from '../../modal/useModal';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import { StrongComponentProps } from '../../strong-control/Strong.model';
import StrongDropdown from '../../strong-control/StrongDropdown';
import StrongEvaButton from '../../strong-control/StrongEvaButton';
import IconButton from '../../the-icon/IconButton';
import { useScheduleWidgetRightsContext } from '../useScheduleWidget';
import ScheduleWidgetRegisterType from './RegisterType';
import { ScheduleWidgetUserByLinkInvite } from './users/ByLinkInvite';
import { ScheduleWidgetUserByQrRedactor } from './users/ByQrRedactor';
import { ScheduleWidgetUserAddByExcel } from './users/excel/AddByExcel';
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
                    <span className="flex flex-gap qwq">
                      <ScheduleWidgetUserAddByExcel scope={scope} />
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
                  Icon={rights.schedule.withTech ? IconCheckmarkSquare02StrokeRounded : IconSquareStrokeRounded}
                  postfix="Первый - технический день"
                  confirm={`Сделать первый день ${rights.schedule.withTech ? 'обычным' : 'подготовительным'}?`}
                  className="margin-gap-b"
                />
                <StrongEditableField
                  scope={scope}
                  fieldName="tgChatId"
                  value={rights.schedule.tgChatId}
                  isRedact
                  setSelfRedact
                  title="TG-id"
                />
                {rights.schedule.tgInform === 0 ? (
                  <StrongEvaButton
                    scope={scope}
                    cud="U"
                    fieldName="tgInform"
                    fieldValue={1}
                    Icon={IconNotificationOff01StrokeRounded}
                    postfix="TG-Напоминание: отключено"
                    className="margin-gap-b"
                  />
                ) : (
                  <StrongEvaButton
                    scope={scope}
                    cud="U"
                    fieldName="tgInform"
                    fieldValue={0}
                    Icon={IconNotification01StrokeRounded}
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
        <IconButton
          Icon={IconSettings01StrokeRounded}
          postfix={
            <>
              Управление <IconArrowRight01StrokeRounded />
            </>
          }
          onClick={screen}
          className="margin-gap-v flex-max"
        />
      ) : (
        <IconButton
          Icon={IconUserStrokeRounded}
          postfix={
            <>
              Участники <IconArrowRight01StrokeRounded />
            </>
          }
          onClick={screen}
          className="margin-gap-v flex-max"
        />
      )}
    </>
  );
}
