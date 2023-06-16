import { ExecutionMethod, ExecutionSidesDict, ExecutionTrack } from "./complect/executer/Executer.model";
import { actionBoxSetSystems } from "./values";

export interface ActionBox extends Partial<Record<`/${string}`, ActionBox>>, Partial<Record<`<${string}>`, ActionBox>> {
    level?: number,
    scopeNode?: string,
    shortTitle?: string,
    title?: string,
    access?: string,
    uniqs?: string[],
    fixAccesses?: Record<string, ExecutionTrack>,
    side?: ExecutionSidesDict,
    expected?: [] | {},
    setInEachValueItem?: Record<string, Record<string, unknown>>,
    isSequre?: boolean,
    setSystems?: ActionBoxSetSystems[],
    RRej?: number,
    C?: ActionCRUD,
    U?: ActionCRUD,
    D?: ActionCRUD,

    action?: string,
    method?: ExecutionMethod,
    value?: any,
    args?: Record<string, string | any[]>,
};

export interface ActionCRUD {
    method?: ExecutionMethod,
    value?: any,
    args?: Record<string, string | any[]>,
    setSystems?: ActionBoxSetSystems[],
    RRej?: boolean | number,
}

export type ActionBoxSetSystems = keyof typeof actionBoxSetSystems;
