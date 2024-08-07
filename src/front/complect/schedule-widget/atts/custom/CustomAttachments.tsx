import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../../../models';
import useModal from '../../../modal/useModal';
import { StrongComponentProps } from '../../../strong-control/Strong.model';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import IconButton from '../../../the-icon/IconButton';
import { IconArrowRight01StrokeRounded } from '../../../../complect/the-icon/icons/arrow-right-01';
import { IconAttachment02StrokeRounded } from '../../../../complect/the-icon/icons/attachment-02';
import { IconPlusSignStrokeRounded } from '../../../../complect/the-icon/icons/plus-sign';
import { ScheduleWidgetAppAttCustomizable, ScheduleWidgetAppAttCustomized } from '../../ScheduleWidget.model';
import ScheduleWidgetCustomAtt from './CustomAtt';

const newTatt: ScheduleWidgetAppAttCustomizable = {
  description: '',
  icon: 'IconAttachmentStrokeRounded',
  initVal: {},
  title: '',
  R: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
  U: scheduleWidgetUserRights.includeRights(ScheduleWidgetUserRoleRight.Redact),
};

export default function ScheduleWidgetCustomAttachments(
  props: StrongComponentProps<{
    tatts: ScheduleWidgetAppAttCustomized[];
  }>,
) {
  const [modalNode, screen] = useModal(({ header, body }) => {
    return (
      <>
        {header(
          <div className="flex full-width between">
            Шаблоны вложений
            {!props.tatts.some(att => !att.title || !att.description) && (
              <StrongEvaButton
                scope={props.scope}
                fieldName="tatts"
                fieldValue={newTatt}
                Icon={IconPlusSignStrokeRounded}
                confirm="Создать шаблон вложения?"
              />
            )}
          </div>,
        )}
        {body(
          props.tatts.map(tatt => {
            return (
              <ScheduleWidgetCustomAtt
                key={tatt.mi}
                scope={props.scope}
                tatt={tatt}
              />
            );
          }),
        )}
      </>
    );
  });

  return (
    <div>
      {modalNode}
      <IconButton
        Icon={IconAttachment02StrokeRounded}
        postfix={
          <>
            Шаблоны вложений
            <IconArrowRight01StrokeRounded />
          </>
        }
        onClick={screen}
        className="flex-max margin-gap-v"
      />
    </div>
  );
}
