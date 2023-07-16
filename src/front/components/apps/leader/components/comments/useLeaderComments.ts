import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../shared/store";
import di, { leaderExer } from "../../Leader.store";
import { SendingComment } from "./LeaderComment.model";

const sendingCommentsSelector = (state: RootState) => state.leader.sendingComments;
const isSendingMessagesErrorsSelector = (state: RootState) => state.leader.isSendingMessagesError;

export default function useLeaderComments() {
    const dispatch = useDispatch();
    const sendingComments = useSelector(sendingCommentsSelector);
    const isSendingMessagesError = useSelector(isSendingMessagesErrorsSelector);

    const ret = {
        sendingComments,
        isSendingMessagesError,
        sendAllComments: () => {
            const execs = ret.sendingComments.comments;
            if (!execs?.length) return;

            leaderExer.send(execs)
                .then(() => {
                    dispatch(di.sendingComments([]));
                    dispatch(di.isSendingMessagesError(false));
                })
                .catch(() => {
                    dispatch(di.isSendingMessagesError(true));
                });
        },
        sendComment: (exec: SendingComment) => {
            dispatch(di.sendingComments([...sendingComments.comments || [], exec]));
        },
    };
    return ret;
}