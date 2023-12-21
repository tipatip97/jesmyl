import { useConfirm } from '../../modal/useConfirm';
import { SendButtonContentMakerBody } from './maker-body';
import { SendButtonContentMakerProps } from './maker.model';

export const SendButtonContentMakerWithConfirm = <Value,>(props: SendButtonContentMakerProps<Value>) => {
  const [confirmNode, confirm] = useConfirm(() => {
    props.onSend?.();
  }, props.confirm);

  return (
    <>
      {confirmNode}
      <SendButtonContentMakerBody<Value>
        {...props}
        onClick={() => confirm(props.confirm)}
      />
    </>
  );
};
