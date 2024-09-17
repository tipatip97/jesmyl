import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { ScreenTranslationControlPanel } from '../../+complect/translations/controls/ControllPanel';
import { useAtomInkrement } from '../../../../complect/atoms';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import { useBibleSlideSyncInkrementer } from '../hooks/slide-sync';
import { useLoadBibleChaptersCombine } from '../hooks/texts';
import { BibleModulesTranslations } from '../translates/Translations';
import BibleTranslationControlledBottomPanel from './BottomPanel';
import { BibleTranslationControlledTopPanel } from './TopPanel';
import { bibleVerseiAtom } from './lists/atoms';
import BibleSearchPanel from './search/Panel';
import { useInitSoki } from '../../../../app/useInitSoki';

interface Props {
  head: ReactNode;
  headTitle: ReactNode;
}

export default function BibleTranslationControlled({ head, headTitle }: Props): JSX.Element {
  useLoadBibleChaptersCombine();
  const inkSync = useBibleSlideSyncInkrementer();
  const switchVersei = useAtomInkrement(bibleVerseiAtom);
  useInitSoki('bible');

  useEffect(() => inkSync(1), [inkSync]);

  useEffect(() => {
    return hookEffectLine()
      .addEventListener(window, 'keydown', event => {
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
      })
      .effect();
  }, []);

  return (
    <PhaseContainerConfigurer
      className=""
      headTitle={headTitle ?? 'Библия'}
      head={head}
      content={
        <Container>
          <BibleTranslationControlledTopPanel />
          <BibleModulesTranslations />
          <ScreenTranslationControlPanel
            onPrev={() => switchVersei(-1)}
            onNext={() => switchVersei(1)}
          />
          <BibleSearchPanel />
          <BibleTranslationControlledBottomPanel />
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
