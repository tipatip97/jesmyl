import styled, { css } from 'styled-components';
import { BibleSearchZone } from '../../../model';
import { useBibleSearchZone } from '../selectors';
import BibleSearchPanelSearchInput from './SearchInput';
import BibleSearchPanelAddressInput from './address/AddressInput';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  putOnSearchZone: (zone: BibleSearchZone) => () => void;
}

export default function BibleSearchInputPanel({ inputRef, putOnSearchZone }: Props) {
  const [searchZone] = useBibleSearchZone();

  return (
    <div className="flex flex-gap margin-big-gap-t">
      <span className="nowrap">
        {searchZone === 'global' ? 'Поиск в тексте:' : searchZone === 'inner' ? 'Поиск по главе:' : 'Поиск по ссылке:'}
      </span>
      {searchZone === 'address' ? (
        <BibleSearchPanelAddressInput inputRef={inputRef} />
      ) : (
        <BibleSearchPanelSearchInput inputRef={inputRef} />
      )}
      <SwitchButton
        className="pointer"
        $active={searchZone === 'global'}
        onClick={putOnSearchZone('global')}
      >
        текст
      </SwitchButton>
      <SwitchButton
        className="pointer"
        $active={searchZone === 'inner'}
        onClick={putOnSearchZone('inner')}
      >
        глава
      </SwitchButton>
      <SwitchButton
        className="pointer"
        $active={searchZone === 'address'}
        onClick={putOnSearchZone('address')}
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
