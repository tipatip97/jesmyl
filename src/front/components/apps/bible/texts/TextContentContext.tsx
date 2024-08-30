import { useMemo } from 'react';
import { contextCreator } from '../../../../complect/contextCreator';
import { useBibleTranslationJoinAddress } from '../hooks/address/address';
import { useBibleAddressBooki } from '../hooks/address/books';
import { useBibleAddressChapteri } from '../hooks/address/chapters';
import { useBibleAddressVersei } from '../hooks/address/verses';
import { useBibleSlideSyncValue } from '../hooks/slide-sync';
import { useBibleJoinedSlideText, useBibleSingleSlideText } from '../hooks/texts';

const [Context, useBibleTextContentContext] = contextCreator('');

interface Props {
  children?: React.ReactNode;
  isPreview: boolean | und;
}

export const BibleTranslationScreenTextContentContext = ({
  text,
  ...props
}: {
  text?: string;
} & Props) => {
  if (text === undefined) return <Prov {...props} />;

  return (
    <Context.Provider
      value={text}
      {...props}
    />
  );
};

export const Prov = ({ isPreview, children }: Props): JSX.Element => {
  const actualJoinAddress = useBibleTranslationJoinAddress();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachableJoinAddress = useMemo(() => actualJoinAddress, [useBibleSlideSyncValue()]);
  const joinAddress = isPreview ? actualJoinAddress : cachableJoinAddress;

  const text = useBibleSingleSlideText(useBibleAddressBooki(), useBibleAddressChapteri(), useBibleAddressVersei());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedText = useMemo(() => text, [useBibleSlideSyncValue()]);

  const joinedText = useBibleJoinedSlideText(joinAddress);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const joinedCachedText = useMemo(() => joinedText, [useBibleSlideSyncValue()]);

  return (
    <Context.Provider
      value={joinAddress === null ? (isPreview ? text : cachedText) : isPreview ? joinedText : joinedCachedText}
    >
      {children}
    </Context.Provider>
  );
};

export { useBibleTextContentContext };
