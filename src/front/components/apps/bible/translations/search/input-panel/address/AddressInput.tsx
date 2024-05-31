import { useCallback, useEffect, useState } from 'react';
import { justBibleStorageSet } from '../../../../hooks/storage';
import { useBibleAddressTerm } from '../../selectors';
import { BibleSearchPanelInput } from '../Input';
import { useBibleTransformAddressTermToAddress } from './hooks/transformers';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const BibleSearchPanelAddressInput = ({ inputRef }: Props) => {
  const addressTerm = useBibleAddressTerm();
  const [term, setTerm] = useState(addressTerm);
  const address = useBibleTransformAddressTermToAddress(term, inputRef);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value), []);

  useEffect(() => setTimeoutEffect(justBibleStorageSet, 100, 'translationAddressTerm', term), [term]);

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
};
