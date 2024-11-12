import { ReactNode, useState } from 'react';
import { isNIs } from 'shared/utils';
import { IconArrowDown01StrokeRounded } from '../../complect/the-icon/icons/arrow-down-01';
import { IconArrowUp01StrokeRounded } from '../../complect/the-icon/icons/arrow-up-01';

export default function useIsExpand(
  initIsExpand: boolean,
  prefix?: ReactNode,
  postfix?: ReactNode | ((isExpand: boolean) => ReactNode),
): [ReactNode, boolean, (isExpand?: boolean) => void] {
  const [isExpand, setIsExpand] = useState(initIsExpand);
  return [
    <span className="flex flex-gap full-width between">
      <span
        className="flex flex-gap flex-max pointer"
        onClick={() => setIsExpand(!isExpand)}
      >
        {prefix}
        {isExpand ? <IconArrowUp01StrokeRounded /> : <IconArrowDown01StrokeRounded />}
      </span>
      {typeof postfix === 'function' ? postfix(isExpand) : postfix}
    </span>,
    isExpand,
    isExpand => setIsExpand(isExpand ?? isNIs),
  ];
}
