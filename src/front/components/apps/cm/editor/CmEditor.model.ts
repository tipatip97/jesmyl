import { ReactNode } from "react";
import { CmAction } from "../Cm.model";


export interface CmEditorStoraged {
    execs?: Exec[],
    mp3Rules?: Mp3Rule[],
}

export interface Mp3Rule {
    w: number,
    url: string,
    attr: string,
    query: string,
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