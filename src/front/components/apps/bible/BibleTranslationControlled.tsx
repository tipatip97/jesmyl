import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ScreenTranslationControlPanel } from '../+complect/translations/controls/ControllPanel';
import { TranslationSlidePreview } from '../+complect/translations/controls/Preview';
import { bibleStoreActions } from './Bible.store';
import bibleStorage from './bibleStorage';
import { BibleTranslateScreenConfigurations } from './complect/ScreenConfigurations';
import { BibleTranslationHistoryArchive } from './complect/archive/history/HistoryArchive';
import { BibleTranslationPlanArchive } from './complect/archive/plan/PlanArchive';
import { BibleLists } from './complect/lists/Lists';
import { BibleSearchPanel } from './complect/search/Panel';
import { useBibleAddressVerseiUpdater } from './hooks/address/verses';
import { useBibleSlideSyncContentUpdatesNum } from './hooks/slide-sync';
import { useBibleCurrentAddressText } from './hooks/texts';
import useBibleNav from './useBibleNav';

interface Props {
  goBackRef: { current: (isForceBack: boolean) => void };
}

const incrementFunc = (num: number) => num + 1;

export default function BibleTranslationControlled({ goBackRef }: Props) {
  const dispatch = useDispatch();
  const { goBack } = useBibleNav();
  goBackRef.current = goBack;
  const setVersei = useBibleAddressVerseiUpdater();
  const [isPreview, setIsPreview] = useState(true);
  const address = useBibleCurrentAddressText();
  const slideSyncUpdates = useBibleSlideSyncContentUpdatesNum();
  const [slideSyncNum, setSlideSyncNum] = useState(slideSyncUpdates);

  useEffect(() => setSlideSyncNum(incrementFunc), [address]);
  useEffect(() => setSlideSyncNum(slideSyncUpdates), [slideSyncUpdates]);

  useEffect(() => bibleStorage.initDispatches(dispatch, bibleStoreActions), [dispatch]);

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
    <Container>
      <TopPanel>
        <div className="flex column">
          <div
            className={'flex flex-gap margin-gap-b ' + (slideSyncUpdates === slideSyncNum ? 'color--7' : '')}
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
        onNext={() => setVersei(versei => versei + 1)}
        onPrev={() => setVersei(versei => versei - 1)}
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
