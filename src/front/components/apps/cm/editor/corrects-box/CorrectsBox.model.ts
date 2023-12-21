export interface ICorrectsBoxes {
  errors: ICorrect[] | null;
  warnings: ICorrect[] | null;
  unknowns: ICorrect[] | null;
}

export interface ICorrect {
  code?: number;
  message: string;
  onFix?: () => void;
  fixLabel?: string;
  uniq?: string;
}
