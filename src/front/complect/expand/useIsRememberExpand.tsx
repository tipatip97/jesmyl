import { ReactNode, useCallback, useState } from 'react';
import { complectStorage } from '../Complect.store';
import { IconArrowDown01StrokeRounded } from '@icons/arrow-down-01';
import { IconArrowUp01StrokeRounded } from '@icons/arrow-up-01';

const isNIs = (is: boolean) => !is;
let expandes: string[] = [];
(async () => (expandes = await complectStorage.getOr('rememberExpandes', [])))();
const clear = (scope: string) => {
  const scopeIndex = expandes.indexOf(scope);
  expandes.splice(scopeIndex, 1);
  complectStorage.set('rememberExpandes', expandes);
};

export const useIsRememberExpand = (
  scope: string,
  prefix?: ReactNode,
  postfix?: ReactNode | ((isExpand: boolean) => ReactNode),
  isSelfExpandOnly?: boolean,
): [ReactNode, boolean, (isExpand?: boolean) => void] => {
  const [isExpand, setIsExpand] = useState(isSelfExpandOnly ? false : expandes.includes(scope));

  if (isSelfExpandOnly && expandes.includes(scope)) clear(scope);
  const switchExpand: (isExpand?: boolean) => void = useCallback(
    isExpand => {
      if (isSelfExpandOnly) setIsExpand(isExpand ?? isNIs);

      if (expandes.includes(scope)) {
        if (isExpand === undefined || isExpand === false) {
          clear(scope);
          if (!isSelfExpandOnly) setIsExpand(isNIs);
        }
      } else if (!isSelfExpandOnly) {
        if (isExpand === undefined || isExpand === true) {
          expandes.push(scope);
          setIsExpand(isNIs);
          complectStorage.set('rememberExpandes', expandes);
        }
      }
    },
    [isSelfExpandOnly, scope],
  );

  return [
    <span className="flex flex-gap between margin-gap-v">
      <span
        className="flex flex-gap flex-max pointer"
        onClick={() => switchExpand()}
      >
        {prefix}
        {isExpand ? <IconArrowUp01StrokeRounded /> : <IconArrowDown01StrokeRounded />}
      </span>
      {typeof postfix === 'function' ? postfix(isExpand) : postfix}
    </span>,
    isExpand,
    switchExpand,
  ];
};
