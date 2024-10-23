import { useEffect } from 'react';
import { useAppFontFamilyAtom } from '../../components/index/molecules';
import { applyFontFamilyFromMyFiles } from '../../components/index/parts/actions/files/utils/set-font-family-effect';

export const useGlobalFontFamilySetter = () => {
  const [appFontFamily] = useAppFontFamilyAtom();

  useEffect(() => {
    if (appFontFamily == null) return;
    applyFontFamilyFromMyFiles(appFontFamily, window);
    document.body.style.fontFamily = '"' + appFontFamily + '"';

    return () => {
      document.body.style.fontFamily = '';
    };
  }, [appFontFamily]);
};
