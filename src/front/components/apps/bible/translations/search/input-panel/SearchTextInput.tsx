import { useCallback, useEffect } from 'react';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../../complect/hookEffectPipe';
import { useSetBibleAddressIndexes } from '../../../hooks/address/address';
import { useBibleTranslationSlideSyncContentSetter } from '../../../hooks/slide-sync';
import {
  useBibleTranslationSearchResultList,
  useBibleTranslationSearchResultSelectedSet,
  useBibleTranslationSearchResultSelectedValue,
} from '../hooks/results';
import { useBibleSearchTerm } from '../selectors';
import BibleSearchPanelInput from './Input';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function BibleSearchPanelSearchTextInput({ inputRef }: Props) {
  const [searchTerm, setTerm] = useBibleSearchTerm();
  const resultSelected = useBibleTranslationSearchResultSelectedValue();
  const setResultSelected = useBibleTranslationSearchResultSelectedSet();
  const syncSlide = useBibleTranslationSlideSyncContentSetter();

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value), [setTerm]);
  const setAddress = useSetBibleAddressIndexes();
  const [resultList] = useBibleTranslationSearchResultList();

  useEffect(() => {
    if (resultSelected === null || resultList[resultSelected] === undefined) return;

    setAddress(...resultList[resultSelected]);
  }, [resultList, resultSelected, setAddress]);

  useEffect(() => {
    if (inputRef.current === null) return;
    const inputNode = inputRef.current;

    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(inputRef.current, 'keydown', event => {
          switch (event.code) {
            case 'Enter':
              inputNode.blur();
              syncSlide();
              setResultSelected(null);

              return;
            case 'ArrowUp':
              if (resultSelected !== null && resultSelected > 0) setResultSelected(resultSelected - 1);
              break;
            case 'ArrowDown':
              if (resultSelected === null || resultSelected < resultList.length - 1)
                setResultSelected((resultSelected ?? -1) + 1);
              break;
            default:
              return;
          }

          event.stopPropagation();
          event.preventDefault();
        }),
      )
      .effect();
  }, [inputRef, resultList.length, resultSelected, setResultSelected, syncSlide]);

  return (
    <BibleSearchPanelInput
      inputRef={inputRef}
      term={searchTerm}
      onChange={onChange}
    />
  );
}
