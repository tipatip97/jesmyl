import { useEffect } from 'react';
import { atom, useAtomToggle, useAtomValue } from '../atoms';
import { addEventListenerPipe, hookEffectPipe } from '../hookEffectPipe';

const classList = document.body.classList;
const minTouches = 3;
const maxTouches = 3;
const className = 'reverse-theme';

const isReverseThemeAtom = atom(false, 'complect', className);

export const useFingersActions = () => {
  const toggleIsThemeReverse = useAtomToggle(isReverseThemeAtom);
  const isThemeReverse = useAtomValue(isReverseThemeAtom);

  useEffect(() => {
    if (isThemeReverse) classList.add(className);
    else classList.remove(className);

    let timeout: TimeOut;

    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(document.body, 'touchstart', event => {
          if (event.touches.length === 4) {
            timeout = setTimeout(() => window.navigator.clipboard.writeText(window.location.href), 500);
          } else if (event.touches.length >= minTouches && event.touches.length <= maxTouches) {
            timeout = setTimeout(toggleIsThemeReverse, 500);
          } else {
            clearTimeout(timeout);
          }
        }),
        addEventListenerPipe(document.body, 'touchend', event => {
          if (event.touches.length < minTouches || event.touches.length > maxTouches) clearTimeout(timeout);
        }),
        addEventListenerPipe(document.body, 'keyup', event => {
          if (event.code === 'Space' && event.ctrlKey && event.altKey && event.shiftKey) toggleIsThemeReverse();
        }),
      )
      .effect();
  }, [isThemeReverse, toggleIsThemeReverse]);
};
