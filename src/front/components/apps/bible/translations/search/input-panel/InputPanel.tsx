import styled, { css } from 'styled-components';
import { BibleSearchZone } from '../../../model';
import { useBibleSearchZone } from '../selectors';
import { BibleSearchPanelAddressInput } from './address/AddressInput';
import { BibleSearchPanelSearchInput } from './SearchInput';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  putOnSearchZone: (zone: BibleSearchZone) => () => void;
}

export const BibleSearchInputPanel = ({ inputRef, putOnSearchZone }: Props) => {
  const searchZone = useBibleSearchZone();

  return (
    <div className="flex flex-gap margin-big-gap-t">
      <span className="nowrap">
        {searchZone === 'global'
          ? 'Поиск в тексте:'
          : searchZone === 'chapter'
            ? 'Поиск по главе:'
            : 'Поиск по ссылке:'}
      </span>
      {searchZone === 'address' ? (
        <BibleSearchPanelAddressInput inputRef={inputRef} />
      ) : (
        <BibleSearchPanelSearchInput inputRef={inputRef} />
      )}
      <SwitchButton
        $active={searchZone === 'global'}
        onClick={putOnSearchZone('global')}
      >
        текст
      </SwitchButton>
      <SwitchButton
        $active={searchZone === 'chapter'}
        onClick={putOnSearchZone('chapter')}
      >
        глава
      </SwitchButton>
      <SwitchButton
        $active={searchZone === 'address'}
        onClick={putOnSearchZone('address')}
      >
        ссылка
      </SwitchButton>
    </div>
  );
};

const SwitchButton = styled.div<{ $active: boolean }>`
  cursor: pointer;

  ${props =>
    props.$active &&
    css`
      text-decoration: underline;
    `}

  &:hover {
    color: var(--color--7);
  }
`;
