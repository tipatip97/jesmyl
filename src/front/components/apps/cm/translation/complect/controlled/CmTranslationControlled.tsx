import styled from 'styled-components';
import { TranslationSlidePreview } from '../../../../+complect/translations/controls/Preview';
import useCmNav from '../../../base/useCmNav';
import ComFace from '../../../col/com/face/ComFace';
import { useCmScreenTranslationComNavigations } from '../hooks/com-navigation';
import { useCmScreenTranslationComTextNavigations } from '../hooks/com-texts';
import { CmTranslationControlPanel } from './ControllPanel';
import { CmTranslationSlideLine } from './SlideLine';
import { CmTranslateScreenConfigurations } from './screens/ScreenConfigurations';

interface Props {
  goBackRef: { current: (isForceBack: boolean) => void };
}

export default function CmTranslationControlled(props: Props) {
  const nav = useCmNav();
  props.goBackRef.current = nav.goBack;

  const [comList] = useCmScreenTranslationComNavigations().comPack;
  const setTexti = useCmScreenTranslationComTextNavigations().setTexti;

  return (
    <Container>
      <div className="flex">
        <TranslationSlidePreview />
        {
          <div className="translation-com-list">
            {comList?.map(com => {
              return (
                <ComFace
                  key={com.wid}
                  com={com}
                  importantOnClick={() => {
                    nav.setAppRouteData({ ccomw: com.wid });
                    setTexti(0);
                  }}
                />
              );
            })}
          </div>
        }
      </div>

      <CmTranslationSlideLine />
      <CmTranslationControlPanel />
      <CmTranslateScreenConfigurations />
    </Container>
  );
}

const Container = styled.div`
  --size: 50vmin;
  --max-size: 300px;
  --min-size: 200px;

  .translation-com-list {
    width: 50%;
    height: var(--size);
    min-height: var(--min-size);
    max-height: var(--max-size);
    overflow-x: hidden;
    overflow-y: auto;

    .face-item.current {
      font-weight: bold;
    }
  }
`;
