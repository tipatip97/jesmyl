import { useConfirm } from '../../modal/confirm/useConfirm';
import { SendButtonContentMakerBody } from './maker-body';
import { SendButtonContentMakerProps } from './maker.model';

export const SendButtonContentMakerWithConfirm = <Value,>(props: SendButtonContentMakerProps<Value>) => {
  const [confirmNode, confirm] = useConfirm();

  return (
    <>
      {confirmNode}
      <SendButtonContentMakerBody<Value>
        {...props}
        onClick={async () => props.onSend && (await confirm(props.confirm)) && props.onSend()}
      />
    </>
  );
};
