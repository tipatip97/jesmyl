import React, { ReactNode, useMemo } from 'react';
import { useBibleTranslationJoinAddress as useBibleTranslationJoinAddressCode } from '../hooks/address/address';
import { useBibleAddressBooki } from '../hooks/address/books';
import { useBibleAddressChapteri } from '../hooks/address/chapters';
import { useBibleAddressVersei } from '../hooks/address/verses';
import { useBibleSlideSyncContentUpdatesNum } from '../hooks/slide-sync';
import { useBibleJoinedAddressText, useBibleSimpleAddressText as useBibleSingleAddressText } from '../hooks/texts';
import { BibleTranslationAddress } from '../model';

interface Props {
  children?: (actualAddress: string, address: string) => ReactNode;
  isShowCachable?: boolean;
  address?: BibleTranslationAddress;
}

export const BibleAddress: React.FC<Props> = props => {
  const singleAddress = useBibleSingleAddressText(
    useBibleAddressBooki(),
    useBibleAddressChapteri(),
    useBibleAddressVersei(),
  );

  const joinCode = useBibleTranslationJoinAddressCode();
  const joinAddress = useBibleJoinedAddressText(joinCode);

  const [cachedJoinAddress, cachedSingleAddress, cachedJoinCode] = useMemo(
    () => [joinAddress, singleAddress, joinCode],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [useBibleSlideSyncContentUpdatesNum()],
  );

  if ((props.isShowCachable ? cachedJoinCode : joinCode) == null)
    return (
      <>
        {props.children === undefined
          ? props.isShowCachable
            ? cachedSingleAddress
            : singleAddress
          : props.children(singleAddress, cachedSingleAddress)}
      </>
    );

  return (
    <>
      {props.children === undefined
        ? props.isShowCachable
          ? cachedJoinAddress
          : joinAddress
        : props.children(joinAddress, cachedJoinAddress)}
    </>
  );
};
