import styled from 'styled-components';
import { useBibleCurrentChapterList } from '../../../hooks/texts';
import BibleChapterFace from './ChapterFace';

export default function BibleChapterList() {
  const chapters = useBibleCurrentChapterList();

  return (
    <Container>
      {chapters?.map((_chapter, chapteri) => {
        return (
          <BibleChapterFace
            key={chapteri}
            chapteri={chapteri}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 2.5em;

  overflow-y: auto;
  overflow-x: hidden;
`;
