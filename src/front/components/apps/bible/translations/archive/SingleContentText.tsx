import { useBibleSingleSlideText } from '../../hooks/texts';
import { BibleTranslationSingleAddress } from '../../model';

export default function BibleTranslationArchiveSingleContentText({ item }: { item: BibleTranslationSingleAddress }) {
  return <span dangerouslySetInnerHTML={{ __html: useBibleSingleSlideText(...item, true) }} />;
}
