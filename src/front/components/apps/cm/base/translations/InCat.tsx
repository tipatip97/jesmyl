import { useMemo } from 'react';
import { useCcat } from '../../col/cat/useCcat';
import { CmTranslationComListContext, CmTranslationComListContextValue } from './context';

const CmTranslationComListContextInCat = function InCat({ children }: { children: React.ReactNode }) {
  const cat = useCcat();

  const value = useMemo((): CmTranslationComListContextValue => {
    if (cat == null) return {};

    return {
      list: cat.searchedComs,
      pageTitlePostfix: ' - ' + cat.name,
    };
  }, [cat]);

  return <CmTranslationComListContext.Provider value={value}>{children}</CmTranslationComListContext.Provider>;
};

export default CmTranslationComListContextInCat;
