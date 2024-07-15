import { ReactNode, useEffect } from 'react';
import './Leader.scss';
import useLeaderComments from './components/comments/useLeaderComments';

let prevSentTs: number = 0;

export default function LeaderApplication({ content }: { content: ReactNode }) {
  const { sendAllComments, sendingComments } = useLeaderComments();

  useEffect(() => {
    const now = Date.now();
    if (now - prevSentTs < 500) return;
    prevSentTs = now;
    sendAllComments();
  }, [sendingComments]);

  return <>{content}</>;
}
