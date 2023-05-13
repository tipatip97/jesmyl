import { ExecutionMethod, ExecutionSidesDict, ExecutionTrack } from "./complect/executer/Executer.model";

export interface ActionBox extends Partial<Record<`/${string}`, ActionBox>>, Partial<Record<`<${string}>`, ActionBox>> {
    level?: number,
    action?: string,
    shortTitle?: string,
    title?: string,
    access?: string,
    method?: ExecutionMethod,
    uniqs?: string[],
    value?: any,
    args?: Record<string, string | any[]>
    fixAccesses?: Record<string, ExecutionTrack>,
    side?: ExecutionSidesDict,
    expected?: [] | {},
    setInEachValueItem?: Record<string, Record<string, unknown>>,
    isSequre?: boolean,
};
