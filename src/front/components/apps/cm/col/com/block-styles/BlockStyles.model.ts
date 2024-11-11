export interface IExportableStyleProp {
  key: string;
  title: string[];
  isInherit?: boolean;
  group?: number;
  tags?: string[];
  isModulation?: boolean;
  forChordedBlock?: number;
  isHeaderNoneForce?: boolean;
}

export interface IExportableSetts {
  styles: IExportableStyleProp[];
}
