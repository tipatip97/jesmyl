import { CurrentForceViweAppContext } from '../../+complect/translations/Translation.contexts';
import { isTouchDevice } from '../../../../complect/device-differences';
import useCmNav from '../base/useCmNav';
import CmTranslationControlled from './complect/controlled/CmTranslationControlled';
import TranslationFullscreen from './complect/fullscreen/TranslationFullscreen';

export default function Translations() {
  return (
    <>
      <CurrentForceViweAppContext.Provider value="cm">
        {isTouchDevice ? <TranslationFullscreen /> : <CmTranslationControlled useNav={useCmNav as never} />}
      </CurrentForceViweAppContext.Provider>
    </>
  );
}
