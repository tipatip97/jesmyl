import { cmOwnAppAtts } from "../apps/cm/external/cmExternalAttach";
import { leaderOwnAppAtts } from "../apps/leader/external-attachments/leaderScheduleAttachments";

export const leaderAppAtts = {
    ...leaderOwnAppAtts,
    ...cmOwnAppAtts,
};
