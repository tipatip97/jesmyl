import { memo } from 'react';
import { usePutBibleChapteriSetter } from '../../../hooks/address/chapters';

export default memo(function BibleChapterFace({ chapteri }: { chapteri: number }): JSX.Element {
  const putValSetter = usePutBibleChapteriSetter();

  return (
    <div
      id={'bible-chapteri-' + chapteri}
      className="bible-list-face pointer"
      onClick={putValSetter(chapteri)}
    >
      {chapteri + 1}
    </div>
  );
});
