import { useCallback, useEffect } from 'react';
import { useSetBibleAddressIndexes } from '../../../hooks/address/address';
import { useBibleTranslationSlideSyncContentSetter } from '../../../hooks/slide-sync';
import { justBibleStorageSet } from '../../../hooks/storage';
import { useBibleTranslationSearchResultList, useBibleTranslationSearchResultSelected } from '../hooks/results';
import { useBibleSearchTerm } from '../selectors';
import BibleSearchPanelInput from './Input';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function BibleSearchPanelSearchInput({ inputRef }: Props) {
  const searchTerm = useBibleSearchTerm();
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => justBibleStorageSet('translationSearchTerm', event.target.value),
    [],
  );
  const setAddress = useSetBibleAddressIndexes();
  const resultList = useBibleTranslationSearchResultList();
  const resultSelected = useBibleTranslationSearchResultSelected();
  const syncSlide = useBibleTranslationSlideSyncContentSetter();

  useEffect(() => {
    if (resultSelected === null || resultList[resultSelected] === undefined) return;

    setAddress(...resultList[resultSelected]);
  }, [resultList, resultSelected, setAddress]);

  useEffect(() => {
    if (inputRef.current === null) return;
    const inputNode = inputRef.current;

    return hookEffectLine()
      .addEventListener(inputNode, 'keydown', event => {
        switch (event.code) {
          case 'Enter':
            inputNode.blur();
            syncSlide();
            justBibleStorageSet('translationSearchResultSelected', null);

            break;
          case 'ArrowUp':
            if (resultSelected !== null && resultSelected > 0)
              justBibleStorageSet('translationSearchResultSelected', resultSelected - 1);
            break;
          case 'ArrowDown':
            if (resultSelected === null || resultSelected < resultList.length - 1)
              justBibleStorageSet('translationSearchResultSelected', (resultSelected ?? -1) + 1);
            break;
          case 'ArrowLeft':
          case 'ArrowRight':
            event.stopPropagation();
            return;
          default:
            return;
        }

        event.stopPropagation();
        event.preventDefault();
      })
      .effect();
  }, [inputRef, resultList.length, resultSelected, syncSlide]);

  return (
    <BibleSearchPanelInput
      inputRef={inputRef}
      term={searchTerm}
      onChange={onChange}
    />
  );
}
