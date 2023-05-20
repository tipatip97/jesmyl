import { useDispatch, useSelector } from "react-redux";
import mylib, { MyLib } from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import useAuth from "../../../../index/useAuth";
import { GamesStoreImportable } from "../../Leader.model";
import di, { leaderExer } from "../../Leader.store";
import leaderStorage from "../../leaderStorage";
import useGames from "../games/useGames";
import { LeaderCommentImportable, SendingComment, SendingCommentArea, SendingComments, SendingCommentsAreaName } from "./LeaderComment.model";

const sendingCommentsSelector = (state: RootState) => state.leader.sendingComments;
const errorSentCommentsSelector = (state: RootState) => state.leader.errorSentComments;

export default function useLeaderComments() {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const login = auth?.login ?? NaN;
    const sendingComments = useSelector(sendingCommentsSelector);
    const errorSentComments = useSelector(errorSentCommentsSelector);
    const { games } = useGames();
    const save = (arean: SendingCommentsAreaName, gamew: number, listw: number, mapper: (comments: SendingComment[], area: SendingCommentArea) => void, throwComments?: SendingComments) => {
        const generalDict = mylib.clone(throwComments ?? sendingComments);
        const dict = generalDict[arean] ??= {};
        const area = dict[gamew] ??= {};
        area[listw] ??= [];
        mapper(area[listw], area);

        return generalDict;
    };

    const ret = {
        sendingComments,
        errorSentComments,
        sendAllComments: (observableComments: SendingComments = sendingComments, observableGames: GamesStoreImportable | und = games) => {
            let throwComments = ret.sendingComments;

            const gameWids = observableGames?.teamGames?.map(({ w }) => w) || [];

            const commentTss = observableGames?.teamGames?.map(({ teams, timers }) => {
                const mapper = (...args: { comments?: LeaderCommentImportable[] }[][]) => args.flat().map(({ comments }) => comments?.map(comment => comment.owner === login ? comment.ts : 0))
                return teams && mapper(teams, timers || []);
            })
                .flat().flat()
                .filter(ts => ts) as number[] || [];

            const execs = MyLib.entries(observableComments)
                .map(([arean, val]) => MyLib.entries(val)
                    .map(([gamew, val]) => MyLib.entries(val).map(([listw, realComments]) => {
                        realComments.forEach(() => {
                            throwComments = save(arean, gamew, listw, (comments, area) => {
                                area[listw] = comments.filter(({ ts }) => !commentTss.includes(ts));
                            }, throwComments)
                        });
                        return realComments;
                    })))
                .flat().flat().flat()
                .filter(({ ts, exec: { args: { gamew } = {} } } = {} as never) => {
                    return !commentTss.includes(ts) && gameWids.includes(gamew);
                })
                .map(({ exec }) => exec);

            leaderExer.send(execs)
                .catch(() => {
                    const tss = execs.map(({ args }) => args?.ts) as number[];
                    dispatch(di.updateRrrorSentComments([...errorSentComments, ...tss]));
                });
            ret.saveLocal(throwComments, true);
        },
        saveLocal: (comments: SendingComments, isRejectPropagation?: boolean) => leaderStorage.set('sendingComments', comments, isRejectPropagation),
        sendComment: (arean: SendingCommentsAreaName, gamew: number, listw: number, comment: SendingComment) => {
            const commentsDict = save(arean, gamew, listw, (comments) => comments.push(comment));
            dispatch(di.updateSendingComments(commentsDict));
            ret.saveLocal(commentsDict);
        },
        rejectSending: (arean: SendingCommentsAreaName, gamew: number, listw: number, commentTs: number) => {
            const throwComments = save(arean, gamew, listw, (comments, area) => area[listw] = comments.filter(({ ts }) => commentTs !== ts));
            dispatch(di.updateSendingComments(throwComments));
            ret.saveLocal(throwComments, true);
        },
    };
    return ret;
}