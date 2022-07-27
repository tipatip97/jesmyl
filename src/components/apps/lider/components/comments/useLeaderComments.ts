import { useDispatch, useSelector } from "react-redux";
import mylib, { MyLib } from "../../../../../complect/my-lib/MyLib";
import { liderStorage } from "../../../../../shared/jstorages";
import { RootState } from "../../../../../shared/store";
import useAuth from "../../../../index/useAuth";
import { GamesStoreExportable } from "../../Lider.model";
import { liderExer, updateRrrorSentComments, updateSendingComments } from "../../Lider.store";
import { SendingComment, SendingCommentArea, SendingComments, SendingCommentsAreaName } from "./LeaderComment.model";

export default function useLeaderComments() {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const login = auth?.login ?? NaN;
    const sendingComments = useSelector((state: RootState) => state.lider.sendingComments);
    const errorSentComments = useSelector((state: RootState) => state.lider.errorSentComments);
    const save = (arean: SendingCommentsAreaName, areaw: number, listw: number, mapper: (comments: SendingComment[], area: SendingCommentArea) => void, throwComments?: SendingComments) => {
        const generalDict = mylib.clone(throwComments ?? sendingComments);
        const dict = generalDict[arean];
        if (dict[areaw] == null) dict[areaw] = {};
        const area = dict[areaw];
        if (area[listw] == null) area[listw] = [];
        mapper(area[listw], area);

        return generalDict;
    };

    const ret = {
        sendingComments,
        errorSentComments,
        sendAllComments: (observableComments: SendingComments, observableGames: GamesStoreExportable) => {
            let throwComments: SendingComments = ret.sendingComments;

            const tss = observableGames.teamGames?.map(({ teams }) => teams.map(({ comments }) => comments?.map(comment => comment.owner === login ? comment.ts : 0)))
                .flat().flat()
                .filter(ts => ts) as number[] || [];

            const execs = MyLib.entries(observableComments)
                .map(([arean, val]) => MyLib.entries(val).map(([areaw, val]) => MyLib.entries(val).map(([listw, realComments]) => {
                    realComments.forEach(() => {
                        throwComments = save(arean, areaw, listw, (comments, area) => {
                            area[listw] = comments.filter(({ ts }) => tss.indexOf(ts) < 0);
                        }, throwComments)
                    });
                    return realComments;
                })))
                .flat().flat().flat()
                .filter(comment => tss.indexOf(comment?.ts) < 0)
                .map(({ exec }) => exec);

            liderExer.send(execs, null, () => {
                const tss = execs.map(({ args }) => args?.ts) as number[];
                dispatch(updateRrrorSentComments([...errorSentComments, ...tss]));
            }, null, true);
            ret.saveLocal(throwComments, true);
        },
        saveLocal: (comments: SendingComments, isRejectPropagation?: boolean) => liderStorage.set('sendingComments', comments, isRejectPropagation),
        sendComment: (arean: SendingCommentsAreaName, areaw: number, listw: number, comment: SendingComment) => {
            const commentsDict = save(arean, areaw, listw, (comments) => comments.push(comment));
            dispatch(updateSendingComments(commentsDict));
            ret.saveLocal(commentsDict);
        },
        rejectSending: (arean: SendingCommentsAreaName, areaw: number, listw: number, commentTs: number) => {
            const throwComments = save(arean, areaw, listw, (comments, area) => area[listw] = comments.filter(({ ts }) => commentTs !== ts));
            dispatch(updateSendingComments(throwComments));
            ret.saveLocal(throwComments, true);
        },
    };
    return ret;
}