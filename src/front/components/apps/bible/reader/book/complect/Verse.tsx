import { memo } from 'react';

interface Props {
  html: { __html: string };
  versei: number;
  chapteri: number;
}

export const BibleReaderVerseText = memo(({ html, versei, chapteri }: Props) => {
  return (
    <div
      attr-chapteri={chapteri}
      attr-versei={versei}
    >
      <span className="color--7">{versei + 1 + '. '}</span>
      <span dangerouslySetInnerHTML={html} />
    </div>
  );
});
