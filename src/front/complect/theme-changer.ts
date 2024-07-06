import { atom, atomValueSetter, getAtomValue } from './atoms';

const classList = document.body.classList;
const minTouches = 3;
const maxTouches = 3;
let timeout: TimeOut;
const className = 'reverse-theme';

const isReverseThemeAtom = atom(false, 'complect', className);

(async () => {
  if (await getAtomValue(isReverseThemeAtom)) classList.add(className);
})();

const toggleTheme = () => {
  classList.toggle(className);

  atomValueSetter(isReverseThemeAtom)(classList.contains(className));
};

const listenThemeChanges = () => {
  document.body.addEventListener('touchstart', event => {
    const touches = event.touches.length;

    if (touches === 4) {
    } else if (touches >= minTouches && touches <= maxTouches) {
      timeout = setTimeout(toggleTheme, 500);
    } else {
      clearTimeout(timeout);
    }
  });
  document.body.addEventListener('touchend', event => {
    const touches = event.touches.length;

    if (touches < minTouches || touches > maxTouches) clearTimeout(timeout);
  });
  document.body.addEventListener('keyup', event => {
    if (event.code === 'Space' && event.ctrlKey && event.altKey && event.shiftKey) toggleTheme();
  });
};

export default listenThemeChanges;
