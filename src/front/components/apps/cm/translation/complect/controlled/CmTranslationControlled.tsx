import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { TranslationSlidePreview } from '../../../../+complect/translations/controls/Preview';
import useNavConfigurer from '../../../../../../complect/nav-configurer/useNavConfigurer';
import PhaseContainerConfigurer from '../../../../../../complect/phase-container/PhaseContainerConfigurer';
import { Com } from '../../../col/com/Com';
import { ComFaceList } from '../../../col/com/face/list/ComFaceList';
import { useCmScreenTranslationComNavigations } from '../hooks/com-navigation';
import { useCmScreenTranslationComTextNavigations } from '../hooks/com-texts';
import { CmTranslationControlPanel } from './ControllPanel';
import { CmTranslationSlideLine } from './SlideLine';
import { CmTranslateScreenConfigurations } from './screens/ScreenConfigurations';

interface Props {
  head?: ReactNode;
  comList?: Com[];
  useNav: () => ReturnType<typeof useNavConfigurer>;
  headTitle?: ReactNode;
}

export default function CmTranslationControlled({ head, comList, headTitle }: Props) {
  const [, setSearchParams] = useSearchParams();

  const { comPack } = useCmScreenTranslationComNavigations();
  const setTexti = useCmScreenTranslationComTextNavigations().setTexti;

  return (
    <PhaseContainerConfigurer
      className=""
      headTitle={
        headTitle ? (
          <>
            {headTitle}
            {comPack.pageTitlePostfix}
          </>
        ) : (
          'Трансляция' + (comPack.pageTitlePostfix || '')
        )
      }
      head={head}
      content={
        <Container>
          <div className="flex">
            <TranslationSlidePreview />
            {
              <div className="translation-com-list">
                <ComFaceList
                  list={comList ?? comPack.list}
                  titles={comPack.titles}
                  importantOnClick={com => {
                    setSearchParams(prev => ({ ...prev, comw: com.wid }));
                    setTexti(0);
                  }}
                />
              </div>
            }
          </div>

          <CmTranslationSlideLine />
          <CmTranslationControlPanel />
          <CmTranslateScreenConfigurations />
        </Container>
      }
    />
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
