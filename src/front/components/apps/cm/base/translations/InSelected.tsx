import useSelectedComs from '../useSelectedComs';
import { CmTranslationComListContext } from './context';

export const CmTranslationComListContextInSelected = function InSelected({ children }: { children: React.ReactNode }) {
  return (
    <CmTranslationComListContext.Provider value={[useSelectedComs().takeSelectedComs(), ' - Выбранное']}>
      {children}
    </CmTranslationComListContext.Provider>
  );
};

export default CmTranslationComListContextInSelected;
