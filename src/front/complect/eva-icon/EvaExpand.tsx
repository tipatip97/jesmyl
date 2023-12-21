import { ReactNode } from 'react';
import EvaIcon from './EvaIcon';

export default function EvaExpand({
  isExpand,
  set,
  prefix,
}: {
  prefix?: ReactNode;
  isExpand: boolean;
  set: (val: boolean) => void;
}) {
  return prefix != null ? (
    <div
      className="flex flex-gap pointer"
      onClick={() => set(!isExpand)}
    >
      {prefix}
      <EvaIcon name={isExpand ? 'chevron-up' : 'chevron-down'} />
    </div>
  ) : (
    <EvaIcon
      name={isExpand ? 'chevron-up' : 'chevron-down'}
      onClick={() => set(!isExpand)}
    />
  );
}
