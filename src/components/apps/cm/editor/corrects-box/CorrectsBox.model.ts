
export interface ICorrectsBoxes {
    errors: ICorrectsBox[] | null;
    warnings: ICorrectsBox[] | null;
    unknowns: ICorrectsBox[] | null;
}

export interface ICorrectsBox {
    code?: number;
    message: string;
    word?: string;
    letter?: string;
    pos?: number;
    alt?: string;
    onFix?: () => void;
    fixLabel?: string;
}


