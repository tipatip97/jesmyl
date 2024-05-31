import { ReactNode } from 'react';
import { IconArrowDown01StrokeRounded } from '@icons/arrow-down-01';
import { IconArrowUp01StrokeRounded } from '@icons/arrow-up-01';

export default function IconExpand({
  isExpand,
  set,
  prefix,
}: {
  prefix?: ReactNode;
  isExpand: boolean;
  set: (val: boolean) => void;
}) {
  const Icon = isExpand ? IconArrowUp01StrokeRounded : IconArrowDown01StrokeRounded;

  return prefix != null ? (
    <div
      className="flex flex-gap pointer"
      onClick={() => set(!isExpand)}
    >
      {prefix}
      <Icon />
    </div>
  ) : (
    <Icon onClick={() => set(!isExpand)} />
  );
}
