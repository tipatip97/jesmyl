import { memo } from 'react';
import styled from 'styled-components';
import { usePutBibleAddressVerseiSetter, usePutBibleJoinAddressSetter } from '../../../hooks/address/verses';

interface Props {
  verse: string;
  versei: number;
}

export const BibleVerseFace = memo(({ versei, verse }: Props) => {
  const putSetVerse = usePutBibleAddressVerseiSetter();

  return (
    <Face
      id={'bible-versei-' + versei}
      className="bible-list-face"
      onClick={putSetVerse(versei, false)}
      onDoubleClick={putSetVerse(versei, true)}
      dangerouslySetInnerHTML={{ __html: `${versei + 1}. ${verse}` }}
    />
  );
});

export const BibleVerseFaceWithCtrlKey = memo(({ versei, verse }: Props) => {
  const putSetVerse = usePutBibleJoinAddressSetter();

  return (
    <Face
      id={'bible-versei-' + versei}
      className="bible-list-face"
      onClick={putSetVerse(versei, false)}
      onDoubleClick={putSetVerse(versei, true)}
      dangerouslySetInnerHTML={{ __html: `${versei + 1}. ${verse}` }}
    />
  );
});

const Face = styled.div`
  max-width: 100%;
  white-space: nowrap;
  cursor: pointer;

  &:nth-child(10n):not(:last-child) {
    margin-bottom: 10px;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      margin-top: 5px;
      height: 1px;
      width: 100%;
      background: red;
    }
  }
`;
