import { memo } from 'react';

interface Props {
  html: { __html: string };
  versei: number;
  chapteri: number;
}

export default memo(function BibleReaderVerseText({ html, versei, chapteri }: Props): JSX.Element {
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
