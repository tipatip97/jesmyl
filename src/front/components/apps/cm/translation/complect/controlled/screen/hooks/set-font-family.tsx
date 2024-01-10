import { useEffect } from 'react';
import { applyFontFamilyFromMyFiles } from '../../../../../../../index/parts/actions/files/utils/set-font-family-effect';

export const useSetScreenFontFamily = (win: Window | nil, fontFamily: string | und) => {
  useEffect(() => {
    if (fontFamily === undefined) return;
    applyFontFamilyFromMyFiles(fontFamily, win ?? window);
  }, [fontFamily, win]);
};
