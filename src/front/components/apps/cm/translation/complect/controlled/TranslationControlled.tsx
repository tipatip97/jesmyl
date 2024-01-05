import styled from 'styled-components';
import { useActualRef } from '../../../../../../complect/useActualRef';
import useCmNav from '../../../base/useCmNav';
import ComFace from '../../../col/com/face/ComFace';
import PhaseCmContainer from '../../../complect/phase-container/PhaseCmContainer';
import { CmTranslationControlPanel } from './ControllPanel';
import { CmTranslationSlidePreview } from './Preview';
import { CmSlideLineItemInnerStyle, CmTranslationSlideLine } from './SlideLine';
import { useControlledTranslation } from './hooks';
import { CmTranslateScreenConfigurations } from './screens/ScreenConfigurations';

export default function TranslationControlled() {
  const { setAppRouteData } = useCmNav();

  const state = useControlledTranslation();
  const stateRef = useActualRef(state);

  const [comList, titlePostfix] = state.comPack;

  return (
    <Container
      className={`translation-container ${state.positionY}`}
      headTitle={`Трансляция${titlePostfix}`}
      content={
        <>
          <div className="flex">
            <CmTranslationSlidePreview stateRef={stateRef} />
            {
              <div className="translation-com-list">
                {comList?.map(com => {
                  return (
                    <ComFace
                      key={com.wid}
                      com={com}
                      importantOnClick={() => {
                        setAppRouteData({ ccomw: com.wid });
                        state.setTexti(0);
                      }}
                    />
                  );
                })}
              </div>
            }
          </div>

          <CmTranslationSlideLine stateRef={stateRef} />
          <CmTranslationControlPanel />
          <CmTranslateScreenConfigurations />
        </>
      }
    />
  );
}

const Container = styled(PhaseCmContainer)`
  --radius: 20px;
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

  &.center {
    ${CmSlideLineItemInnerStyle} {
      align-items: center;
    }
  }
`;
