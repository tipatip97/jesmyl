import { IconComputerStrokeRounded } from '../../../complect/the-icon/icons/computer';
import useIndexNav, { indexScheduleWidgetTranslationPagePhase } from '../../../components/index/complect/useIndexNav';
import IconButton from '../../the-icon/IconButton';

export const ScheduleWidgetGoToLiveTranslationButton = () => {
  const indexNav = useIndexNav();

  if (indexNav.appRouteData.schTranslationComws === undefined) return;

  return (
    <>
      <IconButton
        Icon={IconComputerStrokeRounded}
        className="margin-gap-v"
        onClick={() => indexNav.jumpTo(indexScheduleWidgetTranslationPagePhase)}
      />
    </>
  );
};
