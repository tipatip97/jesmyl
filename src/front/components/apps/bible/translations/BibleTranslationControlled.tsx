import { ReactNode, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ScreenTranslationControlPanel } from '../../+complect/translations/controls/ControllPanel';
import { TranslationSlidePreview } from '../../+complect/translations/controls/Preview';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import { useBibleSlideSyncContentUpdatesNum } from '../hooks/slide-sync';
import { justBibleStorageSet } from '../hooks/storage';
import { useBibleCurrentAddressText } from '../hooks/texts';
import { BibleTranslateScreenConfigurations } from './ScreenConfigurations';
import { BibleTranslationHistoryArchive } from './archive/history/HistoryArchive';
import { BibleTranslationPlanArchive } from './archive/plan/PlanArchive';
import { BibleLists } from './lists/Lists';
import { BibleSearchPanel } from './search/Panel';

interface Props {
  head: ReactNode;
  useNav: () => ReturnType<typeof useNavConfigurer>;
  headTitle: ReactNode;
}

export default function BibleTranslationControlled({ useNav, head, headTitle }: Props) {
  const [isPreview, setIsPreview] = useState(true);
  const address = useBibleCurrentAddressText();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const actualAddressContent = useMemo(() => address, [useBibleSlideSyncContentUpdatesNum()]);

  useEffect(() => {
    justBibleStorageSet('translationSlideSyncContentUpdatesNum', num => num + 1);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'F2':
        case 'F3':
        case 'F4':
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          event.preventDefault();
          return;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <PhaseContainerConfigurer
      goBack={useNav().goBack}
      className=""
      headTitle={headTitle ?? 'Библия'}
      head={head}
      content={
        <Container>
          <TopPanel>
            <div className="flex column">
              <div
                className={'flex flex-gap margin-gap-b ' + (actualAddressContent === address ? 'color--7' : '')}
                onClick={() => setIsPreview(is => !is)}
              >
                <div className={'pointer ' + (isPreview ? 'color--7' : '')}>Предпросмотр</div>
                {' / '}
                <div className={'pointer ' + (isPreview ? '' : 'color--7')}>Слайд</div>
              </div>
              <TranslationSlidePreview isPreview={isPreview} />
            </div>
            <BibleLists />
          </TopPanel>
          <ScreenTranslationControlPanel
            onNext={() => justBibleStorageSet('translationVersei', versei => versei + 1)}
            onPrev={() => justBibleStorageSet('translationVersei', versei => versei - 1)}
          />
          <BibleSearchPanel />
          <BottomGrid className="margin-big-gap-t">
            <div grid-configs="">
              <BibleTranslateScreenConfigurations />
            </div>
            <div grid-history="">
              <BibleTranslationHistoryArchive />
            </div>
            <div grid-plan="">
              <div>
                <BibleTranslationPlanArchive />
              </div>
            </div>
          </BottomGrid>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  --size: 50vmin;
  --max-size: 300px;
  --min-size: 200px;
`;

const TopPanel = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 320px;
`;

const BottomGrid = styled.div`
  display: grid;
  grid-template-areas: 'configs history plan';
  grid-template-columns: 40% 1fr 1fr;
  grid-template-rows: 400px;
  grid-gap: 10px;
  overflow: hidden;

  .archive-title {
    position: sticky;
    top: 0;
    background-color: var(--color--8);
  }

  [grid-configs] {
    grid-area: configs;
    overflow-x: hidden;
    overflow-y: auto;
  }

  [grid-history] {
    grid-area: history;
    overflow-x: hidden;
    overflow-y: auto;
  }

  [grid-plan] {
    grid-area: plan;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
