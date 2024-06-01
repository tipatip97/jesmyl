import useToast from '../../modal/useToast';
import IconButton from '../../the-icon/IconButton';
import { IconLoading03SolidRounded } from '../../../complect/the-icon/icons/loading-03';
import { SendButtonContentMaker } from '../send-button-content-maker/maker';
import { EvaSendButtonProps } from './EvaSendButton.model';

export default function EvaSendButton<Value>(props: EvaSendButtonProps<Value>) {
  const [toastNode, toast] = useToast();

  return (
    <SendButtonContentMaker
      {...props}
      anchorNodes={<>{toastNode}</>}
      onFailure={error => {
        props.onFailure?.(error);
        toast(error, { mood: 'ko' });
      }}
      content={(onClick, error, isLoading) => {
        const sysClassName = (props.disabled ? ' disabled ' : ' pointer ') + (error ? ' color--ko ' : '');

        return props.prefix === undefined && props.postfix === undefined ? (
          <IconButton
            Icon={isLoading ? IconLoading03SolidRounded : props.Icon}
            className={sysClassName + (isLoading ? ' rotate ' : '') + (props.className || '')}
            onClick={onClick}
          />
        ) : (
          <span
            className={'flex flex-gap ' + (sysClassName || 'flex-max ') + (props.className || '')}
            onClick={onClick}
          >
            {props.prefix}
            <IconButton
              Icon={isLoading ? IconLoading03SolidRounded : props.Icon}
              className={sysClassName + (isLoading ? ' rotate ' : '')}
            />
            {props.postfix}
          </span>
        );
      }}
    />
  );
}
