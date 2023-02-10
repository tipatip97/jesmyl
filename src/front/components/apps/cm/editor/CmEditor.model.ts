import { ReactNode } from "react";
import { CmMp3Rule } from "../../../../../back/apps/cm/CmBackend.model";
import { CmAction } from "../Cm.model";


export interface CmEditorStoraged {
    execs?: Exec[],
    mp3Rules?: CmMp3Rule[],
}

export type ExecVision = CmAction & Partial<Exec> & Partial<ExecVisionVisual>;

export interface Exec {
    action: string,
    args: Record<string, any>,
    author: string,
    status: 'resolved' | 'rejected',
    ts: number,
}

export interface ExecVisionVisual {
    prevNode: ReactNode,
    valueNode: ReactNode,
    specials: ReactNode,
}