export interface ResizerProps {
  baseSize: number;
  min: number;
  max: number;
  step: number;
  perVal: number;
  value: number;
  view: "value" | "percents";
  onChange: (px: number, percents: number) => void;
  onRange: (px: number, percents: number) => void;
  onClick: (px: number, percents: number) => void;
  icon: string;
};