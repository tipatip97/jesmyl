import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { BottomPopupItem } from '../../../../../../complect/absolute-popup/bottom-popup/BottomPopupItem';
import { contextCreator } from '../../../../../../complect/contextCreator';

export const [IsComToolIconItemsContext, useIsComToolIconItemsContext] = contextCreator(false);
export const [ComToolItemAttrsContext, useComToolItemAttrsContext] = contextCreator<
  HTMLAttributes<HTMLDivElement> | und
>(undefined);

export const ComTool = ({ path, ...props }: Parameters<typeof BottomPopupItem>[0]) => {
  const itemNode = useIsComToolIconItemsContext() ? (
    <props.Icon
      className="pointer"
      onClick={props.onClick}
    />
  ) : (
    <Bottom {...props} />
  );

  return path ? <Link to={path}>{itemNode}</Link> : itemNode;
};

const Bottom = (props: Parameters<typeof BottomPopupItem>[0]) => {
  return (
    <BottomPopupItem
      {...useComToolItemAttrsContext()}
      {...props}
    />
  );
};
