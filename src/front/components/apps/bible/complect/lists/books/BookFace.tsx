import { memo } from 'react';
import styled from 'styled-components';
import { usePutBibleAddressBookiSetter } from '../../../hooks/address/books';
import { BibleBook } from '../../../model';

export const BibleBookFace = memo(({ book, booki }: { book: BibleBook; booki: number }) => {
  const putSetBooki = usePutBibleAddressBookiSetter();

  return (
    <Face
      id={'bible-booki-' + booki}
      className="bible-list-face"
      onClick={putSetBooki(booki)}
    >
      {booki + 1} <span className="title">{book.titles[1]}</span>
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
