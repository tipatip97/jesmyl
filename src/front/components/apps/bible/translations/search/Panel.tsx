import { memo, useCallback, useEffect, useRef } from 'react';
import { justBibleStorageSet } from '../../hooks/storage';
import { BibleSearchZone } from '../../model';
import BibleSearchResults from './Results';
import BibleSearchInputPanel from './input-panel/InputPanel';
import { useBibleSearchZone } from './selectors';

export default memo(function BibleSearchPanel(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchZone = useBibleSearchZone();

  const putOnSearchZone = useCallback(
    (zone: BibleSearchZone) => {
      return () => {
        justBibleStorageSet('translationSearchZone', zone);
        setTimeout(() => inputRef.current?.select(), 10);
      };
    },
    [inputRef],
  );

  useEffect(() => {
    return hookEffectLine()
      .addEventListener(window, 'keyup', event => {
        switch (event.code) {
          case 'F2':
            putOnSearchZone('global')();
            break;
          case 'F3':
            putOnSearchZone('inner')();
            break;
          case 'F4':
            putOnSearchZone('address')();
            break;
          case 'Enter':
          case 'Escape':
            break;
          default:
            return;
        }

        event.preventDefault();
      })
      .effect();
  }, [putOnSearchZone, searchZone]);

  return (
    <div className="full-width">
      <BibleSearchInputPanel
        inputRef={inputRef}
        putOnSearchZone={putOnSearchZone}
      />
      <BibleSearchResults
        inputRef={inputRef}
        innerZone="chapter"
      />
    </div>
  );
});
