import React, { ReactNode, useMemo } from 'react';
import { useBibleAddressBooki } from '../hooks/address/books';
import { useBibleAddressChapteri } from '../hooks/address/chapters';
import { useBibleAddressVersei } from '../hooks/address/verses';
import { useBibleSlideSyncValue } from '../hooks/slide-sync';
import { useBibleSimpleAddressText } from '../hooks/texts';
import { BibleTranslationSingleAddress } from '../model';

interface Props {
  children?: (actualAddress: string, address: string) => ReactNode;
  address?: BibleTranslationSingleAddress;
}

export const BibleAddressSingle: React.FC<Props> = props => {
  if (props.address === undefined) return <Current {...props} />;

  return <Propped {...props} />;
};

const Propped: React.FC<Props> = props => {
  const actualAddress = useBibleSimpleAddressText(...props.address!);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const address = useMemo(() => actualAddress, [useBibleSlideSyncValue()]);

  return <>{props.children === undefined ? actualAddress : props.children(actualAddress, address)}</>;
};

const Current: React.FC<Props> = props => {
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  const actualAddress = useBibleSimpleAddressText(currentBooki, currentChapteri, currentVersei);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const address = useMemo(() => actualAddress, [useBibleSlideSyncValue()]);

  return <>{props.children === undefined ? actualAddress : props.children(actualAddress, address)}</>;
};
