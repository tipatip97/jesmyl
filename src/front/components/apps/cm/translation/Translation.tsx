import { isTouchDevice } from '../../../../complect/device-differences';
import TranslationControlled from './complect/controlled/TranslationControlled';
import TranslationFullscreen from './complect/fullscreen/TranslationFullscreen';

export default function Translations() {
  return isTouchDevice ? <TranslationFullscreen /> : <TranslationControlled />;
}
