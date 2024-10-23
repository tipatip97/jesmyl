import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { addEventListenerPipe, hookEffectPipe } from '../../../../../../complect/hookEffectPipe';
import { ActualRef } from '../../../../../../complect/useActualRef';
import { BibleSearchZone } from '../../../model';
import { useBibleTranslationSearchResultSelectedSet } from '../hooks/results';
import { useBibleSearchZone } from '../selectors';
import BibleSearchPanelSearchTextInput from './SearchTextInput';
import BibleSearchPanelAddressInput from './address/AddressInput';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  putOnSearchZoneRef: ActualRef<(zone: BibleSearchZone) => void>;
}

export default function BibleSearchInputPanel({ inputRef, putOnSearchZoneRef }: Props) {
  const [searchZone] = useBibleSearchZone();
  const setResultSelected = useBibleTranslationSearchResultSelectedSet();

  useEffect(() => {
    if (inputRef.current === null) return;

    return hookEffectPipe()
      .pipe(
        addEventListenerPipe(inputRef.current, 'keydown', event => {
          switch (event.code) {
            case 'ArrowLeft':
            case 'ArrowRight':
              event.stopPropagation();
              return;
          }
        }),
      )
      .effect();
  }, [inputRef, setResultSelected]);

  return (
    <div className="flex flex-gap margin-big-gap-t">
      <span className="nowrap">
        {searchZone === 'global' ? 'Поиск в тексте:' : searchZone === 'inner' ? 'Поиск по главе:' : 'Поиск по ссылке:'}
      </span>
      {searchZone === 'address' ? (
        <BibleSearchPanelAddressInput inputRef={inputRef} />
      ) : (
        <BibleSearchPanelSearchTextInput inputRef={inputRef} />
      )}
      <SwitchButton
        className="pointer"
        $active={searchZone === 'global'}
        onClick={() => putOnSearchZoneRef.current('global')}
      >
        текст
      </SwitchButton>
      <SwitchButton
        className="pointer"
        $active={searchZone === 'inner'}
        onClick={() => putOnSearchZoneRef.current('inner')}
      >
        глава
      </SwitchButton>
      <SwitchButton
        className="pointer"
        $active={searchZone === 'address'}
        onClick={() => putOnSearchZoneRef.current('address')}
      >
        ссылка
      </SwitchButton>
    </div>
  );
}

const SwitchButton = styled.div<{ $active: boolean }>`
  ${props =>
    props.$active &&
    css`
      text-decoration: underline;
    `}

  &:hover {
    color: var(--color--7);
  }
`;
