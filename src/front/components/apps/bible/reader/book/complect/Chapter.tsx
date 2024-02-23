import { memo } from 'react';
import { BibleReaderVerseText } from './Verse';

export const BibleReaderChapter = memo(({ list, chapteri }: { list: { __html: string }[]; chapteri: number }) => {
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
