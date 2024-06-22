import { useBibleJoinedAddressText } from '../../hooks/texts';
import { BibleTranslationJoinAddress } from '../../model';

export default function BibleTranslationArchiveJoinedAddressText({ item }: { item: BibleTranslationJoinAddress }) {
  return <>{useBibleJoinedAddressText(item, 1)}</>;
}
