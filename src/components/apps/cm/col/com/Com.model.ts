

export interface ICom {
    name: string;
    wid: number;
    audio: string;
    nameCorrects: (name: string) => string;
    texts: string[];
}


export interface IExportableCom {
    w: number;
    n?: string;
    t?: string[];
    c?: string[];
}



