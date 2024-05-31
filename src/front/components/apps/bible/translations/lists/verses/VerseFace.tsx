import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useActualRef } from '../../../../../../complect/useActualRef';
import { usePutBibleAddressVerseiSetter, usePutBibleJoinAddressSetter } from '../../../hooks/address/verses';

interface Props {
  verse: string;
  versei: number;
}

export const BibleVerseFace = memo(({ versei, verse }: Props) => {
  const setVerseRef = useActualRef(usePutBibleAddressVerseiSetter());
  const verseNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (verseNodeRef.current === null) return;

    let clickTimeout: TimeOut;
    let comeBack: (() => void) | null = null;
    let isDblClick = false;

    verseNodeRef.current.innerHTML = `${versei + 1}. ${verse}`;
    verseNodeRef.current.id = `bible-versei-${versei}`;
    verseNodeRef.current.classList.add('bible-list-face');

    verseNodeRef.current.onmousedown = () => {
      comeBack?.();
      comeBack = setVerseRef.current(versei, isDblClick);
      isDblClick = true;

      clearTimeout(clickTimeout);
      clickTimeout = setTimeout(() => {
        comeBack = null;
        isDblClick = false;
      }, 500);
    };

    return () => clearTimeout(clickTimeout);
  }, [setVerseRef, verse, versei]);

  return <Face ref={verseNodeRef} />;
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
  cursor: pointer;
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
