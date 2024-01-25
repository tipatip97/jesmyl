import { memo } from 'react';
import { usePutBibleAddressChapteriSetter } from '../../../hooks/address/chapters';

export const BibleChapterFace = memo(({ chapteri }: { chapteri: number }) => {
  const putSetChapteri = usePutBibleAddressChapteriSetter();

  return (
    <div
      id={'bible-chapteri-' + chapteri}
      className="bible-list-face"
      onClick={putSetChapteri(chapteri)}
    >
      {chapteri + 1}
    </div>
  );
});
