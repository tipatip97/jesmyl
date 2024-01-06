import { filesStorage } from './storage';

const emptyFunc = () => {};

export const setFontFamilyEffect = async (fileName: string, win: Window) => {
  const fonts = await filesStorage.get('font');
  if (
    fonts === undefined ||
    fonts[fileName] === undefined ||
    Array.from(win.document.fonts.keys()).some(face => face.family === fileName)
  )
    return;

  new FontFace(fileName, await fonts[fileName].arrayBuffer())
    .load()
    .then(face => win.document.fonts.add(face))
    .catch(emptyFunc);
};
