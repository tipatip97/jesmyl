import { ReactNode } from "react";
import { CmAction } from "../Cm.model";


export interface CmEditorStoraged {
    execs?: Exec[];
}

export type ExecVision = CmAction & Partial<Exec>;
export interface Exec {
    action: string;
    args: Record<string, any>;
    author: string;
    status: 'resolved' | 'rejected';
    ts: number;
    prevNode: ReactNode;
    valueNode: ReactNode;
    specials: ReactNode;
}