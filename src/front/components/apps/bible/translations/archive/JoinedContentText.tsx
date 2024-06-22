import { useBibleJoinedSlideText } from '../../hooks/texts';
import { BibleTranslationJoinAddress } from '../../model';

export default function BibleTranslationArchiveJoinedContentText({ item }: { item: BibleTranslationJoinAddress }) {
  return <>{useBibleJoinedSlideText(item, true)}</>;
}
