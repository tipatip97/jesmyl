import { ReactNode, useState } from 'react';
import EvaIcon, { EvaIconName } from '../eva-icon/EvaIcon';

interface Props {
  children: ReactNode;
  title: ReactNode;
  icon?: EvaIconName;
}

export const ExpandableContent = ({ children, title, icon }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <span
        className="flex flex-gap flex-max pointer"
        onClick={() => setIsExpand(!isExpand)}
      >
        {icon && <EvaIcon name={icon} />}
        {title}
        <EvaIcon name={isExpand ? 'chevron-up' : 'chevron-down'} />
      </span>
      {isExpand && children}
    </>
  );
};
