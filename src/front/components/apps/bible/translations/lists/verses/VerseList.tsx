import styled from 'styled-components';
import { useBibleCurrentVerseTexts } from '../../../hooks/texts';
import { BibleVerseFace, BibleVerseFaceWithCtrlKey } from './VerseFace';

interface Props {
  isShowFaceWithCtrl: boolean;
}

export const BibleVerseList = ({ isShowFaceWithCtrl }: Props) => {
  const verses = useBibleCurrentVerseTexts();
  const Face = isShowFaceWithCtrl ? BibleVerseFaceWithCtrlKey : BibleVerseFace;

  return (
    <Container>
      {verses?.map((verse, versei) => {
        return (
          <Face
            key={versei}
            verse={verse}
            versei={versei}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: calc(100vw - 300px - 2.5em - 7em);
`;
