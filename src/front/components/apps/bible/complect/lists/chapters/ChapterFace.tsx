import { memo } from 'react';
import { usePutBibleStorageSetter } from '../../../hooks/storage';

export const BibleChapterFace = memo(({ chapteri }: { chapteri: number }) => {
  const putValSetter = usePutBibleStorageSetter();

  return (
    <div
      id={'bible-chapteri-' + chapteri}
      className="bible-list-face"
      onClick={putValSetter('translationChapteri', chapteri)}
    >
      {chapteri + 1}
    </div>
  );
});
