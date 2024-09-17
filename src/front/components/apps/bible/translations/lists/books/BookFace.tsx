import { memo } from 'react';
import styled from 'styled-components';
import { useBibleSingleAddressSetter } from '../atoms';

interface Props {
  titles: [string, string];
  booki: number;
}

export default memo(function BibleBookFace({ titles, booki }: Props): JSX.Element {
  const setValue = useBibleSingleAddressSetter();

  return (
    <Face
      id={'bible-booki-' + booki}
      className="bible-list-face pointer"
      onClick={() => setValue(booki, 0, 0)}
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
