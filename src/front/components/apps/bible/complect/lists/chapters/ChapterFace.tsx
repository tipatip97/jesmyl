import { memo } from 'react';
import { usePutBibleChapteriSetter } from '../../../hooks/address/chapters';

export const BibleChapterFace = memo(({ chapteri }: { chapteri: number }) => {
  const putValSetter = usePutBibleChapteriSetter();

  return (
    <div
      id={'bible-chapteri-' + chapteri}
      className="bible-list-face"
      onClick={putValSetter(chapteri)}
    >
      {chapteri + 1}
    </div>
  );
});
