import { useSwitchCurrentTranslationTextApp } from '../../../+complect/translations/hooks/current-app';
import IconButton from '../../../../../complect/the-icon/IconButton';
import { IconComputerStrokeRounded } from '@icons/computer';
import { IScheduleWidget } from '../../../../../complect/schedule-widget/ScheduleWidget.model';
import { useScheduleWidgetRightsContext } from '../../../../../complect/schedule-widget/useScheduleWidget';
import useIndexNav, { indexScheduleWidgetTranslationPagePhase } from '../../../../index/complect/useIndexNav';
import { CmComBindAttach } from '../cmExternalAttach';

interface Props {
  value: CmComBindAttach;
  schedule: IScheduleWidget;
}

export const CmAttComStartLiveTranslationButton = (props: Props) => {
  const indexNav = useIndexNav();
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
          indexNav.jumpTo(indexScheduleWidgetTranslationPagePhase);
          switchCurrApp('cm');
          indexNav.setAppRouteData({
            schw: props.schedule.w,
            schTranslationComws: props.value.comws,
            schTranslationEventw: props.value.eventw,
          });
        }}
      />
    </>
  );
};
