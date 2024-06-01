import { ReactNode, useState } from 'react';
import { IconArrowDown01StrokeRounded } from '../../complect/the-icon/icons/arrow-down-01';
import { IconArrowUp01StrokeRounded } from '../../complect/the-icon/icons/arrow-up-01';
import mylib from '../my-lib/MyLib';
import { TheIconType } from '../the-icon/model';

interface Props {
  children: ReactNode | ((isExpand: boolean) => ReactNode);
  title: ReactNode | ((isExpand: boolean) => ReactNode);
  postfix?: ReactNode | ((isExpand: boolean) => ReactNode);
  Icon?: TheIconType;
}

export const ExpandableContent = ({ children, title, Icon, postfix }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div className="flex full-width between">
        <span
          className="flex flex-gap flex-max pointer"
          onClick={() => setIsExpand(!isExpand)}
        >
          {Icon && <Icon />}
          {mylib.isFunc(title) ? title(isExpand) : title}
          {isExpand ? <IconArrowUp01StrokeRounded /> : <IconArrowDown01StrokeRounded />}
        </span>
        {mylib.isFunc(postfix) ? postfix(isExpand) : postfix}
      </div>
      {isExpand && (mylib.isFunc(children) ? children(isExpand) : children)}
    </>
  );
};
