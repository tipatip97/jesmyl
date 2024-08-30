import { useBibleAddressBooki } from '../hooks/address/books';
import { useBibleAddressChapteri } from '../hooks/address/chapters';
import { useBibleAddressVersei } from '../hooks/address/verses';
import { useBibleSimpleAddressText } from '../hooks/texts';
import { BibleTranslationSingleAddress } from '../model';

export const BibleAddressSingle = (props: { address?: BibleTranslationSingleAddress }) => {
  if (props.address === undefined) return <Current />;

  return <Propped address={props.address} />;
};

const Propped = (props: { address: BibleTranslationSingleAddress }) => {
  return <>{useBibleSimpleAddressText(...props.address)}</>;
};

const Current = () => {
  return <>{useBibleSimpleAddressText(useBibleAddressBooki(), useBibleAddressChapteri(), useBibleAddressVersei())}</>;
};
