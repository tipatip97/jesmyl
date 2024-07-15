import { memo, useCallback, useEffect, useState } from 'react';
import { useBibleAddressTerm } from '../../selectors';
import BibleSearchPanelInput from '../Input';
import { useBibleTransformAddressTermToAddress } from './hooks/transformers';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default memo(function BibleSearchPanelAddressInput({ inputRef }: Props) {
  const [addressTerm, setAddressTerm] = useBibleAddressTerm();
  const [term, setTerm] = useState(addressTerm);
  const address = useBibleTransformAddressTermToAddress(term, inputRef);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value), []);

  useEffect(() => setTimeoutEffect(setAddressTerm, 100, term), [setAddressTerm, term]);

  useEffect(() => {
    if (inputRef.current === null) return;

    return hookEffectLine()
      .addEventListener(inputRef.current, 'keydown', event => {
        if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
          event.stopPropagation();
        }
      })
      .effect();
  }, [inputRef]);

  return (
    <>
      <BibleSearchPanelInput
        inputRef={inputRef}
        term={term}
        onChange={onChange}
      />
      <div className="full-width">{address}</div>
    </>
  );
});
