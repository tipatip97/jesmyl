
export interface AbsolutePopupConfig {
  mode: AbsolutePopupMode;
  x?: number;
  y?: number;
}

export type AbsolutePopupMode = null | "float" | "bottom";
