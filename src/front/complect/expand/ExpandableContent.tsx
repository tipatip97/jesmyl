import { ReactNode, useState } from 'react';
import EvaIcon, { EvaIconName } from '../eva-icon/EvaIcon';
import mylib from '../my-lib/MyLib';

interface Props {
  children: ReactNode | ((isExpand: boolean) => ReactNode);
  title: ReactNode | ((isExpand: boolean) => ReactNode);
  postfix?: ReactNode | ((isExpand: boolean) => ReactNode);
  icon?: EvaIconName;
}

export const ExpandableContent = ({ children, title, icon, postfix }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div className="flex full-width between">
        <span
          className="flex flex-gap flex-max pointer"
          onClick={() => setIsExpand(!isExpand)}
        >
          {icon && <EvaIcon name={icon} />}
          {mylib.isFunc(title) ? title(isExpand) : title}
          <EvaIcon name={isExpand ? 'chevron-up' : 'chevron-down'} />
        </span>
        {mylib.isFunc(postfix) ? postfix(isExpand) : postfix}
      </div>
      {isExpand && (mylib.isFunc(children) ? children(isExpand) : children)}
    </>
  );
};
