import Dropdown from "../dropdown/Dropdown";
import { DropdownItem, DropdownProps } from "../dropdown/Dropdown.model";
import { ExerStorage } from "../exer/Exer.model";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

const simpleFunc = () => { };

export default function StrongDropdown<Storage extends ExerStorage,
    Id extends string | number,
    Item extends DropdownItem<Id> = DropdownItem<Id>
>({
    scope,
    fieldName,
    cud,
    mapExecArgs,
    fieldKey,
    fieldValue,
    ...props
}: StrongControlProps<DropdownProps<Id, Item>>) {
    const exer = useStrongExerContext();

    return <Dropdown<Id, Item>
        {...props}
        onSelect={({ id }) => {
            if (props.isCanSend === false) return;
            return strongPrepareArgsAndSend<Storage, Id>(
                exer,
                scope,
                fieldName,
                cud ?? 'C',
                id,
                simpleFunc,
                mapExecArgs as never,
                fieldKey,
                fieldValue,
            );
        }}
    />;
}
