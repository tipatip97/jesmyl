import { useMemo } from 'react';
import { useMarks } from '../../lists/marks/useMarks';
import { CmTranslationComListContext, CmTranslationComListContextValue } from './context';

export const CmTranslationComListContextInMarks = function InMarks({ children }: { children: React.ReactNode }) {
  const list = useMarks().markedComs;

  const value = useMemo((): CmTranslationComListContextValue => {
    return {
      list,
      pageTitlePostfix: ' - Избранное',
    };
  }, [list]);

  return <CmTranslationComListContext.Provider value={value}>{children}</CmTranslationComListContext.Provider>;
};
export default CmTranslationComListContextInMarks;
