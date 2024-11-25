import { SokiServerEvent } from 'shared/api';
import useToast from '../modal/useToast';
import EvaSendButton from '../sends/eva-send-button/EvaSendButton';
import { EvaSendButtonProps } from '../sends/eva-send-button/EvaSendButton.model';
import { StrongControlProps } from './Strong.model';
import { strongPrepareArgsAndSend, useStrongExerContext } from './useStrongControl';

const simpleFunc = () => {};

export default function StrongEvaButton({
  scope,
  fieldName,
  fieldValue,
  fieldKey,
  cud,
  mapExecArgs,
  ...props
}: StrongControlProps<EvaSendButtonProps<SokiServerEvent | null>> & {
  fieldValue?: unknown;
  fieldKey?: unknown;
}) {
  const exer = useStrongExerContext();
  const [modalNode, toast] = useToast();

  return (
    <>
      {modalNode}
      <EvaSendButton<SokiServerEvent | null>
        {...props}
        onFailure={errorMessage => toast(errorMessage, { mood: 'ko' })}
        onSend={
          props.isCanSend !== false
            ? () => {
                return strongPrepareArgsAndSend(
                  exer,
                  scope,
                  fieldName,
                  cud ?? 'C',
                  undefined,
                  simpleFunc,
                  mapExecArgs,
                  fieldKey,
                  fieldValue,
                );
              }
            : undefined
        }
      />
    </>
  );
}
