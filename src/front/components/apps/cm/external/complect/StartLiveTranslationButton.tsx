import { useSwitchCurrentTranslationTextApp } from '../../../+complect/translations/hooks/current-app';
import { IScheduleWidget } from '../../../../../complect/schedule-widget/ScheduleWidget.model';
import { useScheduleWidgetRightsContext } from '../../../../../complect/schedule-widget/useScheduleWidget';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconComputerStrokeRounded } from '../../../../../complect/the-icon/icons/computer';
import { CmComBindAttach } from '../../../../../models';

interface Props {
  value: CmComBindAttach;
  schedule: IScheduleWidget;
}

export const CmAttComStartLiveTranslationButton = (props: Props) => {
  const switchCurrApp = useSwitchCurrentTranslationTextApp();
  const rights = useScheduleWidgetRightsContext();

  if (!rights.isCanRedact) return;

  return (
    <>
      <IconButton
        Icon={IconComputerStrokeRounded}
        postfix="Транслировать"
        className="margin-gap-l margin-gap-v"
        onClick={() => {
          switchCurrApp('cm');
        }}
      />
    </>
  );
};
