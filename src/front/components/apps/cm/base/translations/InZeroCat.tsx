import { useCcat } from '../../col/cat/useCcat';
import { CmTranslationComListContext } from './context';

export const CmTranslationComListContextInZeroCat = function InZeroCat({ children }: { children: React.ReactNode }) {
  const cat = useCcat(true);

  return (
    cat && (
      <CmTranslationComListContext.Provider value={[cat.searchedComs, ' - ' + cat.name]}>
        {children}
      </CmTranslationComListContext.Provider>
    )
  );
};
export default CmTranslationComListContextInZeroCat;
