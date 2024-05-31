import { ReactNode } from 'react';
import mylib from '../../my-lib/MyLib';
import { BottomPopupContentProps, BottomPopupSkeletIcon } from './model';

export const bottomPopupContentPreparer = ({ items, footer }: BottomPopupContentProps) => {
  return (
    <div className="abs-item flex column">
      {items.map((item, itemi) => {
        if (!item) return null;
        const map = (item: BottomPopupSkeletIcon, itemi: number): ReactNode => {
          if (!item) return null;
          if (mylib.isArr(item)) return item.map((item, itemi) => map(item, itemi));
          const { className, Icon, titleNode, title, iconWrapperClassName, rightNode, isError, anchorNode, ...other } =
            item;

          return (
            <div
              key={itemi}
              {...other}
              className={`abs-item ${className || ''}`}
            >
              {anchorNode}
              <div className="flex flex-gap">
                <div className={`icon-box ${iconWrapperClassName || ''}`}>
                  <Icon className="abs-icon" />
                </div>
                <div className="title">{titleNode ?? title}</div>
              </div>
              {rightNode && <div className="abs-action flex around pointer">{rightNode}</div>}
            </div>
          );
        };

        return map(item, itemi);
      })}
      {footer}
    </div>
  );
};
