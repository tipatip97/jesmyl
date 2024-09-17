import { memo } from 'react';
import styled from 'styled-components';
import { verseIdPrefix } from './VerseList';

interface Props {
  verse: string;
  versei: number;
}

export default memo(function BibleVerseFace({ versei, verse }: Props): JSX.Element {
  return (
    <Face
      id={verseIdPrefix + versei}
      className="bible-list-face pointer"
      dangerouslySetInnerHTML={{ __html: `${versei + 1}. ${verse}` }}
    />
  );
});

const Face = styled.div`
  max-width: 100%;
  transition-property: background-color, color;
  transition-duration: 0.5s;

  &:nth-child(odd) {
    background-color: var(--color--2);
  }

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
