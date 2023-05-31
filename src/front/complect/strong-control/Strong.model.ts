
export type CUD = 'C' | 'U' | 'D';
export type CRUD = CUD | 'R';

export type StrongComponentProps<Props = {}, ValType extends string | number = string> = Props & {
    scope: string,
    cud?: CUD,
    mapExecArgs?: ((args: Record<string, unknown>, value: ValType) => Record<string, unknown> | nil) | nil,
};

export type StrongControlProps<Props = {}> = StrongComponentProps<Props> & {
    fieldName: string,
};