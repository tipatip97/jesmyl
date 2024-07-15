import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { ScreenTranslationControlPanel } from '../../+complect/translations/controls/ControllPanel';
import useNavConfigurer from '../../../../complect/nav-configurer/useNavConfigurer';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import { justBibleStorageSet } from '../hooks/storage';
import { useLoadBibleChaptersCombine } from '../hooks/texts';
import { BibleModulesTranslations } from '../translates/Translations';
import BibleTranslationControlledBottomPanel from './BottomPanel';
import { BibleTranslationControlledTopPanel } from './TopPanel';
import BibleSearchPanel from './search/Panel';

interface Props {
  head: ReactNode;
  useNav: () => ReturnType<typeof useNavConfigurer>;
  headTitle: ReactNode;
}

const onPrev = () => justBibleStorageSet('translationVersei', versei => versei - 1);
const onNext = () => justBibleStorageSet('translationVersei', versei => versei + 1);

export const BibleTranslationControlled = ({ useNav, head, headTitle }: Props): JSX.Element => {
  useLoadBibleChaptersCombine();

  useEffect(() => {
    justBibleStorageSet('translationSlideSyncContentUpdatesNum', num => num + 1);
  }, []);

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
            onPrev={onPrev}
            onNext={onNext}
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
