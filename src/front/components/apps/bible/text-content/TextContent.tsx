import { ReactNode, useMemo } from 'react';
import { useBibleTranslationJoinAddress } from '../hooks/address/address';
import { useBibleSlideSyncValue } from '../hooks/slide-sync';
import BibleTextContentJoined from './Joined';
import BibleTextContentSingle from './Simple';

interface Props {
  children?: (actualAddress: string, cachedAddress: string) => ReactNode;
  isShowCachable?: boolean;
}

export default function BibleTextContent({ isShowCachable, children }: Props): JSX.Element {
  const actualJoinAddress = useBibleTranslationJoinAddress();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachableJoinAddress = useMemo(() => actualJoinAddress, [useBibleSlideSyncValue()]);
  const joinAddress = isShowCachable ? cachableJoinAddress : actualJoinAddress;

  return joinAddress === null ? (
    <BibleTextContentSingle children={children} />
  ) : (
    <BibleTextContentJoined
      joinAddress={joinAddress}
      children={children}
    />
  );
}
