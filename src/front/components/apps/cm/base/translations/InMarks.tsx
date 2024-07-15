import { useMarks } from '../../lists/marks/useMarks';
import { CmTranslationComListContext } from './context';

export const CmTranslationComListContextInMarks = function InMarks({ children }: { children: React.ReactNode }) {
  return (
    <CmTranslationComListContext.Provider value={[useMarks().markedComs, ' - Избранное']}>
      {children}
    </CmTranslationComListContext.Provider>
  );
};
export default CmTranslationComListContextInMarks;
