import { useCallback, useEffect, useRef } from 'react';
import { BibleSearchZone } from '../../model';
import { BibleSearchResults } from './Results';
import { BibleSearchInputPanel } from './input-panel/InputPanel';
import { useBibleSearchZone, useBibleTranslationSearchZoneSetter } from './selectors';

export const BibleSearchPanel = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchZone = useBibleSearchZone();
  const setSearchZone = useBibleTranslationSearchZoneSetter();

  const putOnSearchZone = useCallback(
    (zone: BibleSearchZone) => {
      return () => {
        setSearchZone(zone);
        setTimeout(() => inputRef.current?.select(), 10);
      };
    },
    [inputRef, setSearchZone],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'F2':
          putOnSearchZone('global')();
          break;
        case 'F3':
          putOnSearchZone('chapter')();
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
      event.stopPropagation();
    };

    window.addEventListener('keyup', onKey);
    return () => window.removeEventListener('keyup', onKey);
  }, [putOnSearchZone, searchZone, setSearchZone]);

  return (
    <div className="full-width">
      <BibleSearchInputPanel
        inputRef={inputRef}
        putOnSearchZone={putOnSearchZone}
      />
      <BibleSearchResults inputRef={inputRef} />
    </div>
  );
};
