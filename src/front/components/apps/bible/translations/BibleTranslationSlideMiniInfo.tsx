import { takeBibleAddressText, takeBibleJoinedAddressText } from '../hooks/texts';
import { BibleTranslationAddress } from '../model';

interface Props {
  address: BibleTranslationAddress;
}

export const BibleTranslationSlideMiniInfo = ({ address }: Props) => {
  return (
    <span>
      {Array.isArray(address)
        ? takeBibleAddressText(address[0], address[1], address[2])
        : takeBibleJoinedAddressText(address)}
    </span>
  );
};
