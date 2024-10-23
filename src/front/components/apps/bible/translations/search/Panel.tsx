import { memo, useEffect, useRef } from 'react';
import { useActualRef } from '../../../../../complect/useActualRef';
import { BibleSearchZone } from '../../model';
import BibleSearchResults from './Results';
import BibleSearchInputPanel from './input-panel/InputPanel';
import { useBibleSearchZone } from './selectors';

export default memo(function BibleSearchPanel(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchZone, setZone] = useBibleSearchZone();

  const putOnSearchZoneRef = useActualRef((zone: BibleSearchZone) => {
    setZone(zone);
    setTimeout(() => inputRef.current?.select(), 10);
  });

  useEffect(() => {
    return hookEffectLine()
      .addEventListener(window, 'keyup', event => {
        switch (event.code) {
          case 'F2':
            putOnSearchZoneRef.current('global');
            break;
          case 'F3':
            putOnSearchZoneRef.current('inner');
            break;
          case 'F4':
            putOnSearchZoneRef.current('address');
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
  }, [putOnSearchZoneRef, searchZone]);

  return (
    <div className="full-width">
      <BibleSearchInputPanel
        inputRef={inputRef}
        putOnSearchZoneRef={putOnSearchZoneRef}
      />
      <BibleSearchResults
        inputRef={inputRef}
        innerZone="chapter"
      />
    </div>
  );
});
