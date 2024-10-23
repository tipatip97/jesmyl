import { memo } from 'react';
import { BibleChapteri } from '../../../model';
import BibleReaderVerseText from './Verse';

export default memo(function BibleReaderChapter({
  list,
  chapteri,
}: {
  list: { __html: string }[];
  chapteri: BibleChapteri;
}): JSX.Element {
  return (
    <>
      <h2
        attr-chapteri={chapteri}
        attr-versei={0}
      >
        Глава {chapteri + 1}
      </h2>
      {list.map((verseHTML, versei) => {
        return (
          <BibleReaderVerseText
            key={versei}
            versei={versei}
            chapteri={chapteri}
            html={verseHTML}
          />
        );
      })}
    </>
  );
});
