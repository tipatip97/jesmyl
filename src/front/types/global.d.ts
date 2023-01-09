export { };

declare global {
    type num = 0 | 1;
    type str = '' | '1';
    type nil = null | undefined;
    type und = undefined;
    type ArrayMapCb<T> = (box: T, boxi: number, boxa: T[]) => T;
    type ArrayCb<T> = (box: T, boxi: number, boxa: T[]) => any;
    type TimeOut = ReturnType<typeof setTimeout> | und;
}
