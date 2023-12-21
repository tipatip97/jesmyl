import { ReactNode, useCallback, useState } from 'react';
import mylib from '../../my-lib/MyLib';
import '../AbsolutePopup.scss';
import { BottomPopup } from './BottomPopup';
import { bottomPopupContentPreparer } from './item-preparer';
import { BottomPopupContenter } from './model';

type OpenCallback = () => void;
type OpenWithPropsCallback<Props> = (props: Props) => void;

export function useBottomPopup<Props>(
  contenter: BottomPopupContenter<Props>,
  topProps: Props = {} as never,
): [ReactNode, OpenCallback, OpenWithPropsCallback<Props>] {
  const [props, setProps] = useState<Props | und>();
  const [isOpen, setIsOpen] = useState(false);
  const [isWasOpen, setIsWasOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const contentScalar = contenter(close, bottomPopupContentPreparer, props === undefined ? topProps! : props);

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
