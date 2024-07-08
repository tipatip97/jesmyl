import { FunctionComponent, HTMLAttributes, ReactNode, useState } from 'react';
import { IconArrowDown01StrokeRounded } from '../../complect/the-icon/icons/arrow-down-01';
import { IconArrowUp01StrokeRounded } from '../../complect/the-icon/icons/arrow-up-01';
import mylib from '../my-lib/MyLib';
import { TheIconType } from '../the-icon/model';

interface Props<Element extends HTMLElement> {
  children: ReactNode | ((isExpand: boolean) => ReactNode);
  title: ReactNode | ((isExpand: boolean) => ReactNode);
  postfix?: ReactNode | ((isExpand: boolean) => ReactNode);
  Icon?: TheIconType;
  HeaderNode?: FunctionComponent<HTMLAttributes<Element>>;
}

export const ExpandableContent = <Element extends HTMLElement>({
  children,
  title,
  Icon,
  postfix,
  HeaderNode,
}: Props<Element>) => {
  const [isExpand, setIsExpand] = useState(false);
  const header = (
    <>
      <span
        className="flex flex-gap flex-max pointer text-bold"
        onClick={() => setIsExpand(!isExpand)}
      >
        {Icon && <Icon />}
        {mylib.isFunc(title) ? title(isExpand) : title}
        {isExpand ? <IconArrowUp01StrokeRounded /> : <IconArrowDown01StrokeRounded />}
      </span>
      {mylib.isFunc(postfix) ? postfix(isExpand) : postfix}
    </>
  );
  const className = 'flex full-width between';

  return (
    <>
      {HeaderNode ? <HeaderNode className={className}>{header}</HeaderNode> : <div className={className}>{header}</div>}
      {isExpand && (mylib.isFunc(children) ? children(isExpand) : children)}
    </>
  );
};
