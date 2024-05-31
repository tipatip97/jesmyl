import { isTouchDevice } from '../../../../complect/device-differences';
import useCmNav from '../base/useCmNav';
import CmTranslationControlled from './complect/controlled/CmTranslationControlled';
import TranslationFullscreen from './complect/fullscreen/TranslationFullscreen';

export default function Translations() {
  return isTouchDevice ? <TranslationFullscreen /> : <CmTranslationControlled useNav={useCmNav as never} />;
}
