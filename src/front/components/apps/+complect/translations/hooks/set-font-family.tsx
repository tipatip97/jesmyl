import { useEffect } from 'react';
import { applyFontFamilyFromMyFiles } from '../../../../index/parts/actions/files/utils/set-font-family-effect';

export const useApplyScreenFontFamilyEffect = (fontFamily: string | und, win: Window | und) => {
  useEffect(() => {
    applyFontFamilyFromMyFiles(fontFamily, win);
  }, [fontFamily, win]);
};
