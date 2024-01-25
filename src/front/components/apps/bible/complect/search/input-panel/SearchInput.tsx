import { useCallback, useEffect, useState } from 'react';
import { useSetBibleAddressIndexes } from '../../../hooks/address/address';
import { useBibleTranslationSlideSyncContentSetter } from '../../../hooks/slide-sync';
import {
  useBibleTranslationSearchResultList,
  useBibleTranslationSearchResultSelected,
  useBibleTranslationSearchResultSelectedSetter,
} from '../hooks/results';
import { useBibleSearchTerm, useBibleTranslationSearchTermSetter } from '../selectors';
import { BibleSearchPanelInput } from './Input';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export const BibleSearchPanelSearchInput = ({ inputRef }: Props) => {
  const searchTerm = useBibleSearchTerm();
  const [term, setTerm] = useState(searchTerm);
  const setSearchTerm = useBibleTranslationSearchTermSetter();
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value), []);
  const setAddress = useSetBibleAddressIndexes();
  const setSelected = useBibleTranslationSearchResultSelectedSetter();
  const resultList = useBibleTranslationSearchResultList();
  const resultSelected = useBibleTranslationSearchResultSelected();
  const syncSlide = useBibleTranslationSlideSyncContentSetter();

  useEffect(() => {
    setTimeoutEffect(setSearchTerm, 100, term);
    setSelected(null);
  }, [term, setSearchTerm, setSelected]);

  useEffect(() => setTerm(searchTerm), [searchTerm]);

  useEffect(() => {
    if (resultSelected === null || resultList[resultSelected] === undefined) return;

    setAddress(...resultList[resultSelected]);
  }, [resultList, resultSelected, setAddress]);

  useEffect(() => {
    if (inputRef.current === null) return;
    const inputNode = inputRef.current;

    const onKey = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Enter':
          inputNode.blur();
          syncSlide();
          setSelected(null);

          break;
        case 'ArrowUp':
          if (resultSelected !== null && resultSelected > 0) setSelected(resultSelected - 1);
          break;
        case 'ArrowDown':
          if (resultSelected === null || resultSelected < resultList.length - 1)
            setSelected((resultSelected ?? -1) + 1);
          break;
        default:
          return;
      }

      event.stopPropagation();
      event.preventDefault();
    };

    inputNode.addEventListener('keydown', onKey);
    return () => inputNode.removeEventListener('keydown', onKey);
  }, [inputRef, resultList.length, resultSelected, setSelected, syncSlide]);

  return (
    <BibleSearchPanelInput
      inputRef={inputRef}
      term={term}
      onChange={onChange}
    />
  );
};
