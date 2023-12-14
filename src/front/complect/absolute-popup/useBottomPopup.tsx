import { AreaHTMLAttributes, ReactNode, useCallback, useState } from "react";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import mylib from "../my-lib/MyLib";
import "./AbsolutePopup.scss";
import { BottomPopup } from "./BottomPopup";


export type AbsoluteBottomPopupItem = {
  className?: string,
  icon: EvaIconName,
  titleNode?: ReactNode,
  title?: string,
  rightNode?: ReactNode,
  isError?: boolean,
  iconWrapperClassName?: string,
  anchorNode?: ReactNode,
} & AreaHTMLAttributes<HTMLDivElement>;

export type BottomPopupSkeletIcon = AbsoluteBottomPopupItem | nil | false | BottomPopupSkeletIcon[];

export interface BottomPopupContentProps {
  items: BottomPopupSkeletIcon[],
  footer?: ReactNode,
}

const prepare = ({ items, footer }: BottomPopupContentProps) => {
  return <div className="abs-item flex column">
    {items.map((item, itemi) => {
      if (!item) return null;
      const map = (item: BottomPopupSkeletIcon, itemi: number): ReactNode => {
        if (!item) return null;
        if (mylib.isArr(item)) return item.map((item, itemi) => map(item, itemi));
        const { className, icon, titleNode, title, iconWrapperClassName, rightNode, isError, anchorNode, ...other } = item;

        return <div key={itemi} {...other} className={`abs-item ${className || ''}`}>
          {anchorNode}
          <div className="flex flex-gap">
            <div className={`icon-box ${iconWrapperClassName || ''}`}>
              <EvaIcon name={icon} className="abs-icon" />
            </div>
            <div className="title">{titleNode ?? title}</div>
          </div>
          {rightNode && <div className="abs-action flex around pointer">{rightNode}</div>}
        </div>;
      };

      return map(item, itemi);
    })}
    {footer}
  </div>;
};

export const bottomPopupContentPreparer = prepare;

export type BottomPopupContenterPreparer = (props: BottomPopupContentProps) => JSX.Element;
export type BottomPopupContenter<Props = {}>
  = (
    close: () => void,
    prepare: BottomPopupContenterPreparer,
    props: Props,
  ) => [ReactNode/* permanent rendered node */, ReactNode/* popup content node */, ReactNode?/* permanent after open popup node */] | JSX.Element | nil;

type OpenCallback = () => void;
type OpenWithPropsCallback<Props> = (props: Props) => void;

export function useBottomPopup<Props>(contenter: BottomPopupContenter<Props>, topProps: Props = {} as never): [ReactNode, OpenCallback, OpenWithPropsCallback<Props>] {
  const [props, setProps] = useState<Props | und>();
  const [isOpen, setIsOpen] = useState(false);
  const [isWasOpen, setIsWasOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const contentScalar = contenter(close, prepare, props === undefined ? topProps! : props);

  let throwContent = null;
  let content = null;
  let afterOpenNode = null;

  if (mylib.isArr(contentScalar)) {
    [throwContent, content, afterOpenNode] = contentScalar;
  } else content = contentScalar;

  return [
    <>
      {throwContent}
      {isWasOpen && afterOpenNode}
      {isOpen && <BottomPopup content={content} close={close} />}
    </>,
    () => {
      setIsOpen(true);
      setIsWasOpen(true);
    },
    (props) => {
      setProps(props);
      setIsOpen(true);
      setIsWasOpen(true);
    },
  ];
}
