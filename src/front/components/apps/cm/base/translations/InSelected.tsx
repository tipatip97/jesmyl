import { useMemo } from 'react';
import useSelectedComs from '../useSelectedComs';
import { CmTranslationComListContext, CmTranslationComListContextValue } from './context';

export const CmTranslationComListContextInSelected = function InSelected({ children }: { children: React.ReactNode }) {
  const list = useSelectedComs().takeSelectedComs();

  const value = useMemo((): CmTranslationComListContextValue => {
    return {
      list,
      pageTitlePostfix: ' - Выбранное',
    };
  }, [list]);

  return <CmTranslationComListContext.Provider value={value}>{children}</CmTranslationComListContext.Provider>;
};

export default CmTranslationComListContextInSelected;
