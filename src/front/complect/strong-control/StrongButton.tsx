import { ReactNode } from 'react';
import useToast from '../modal/useToast';
import SendButton from '../sends/send-button/SendButton';
import { StrongControlProps } from './Strong.model';
import { strongPrepareArgsAndSend, useStrongExerContext } from './useStrongControl';

const simpleFunc = () => {};

export default function StrongButton(
  props: StrongControlProps & {
    title: string;
    confirm?: ReactNode;
    className?: string;
    onSuccess?: () => void;
    disabled?: boolean;
  },
) {
  const exer = useStrongExerContext();
  const [modalNode, toast] = useToast();

  return (
    <>
      {modalNode}
      <SendButton
        title={props.title}
        disabled={props.disabled}
        confirm={props.confirm}
        onSuccess={props.onSuccess}
        onFailure={errorMessage => toast(errorMessage, { mood: 'ko' })}
        className={props.className}
        onSend={() => {
          return strongPrepareArgsAndSend(
            exer,
            props.scope,
            props.fieldName,
            props.cud ?? 'C',
            undefined,
            simpleFunc,
            props.mapExecArgs,
            props.fieldKey,
            props.fieldValue,
          );
        }}
      />
    </>
  );
}
