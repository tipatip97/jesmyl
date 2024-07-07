import { atom, useAtom } from '../../complect/atoms';

const isReadyAtom = atom(false);
export const useIsReadyRouter = () => useAtom(isReadyAtom);
