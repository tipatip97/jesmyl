import { ReactNode, useMemo } from 'react';
import { useBibleSlideSyncValue } from '../hooks/slide-sync';
import { useBibleJoinedSlideText } from '../hooks/texts';
import { BibleTranslationJoinAddress } from '../model';

interface Props {
  joinAddress: BibleTranslationJoinAddress;
  children?: (actualAddress: string, address: string) => ReactNode;
}

export default function BibleTextContentJoined({ joinAddress, children }: Props): JSX.Element {
  const text = useBibleJoinedSlideText(joinAddress);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedText = useMemo(() => text, [useBibleSlideSyncValue()]);

  return <>{children === undefined ? text : children(text, cachedText)}</>;
}
