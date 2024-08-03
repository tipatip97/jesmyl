import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { BottomPopupItem } from '../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { contextCreator } from '../../../../../../complect/contextCreator';

export const [IsComToolIconItemsContext, useIsComToolIconItemsContext] = contextCreator(false);
export const [ComToolItemAttrsContext, useComToolItemAttrsContext] = contextCreator<
  HTMLAttributes<HTMLDivElement> | und
>(undefined);

export const ComTool = ({ Icon, ...props }: Parameters<typeof BottomPopupItem>[0]) => {
  if (useIsComToolIconItemsContext())
    return props.path ? (
      <Link to={props.path}>
        <Icon className="pointer" />
      </Link>
    ) : (
      <Icon
        className="pointer"
        onClick={props.onClick}
      />
    );

  return (
    <Bottom
      {...props}
      Icon={Icon}
    />
  );
};

const Bottom = (props: Parameters<typeof BottomPopupItem>[0]) => {
  return (
    <BottomPopupItem
      {...useComToolItemAttrsContext()}
      {...props}
    />
  );
};
