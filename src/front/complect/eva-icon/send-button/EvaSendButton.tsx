import EvaIcon from "../EvaIcon";
import { EvaSendButtonProps } from "./EvaSendButton.model";

export function EvaSendButton<Value>(props: EvaSendButtonProps<Value> &
{
    onClick?: (event: React.MouseEvent<unknown>) => void,
    isLoading: boolean,
    sysClassName: string,
}) {
    return <>
        {props.prefix === undefined && props.postfix === undefined
            ? <EvaIcon
                name={props.isLoading ? 'loader-outline' : props.name}
                className={props.sysClassName
                    + (props.isLoading ? ' rotate ' : '')
                    + (props.className || '')}
                onClick={props.onClick}
            />
            : <span
                className={'flex flex-gap ' + (props.sysClassName || 'flex-max ') + (props.className || '')}
                onClick={props.onClick}
            >
                {props.prefix}
                <EvaIcon
                    name={props.isLoading ? 'loader-outline' : props.name}
                    className={props.sysClassName + (props.isLoading ? ' rotate ' : '')}
                />
                {props.postfix}
            </span>}
    </>;
}
