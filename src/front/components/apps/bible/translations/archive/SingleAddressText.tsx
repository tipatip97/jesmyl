import { useBibleSimpleAddressText } from '../../hooks/texts';
import { BibleTranslationSingleAddress } from '../../model';

export default function BibleTranslationArchiveSingleAddressText({ item }: { item: BibleTranslationSingleAddress }) {
  return <>{useBibleSimpleAddressText(...item, 1)}</>;
}
