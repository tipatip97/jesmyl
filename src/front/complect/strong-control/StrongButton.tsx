import SendButton from "../SendButton";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

export default function StrongButton({
    title,
    scope,
    fieldName,
    cud,
    mapExecArgs,
}: StrongControlProps<{
    title: string,
}>) {
    const exer = useStrongExerContext();

    return <SendButton
        title={title}
        onSend={() => {
            strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', '', () => { }, mapExecArgs);
        }}
    />;
}
