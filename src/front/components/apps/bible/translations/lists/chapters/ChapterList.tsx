import styled from 'styled-components';
import { usePutBibleChapteriSetter } from '../../../hooks/address/chapters';
import { useBibleCurrentChapterList } from '../../../hooks/texts';

export const chapteriIdPrefix = 'bible-chapteri-';

export default function BibleChapterList() {
  const chapters = useBibleCurrentChapterList();
  const putValSetter = usePutBibleChapteriSetter();

  return (
    <Container>
      {chapters?.map((_chapter, chapteri) => {
        return (
          <div
            key={chapteri}
            id={chapteriIdPrefix + chapteri}
            className="bible-list-face pointer"
            onClick={putValSetter(chapteri)}
          >
            {chapteri + 1}
          </div>
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
