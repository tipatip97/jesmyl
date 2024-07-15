import { leaderExer } from '../../leaderExer';
import { useLeaderIsSendingMessagesError, useLeaderSendingComments } from '../../molecules';
import { SendingComment } from './LeaderComment.model';

export default function useLeaderComments() {
  const [sendingComments, setSendingComments] = useLeaderSendingComments();
  const [isSendingMessagesError, setIsSendingMessagesError] = useLeaderIsSendingMessagesError();

  const ret = {
    sendingComments,
    isSendingMessagesError,
    sendAllComments: () => {
      const execs = ret.sendingComments;
      if (!execs?.length) return;

      leaderExer
        .send(execs)
        .then(() => {
          setSendingComments([]);
          setIsSendingMessagesError(false);
        })
        .catch(() => {
          setIsSendingMessagesError(true);
        });
    },
    sendComment: (exec: SendingComment) => {
      setSendingComments([...(sendingComments || []), exec]);
    },
  };
  return ret;
}
