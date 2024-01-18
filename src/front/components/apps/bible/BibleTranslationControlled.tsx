import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ScreenTranslationControlPanel } from '../+complect/translations/controls/ControllPanel';
import { TranslationSlidePreview } from '../+complect/translations/controls/Preview';
import { bibleStoreActions } from './Bible.store';
import bibleStorage from './bibleStorage';
import { BibleTranslateScreenConfigurations } from './complect/ScreenConfigurations';
import useBibleNav from './useBibleNav';

interface Props {
  goBackRef: { current: (isForceBack: boolean) => void };
}

export default function BibleTranslationControlled({ goBackRef }: Props) {
  const dispatch = useDispatch();
  const { goBack } = useBibleNav();
  goBackRef.current = goBack;

  useEffect(() => bibleStorage.initDispatches(dispatch, bibleStoreActions), [dispatch]);

  return (
    <Container>
      <div className="flex">
        <TranslationSlidePreview />
      </div>
      <ScreenTranslationControlPanel
        onNext={() => {}}
        onPrev={() => {}}
      />

      <BibleTranslateScreenConfigurations />
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
