import { useMemo } from 'react';
import { useBibleAddressBooki } from '../hooks/address/books';
import { useBibleAddressChapteri } from '../hooks/address/chapters';
import { useBibleAddressVersei } from '../hooks/address/verses';
import { useBibleSlideSyncContentUpdatesNum } from '../hooks/slide-sync';
import { useBibleSingleSlideText } from '../hooks/texts';

interface Props {
  children?: (actualAddress: string, address: string) => React.ReactNode;
}

export default function BibleTextContentSingle({ children }: Props): JSX.Element {
  const text = useBibleSingleSlideText(useBibleAddressBooki(), useBibleAddressChapteri(), useBibleAddressVersei());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedText = useMemo(() => text, [useBibleSlideSyncContentUpdatesNum()]);

  return <>{children === undefined ? text : children(text, cachedText)}</>;
}
