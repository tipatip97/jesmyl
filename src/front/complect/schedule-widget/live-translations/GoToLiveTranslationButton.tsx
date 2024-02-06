import useIndexNav, { indexScheduleWidgetTranslationPagePhase } from '../../../components/index/complect/useIndexNav';
import EvaButton from '../../eva-icon/EvaButton';

export const ScheduleWidgetGoToLiveTranslationButton = () => {
  const indexNav = useIndexNav();

  if (indexNav.appRouteData.schTranslationComws === undefined) return;

  return (
    <>
      <EvaButton
        name="monitor-outline"
        className="margin-gap-v"
        onClick={() => indexNav.jumpTo(indexScheduleWidgetTranslationPagePhase)}
        postfix="Моя трансляция"
      />
    </>
  );
};
