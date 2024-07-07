import { ReactNode, useEffect, useState } from 'react';
import { SokiServerEvent } from '../../../models';
import KeyboardInput from '../../keyboard/KeyboardInput';
import useToast from '../../modal/useToast';
import { TheIconLoading } from '../../the-icon/IconLoading';
import { IconAlert01StrokeRounded } from '../../../complect/the-icon/icons/alert-01';
import { IconCloudUploadStrokeRounded } from '../../../complect/the-icon/icons/cloud-upload';
import { IconLinkBackwardStrokeRounded } from '../../../complect/the-icon/icons/link-backward';
import { TheIconType } from '../../the-icon/model';
import useIsRedactArea from '../../useIsRedactArea';
import { StrongControlProps } from '../Strong.model';
import { strongPrepareArgsAndSend, useStrongExerContext } from '../useStrongControl';
import StrongEditableFieldMultiline from './StrongEditableFieldMultiline';
import { onStrongFieldBlur, onStrongFieldDragStart, onStrongFieldFocus } from './clipboard/Picker';

const onFocus = onStrongFieldFocus;
const onBlur = onStrongFieldBlur;
const onDragStart = onStrongFieldDragStart;

type Props<Key, Value> = StrongControlProps<{
  fieldKey?: Key;
  value?: Value;
  title?: string;
  description?: ReactNode;
  disabled?: boolean;
  type?: 'text' | 'number';
  Icon?: TheIconType;
  placeholder?: string;
  isRedact?: boolean;
  setSelfRedact?: boolean;
  isImpossibleEmptyValue?: boolean;
  postfix?: ReactNode;
  multiline?: boolean;
  textClassName?: string;
  className?: string;
  onChange?: (value: string) => void | Promise<boolean>;
  onUpdate?: (value: string) => void | Promise<boolean>;
  onSend?: (value: string) => void | Promise<SokiServerEvent | null>;
  onSelfRedactChange?: (is: boolean) => void;
}>;

export default function StrongEditableField<Key extends string, Value extends string | Partial<Record<Key, string>>>(
  props: Props<Key, Value>,
) {
  const value = typeof props.value === 'string' ? props.value : props.value?.[props.fieldKey as never] ?? '';
  const [stateValue, setStateValue] = useState(value);
  const [isUserChange, setIsUserChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalNode, toast] = useToast();
  const { editIcon, isSelfRedact } = useIsRedactArea(true, null, true, true, props.onSelfRedactChange);
  const isRedact = props.setSelfRedact ? isSelfRedact : props.isRedact;

  const exer = useStrongExerContext();

  const sendValue = () => {
    const isSendResuls =
      stateValue !== undefined &&
      (props.isImpossibleEmptyValue !== true || stateValue.trim()) &&
      stateValue.trim() !== value?.trim();

    if (props.onUpdate !== undefined) {
      props.onUpdate(stateValue.trim());
      return;
    }

    if (isSendResuls) {
      const onSendResult = props.onSend?.(stateValue.trim());

      if (onSendResult) {
        setIsLoading(true);
        setIsError(false);

        onSendResult
          ?.then(isOk => {
            if (isOk) {
              setIsLoading(false);
              setIsUserChange(false);
            } else setIsError(true);
          })
          .catch(errorMessage => {
            toast(errorMessage, { mood: 'ko' });
            setIsError(true);
          });
      } else {
        strongPrepareArgsAndSend(
          exer,
          props.scope,
          props.fieldName,
          props.cud ?? 'U',
          (props.type === 'number' ? +stateValue.trim() : stateValue.trim()) as never,
          () => {
            setIsLoading(true);
            setIsError(false);
          },
          props.mapExecArgs,
          props.fieldKey,
          props.fieldValue,
        )
          ?.then(isOk => {
            if (isOk) {
              setIsLoading(false);
              setIsUserChange(false);
            } else setIsError(true);
          })
          .catch(errorMessage => {
            toast(errorMessage, { mood: 'ko' });
            setIsError(true);
          });
      }
    } else setStateValue(value);
  };

  useEffect(() => {
    if (!isUserChange) setStateValue(value);
  }, [isUserChange, value]);

  const indicatorNode = isError ? (
    <IconAlert01StrokeRounded className="error-message" />
  ) : (
    <TheIconLoading isLoading={isLoading}>
      {stateValue !== value ? (
        <IconLinkBackwardStrokeRounded
          className="pointer"
          onPointerDown={() => setStateValue(value)}
        />
      ) : (
        <IconCloudUploadStrokeRounded className="fade-05" />
      )}
    </TheIconLoading>
  );

  return (
    <div
      className={props.className || 'margin-gap-v'}
      attr-id={props.scope + props.fieldName + (props.fieldKey === undefined ? '' : props.fieldKey)}
      attr-text={stateValue}
    >
      {modalNode}
      {isRedact ? (
        <>
          {(props.title || props.setSelfRedact) && (
            <div className="flex flex-gap">
              {props.Icon && <props.Icon />}
              {props.title}
              {props.setSelfRedact && editIcon}
              {indicatorNode}
            </div>
          )}
          <div className="flex flex-gap">
            {props.description}
            <KeyboardInput
              value={stateValue}
              placeholder={props.placeholder}
              multiline={props.multiline}
              type={props.type}
              disabled={props.disabled}
              onChange={val => {
                setStateValue(val);
                setIsUserChange(true);
                props.onChange?.(val);
              }}
              onFocus={onFocus}
              onBlur={() => {
                onBlur();
                sendValue();
              }}
              onKeyUp={event => {
                if (event.key === 'Escape') setIsUserChange(false);

                if (event.key === 'Enter' && (!props.multiline || event.ctrlKey)) sendValue();
              }}
            />
            {props.title || props.setSelfRedact ? null : indicatorNode}
          </div>
        </>
      ) : (
        <div
          draggable={!!value}
          className="flex flex-gap"
          onDragStart={onDragStart as never}
        >
          {props.title} - {props.Icon && <props.Icon className="color--7 self-start" />}
          {value ? (
            props.multiline ? (
              <StrongEditableFieldMultiline value={value} />
            ) : (
              <div className={'break-word ' + (props.textClassName || 'color--7 ')}>
                {value}
                {props.postfix || ''}
              </div>
            )
          ) : (
            'Без значения'
          )}
          {props.isRedact && props.setSelfRedact && editIcon}
        </div>
      )}
    </div>
  );
}
