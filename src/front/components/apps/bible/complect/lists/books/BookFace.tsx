import { memo } from 'react';
import styled from 'styled-components';
import { usePutBibleStorageSetter } from '../../../hooks/storage';

export const BibleBookFace = memo(({ titles, booki }: { titles: [string, string]; booki: number }) => {
  const putValSetter = usePutBibleStorageSetter();

  return (
    <Face
      id={'bible-booki-' + booki}
      className="bible-list-face"
      onClick={putValSetter('translationBooki', booki)}
    >
      {booki + 1} <span className="title">{titles[1]}</span>
    </Face>
  );
});

const Face = styled.div`
  width: 7em;

  .title {
    color: var(--color--7);
  }

  &.selected,
  &.current {
    .title {
      color: var(--color--1);
    }
  }
`;
