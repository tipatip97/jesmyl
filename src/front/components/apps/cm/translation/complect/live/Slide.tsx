import styled from 'styled-components';
import { CmTranslationScreenConfig } from '../controlled/model';
import { CmTranslationScreen } from '../controlled/screen/CmTranslationScreen';

interface Props {
  texti: number;
  texts: string[];
  config: CmTranslationScreenConfig;
  subUpdates: number | string | und;
}

export const CmLiveTranslationSlide = (props: Props) => {
  return (
    <Container className="flex center full-size">
      <CmTranslationScreen
        className="inline-flex center white-pre-children"
        html={props.texts[props.texti]}
        subUpdates={props.subUpdates}
        cmConfig={props.config}
        texti={props.texti}
        texts={props.texts}
        isVisible
      />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  margin: auto;
`;
