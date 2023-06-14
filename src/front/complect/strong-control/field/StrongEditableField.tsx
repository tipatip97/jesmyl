import { ReactNode, useEffect, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon, { EvaIconName } from "../../eva-icon/EvaIcon";
import KeyboardInput from "../../keyboard/KeyboardInput";
import useModal from "../../modal/useModal";
import { StrongControlProps } from "../Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "../useStrongControl";
import StrongEditableFieldMultiline from "./StrongEditableFieldMultiline";
import useIsRedactArea from "../../useIsRedactArea";

export default function StrongEditableField(props: StrongControlProps<{
    value?: string,
    title?: string,
    description?: ReactNode,
    type?: 'text' | 'number',
    icon?: EvaIconName,
    placeholder?: string,
    isRedact?: boolean,
    setSelfRedact?: boolean,
    isImpossibleEmptyValue?: boolean,
    postfix?: ReactNode,
    multiline?: boolean,
    textClassName?: string,
    className?: string,
    onChange?: (value: string) => void | Promise<boolean>,
    onSend?: (value: string) => void | Promise<boolean>,
}>) {
    const [stateValue, setStateValue] = useState(props.value);
    const [isUserChange, setIsUserChange] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { modalNode, toast } = useModal();
    const { editIcon, isSelfRedact } = useIsRedactArea(true, null, true, true);

    const exer = useStrongExerContext();

    const sendValue = () => {
        const isSendResuls = stateValue !== undefined
            && (props.isImpossibleEmptyValue !== true || stateValue.trim())
            && stateValue.trim() !== props.value?.trim();

        if (isSendResuls) {
            const onSendResult = props.onSend?.(stateValue.trim());

            if (onSendResult) {
                setIsLoading(true);
                setIsError(false);

                onSendResult?.then((isOk) => {
                    if (isOk) {
                        setIsLoading(false);
                        setIsUserChange(false);
                    } else setIsError(true);
                })
                    .catch((errorMessage) => {
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
                    props.mapExecArgs
                )
                    ?.then((isOk) => {
                        if (isOk) {
                            setIsLoading(false);
                            setIsUserChange(false);
                        } else setIsError(true);
                    })
                    .catch((errorMessage) => {
                        toast(errorMessage, { mood: 'ko' });
                        setIsError(true);
                    });
            }
        } else setStateValue(props.value);
    };

    useEffect(() => {
        if (!isUserChange) setStateValue(props.value);
    }, [isUserChange, props.value]);

    const indicatorNode = isError
        ? <EvaIcon name="alert-triangle-outline" className="error-message" />
        : isLoading
            ? <EvaIcon name="loader-outline" className="rotate" />
            : props.value && stateValue !== props.value
                ? <EvaButton
                    name="undo-outline"
                    className="pointer"
                    onMouseDown={() => setStateValue(props.value)}
                />
                : <EvaIcon name="cloud-upload-outline" className="fade-05" />;


    return <div className={props.className || 'margin-gap-v'}>
        {modalNode}
        {(props.isRedact && (!props.setSelfRedact || isSelfRedact))
            ? <>
                {(props.title || props.setSelfRedact) && <div className="flex flex-gap">
                    {props.icon && <EvaIcon name={props.icon} />}
                    {props.title}
                    {props.isRedact && props.setSelfRedact && editIcon}
                    {indicatorNode}
                </div>}
                <div className="flex flex-gap">
                    {props.description}
                    <KeyboardInput
                        value={stateValue}
                        placeholder={props.placeholder}
                        multiline={props.multiline}
                        type={props.type}
                        onChange={(val) => {
                            setStateValue(val);
                            setIsUserChange(true);
                            props.onChange?.(val);
                        }}
                        onBlur={() => sendValue()}
                        onKeyUp={(event) => {
                            if (event.key === 'Escape')
                                setIsUserChange(false);

                            if (event.key === 'Enter' && (!props.multiline || event.ctrlKey))
                                sendValue();
                        }}
                    />
                    {props.title || props.setSelfRedact ? null : indicatorNode}
                </div>
            </>
            : <span className="flex flex-gap">
                {props.icon && <EvaIcon name={props.icon} className="color--7 self-start" />}
                {props.value
                    ? props.multiline
                        ? <StrongEditableFieldMultiline value={props.value} />
                        : <span className={
                            (props.textClassName || 'color--7 ')
                            + (props.multiline ? ' white-pre-wrap ' : '')
                        }>{props.value}{props.postfix || ''}</span>
                    : 'Без значения'}
                {props.isRedact && props.setSelfRedact && editIcon}
            </span>}
    </div>;
}
