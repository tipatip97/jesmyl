import styled from 'styled-components';
import { useBibleBookList } from '../../../hooks/texts';
import { useBibleSingleAddressSetter } from '../atoms';

export const bookiIdPrefix = 'bible-booki-';

export default function BibleBookList() {
  const books = useBibleBookList();
  const setValue = useBibleSingleAddressSetter();

  return (
    <Container>
      {books.map((book, booki) => {
        return (
          <Face
            key={booki}
            id={bookiIdPrefix + booki}
            className="bible-list-face pointer"
            onClick={() => setValue(booki, 0, 0)}
          >
            {booki + 1} <span className="title">{book[1]}</span>
          </Face>
        );
      })}
    </Container>
  );
}

const Face = styled.div`
  width: 7em;

  .title {
    color: var(--color--7);
  }
`;

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;
