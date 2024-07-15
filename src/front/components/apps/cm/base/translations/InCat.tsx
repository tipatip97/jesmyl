import { useCcat } from '../../col/cat/useCcat';
import { CmTranslationComListContext } from './context';

const CmTranslationComListContextInCat = function InCat({ children }: { children: React.ReactNode }) {
  const cat = useCcat();

  return (
    cat && (
      <CmTranslationComListContext.Provider value={[cat.searchedComs, ' - ' + cat.name]}>
        {children}
      </CmTranslationComListContext.Provider>
    )
  );
};

export default CmTranslationComListContextInCat;
