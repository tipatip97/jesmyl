import { useCallback, useEffect, useState } from 'react';
import { useBibleAddressTerm, useBibleTranslationAddressTermSetter } from '../../selectors';
import { BibleSearchPanelInput } from '../Input';
import { useBibleTransformAddressTermToAddress } from './hooks/transformers';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const BibleSearchPanelAddressInput = ({ inputRef }: Props) => {
  const addressTerm = useBibleAddressTerm();
  const [term, setTerm] = useState(addressTerm);
  const setAddressTerm = useBibleTranslationAddressTermSetter();
  const address = useBibleTransformAddressTermToAddress(term, inputRef);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value), []);

  useEffect(() => setTimeoutEffect(setAddressTerm, 100, term), [setAddressTerm, term]);

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
