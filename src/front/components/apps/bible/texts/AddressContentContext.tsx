import { useMemo } from 'react';
import { contextCreator } from '../../../../complect/contextCreator';
import { useBibleTranslationJoinAddress } from '../hooks/address/address';
import { useBibleAddressBooki } from '../hooks/address/books';
import { useBibleAddressChapteri } from '../hooks/address/chapters';
import { useBibleAddressVersei } from '../hooks/address/verses';
import { useBibleSlideSyncValue } from '../hooks/slide-sync';
import { useBibleJoinedAddressText, useBibleSimpleAddressText } from '../hooks/texts';

const [Context, useBibleAddressTextContext] = contextCreator('');

interface Props {
  children?: React.ReactNode;
  isPreview: boolean | und;
}

export const BibleTranslationScreenAddressTextContext = ({
  addressText,
  ...props
}: {
  addressText?: string;
} & Props) => {
  if (addressText !== undefined) return <Context.Provider value={addressText}>{props.children}</Context.Provider>;

  return <Prov {...props} />;
};

const Prov = (props: Props) => {
  const singleAddress = useBibleSimpleAddressText(
    useBibleAddressBooki(),
    useBibleAddressChapteri(),
    useBibleAddressVersei(),
  );

  const joinCode = useBibleTranslationJoinAddress();
  const joinAddress = useBibleJoinedAddressText(joinCode);

  const [cachedJoinAddress, cachedSingleAddress, cachedJoinCode] = useMemo(
    () => [joinAddress, singleAddress, joinCode],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [useBibleSlideSyncValue()],
  );

  const address =
    (props.isPreview ? joinCode : cachedJoinCode) == null
      ? props.isPreview
        ? singleAddress
        : cachedSingleAddress
      : props.isPreview
        ? joinAddress
        : cachedJoinAddress;

  return <Context.Provider value={address}>{props.children}</Context.Provider>;
};

export { useBibleAddressTextContext };
