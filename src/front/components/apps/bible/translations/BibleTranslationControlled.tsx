import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { ScreenTranslationControlPanel } from '../../+complect/translations/controls/ControllPanel';
import { useAtomInkrement } from '../../../../complect/atoms';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import { useBibleSlideSyncInkrementer } from '../hooks/slide-sync';
import { useLoadBibleChaptersCombine } from '../hooks/texts';
import { bibleVerseiAtom } from './lists/atoms';
import { BibleModulesTranslations } from '../translates/Translations';
import BibleTranslationControlledBottomPanel from './BottomPanel';
import { BibleTranslationControlledTopPanel } from './TopPanel';
import BibleSearchPanel from './search/Panel';

interface Props {
  head: ReactNode;
  useNav: () => ReturnType<typeof useNavConfigurer>;
  headTitle: ReactNode;
}

export const BibleTranslationControlled = ({ useNav, head, headTitle }: Props): JSX.Element => {
  useLoadBibleChaptersCombine();
  const inkSync = useBibleSlideSyncInkrementer();
  const switchVersei = useAtomInkrement(bibleVerseiAtom);

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
      goBack={useNav().goBack}
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
};

const Container = styled.div`
  --size: 50vmin;
  --max-size: 300px;
  --min-size: 200px;
`;
