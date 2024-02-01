import styled from 'styled-components';
import { useBibleBookList } from '../../../hooks/texts';
import { BibleBookFace } from './BookFace';

export const BibleBookList = () => {
  const books = useBibleBookList();

  return (
    <Container>
      {books.map((book, booki) => {
        return (
          <BibleBookFace
            key={book[0]}
            titles={book}
            booki={booki}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;
