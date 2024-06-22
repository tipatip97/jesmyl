import { useBibleSingleSlideText } from '../../hooks/texts';
import { BibleTranslationSingleAddress } from '../../model';

export default function BibleTranslationArchiveSingleContentText({ item }: { item: BibleTranslationSingleAddress }) {
  return <>{useBibleSingleSlideText(...item, true)}</>;
}
