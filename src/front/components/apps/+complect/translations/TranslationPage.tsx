import { useRef } from 'react';
import EvaButton from '../../../../complect/eva-icon/EvaButton';
import PhaseContainerConfigurer from '../../../../complect/phase-container/PhaseContainerConfigurer';
import CmTranslationControlled from '../../cm/translation/complect/controlled/CmTranslationControlled';
import { useCurrentTranslationTextApp, useSwitchCurrentTranslationTextApp } from './hooks/current-app';
import BibleTranslationControlled from '../../bible/BibleTranslationControlled';

const goBack = (_isForceBack?: boolean | undefined) => {};

export default function TranslationPage() {
  const app = useCurrentTranslationTextApp();
  const switchApp = useSwitchCurrentTranslationTextApp();
  const goBackRef = useRef(goBack);

  return (
    <PhaseContainerConfigurer
      goBack={goBackRef.current}
      className=""
      headTitle={app === 'cm' ? 'Песня' : 'Библия'}
      head={
        <EvaButton
          name={app === 'cm' ? 'book-open-outline' : 'book-outline'}
          className="margin-gap-r"
          onClick={switchApp}
        />
      }
      content={
        app === 'cm' ? (
          <CmTranslationControlled goBackRef={goBackRef} />
        ) : (
          <BibleTranslationControlled goBackRef={goBackRef} />
        )
      }
    />
  );
}
