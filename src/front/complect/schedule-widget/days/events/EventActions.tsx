import useModal from '../../../modal/useModal';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import IconButton from '../../../the-icon/IconButton';
import { IconCropStrokeRounded } from '../../../../complect/the-icon/icons/crop';
import { IconDelete01StrokeRounded } from '../../../../complect/the-icon/icons/delete-01';
import { IconShapesStrokeRounded } from '../../../../complect/the-icon/icons/shapes';
import { IScheduleWidget, IScheduleWidgetDayEvent } from 'shared/api';
import ScheduleWidgetTopicTitle from '../../complect/TopicTitle';
import ScheduleWidgetEventType from '../../events/EventType';

export function ScheduleWidgetDayEventEventActions({
  scope,
  schedule,
  event,
  scheduleScope,
  onEventCut,
}: StrongComponentProps & {
  event: IScheduleWidgetDayEvent;
  schedule: IScheduleWidget;
  scheduleScope: string;
  onEventCut: () => void;
}) {
  const [modalNode, screen] = useModal(({ header, body }) => {
    return (
      <>
        {header(
          <>
            Шаблон события <span className="color--7">{schedule.types[event.type].title}</span>
          </>,
        )}
        {body(
          schedule.types[event.type] ? (
            <ScheduleWidgetEventType
              schedule={schedule}
              scheduleScope={scheduleScope}
              selectFieldName=""
              selectScope=""
              typeBox={schedule.types[event.type]}
              typei={event.type}
              isRedact
            />
          ) : (
            <>Шаблон не найден</>
          ),
        )}
      </>
    );
  });

  return (
    <>
      {modalNode}
      <IconButton
        Icon={IconShapesStrokeRounded}
        postfix="Редактировать шаблон события"
        className="flex-max margin-gap-v"
        onClick={screen}
      />
      <IconButton
        Icon={IconCropStrokeRounded}
        postfix="Вырезать событие"
        className="flex-max margin-gap-v"
        onClick={onEventCut}
      />
      {schedule.types && (
        <StrongEvaButton
          scope={scope}
          fieldName="list"
          cud="D"
          Icon={IconDelete01StrokeRounded}
          postfix="Удалить событие"
          confirm={
            <ScheduleWidgetTopicTitle
              prefix="Удалить событие "
              titleBox={schedule.types[event.type]}
              topicBox={event}
            />
          }
          className="flex-max color--ko margin-gap-v"
          mapExecArgs={args => {
            return { ...args, eventMi: event.mi };
          }}
        />
      )}
    </>
  );
}
