import { ScreenTranslationControlPanel } from '../../../../+complect/translations/controls/ControllPanel';
import { useCmScreenTranslationComTextNavigations } from '../hooks/com-texts';

export const CmTranslationControlPanel = () => {
  const { nextText, prevText } = useCmScreenTranslationComTextNavigations();

  return (
    <ScreenTranslationControlPanel
      onNext={nextText}
      onPrev={prevText}
    />
  );
};
