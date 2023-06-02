import { cmOwnAppAtts } from "../apps/cm/external/cmExternalAttach";
import { leaderOwnAppAtts } from "../apps/leader/external-attach-board/leaderExternalGameResultsAttBoard";

export const leaderAppAtts = {
    ...leaderOwnAppAtts,
    ...cmOwnAppAtts,
};
