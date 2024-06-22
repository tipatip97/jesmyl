import React, { ReactNode, useMemo } from 'react';
import { useBibleSlideSyncContentUpdatesNum } from '../hooks/slide-sync';
import { useBibleJoinedAddressText } from '../hooks/texts';
import { BibleTranslationJoinAddress } from '../model';

interface Props {
  joinAddress: BibleTranslationJoinAddress;
  children?: (actualAddress: string, address: string) => ReactNode;
}

export default function BibleAddressJoined({ joinAddress, children }: Props): JSX.Element {
  const actualAddress = useBibleJoinedAddressText(joinAddress);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const address = useMemo(() => actualAddress, [useBibleSlideSyncContentUpdatesNum()]);

  return <>{children === undefined ? actualAddress : children(actualAddress, address)}</>;
}
